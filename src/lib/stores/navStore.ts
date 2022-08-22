import { browser } from '$app/env';
import { writable } from 'svelte/store';

interface NavStore {
	isNavOpen?: boolean;
}

export const navStore = writable<NavStore>(
	JSON.parse(browser ? localStorage.getItem('navStore') ?? '{}' : '{}')
);

if (browser) {
	navStore.subscribe((val) => localStorage.setItem('navStore', JSON.stringify(val)));
}
