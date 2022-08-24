import { requireAuth } from '$lib/auth';
import type { PageLoad } from '../../../.svelte-kit/types/src/routes/$types';

export const load: PageLoad = async (event) => {
	requireAuth();
};
