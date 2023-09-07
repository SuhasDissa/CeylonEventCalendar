<script lang="ts">
	import type { CalendarEvent, Category } from '$lib/server/database/types';
	import EventCard from '../components/EventCard.svelte';
	export let data: { events: CalendarEvent[]; categories: Category[] };
	let events = data.events;
	let categories = data.categories;
	let showDropdown = false;
	let category: Category;
	let catId: string;
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
		<form action="/events" class="flex flex-row">
			<label
				for="default-search"
				class="mb-2 text-sm font-medium text-slate-900 sr-only dark:text-white">Search</label
			>
			<button
				type="button"
				on:click={() => (showDropdown = !showDropdown)}
				class="p-4 text-sm text-slate-900 border border-slate-300 rounded-l-full bg-slate-50 focus:ring-slate-500 focus:border-slate-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500 font-bold"
			>
				{#if category}
					{category.name}
				{:else}
					Category
				{/if}
			</button>
			<input bind:value={catId} name="category" type="hidden" />
			<div class="relative flex-grow">
				<div
					class="{showDropdown
						? ''
						: 'hidden'} absolute top-16 -left-32 z-10 bg-slate-50 divide-y divide-slate-100 rounded-lg shadow w-44 dark:bg-slate-700"
				>
					<ul
						class="py-2 text-sm text-slate-700 dark:text-slate-200"
						aria-labelledby="dropdown-button"
					>
						{#each categories as ctgry}
							<li>
								<button
									on:click={() => {
										category = ctgry;
										catId = ctgry.id;
										showDropdown = false;
									}}
									type="button"
									class="inline-flex w-full px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:text-slate-50"
									>{ctgry.name}</button
								>
							</li>
						{/each}
					</ul>
				</div>
				<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<span class="material-symbols-rounded text-slate-600 dark:text-slate-400"> search </span>
				</div>
				<input
					type="search"
					name="q"
					id="default-search"
					class="block w-full p-4 pl-10 text-sm text-slate-900 border border-slate-300 rounded-r-full bg-slate-50 focus:ring-slate-500 focus:border-slate-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
					placeholder="Search Events...."
					required
				/>
				<button
					type="submit"
					class="text-white absolute right-2.5 bottom-2.5 bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 rounded-full text-sm px-4 py-2 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800 font-bold"
					>Search</button
				>
			</div>
		</form>
	</section>
	<section class="pt-10">
		<div
			class="grid justify-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 grid-flow-row gap-4"
		>
			{#each categories as ctgry}
				<form
					action="events"
					class="w-32 bg-slate-50 rounded-lg drop-shadow hover:-translate-y-1 hover:drop-shadow-md duration-100 dark:bg-slate-800 dark:hover:bg-slate-700 overflow-hidden"
				>
					<input value={ctgry.id} type="hidden" name="category" required />
					<button class="p-2 text-lg font-bold tracking-tight text-slate-700 dark:text-slate-300"
						>{ctgry.name}</button
					>
				</form>
			{/each}
		</div>
	</section>
	<section class="pt-20">
		<h2 class="text-slate-600 dark:text-slate-400 text-2xl sm:text-3xl md:text-5xl font-bold">
			Upcoming Events
		</h2>
		<div
			class="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-4 pt-4 sm:pt-8"
		>
			{#each events as event}
				<EventCard {event} />
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
