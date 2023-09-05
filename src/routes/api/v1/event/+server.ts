import { json } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { getEventById } from '$lib/server/database';
import type { CalendarEvent } from '$lib/server/database/types.js';

export function GET({ url }) {
	const id = url.searchParams.get('id');

	if (id) {
		const event: CalendarEvent = getEventById(id);
		if (event) {
			return json(event);
		} else {
			throw error(404, 'Not found');
		}
	} else {
		throw error(404, 'Not found');
	}
}
