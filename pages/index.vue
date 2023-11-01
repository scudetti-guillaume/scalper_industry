<template>
  <div class="card-main">
    <banniere></banniere>
    <presentation></presentation>
    <socialnetwork></socialnetwork>
    <live></live>
  </div>
</template>

<script>
import presentation from '../components/presentation.vue';
import socialnetwork from '../components/socialnetwork.vue';
import live from '../components/live.vue';
import banniere from '../components/banniere.vue';

export default {
    name: 'IndexPage',
    components: {
        presentation,
        socialnetwork,
        live,
        banniere,
    },}
</script>

<style lang="scss">
#card-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100% !important;
}

// .container{
// margin: 0 ;
// // display: flex;
// padding: 0;
// width: 100%;
// }

// .v-main{
// display: flex;
// justify-content:center;
// margin: 0;
// width: 100vw !important;

// }

// .v-main__wrap {
//   // background: $background;
// }
</style>