<script lang="ts">
	import { defineComponent } from "vue";
	import { VPdfViewer, VPVBaseProps } from "@vue-pdf-viewer/viewer";
	import VPdfAnnotation from "@vue-pdf-viewer/annotation";

	export default defineComponent({
		components: { VPdfViewer },
		props: {
			...VPVBaseProps,
			title: {
				type: String,
			},
			annotateEnabled: {
				type: Boolean,
				default: false,
				required: false,
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
		computed: {
			vpvProps() {
				const { annotateEnabled, title, ...baseProps } = this.$props;
				if (annotateEnabled) {
					(baseProps as any).plugins = [VPdfAnnotation()];
				}
				return baseProps;
			},
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
				v-bind="vpvProps"
				ref="viewer" />
		</div>
	</div>
</template>
