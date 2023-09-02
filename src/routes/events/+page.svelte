<script lang="ts">
	import type { CalendarEvent } from '$lib/server/database/types';
	import EventCard from '../../components/EventCard.svelte';
	export let data: { events: CalendarEvent[]; query: string };
	let events = data.events;
	let query = data.query;
</script>

<div class="mx-auto max-w-screen-xl px-8 py-8">
	<h2 class="text-slate-600 dark:text-slate-400 text-2xl sm:text-3xl md:text-5xl font-bold">
		{#if query}
			Search Results for : {query}
		{:else}
			All Events
		{/if}
	</h2>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-4 pt-4 sm:pt-8">
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
</div>
