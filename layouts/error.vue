<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404" class="text-center">
      {{ pageNotFound }}
    </h1>
    <h1 v-else class="text-center">
      {{ otherError }}
    </h1>
    <div class="background"></div>
    <NuxtLink to="/" class="text-center">
      Retour à l'accueil
    </NuxtLink>
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
  data() {
    return {
      pageNotFound: "Aie il n'y a rien ici",
      otherError: "Aie il n'y a rien ici",
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
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

