import { browser } from '$app/env';
import { writable } from 'svelte/store';

interface NavStore {
	isNavOpen?: boolean;
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
