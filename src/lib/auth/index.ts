import { browser } from '$app/env';
import { goto } from '$app/navigation';
import getApiClient from '$lib/getApiClient';
import { sessionStore } from '$lib/stores/sessionStore';
import { redirect } from '@sveltejs/kit';
import { get } from 'svelte/store';

export const destroySessionAndRedirect = async () => {
	sessionStore.update((s) => {
		return {};
	});
	if (browser) {
		return await goto('/auth/sign-in');
	}
	throw redirect(307, '/auth/sign-in');
};

export const requireAuth = async () => {
	// confirm session is set
	const session = get(sessionStore);
	if (!session.sessionID) await destroySessionAndRedirect();

	// TODO: check tenant module access

	// TODO: check user permissions

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
