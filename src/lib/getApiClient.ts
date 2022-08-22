import { get } from 'svelte/store';
import { ApiClient } from './apiClient';
import { sessionStore } from './stores/sessionStore';

const getApiClient = async () => {
	const session = get(sessionStore);
	const apiClient = new ApiClient({
		BASE: 'https://thenewsystem.azurewebsites.net',
		TOKEN: session?.sessionID ?? ''
	});
	return apiClient;
};

export default getApiClient;
