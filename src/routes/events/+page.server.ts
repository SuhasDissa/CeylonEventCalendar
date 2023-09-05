import { getAllEvents, searchEvents } from '$lib/server/database';
import type { CalendarEvent } from '$lib/server/database/types.js';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	const query = url.searchParams.get('q');
	let events: CalendarEvent[];
	if (query) {
		const words = query.split(' ');
		const formatted = words.join('%');
		events = searchEvents('%' + formatted + '%');
		if (!events) {
			throw error(404, 'Not found');
		}
	} else {
		events = getAllEvents();
	}

	return {
		events,
		query
	};
}
