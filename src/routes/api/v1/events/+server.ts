import { getAllEvents, getEventsByCategory, searchEvents, searchEventsCategory } from '$lib/server/database';
import type { CalendarEvent } from '$lib/server/database/types';
import { json } from '@sveltejs/kit';

export function GET({ url }) {
	const query = url.searchParams.get('q');
	const category = url.searchParams.get('category');
	let events: CalendarEvent[];
	if (query && category) {
		const words = query.split(' ');
		const formatted = words.join('%');
		events = searchEventsCategory('%' + formatted + '%', category);
	} else if (query) {
		const words = query.split(' ');
		const formatted = words.join('%');
		events = searchEvents('%' + formatted + '%');
	} else if (category) {
		events = getEventsByCategory(category)
	} else {
		events = getAllEvents();
	}

	return json(events);
}
