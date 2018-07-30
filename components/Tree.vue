<template>
	<node-tree :node="treeData"></node-tree>
</template>

<script>
import NodeTree from './NodeTree'

export default {
	props: {
		treeData: Object,
	},
	components: {
		NodeTree,
	},
}
</script>

<style>
</style>