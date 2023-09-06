<script lang="ts">
	import type { CalendarEvent } from '$lib/server/database/types';

	export let event: CalendarEvent;

	let date = new Date(event.time);
	let timeString = date.toLocaleTimeString();
	let dateString = date.toLocaleDateString();
</script>

<a
	href="/event/{event.id}"
	class="flex flex-col max-w-sm bg-slate-50 rounded-lg drop-shadow hover:-translate-y-2 hover:drop-shadow-xl duration-100 dark:bg-slate-800 dark:hover:bg-slate-700 overflow-hidden"
>
	<div
		class="relative aspect-[4/3] bg-center bg-cover bg-no-repeat"
		style="background-image:url('uploads/{event.image}');"
	>
		<span
			class="absolute right-1 bottom-1 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 py-1 px-2 rounded-full font-bold"
			>{event.category}</span
		>
	</div>
	<h5 class="p-6 text-2xl font-bold tracking-tight text-slate-700 dark:text-slate-300">
		{event.name}
	</h5>
	<p
		class="grow p-6 max-h-48 overflow-hidden font-normal text-slate-500 dark:text-slate-400"
		style="mask-image: linear-gradient(to bottom, black 60%, transparent 100%);"
	>
		{event.description}
	</p>
	<div class="p-6">
		<div class="flex flex-row w-full justify-evenly">
			<div class="flex flex-row items-center">
				<span class="material-symbols-rounded text-slate-600 dark:text-slate-400"> event </span>
				<p class="font-bold text-slate-600 dark:text-slate-400 pl-4">{dateString}</p>
			</div>
			<div class="flex flex-row items-center">
				<span class="material-symbols-rounded text-slate-600 dark:text-slate-400"> schedule </span>
				<p class="font-bold text-slate-600 dark:text-slate-400 pl-4">{timeString}</p>
			</div>
		</div>
		<div class="flex flex-row w-full justify-evenly pt-6">
			<div class="flex flex-row items-center">
				<span class="material-symbols-rounded text-slate-600 dark:text-slate-400">
					location_on
				</span>
				<p class="font-bold text-slate-600 dark:text-slate-400 pl-4">
					{event.location}
				</p>
			</div>
		</div>
	</div>
</a>
