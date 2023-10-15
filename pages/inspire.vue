<template>
  <!-- <div> -->
    <div class="social-main-affi">
      <!-- <div>
      <a v-for="(carte, index) in carteX" :key="index" :href="carte.lien" target="_blank" class="card-link-x">
        <v-card class="card-social-x" :style="{ backgroundImage: `url(${carte.backgroundImage})` }">
          <div class="card-content-x">
            <v-card-title>{{ carte.titre }}</v-card-title>
            <v-card-text>{{ carte.description }}</v-card-text>
            <v-card-actions>{{ carte.texteDuLien }}</v-card-actions>
          </div>
        </v-card>
      </a>
      </div> -->
     <div class="card-link-affi-main">
      <a v-for="(carte, index) in cartes" :key="index" :href="carte.lien" target="_blank" class="card-link-affi">
        <v-card class="card-social-affi" :style="{ backgroundImage: `url(${carte.backgroundImage})` }">
          <div class="card-content-affi">
            <v-card-title>{{ carte.titre }}</v-card-title>
            <v-card-text>{{ carte.description }}</v-card-text>
            <v-card-actions>{{ carte.texteDuLien }}</v-card-actions>
          </div>
        </v-card>
      </a>
    </div>
    </div>

     <!-- <div class="centered-button">
      <router-link to="/">
        <v-btn color="primary">retour au menu</v-btn>
      </router-link>
    </div>  -->
  <!-- </div>  -->
</template>

<script>
export default {
  name: 'socialnetwork',
  data() {
    return {
      carteX: [
        {
          titre: '',
          description: '',
          texteDuLien: '',
          lien: 'https://twitter.com/ScalperC',
          backgroundImage: 'x.png',
        },],
      cartes: [
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
        {
          titre: 'Titre 3',
          description: 'Description 3',
          texteDuLien: 'Lien 3',
          lien: 'https://app.tealstreet.io/chirurgical',
          backgroundImage: 'TS.png',
        }, {
          titre: 'Titre 5',
          description: 'Description 3',
          texteDuLien: 'Lien 3',
          lien: 'https://app.tealstreet.io/chirurgical',
          backgroundImage: 'BYBIT_1.png',
        }, {
          titre: 'Titre 6',
          description: 'Description 3',
          texteDuLien: 'Lien 3',
          lien: 'https://app.tealstreet.io/chirurgical',
          backgroundImage: 'Kingfisher.png',
        }, {
          titre: 'Titre 7',
          description: 'Description 3',
          texteDuLien: 'Lien 3',
          lien: 'https://app.tealstreet.io/chirurgical',
          backgroundImage: 'Bingx.png',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.social-main-affi {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
}
.card-link-affi-main {
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2%;
  width: 100%;
}

.card-social-affi {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  background-size: contain !important;
  background-position: center !important;
  position: relative;
  transition: transform 0.2s;
}

.card-link-affi {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 200px;
  height: 200px;
  margin-bottom: 2%;
  // border: 6px solid $main !important;
  // border-radius: 10px !important;
}

/* Style de la description (masquée au départ) */
.card-content-affi {
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

.card-social-x {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  border: 6px solid $main !important;
  border-radius: 10px !important;
  background-size: contain !important;
  background-position: center !important;
  position: relative;
  transition: transform 0.2s;
}

.card-link-x {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 200px;
  height: 200px;
  // border: 6px solid $main !important;
  // border-radius: 10px !important;
}

/* Style de la description (masquée au départ) */
.card-content-x {
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


/* Effet de survol pour afficher la description */
.card-social-affi:hover .card-content-affi {
  display: block;
  transform: translateY(0);
}
</style>