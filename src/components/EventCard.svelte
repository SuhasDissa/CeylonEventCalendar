<script lang="ts">
	export let id: number;
	export let name: string;
	export let image: string;
	export let description: string;
	export let location: string;
	export let time: number;

	let date = new Date(time);
	let timeString = date.toLocaleTimeString();
	let dateString = date.toLocaleDateString();
</script>

<a
	href="/event/{id}"
	class="flex flex-col max-w-sm bg-slate-50 rounded-lg drop-shadow hover:-translate-y-2 hover:drop-shadow-xl duration-100 dark:bg-slate-800 dark:hover:bg-slate-700 overflow-hidden"
>
	<div
		class="aspect-[4/3] bg-center bg-cover bg-no-repeat"
		style="background-image:url('uploads/{image}');"
	/>
	<h5 class="p-6 text-2xl font-bold tracking-tight text-slate-700 dark:text-slate-300">
		{name}
	</h5>
	<p
		class="grow p-6 max-h-48 overflow-hidden font-normal text-slate-500 dark:text-slate-400"
		style="mask-image: linear-gradient(to bottom, black 60%, transparent 100%);"
	>
		{description}
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
					{location}
				</p>
			</div>
		</div>
	</div>
</a>
