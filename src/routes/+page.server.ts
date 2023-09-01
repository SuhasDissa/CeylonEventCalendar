import { getAllEvents } from '$lib/server/database';
import type { CalendarEvent } from '$lib/server/database/types.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    let events: CalendarEvent[];
    events = getAllEvents();

    return {
        events
    };
}