<script lang="ts">
	import { defineComponent } from "vue";
	import { VPdfViewer, VPVBaseProps } from "@vue-pdf-viewer/viewer";
	export default defineComponent({
		components: { VPdfViewer },
		props: {
			...VPVBaseProps,
			title: {
				type: String,
			},
		},
		mounted() {
			this.$watch(
				"$refs.viewer",
				(newVal: InstanceType<typeof VPdfViewer>) => {
					console.log("These are VPV instance properties", Object.keys(newVal));
				},
				{ immediate: true }
			);
		},
	});
</script>

<template>
	<div>
		<h2>
			{{ title }}
		</h2>
		<div :style="{ width: '1028px', height: '700px', margin: '0 auto' }">
			<VPdfViewer
				v-bind="$props"
				ref="viewer" />
		</div>
	</div>
</template>
