<template>
  <div class="social-main-affi">
  <div class="banniere-affi"><banniereaffi></banniereaffi></div>
    <div class="card-link-affi-main">
      <a v-for="(carte, index) in cartes" :key="index" :href="carte.lien" target="_blank" class="card-link-affi">
        <v-card class="card-social-affi" :style="{ backgroundImage: `url(${carte.backgroundImage})` }">
          <div class="card-content-affi">
              <v-card-actions class="cc-detail-title">{{ carte.titre }}</v-card-actions>
              <v-card-text class="cc-detail-title-2">{{ carte.description }}</v-card-text>
              <v-card-text class="cc-detail-title-3">{{ carte.texteDuLien }}</v-card-text>
          </div>
        </v-card>
      </a>
    </div>
    </div>
</template>

<script>
import banniereaffi from '../components/banniere-affi.vue';
export default {
  name: 'socialnetwork',
     components: {
    banniereaffi,
  },
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
          titre: '10$ offert + 10% de cashback',
          description: 'Fond de recouvrement 300 millions en cas de hack de votre compte.',
          texteDuLien: 'Preuve de réserve ratio x2.5',
          lien: 'https://www.bitget.com/expressly?channelCode=hete&vipCode=9k3f&languageType=0',
          backgroundImage: 'bitget.png',
        },
        {
          titre: '0 %  Frais de maker et de taker en spot',
          description: '',
          texteDuLien: '0 % Frais de maker en future, frais de taker en future  0,01 %      ',
          lien: '',
          backgroundImage: 'mexc.png',
        },
        {
          titre: 'Terminal de trading gratuit',
          description: '- raccourcis - scale ',
          texteDuLien: '- plusieurs API ',
          lien: 'https://app.tealstreet.io/chirurgical',
          backgroundImage: 'tealstreet.png',
        }, {
          titre: '',
          description: '',
          texteDuLien: '',
          lien: 'https://app.tealstreet.io/chirurgical',
          backgroundImage: 'BYBIT_1.png',
        }, {
          titre: '',
          description: '',
          texteDuLien: '',
          lien: 'https://app.tealstreet.io/chirurgical',
          backgroundImage: 'Kingfisher.png',
        }, {
          titre: `Cadeau de bienvenue jusqu'à 5125 USDT`,
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

.banniere-affi{
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