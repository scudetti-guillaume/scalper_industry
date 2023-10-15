<template>
  <div>
    <div class="social-main">
      <a v-for="(carte, index) in cartes" :key="index" :href="carte.lien" target="_blank" class="card-link">
        <v-card class="card-social" :style="{ backgroundImage: `url(${carte.backgroundImage})` }">
          <div class="card-content">
            <v-card-title>{{ carte.titre }}</v-card-title>
            <v-card-text>{{ carte.description }}</v-card-text>
            <v-card-actions>{{ carte.texteDuLien }}</v-card-actions>
          </div>
        </v-card>
      </a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'socialnetwork',
  data() {
    return {
      cartes: [
        {
          titre: '',
          description: '',
          texteDuLien: '',
          lien: 'https://twitter.com/ScalperC',
          backgroundImage: 'x.png',
        },
        {
          titre: 'Titre 2',
          description: 'Description 2',
          texteDuLien: 'Lien 2',
          lien: 'https://www.bitget.com/expressly?channelCode=hete&vipCode=9k3f&languageType=0',
          backgroundImage: 'bitget.png',
        },
        {
          titre: 'Titre 4',
          description: 'Description 4',
          texteDuLien: 'Lien 4',
          lien: '',
          backgroundImage: 'mexc.png',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.social-main {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
   flex-wrap: wrap; 
}

.card-social {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  background-size: contain!important;
  background-position: center !important;
  position: relative;
  transition: transform 0.2s;
}

.card-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 200px;
  height: 200px;
  margin: 10px; 
  // border: 5px solid $main !important;
  // border-radius: 10px !important;
}


.card-content {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 10px;
  // border-radius: 10px;
  text-align: center;
  transform: translateY(100%);
}

.card-social:hover .card-content {
  display: block;
  transform: translateY(0);
}
</style>