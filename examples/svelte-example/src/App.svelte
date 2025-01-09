<script lang="ts">
	import { Dashboard, DashboardModal, DragDrop, ProgressBar } from '@ImageTestVarLang/svelte'
	import ImageTestVarLang from '@ImageTestVarLang/core'
	import Webcam from '@ImageTestVarLang/webcam'
	import XHRUpload from '@ImageTestVarLang/xhr-upload'

	const createImageTestVarLang = () => {
		return new ImageTestVarLang().use(Webcam).use(XHRUpload, {
			bundle: true,
			endpoint: 'http://localhost:9967/upload',
			allowedMetaFields: ['something'],
			fieldName: 'files',
		})
	}

	let ImageTestVarLang1 = createImageTestVarLang()
	let ImageTestVarLang2 = createImageTestVarLang()

	let open = false;
	let showInlineDashboard = true;
</script>

<main>
	<h1>Welcome to the <code>@ImageTestVarLang/svelte</code> demo!</h1>
	<h2>Inline Dashboard</h2>
	<label>
      <input
        type="checkbox"
				bind:checked={showInlineDashboard}
			/>
      Show Dashboard
	</label>
	{#if showInlineDashboard}
		<Dashboard
			ImageTestVarLang={ImageTestVarLang1}
			plugins={['Webcam']}
		/>
	{/if}
	<h2>Modal Dashboard</h2>
	<div>
		<button on:click={() => open = true}>Show Dashboard</button>
		<DashboardModal
			ImageTestVarLang={ImageTestVarLang2}
			open={open}
			props={{
				onRequestCloseModal: () => open = false,
				plugins: ['Webcam']
			}}
		/>
	</div>

	<h2>Drag Drop Area</h2>
	<DragDrop
		ImageTestVarLang={ImageTestVarLang1}
	/>

	<h2>Progress Bar</h2>
	<ProgressBar
		ImageTestVarLang={ImageTestVarLang1}
		props={{
			hideAfterFinish: false
		}}
	/>
</main>
<style global>
	@import "@ImageTestVarLang/core/dist/style.min.css";
	@import "@ImageTestVarLang/dashboard/dist/style.min.css";
	@import "@ImageTestVarLang/drag-drop/dist/style.min.css";
	@import "@ImageTestVarLang/progress-bar/dist/style.min.css";
	input[type="checkbox"] {
		user-select: none;
	}
</style>
