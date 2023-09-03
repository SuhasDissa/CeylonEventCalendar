import { getAllEvents, searchEvents } from '$lib/server/database';
import type { CalendarEvent } from '$lib/server/database/types';
import { json } from '@sveltejs/kit';

export function GET({ url }) {
	let query = url.searchParams.get("q");
	let events: CalendarEvent[];
	if (query) {
		const words = query.split(' ');
		const formatted = words.join('%');
		events = searchEvents("%" + formatted + "%");
	} else {
		events = getAllEvents();
	}

	return json(events);
}