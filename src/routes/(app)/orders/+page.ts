import { requireAuth } from '$lib/auth';
import type { PageLoad } from '.svelte-kit/types/src/routes/(app)/$types';

export const load: PageLoad = async () => {
	requireAuth({ entity: 'Order' });
};
