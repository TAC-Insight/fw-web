import { OpenAPI } from '$lib/apiClient';
import { sessionStore } from '$lib/stores/sessionStore';
import type { LayoutLoad } from './$types';
import { get } from 'svelte/store';

export const ssr = false;

export const load: LayoutLoad = () => {
	OpenAPI.BASE = 'https://thenewsystem.azurewebsites.net';
	OpenAPI.TOKEN = get(sessionStore)?.sessionID ?? '';
	return {};
};
