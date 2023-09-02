<script lang="ts">
	import type { CalendarEvent } from '$lib/server/database/types';
	import EventCard from '../components/EventCard.svelte';
	export let data: { events: CalendarEvent[] };
	let events = data.events;
</script>

<div class="mx-auto max-w-screen-xl px-8 py-8 flex flex-col justify-center content-center h-full">
	<section class="pt-10">
		<h1
			class="text-slate-600 text-center dark:text-slate-400 text-4xl sm:text-6xl md:text-8xl font-bold"
		>
			Ceylon Event Calendar
		</h1>
	</section>
	<section class="pt-20">
		<form action="/events">
			<label
				for="default-search"
				class="mb-2 text-sm font-medium text-slate-900 sr-only dark:text-white">Search</label
			>
			<div class="relative">
				<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<span class="material-symbols-rounded text-slate-600 dark:text-slate-400"> search </span>
				</div>
				<input
					type="search"
					name="q"
					id="default-search"
					class="block w-full p-4 pl-10 text-sm text-slate-900 border border-slate-300 rounded-full bg-slate-50 focus:ring-slate-500 focus:border-slate-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
					placeholder="Search Events...."
					required
				/>
				<button
					type="submit"
					class="text-white absolute right-2.5 bottom-2.5 bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
					>Search</button
				>
			</div>
		</form>
	</section>
	<section class="pt-20">
		<h2 class="text-slate-600 dark:text-slate-400 text-2xl sm:text-3xl md:text-5xl font-bold">
			Upcoming Events
		</h2>
		<div
			class="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-4 pt-4 sm:pt-8"
		>
			{#each events as event}
				<EventCard
					id={event.id}
					name={event.name}
					description={event.description}
					image={event.image}
					location={event.location}
					time={event.time}
				/>
			{/each}
		</div>
	</section>
	<section class="py-10 flex justify-center">
		<a
			href="/events"
			class="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
			>Show More</a
		>
	</section>
</div>
