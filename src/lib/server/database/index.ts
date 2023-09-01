import Database from 'better-sqlite3';
import type { CalendarEvent } from './types';

const db = new Database('database/main.db', { verbose: console.log, fileMustExist: false });

export function addNewEvent(event: CalendarEvent) {
  const statemt = db.prepare('INSERT INTO events (name, image, description, time, category, organizer, location, contact) VALUES (@name, @image, @description, @time,@category, @organizer, @location, @contact)');
  statemt.run(event)
}

export function getAllEvents(): CalendarEvent[] {
  const statemt = db.prepare('SELECT * FROM events')
  const events = statemt.all();
  return events as CalendarEvent[];
}

export function getEventById(id: string): CalendarEvent {
  const statemt = db.prepare('SELECT * FROM events WHERE id = ?');
  const event = statemt.get(id);
  return event as CalendarEvent;
}

export function getEventsCount(): number {
  const statemt = db.prepare('SELECT * FROM events');
  const count = statemt.all().length;
  return count as number;
}

export function getHalalEventsCount(): number {
  const statemt = db.prepare('SELECT * FROM Events WHERE halal_status=1');
  const count = statemt.all().length;
  return count as number;
}

