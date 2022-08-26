import { browser } from '$app/env';
import { goto } from '$app/navigation';
import getApiClient from '$lib/getApiClient';
import { sessionStore } from '$lib/stores/sessionStore';
import { createToast } from '$lib/stores/toastStore';
import { redirect } from '@sveltejs/kit';
import { get } from 'svelte/store';

type TenantPermissionType =
	| 'Accounts Receivable'
	| 'Analytics'
	| 'API'
	| 'Billing'
	| 'Fast Load'
	| 'Hauler Pay'
	| 'Inventory'
	| 'Notifications'
	| 'POD'
	| 'Pricing Adjustments'
	| 'Quote System'
	| 'Requests'
	| 'Scheduled Reports'
	| 'Webhooks';

type EntityType =
	| 'Customer'
	| 'Hauler'
	| 'Order'
	| 'Product'
	| 'Quote'
	| 'Region'
	| 'TaxCode'
	| 'Truck'
	| 'UDF';

export const requireAuth = async ({
	module,
	entity,
	requireAdmin
}: {
	module?: TenantPermissionType;
	entity?: EntityType;
	requireAdmin: boolean;
}) => {
	// confirm session is set
	const session = get(sessionStore);
	if (!session?.sessionID) await destroySessionAndRedirect();

	// if requireAdmin checkc if admin
	if (requireAdmin) {
		if (!isAdminOrSuperUser) {
			createToast({
				title: 'Not Authorized',
				message: 'You do not have access to that page',
				timeout: 8000,
				type: 'danger'
			});
			goto('/');
		}
	}

	// check tenant module access
	if (module) {
		if (!hasTenantPermission(module)) {
			createToast({
				title: 'Not Authorized',
				message: 'Your company does not have access to that module',
				timeout: 8000,
				type: 'danger'
			});
			goto('/');
		}
	}

	// check user permissions
	if (entity) {
		if (!hasEntityPermission(entity)) {
			createToast({
				title: 'Not Authorized',
				message: 'You do not have access to that page',
				timeout: 8000,
				type: 'danger'
			});
			goto('/');
		}
	}

	// confirm session stil valid
	try {
		const api = await getApiClient();
		const sessionValid = await api.auth.session();
		if (!sessionValid.success) await destroySessionAndRedirect();
		return session;
	} catch (error) {
		await destroySessionAndRedirect();
	}
};

export const hasTenantPermission = (module: TenantPermissionType) => {
	const session = get(sessionStore);
	return session?.tenantInfo?.modules?.includes(module);
};

export const hasEntityPermission = (entity: EntityType) => {
	const session = get(sessionStore);
	if (session?.userInfo?.role === 'Super User' || session?.userInfo?.role === 'Admin') return true;
	const entityPermission = session?.userInfo?.entityPermissions?.find(
		(permission) => permission.permissionName === entity
	);
	if (entityPermission) return true;
	return false;
};

export const isAdminOrSuperUser = () => {
	const session = get(sessionStore);
	if (session?.userInfo?.role === 'Super User' || session?.userInfo?.role === 'Admin') {
		return true;
	}
	return false;
};

export const destroySessionAndRedirect = () => {
	sessionStore.set(null);
	if (browser) {
		return goto('/auth/sign-in');
	}
	throw redirect(307, '/auth/sign-in');
};
