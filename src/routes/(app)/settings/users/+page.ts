import { error } from '@sveltejs/kit';
import { requireAuth } from '$lib/auth';
import getApiClient from '$lib/getApiClient';
import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
	requireAuth({ requireAdmin: true });

	try {
		const api = await getApiClient();
		const users = await api.identity.getUsers();
		return {
			users
		};
	} catch (e) {
		throw error(400, 'Error fetching users');
	}
};
