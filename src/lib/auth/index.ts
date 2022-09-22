import { goto } from '$app/navigation';
import { http } from '$lib/http';
import { sessionStore } from '$lib/stores/sessionStore';
import { createToast } from '$lib/stores/toastStore';
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
	requireAdmin?: boolean;
}) => {
	// confirm session is set
	const session = get(sessionStore);
	if (!session?.sessionID) destroySessionAndRedirect();

	// if requireAdmin check if admin
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
		const sessionValid = await http.auth.session();
		if (!sessionValid.success) await destroySessionAndRedirect();
		return session;
	} catch (error) {
		destroySessionAndRedirect();
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
	return goto('/auth/sign-in');
};
