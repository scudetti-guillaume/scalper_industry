<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404" class="text-center">
      {{ $t('errors.pageNotFound') }}
    </h1>
    <h1 v-else class="text-center">
      {{ $t('errors.otherError') }}
    </h1>
    <div class="background"></div>
    <!-- <NuxtLink to="/" class="text-center">
      {{ $t('navigation.backToHome') }}
    </NuxtLink> -->
    <div class="center-btn">
      <v-btn class="btn-back">
        <router-link to="/" class="text-center ">
          {{ $t('navigation.backToHome') }}
        </router-link>
        </v-btn>
        </div>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.$t('errors.pageNotFound') : this.$t('errors.otherError');
    return {
      title
    }
  }
}
</script>


<style scoped>
h1 {
  font-size: 20px;
}

.text-center {
  text-align: center;
  text-decoration: none;
    color:#39a43d;
}

.center-btn{
display: flex;
align-items: center;
justify-content: center;

}
.btn-back{
display: flex;
justify-content: center;
align-items: center;
 width: 250px;
 /* margin: auto 0; */

}


.background {
  background-image: url('../static/marco.png');
  background-position: center center;
  background-size: contain;
  height: 20vh;
  z-index: 1;
  margin-bottom: 2%;
}
</style>

