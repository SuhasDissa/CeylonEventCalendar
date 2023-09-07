import { getRecentEvents } from '$lib/server/database';
import { categories } from '$lib/server/database/categories';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const events = getRecentEvents(3);
	return {
		events,
		categories
	};
}
