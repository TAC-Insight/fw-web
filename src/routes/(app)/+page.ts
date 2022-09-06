import { requireAuth } from '$lib/auth';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	requireAuth({ requireAdmin: true });
};
