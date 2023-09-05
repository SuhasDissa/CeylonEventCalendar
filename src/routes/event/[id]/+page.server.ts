import { error } from '@sveltejs/kit';
import { getEventById } from '$lib/server/database';
import type { CalendarEvent } from '$lib/server/database/types.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const event: CalendarEvent = getEventById(params.id);

	if (event) {
		return { event };
	}

	throw error(404, 'Not found');
}
