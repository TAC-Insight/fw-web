import { browser } from '$app/environment';
import { writable } from 'svelte/store';

interface NavStore {
	isNavOpen?: boolean;
	isFavoritesOpen?: boolean;
	isResourcesOpen?: boolean;
	isTrucksOpen?: boolean;
	isQuotesOpen?: boolean;
	isOrdersOpen?: boolean;
	isDispatchOpen?: boolean;
	isInYardOpen?: boolean;
	isTicketsOpen?: boolean;
	isBillingOpen?: boolean;
	isHaulerPayOpen?: boolean;
	isReportingOpen?: boolean;
	isIntegrationsOpen?: boolean;
	isSetupOpen?: boolean;
}

export const navStore = writable<NavStore>(
	JSON.parse(
		browser ? localStorage.getItem('navStore') ?? '{"isNavOpen": true}' : '{"isNavOpen": true}'
	)
);

if (browser) {
	navStore.subscribe((val) => localStorage.setItem('navStore', JSON.stringify(val)));
}

export const navFavoritesStore = writable<{ title: string; href: string }[]>(
	JSON.parse(browser ? localStorage.getItem('navFavoritesStore') ?? '[]' : '[]')
);

if (browser) {
	navFavoritesStore.subscribe((val) =>
		localStorage.setItem('navFavoritesStore', JSON.stringify(val))
	);
}
