<template>
  <div class="card-main">
    <presentation></presentation>
    <socialnetwork></socialnetwork>
    <live></live>
  </div>
</template>

<script>
import presentation from '../components/presentation.vue';
import socialnetwork from '../components/socialnetwork.vue';
import live from '../components/live.vue';

export default {
    name: 'IndexPage',
    components: {
        presentation,
        socialnetwork,
        live,
    },}
</script>

<style lang="scss">
#card-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.v-main__wrap {
  background: $background-maybar;
}
</style>