import { fail, redirect } from '@sveltejs/kit';
import { writeFileSync } from 'fs';
import * as crypto from 'crypto';
import { addNewEvent } from '$lib/server/database/index.js';
import { getEventById } from '$lib/server/database';
import type { CalendarEvent } from '$lib/server/database/types';

export const actions = {
    default: async ({ request }) => {
        const formData = Object.fromEntries(await request.formData());
        console.log(formData)

        if (
            !(formData.image as File).name ||
            (formData.image as File).name === 'undefined'
        ) {
            return fail(400, {
                error: 'You must provide a file to upload'
            });
        }
        const data = formData as {
            name: string;
            image: File;
            time: string;
            description: string;
            category: string;
            organizer: string;
            location: string;
            contact: string;
        };
        const randomId = crypto.randomBytes(20).toString('hex');
        const fileName = `${randomId}.${data.image.name.split('.').pop()}`
        writeFileSync(
            `static/uploads/${fileName}`,
            Buffer.from(await data.image.arrayBuffer())
        );
        const event: CalendarEvent = {
            id: 0,
            image: fileName,
            name: data.name,
            time: parseInt(data.time),
            description: data.description,
            category: data.category,
            organizer: data.organizer,
            location: data.location,
            contact: data.contact
        }
        addNewEvent(event);
        throw redirect(303, '/');
    }
};

export async function load({ url }) {
    const id = url.searchParams.get("id");
    if (id) {
        const event: CalendarEvent = getEventById(id);

        if (event) {
            console.log(event);
        }
    }
}