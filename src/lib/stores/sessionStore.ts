import { browser } from '$app/env';
import type { LoginResponse } from '$lib/apiClient';
import { writable } from 'svelte/store';

export const sessionStore = writable<LoginResponse | null>(
	JSON.parse(browser ? localStorage.getItem('sessionStore') ?? '{}' : '{}')
);

if (browser) {
	sessionStore.subscribe((val) => localStorage.setItem('sessionStore', JSON.stringify(val)));
}
