<template>
    <div class="bbb">
        <iframe src="https://fangh.space" frameborder="0" width="100%" height="100%"></iframe>
    </div>
</template>

<script lang="ts" setup name="BBB">
    import { onMounted, onUnmounted } from 'vue';

    onMounted(() => { console.log('BBB mounted');});
    onUnmounted(() => { console.log('BBB unmounted');});
</script>

<style>
</style>