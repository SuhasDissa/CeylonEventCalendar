import { getAllEvents, getEventsByCategory, searchEvents, searchEventsCategory } from '$lib/server/database';
import type { CalendarEvent } from '$lib/server/database/types.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	const query = url.searchParams.get('q');
	const category = url.searchParams.get('category');
	let events: CalendarEvent[];
	if (query && category) {
		const words = query.split(' ');
		const formatted = words.join('%');
		events = searchEventsCategory('%' + formatted + '%', category);
	} else if (category) {
		events = getEventsByCategory(category)
	} else if (query) {
		const words = query.split(' ');
		const formatted = words.join('%');
		events = searchEvents('%' + formatted + '%');
	} else {
		events = getAllEvents();
	}
	return {
		events,
		query,
		category
	};
}
