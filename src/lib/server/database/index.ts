import Database from 'better-sqlite3';
import type { CalendarEvent } from './types';

const db = new Database('database/main.db', { verbose: console.log, fileMustExist: false });

export function addNewEvent(event: CalendarEvent): number | bigint {
	const statemt = db.prepare(
		'INSERT INTO events (name, image, description, time, category, organizer, location, contact) VALUES (@name, @image, @description, @time,@category, @organizer, @location, @contact)'
	);
	const result = statemt.run(event);
	return result.lastInsertRowid;
}

export function getAllEvents(): CalendarEvent[] {
	const statemt = db.prepare('SELECT * FROM events ORDER BY time ASC');
	const events = statemt.all();
	return events as CalendarEvent[];
}

export function getRecentEvents(limit: number): CalendarEvent[] {
	const statemt = db.prepare('SELECT * FROM events ORDER BY time ASC LIMIT ?');
	const events = statemt.all(limit);
	return events as CalendarEvent[];
}

export function searchEvents(q: string): CalendarEvent[] {
	const statemt = db.prepare('SELECT * FROM events WHERE name LIKE ? OR description LIKE ?');
	const events = statemt.all(q, q);
	return events as CalendarEvent[];
}

export function searchEventsCategory(q: string, category: string): CalendarEvent[] {
	const statemt = db.prepare('SELECT * FROM events WHERE ( name LIKE ? OR description LIKE ? ) AND category = ?');
	const events = statemt.all(q, q, category);
	return events as CalendarEvent[];
}

export function getSuggestions(q: string): string[] {
	const statemt = db.prepare('SELECT name FROM events WHERE name LIKE ?');
	const suggestions = statemt.all(q);
	return suggestions.map(obj => obj.name) as string[];
}

export function getEventById(id: string): CalendarEvent {
	const statemt = db.prepare('SELECT * FROM events WHERE id = ?');
	const event = statemt.get(id);
	return event as CalendarEvent;
}

export function getEventsByCategory(category: string): CalendarEvent[] {
	const statemt = db.prepare('SELECT * FROM events WHERE category = ?');
	const events = statemt.all(category);
	return events as CalendarEvent[];
}
