<template>
  <div class="social-main-affi">
    <div class="banniere-affi">
      <banniereaffi></banniereaffi>
    </div>
    <div class="card-link-affi-main">
      <a v-for="(carte, index) in cartes" :key="index" :href="carte.lien" target="_blank" class="card-link-affi">
        <v-card class="card-social-affi" :style="{ backgroundImage: `url(${carte.backgroundImage.src})` }">
         <img :src="carte.backgroundImage.src" :alt="carte.backgroundImage.alt" class="visually-hidden" />
          <div class="card-content-affi">
            <v-card-actions class="cc-detail-title">{{ $i18n.t(`carte${index + 1}Title`) }}</v-card-actions>
            <v-card-text class="cc-detail-title-2">{{ $i18n.t(`carte${index + 1}Description`) }}</v-card-text>
            <v-card-actions class="cc-detail-title-3">{{  $i18n.t(`carte${index + 1}LinkText`) }}</v-card-actions>
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
      cartes: [
        {
          titre: '10$ offert + 10% de cashback',
          description: 'Fond de recouvrement 300 millions en cas de hack de votre compte.',
          texteDuLien: 'Preuve de réserve ratio x2.5',
          lien: 'https://www.bitget.com/expressly?channelCode=hete&vipCode=9k3f&languageType=0',
          backgroundImage: {
            src: 'bitget.png',
            alt: 'logo bitget', // Ajoutez une description appropriée ici
          },
        },
        {
          titre: '0 %  Frais de maker et de taker en spot',
          description: '',
          texteDuLien: '0 % Frais de maker en future, frais de taker en future  0,01 %      ',
          lien: 'https://www.mexc.com/en-US/register?inviteCode=mexc-1XEGq',
            backgroundImage: {
            src: 'mexc.png',
            alt: 'logo mexc', // Ajoutez une description appropriée ici
          },
        },
        {
          titre: 'Terminal de trading gratuit',
          description: '- raccourcis - scale ',
          texteDuLien: '- plusieurs API ',
          lien: 'https://app.tealstreet.io/chirurgical',
           backgroundImage: {
            src: 'tealstreet.png',
            alt: 'logo tealstreet', // Ajoutez une description appropriée ici
          },
        },
        {
          titre: '',
          description: '',
          texteDuLien: '',
          lien: 'https://www.bybit.com/fr-FR/invite?ref=B6GNPN',
             backgroundImage: {
            src: 'BYBIT_1.png',
            alt: 'logo bybit', // Ajoutez une description appropriée ici
          },
        },
        {
          titre: '',
          description: '',
          texteDuLien: '',
          lien: 'https://thekingfisher.io/?ref=Qfvgg99Q',
          backgroundImage: {
            src: 'Kingfisher.png',
            alt: 'logo Kingfisher', // Ajoutez une description appropriée ici
          },
        },
        {
          titre: `Cadeau de bienvenue jusqu'à 5125 USDT`,
          lien: 'https://bingx.com/fr-fr/invite/MGEMBI7RQ/',
           backgroundImage: {
            src: 'Bingx.png',
            alt: 'logo Bingx', // Ajoutez une description appropriée ici
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400;500;700&display=swap');
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
  @media (max-width: 425px){
     justify-content:center;
  }
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
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
  text-decoration: none !important;
}

.card-content-affi {
  display: none;
  position:relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 10px;
  text-align: center;
  transform: translateY(100%);
}

.cc-detail-title{
display: flex;
align-items: center;
justify-content: center;
text-align: center;
font-family: Kanit;
padding:8px 0 0 0 ;
}

.cc-detail-title-2{
display: flex;
align-items: center;
justify-content: center;
text-align: center;
font-family: Anton;
padding:16px 0 0 0 ;
}

.cc-detail-title-3{
display: flex;
align-items: center;
justify-content: center;
text-align: center;
font-family: Anton;
padding:8px 0 0 0 ;
}

.card-social-affi:hover .card-content-affi {
  display: block;
  transform: translateY(0);
}
</style>