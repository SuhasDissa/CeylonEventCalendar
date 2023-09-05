import { getSuggestions } from '$lib/server/database';
import { json } from '@sveltejs/kit';

export function GET({ url }) {
    const query = url.searchParams.get('q');
    let suggestions: string[] = [];
    if (query) {
        const words = query.split(' ');
        const formatted = words.join('%');
        suggestions = getSuggestions('%' + formatted + '%');
    }

    return json(suggestions);
}