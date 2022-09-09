import { ApiClient } from './apiClient';
import { sessionStore } from './stores/sessionStore';

export let http: ApiClient;

sessionStore.subscribe((session) => {
	http = new ApiClient({
		BASE: 'https://thenewsystem.azurewebsites.net',
		TOKEN: session?.sessionID ?? '',
		HEADERS: { 'x-internal-client': 'portal' }
	});
});
