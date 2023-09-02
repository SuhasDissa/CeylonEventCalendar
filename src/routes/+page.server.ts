import { getAllEvents } from '$lib/server/database';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    let events = getAllEvents();

    return {
        events
    };
}