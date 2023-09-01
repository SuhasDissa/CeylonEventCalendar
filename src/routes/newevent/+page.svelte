<script lang="ts">
	import { enhance } from '$app/forms';

	let uploading = false;
	let files: FileList;
	let fileInput: HTMLInputElement;

	let epochTime: number;

	export function onDateInput(datetimeLocal: string) {
		if (datetimeLocal != undefined) {
			epochTime = Date.parse(datetimeLocal);
		}
	}

	export function dragover(e: any) {
		e.preventDefault();
	}
	export function drop(e: any) {
		e.preventDefault();
		fileInput.files = e.dataTransfer.files;
	}
</script>

<div class="flex justify-center content-center w-full pb-16 px-8 pt-16 sm:pt-8">
	<form
		class="w-full max-w-xl"
		method="post"
		use:enhance={() => {
			uploading = true;

			return async ({ update }) => {
				await update();
				uploading = false;
			};
		}}
		enctype="multipart/form-data"
	>
		<div class="mb-6">
			<label for="name" class="block mb-2 text-sm font-bold text-slate-900 dark:text-slate-200"
				>Event Name</label
			>
			<input
				name="name"
				id="name"
				class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
				placeholder="My Event"
				required
			/>
		</div>
		<div class="mb-6">
			<label for="organizer" class="block mb-2 text-sm font-bold text-slate-900 dark:text-slate-200"
				>Organizer</label
			>
			<input
				name="organizer"
				id="organizer"
				class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
				placeholder="Event organizer"
				required
			/>
		</div>
		<div class="mb-6">
			<label
				for="description"
				class="block mb-2 text-sm font-bold text-slate-900 dark:text-slate-200">Description</label
			>
			<textarea
				name="description"
				id="description"
				required
				rows="4"
				class="block p-2.5 w-full text-sm text-slate-900 bg-slate-50 rounded-lg border border-slate-300 focus:ring-slate-500 focus:border-slate-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
				placeholder="Description"
			/>
		</div>
		<div class="mb-6">
			<label for="date" class="block mb-2 text-sm font-bold text-slate-900 dark:text-slate-200"
				>Date and Time</label
			>
			<input
				on:input={(event) => onDateInput(event.target.value)}
				type="datetime-local"
				id="date"
				class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
				required
			/>
			<input name="time" bind:value={epochTime} hidden required />
		</div>

		<div class="mb-6">
			<label for="location" class="block mb-2 text-sm font-bold text-slate-900 dark:text-slate-200"
				>Location</label
			>
			<input
				name="location"
				id="location"
				class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
				placeholder="Venue"
				required
			/>
		</div>
		<div class="mb-6">
			<label for="contact" class="block mb-2 text-sm font-bold text-slate-900 dark:text-slate-200"
				>Contact</label
			>
			<input
				name="contact"
				id="contact"
				class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
				placeholder="Telephone/Fax/Email"
				required
			/>
		</div>
		<div class="mb-6">
			<label for="category" class="block mb-2 text-sm font-bold text-slate-900 dark:text-slate-200"
				>Category</label
			>
			<input
				name="category"
				id="category"
				class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
				placeholder="Category"
				required
			/>
		</div>
		<div class="mb-6">
			<p class="block mb-2 text-sm font-bold text-slate-900 dark:text-slate-200">Event Image</p>
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				on:drop={(event) => drop(event)}
				on:dragover={dragover}
				class="flex items-center justify-center w-full"
			>
				<label
					for="dropzone-file"
					class="flex flex-col items-center justify-center w-full h-64 border-2 border-slate-300 border-dashed rounded-lg cursor-pointer bg-slate-50 dark:hover:bg-bray-800 dark:bg-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:hover:border-slate-500 dark:hover:bg-slate-600"
				>
					<div class="flex flex-col items-center justify-center pt-5 pb-6">
						<svg
							class="w-8 h-8 mb-4 text-slate-500 dark:text-slate-400"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 16"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
							/>
						</svg>
						<p class="mb-2 text-sm text-slate-500 dark:text-slate-400">
							<span class="font-semibold">Click to upload</span> or drag and drop
						</p>
						<p class="text-xs text-slate-500 dark:text-slate-400">PNG, JPG or WEBP</p>

						{#if files}
							<p class="text-lg text-indigo-500 dark:text-indigo-400 pt-4">
								{files[0].name} ({files[0].size} bytes)
							</p>
						{/if}
						{#if uploading}
							<p class="text-lg text-blue-500 dark:text-blue-400 pt-4">Uploading.....</p>
						{/if}
					</div>
					<input
						bind:this={fileInput}
						bind:files
						name="image"
						accept=".jpg, .jpeg, .png, .webp"
						required
						id="dropzone-file"
						type="file"
						class="hidden"
					/>
				</label>
			</div>
		</div>

		<button
			type="submit"
			class="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
			>Submit</button
		>
	</form>
</div>
