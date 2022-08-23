import { browser } from '$app/env';
import { goto } from '$app/navigation';
import { sessionStore } from '$lib/stores/sessionStore';
import { redirect } from '@sveltejs/kit';
import { get } from 'svelte/store';

export const requireAuth = async () => {
	const session = get(sessionStore);
	if (!session.sessionID) {
		if (browser) {
			return await goto('/auth/sign-in');
		}
		throw redirect(307, '/auth/sign-in');
	}
	return session;
};
