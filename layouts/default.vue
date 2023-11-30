<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app class="main-bar">
      <v-app-bar-nav-icon v-if="isMobile" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
     <router-link to="/" class="main-link">
    <v-img :src="logoImageUrl" alt="Logo" class="centered-logo" v-if="isMobilebis" />
    <v-img :src="logoImageUrl" alt="Logo" class="logo-image" v-else />
  </router-link>
      <v-spacer />
      <v-spacer />
      <v-spacer />
   <v-spacer />
      <div v-if="!isMobile" class="header-link">
     <v-btn @click="toggleLanguage">FR/EN</v-btn>
        <v-btn class="main-link-2">
          <router-link class="main-link-2-bis" to="/">
            <v-toolbar-title>{{ $i18n.t('accueil') }}</v-toolbar-title>
          </router-link>
        </v-btn>
        <v-btn class="main-link-2">
          <a class="main-link-2-bis" target="_blank" href="https://prod.thomaslab.duckdns.org/">
            <v-toolbar-title>{{ $i18n.t('tournoi') }}</v-toolbar-title>
          </a>
        </v-btn>
        <v-btn class="main-link-2">
          <router-link class="main-link-2-bis" to="/inspire">
            <v-toolbar-title>{{ $i18n.t('affiliation') }}</v-toolbar-title>
          </router-link>
        </v-btn>
         <v-btn class="main-link-2">
            <router-link class="main-link-2-bis" to="/casino">
              <v-toolbar-title>{{ $i18n.t('casino') }}</v-toolbar-title>
            </router-link>
          </v-btn>
     </div>
      <v-spacer />
    <v-spacer />
    <v-spacer />
  <v-spacer />
  <v-spacer />
  <v-btn v-if="!isLive &&  !isMobilebis" class="main-link-3">
    <a class="main-link-3" href="https://www.twitch.tv/scalper_chirurgical" target="_blank">twitch</a>
  </v-btn>
  <v-btn v-if="isLive  && !isMobilebis" class="main-link-3">
      <a class="main-link-3" href="https://www.twitch.tv/scalper_chirurgical" target="_blank"> <v-icon class="live-circle">mdi-circle</v-icon>{{ $i18n.t('live') }}</a>
    </v-btn>

     
    <v-btn   v-if="!isMobilebis" class="main-link-3">
      <a class="main-link-3" href="https://kick.com/scalper_chirurgical" target="_blank">Kick</a>
    </v-btn>
     
    </v-app-bar>



    <v-navigation-drawer class="main-nav" v-if="isMobile" v-model="drawer" app>
      <v-list>
        <template v-for="(item, index) in items">
          <router-link :to="item.to" :href="item.href" class="main-link">
            <v-list-item class="main-link-nav">
              <v-icon class="main-link-nav-icon">{{ item.icon }}</v-icon><v-list-item-title>{{ item.title
              }}</v-list-item-title>
            </v-list-item>
          </router-link>
        </template>
          <a class="main-link-nav-link"  href='https://prod.thomaslab.duckdns.org/'  target="_blank">
      <v-icon class="main-link-nav-link-1" height="30px">mdi-tournament</v-icon>
      <a class="main-link-nav-link-2" href="https://prod.thomaslab.duckdns.org/" target="_blank">{{ $i18n.t('tournoi') }}</a>
           </a>
         <a class="main-link-nav-link"  href="https://www.twitch.tv/scalper_chirurgical"  target="_blank">
    <v-icon class="main-link-nav-link-1" height="30px">mdi-twitch</v-icon>
    <a class="main-link-nav-link-2" href="https://www.twitch.tv/scalper_chirurgical" target="_blank">Twitch</a>
         </a>
        <a class="main-link-nav-link" href="https://kick.com/scalper_chirurgical" target="_blank" >
        <img class="main-link-nav-link-1" height="30px" src="kick-2.png"> 
        <a class="main-link-nav-link-2"  href="https://kick.com/scalper_chirurgical" target="_blank">Kick</a>
        </a>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app class="footer">
      <a href="https://twitter.com/ScalperC" target="_blank" class="social-link-x">
        <img src="x.png" width="20" height="20" alt="Twitter Logo" class="social-link-icone" />Contact
      </a>
      <a href="https://www.twitch.tv/scalper_chirurgical" target="_blank" class="social-link">
        <v-icon>mdi-twitch</v-icon> Twitch
      </a>
      <v-spacer />
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import config from '../test2.js';
export default {
  name: 'DefaultLayout',
  computed: {
    isMobile() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return true;
      } else {
        return false;
      }
    },
      isMobilebis() {
      return this.$vuetify.breakpoint.name === 'xs';
    },
    // isLive() {
    //   return this.$store.state.isLive;

    // },

  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark; // Changer le thème
      this.$store.commit('setIsDarkMode', this.isDarkMode);
    },
      toggleLanguage() {
      const currentLanguage = this.$i18n.locale;
      const newLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
      this.$i18n.setLocale(newLanguage);
      console.log('Langue changée:', newLanguage);
    },
    //   isLive() {
    //   return this.$store.state.isLive;
    // },
    
  },
  data() {
    return {
      logoImageUrl: 'logo-gauffre2.png',
      isDarkMode: true,
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      isLive: false,
      items: [
        {
          icon: 'mdi-apps',
          title: this.$i18n.t('accueil'),
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: this.$i18n.t('affiliation'),
          to: '/inspire'
        },
        {
          icon: 'mdi-slot-machine-outline',
          title: this.$i18n.t('casino'),
         to: '/casino'
        },
      ],
      // title: 'Scalper',
      // tournoi: 'Tournoi',
      // accueil: 'Accueil',
      // affiliation: 'Affiliation',
      // casino: 'Casino',
      // twitch: 'Twitch',
      to: '/'
    }


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
              console.log('Le stream est en ligne !');
                this.isLive = true;
                // this.$store.commit('setIsLive', this.isLive);
              } else {
                console.log('Le stream est horsligne !');
                this.isLive = false;
                // this.$store.commit('setIsLive', this.isLive);
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
    console.log('Langue détectée:', this.$i18n.locale);
  },
  
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400;500;700&display=swap');
.main-bar {
  z-index: 100 !important;
  background: #1e1e1e !important;
}

.main-nav {
  z-index: 101 !important;

}

.main-link-nav {
  display: flex;
  text-decoration: none;
  border: solid $main 1px !important;
  border-radius: 10px;
  margin-bottom: 1%;
  &:hover{
    // transform: scale(1.05);
  background-color: $main !important;
    border-radius: 15px !important;
  
  }
  // background: white !important;
}

.main-link-nav-link {
  display: flex;
  text-decoration: none;
  border: solid $main 1px !important;
  border-radius: 10px;
  text-decoration: none;
  margin-bottom: 1%;
  &:hover {
  //  transform: scale(1.05);
    border: solid $main 1px !important;
    border-radius: 10px;
    background-color: $main !important;
  }
  // background: white !important;
}

// .main-link-nav:hover {
//   transform: scale(1.05);
//   background-color: $main !important;
//     border-radius: 10px !important;
// }

.main-link-nav-link-1{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5%;
  margin-top: 3%;
  height: 30px;
  color: white !important;
  // background: white !important;
}

.main-link-nav-link-2{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin-left: 2%;
  text-decoration: none;
  text-decoration: none;
  color: white !important;
  // background: white !important;
}

.main-link-nav-icon {
  margin-right: 2px;

}



.main-link {
  text-decoration: none;
  color: white !important;
    display: flex;
  justify-content: center;
  align-items: center;
  // margin-right: 30%;
}

.main-link-2:hover {
  text-decoration: none;
  transform: scale(1.05);
}


.main-link-2 {
  text-decoration: none !important;
  color: white !important;
  background-color: $main !important;
  padding: 2%;
  margin-right: 4%;
  font-family: Kanit !important;
  // font-weight: bold;
}

.main-link-2-bis {
  text-decoration: none !important;
  color: white !important;
  font-family:Kanit !important;
}


.main-link-3 {
  text-decoration: none !important;
  color: white !important;
  background-color: $main !important;
  // border: solid #2e8c35 3px !important;
  // border-radius: 10px;
  // padding: 2%;
  margin-right: 1%;
    font-family: Kanit  !important;
    //  font-weight: bold;
}

.live-circle{
background-color:red !important;
color: red !important;
height: 15px !important;
width: 15px !important;
margin-right: 10px;
border-radius: 50%;
}

.main-link:hover {
  text-decoration: none;
  transform: scale(1.05);

}

.footer {
  background: $main !important;
}

.header-link {
   position: fixed;
  top: 50%; 
  left: 50%;
  transform: translate(-50%, -50%); 
  display: flex;
  flex-direction: row;

}

.toggle-button {
  border: solid 2px grey;
  border-radius: 10px;
  width: 40px;
  height: 40px;

  &:hover {
    border: solid 2px rgb(255, 255, 255);
  }
}


.social-link-x {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white !important;
  margin: 0 10px;
}

.social-link {
  text-decoration: none;
  color: white !important;
  margin: 0 10px;
}

.social-link-icone {
  color: white !important;
  text-align: center;
  margin-right: 10px;

}

.centered-logo {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px; 
  height: auto; 
}

.logo-image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px; 
  height: auto; 
}
</style>