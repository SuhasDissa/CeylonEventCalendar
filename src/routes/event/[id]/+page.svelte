<script lang="ts">
	import type { CalendarEvent } from '$lib/server/database/types';
	export let data: { event: CalendarEvent };
	let event = data.event;
	let date = new Date(parseInt(event.time));
</script>

<div class="mx-auto max-w-screen-xl px-8 py-20">
	<div class="grid grid-cols-1 sm:grid-cols-2">
		<div class="sm:px-8">
			<img src="/uploads/{event.image}" class="block w-full rounded-md sm:rounded-xl sm:drop-shadow-xl" alt="" />
		</div>
		<div class="sm:px-8 pt-8 sm-pt-0">
			<h3 class="text-slate-700 dark:text-slate-300 text-3xl sm:text-4xl md:text-5xl font-bold">
				{event.name}
			</h3>
			<h2 class="text-slate-400 text-xl sm:text-2xl md:text-4xl font-bold max-w-prose pt-4 sm:pt-8">
				<span class="material-symbols-rounded text-4xl">
					event
				</span>&nbsp;&nbsp;{date.toDateString()}
			</h2>
			<h2 class="text-slate-400 text-xl sm:text-2xl md:text-4xl font-bold max-w-prose pt-4 sm:pt-8">
				<span class="material-symbols-rounded text-4xl">
					schedule
				</span>&nbsp;&nbsp;{date.toLocaleTimeString()}
			</h2>
			<h2 class="text-slate-400 text-xl sm:text-2xl md:text-4xl font-bold max-w-prose pt-4 sm:pt-8">
				<span class="material-symbols-rounded text-4xl">
					location_on
				</span>&nbsp;&nbsp;{event.location}
			</h2>
		</div>
	</div>
	<div class="pt-16">
		<h3 class="text-slate-600 dark:text-slate-400 text-3xl sm:text-4xl md:text-5xl font-bold">
			About This Event
		</h3>
		<p
			class="text-slate-500 dark:text-slate-300 text-lg sm:text-xl md:text-3xl font-bold max-w-prose pt-4 sm:pt-8"
		>
			{event.description}
		</p>
	</div>
</div>
