<template>
  <div class="card-presentation">
    <v-card-title class="headline">
      scalper
    </v-card-title>
    <v-card-text class="cp-text">
      streamer, trader à plein temps et expert en patern BEUTEU
         <a v-if="!isLive" href="https://www.twitch.tv/scalper_chirurgical" target="_blank" class="social-link">
        <v-icon class="twitch-icon">mdi-twitch</v-icon> Twitch
      </a>
    </v-card-text>
    <a v-if="isLive" href="https://www.twitch.tv/scalper_chirurgical" target="_blank" class="live-link">
      <div class="live-content">
        <v-icon class="live-circle mdi mdi-circle"></v-icon>
        <span class="live-text">En live, rejoins-nous!</span>
      </div>
      <!-- <v-icon class="live-icon mdi mdi-twitch"></v-icon> -->
    </a>
    <!-- <a v-else href="https://www.twitch.tv/scalper_chirurgical" target="_blank" class="social-link">
      <v-icon class="twitch-icon">mdi-twitch</v-icon> Twitch
    </a> -->
  </div>
</template>

<script>
import config from '@/test.js';
export default {
  name: 'presentation',
  data() {
    return {
      isLive: false,
    };
  },
  mounted() {
  
  const clientID = config.clientID;
    const clientSecret = config.clientSecret;
    const channelName = 'Scalper_Chirurgical';


    const url = 'https://id.twitch.tv/oauth2/token';
    const params = new URLSearchParams();
    params.append('client_id', clientID);
    params.append('client_secret', clientSecret);
    params.append('grant_type', 'client_credentials');

    fetch(url, {
      method: 'POST',
      body: params,
    })
      .then(response => response.json())
      .then(data => {
        if (data.access_token) {
          const accessToken = data.access_token;
          fetch(`https://api.twitch.tv/helix/streams?user_login=${channelName}`, {
            method: 'GET',
            headers: {
              'Client-ID': clientID,
              'Authorization': `Bearer ${accessToken}`,
            },
          })
            .then(response => response.json())
            .then(data => {
              if (data.data.length > 0) {
                this.isLive = true;
              } else {
                console.log('pas en live');
                this.isLive = false;
              }
            })
            .catch(error => {
              console.error('Erreur lors de la requête à l\'API Twitch : ' + error);
            });
        } else {
          console.error('Erreur lors de la récupération du jeton d\'accès.');
        }
      })
      .catch(error => {
        console.error('Erreur lors de la requête pour obtenir le jeton d\'accès : ' + error);
      });
  },
};
</script>

<style lang="scss">
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
  width: 80% !important;
}

.headline-1 {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.cp-text {
  color: beige !important;
}

.title-pmu {
  color: #39a43d !important;
  font-size: 1em;
  font-weight: bold;
}

.live-icon {
  color: green !important;
  // Couleur verte pour l'icône Twitch
}

.twitch-icon {
  color: rgb(251, 249, 249) !important;
  // La couleur Twitch par défaut ici
}

.live-circle {
  color: red !important;
  font-size: 20px;
  margin-right: 10px;
}


.live-link {
  display: inline-block;
  text-decoration: none;
  background-color: $main;
  color: #fff;
  padding: 10px 20px;
  border-radius: 25px;
  transition: background-color 0.2s;
}

.live-link:hover {
  background-color: #41970b;
}

.live-content {
  display: flex;
  align-items: center;
}


.live-text {
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
  color: aliceblue;
}

.live-icon {
  font-size: 20px;
}
</style>
