<template>
  <div>
    <v-card class="card-presentation">
      <div v-if="!isMobile" class="background-left"></div>
      <v-card-title class="headline">
        <span class="headline-bis">{{  $i18n.t('tournoiNoelTitle') }}</span>
      </v-card-title>
      <v-card-text class="cp-text">
        <span class="cp-text-2">{{  $i18n.t('tournoiNoelCashPrice') }}</span>
      </v-card-text>
      <div class="link-presentation">
        <a href="https://prod.thomaslab.duckdns.org/" target="_blank" class="unlive-link">
          <span class="cp-text-3">{{  $i18n.t('tournoiNoelLink') }}</span>
        </a>
      </div>
      <div v-if="!isMobile" class="background-right"></div>
    </v-card>
  </div>
</template>

<script>
import config from '@/test2.js';
export default {
  name: 'presentation',
  computed: {
      isMobile() {
        return this.$vuetify.breakpoint.name === 'xs';
      },
    isOffline() {
      return this.$store.state.isOffline;
    },
  },
  // data() {
  //   return {
  //     isLive: false,
  //   };
    
  // },



  // mounted() {

  //   const clientID = config.clientID;
  //   const clientSecret = config.clientSecret;
  //   const channelName = 'Scalper_Chirurgical';


  //   const url = 'https://id.twitch.tv/oauth2/token';
  //   const params = new URLSearchParams();
  //   params.append('client_id', clientID);
  //   params.append('client_secret', clientSecret);
  //   params.append('grant_type', 'client_credentials');

  //   fetch(url, {
  //     method: 'POST',
  //     body: params,
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data.access_token) {
  //         const accessToken = data.access_token;
  //         fetch(`https://api.twitch.tv/helix/streams?user_login=${channelName}`, {
  //           method: 'GET',
  //           headers: {
  //             'Client-ID': clientID,
  //             'Authorization': `Bearer ${accessToken}`,
  //           },
  //         })
  //           .then(response => response.json())
  //           .then(data => {
  //             if (data.data.length > 0) {
  //               this.isLive = true;
  //               console.log('Le stream est en ligne !');
  //               this.$store.commit('setIsLive', this.isLive);
  //             } else {
  //              console.log('Le stream est horsligne !');
  //               this.isLive = false;
  //               this.$store.commit('setIsLive', this.isLive);
  //             }
  //           })
  //           .catch(error => {
  //             console.error('Erreur lors de la requête à l\'API Twitch : ' + error);
  //           });
  //       } else {
  //         console.error('Erreur lors de la récupération du jeton d\'accès.');
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Erreur lors de la requête pour obtenir le jeton d\'accès : ' + error);
  //     });
  // },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Great+Vibes&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400;500;700&display=swap');
.card-presentation {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 2%;
  padding-bottom: 1%;
  background-color: #1e1e1e !important;
  color: beige !important;
  width: 100%;
  @media (max-width: 1265px) {
    width: 100% !important;
  }
  @media (max-width: 550px) {
    width: 100% !important;
  }
}

.headline{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 10;
  font-weight: bold;
}

.headline-bis{
  font-family: Great Vibes,cursive !important;
  font-size: 2.8rem;
  margin-top: 1%;
}

.cp-text {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: bold;
  color: #39a43d !important;
  z-index: 10;

  @media (max-width: 725px) {
    font-weight: bold;
    color: #39a43d !important;
  }
}

.cp-text-2 {
display: flex;
font-size: 1.4em;
 font-family: anton;
 animation: zoom 2s infinite alternate;  
@keyframes zoom {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
}
  @media (max-width: 560px) {
   flex-direction: column;
   height: 33px !important;
  }
}

.cp-text-3 {
 font-family: Kanit;

}

.title-pmu {
  color: #39a43d !important;
  font-size: 1em;
  font-weight: bold;
  z-index: 10;
}

.link-presentation {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 250px;
  z-index: 10;
  margin-bottom: 0.5%;
}

.link-live-presentation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  z-index: 10;
}


.live-icon {
  color: green !important;
  z-index: 10;
  // Couleur verte pour l'icône Twitch
}

.twitch-icon {
  color: rgb(251, 249, 249) !important;
  z-index: 10;
  // La couleur Twitch par défaut ici
}

.live-circle {
  color: red !important;
  font-size: 20px;
  margin-right: 10px;
  z-index: 10;
}


.live-link {
  display: inline-block;
  text-decoration: none;
  background-color: $main;
  color: #fff;
  padding: 10px 20px;
  border-radius: 25px;
  transition: background-color 0.2s;
  margin-top: 1%;
  z-index: 10;
}

.unlive-link {
  display: inline-block;
  text-decoration: none;
  background-color: $main;
  color: #fff !important;
  padding: 10px 20px;
  border-radius: 25px;
  transition: background-color 0.2s;
  z-index: 10;
}

.discord-link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  text-decoration: none;
  background-color: $main;
  color: #fff !important;
  padding: 10px 20px;
  border-radius: 25px;
  transition: background-color 0.2s;
  margin-right: 0;
  z-index: 10;
}

.icone-discord {
  color: #fff !important;
  background-color: $main !important;
  z-index: 10;
}

.span-discord {
  margin-left: 10%;
  z-index: 10;
}

.discord-link:hover {
  transform: scale(1.05);
  z-index: 10;

}

.unlive-link:hover {
  transform: scale(1.05);
  z-index: 10;
  // background-color: #41970b;
}

.live-link:hover {
  transform: scale(1.05);
  z-index: 10;
  // background-color: #41970b;
}

.live-content {
  display: flex;
  align-items: center;
  z-index: 10;
}


.live-text {
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
  color: aliceblue;
  z-index: 10;
}

.live-icon {
  font-size: 20px;
  z-index: 10;
}

.background-left {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  /* Ajustez la largeur selon vos besoins */
  height: 100%;
  background-image: url('../static/beer.png');
  /* Chemin de l'image pour l'arrière-plan à gauche */
  background-size: contain;
  /* Ajustez selon le dimensionnement souhaité */
  background-position: left;
}

.background-right {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  /* Ajustez la largeur selon vos besoins */
  height: 100%;
  background-image: url('../static/marco.png');
  /* Chemin de l'image pour l'arrière-plan à droite */
  background-size: contain;
  /* Ajustez selon le dimensionnement souhaité */
  // z-index: -1; /* Placez-le derrière le contenu principal */
  background-position: right;
  /* Aligner l'image à droite */
}

</style>
