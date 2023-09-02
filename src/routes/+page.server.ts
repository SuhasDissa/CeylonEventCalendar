import { getRecentEvents } from '$lib/server/database';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    let events = getRecentEvents(3);
    return {
        events
    };
}