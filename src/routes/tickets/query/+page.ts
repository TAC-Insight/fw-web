import { requireAuth } from '$lib/auth';
import type { PageLoad } from './$types';

export const load: PageLoad = (event) => {
	requireAuth();
};
