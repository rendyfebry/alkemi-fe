<template>
    <div v-if="node.type === 'heading' && node.options">
        <h1 v-if="node.options.level === 1" :class="node.class" :id="node.id">
            {{ node.content }}
        </h1>
        <h2 v-else-if="node.options.level === 2" :class="node.class" :id="node.id">
            {{ node.content }}
        </h2>

        <h3 v-else-if="node.options.level === 3" :class="node.class" :id="node.id">
            {{ node.content }}
        </h3>

        <h4 v-else-if="node.options.level === 4" :class="node.class" :id="node.id">
            {{ node.content }}
        </h4>

        <h5 v-else-if="node.options.level === 5" :class="node.class" :id="node.id">
            {{ node.content }}
        </h5>

        <h6 v-else-if="node.options.level === 6" :class="node.class" :id="node.id">
            {{ node.content }}
        </h6>
    </div>


    <p
		v-else-if="node.type === 'paragraph'"
		:class="node.class"
        :id="node.id"
	>
        {{ node.content }}
    </p>

	<img
		v-else-if="node.type === 'image'"
		:class="`img img-fluid ${node.class}`"
        :id="node.id"
		:src="node.options ? node.options.src : ''"
        :width="node.options ? node.options.width : ''"
        :height="node.options ? node.options.height : ''"
	/>

    <a
		v-else-if="node.type === 'link'"
		:class="node.class"
        :href="node.href"
        :id="node.id"
	>
        {{ node.content }}
    </a>

    <button
		v-else-if="node.type === 'button'"
		type="button"
		:class="`btn ${node.class}`"
        :id="node.id"
	>
        {{ node.content }}
    </button>

    <ul v-else-if="node.type === 'ul'" :class="node.class" :id="node.id">
        <template v-if="node.children && node.children.length">
            <node v-for="(child, i) in node.children" :node="child" :key="i" />
        </template>
    </ul>

    <li
		v-else-if="node.type === 'li'"
		type="li"
		:class="`${node.class}`"
        :id="node.id"
	>
        <template v-if="node.children && node.children.length">
            <node v-for="(child, i) in node.children" :node="child" :key="i" />
        </template>
		<template v-else>
			{{ node.content }}
		</template>
    </li>


    <nav v-else-if="node.type === 'nav'" :class="node.class" :id="node.id">
        <template v-if="node.children && node.children.length">
            <node v-for="(child, i) in node.children" :node="child" :key="i" />
        </template>
    </nav>

    <div v-else :class="node.class" :id="node.id">
        <template v-if="node.children && node.children.length">
            <node v-for="(child, i) in node.children" :node="child" :key="i" />
        </template>
		<template v-else>
			{{ node.content }}
		</template>
    </div>
</template>

<script>
export default {
	name: 'node',
	props: {
		node: Object,
	},
}
</script>

<style scoped>
.container-small {
	max-width: 960px !important;
}

.pricing-header {
	max-width: 700px;
}

.card-deck .card {
	min-width: 220px;
}
</style>
