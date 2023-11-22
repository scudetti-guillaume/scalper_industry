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
        <v-btn class="main-link-2">
          <router-link class="main-link-2-bis" to="/">
            <v-toolbar-title>{{ accueil }}</v-toolbar-title>
          </router-link>
        </v-btn>
        <v-btn class="main-link-2">
          <a class="main-link-2-bis" target="_blank" href="https://prod.thomaslab.duckdns.org/">
            <v-toolbar-title>{{ tournoi }}</v-toolbar-title>
          </a>
        </v-btn>
        <v-btn class="main-link-2">
          <router-link class="main-link-2-bis" to="/inspire">
            <v-toolbar-title>{{ affiliation }}</v-toolbar-title>
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
      <a class="main-link-3" href="https://www.twitch.tv/scalper_chirurgical" target="_blank"> <v-icon class="live-circle mdi mdi-circle"></v-icon>En live</a>
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
      <a class="main-link-nav-link-2" href="https://prod.thomaslab.duckdns.org/" target="_blank">Tournoi</a>
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
export default {
  name: 'DefaultLayout',
  computed: {
      isLive() {
        return this.$store.state.isLive;
        
      },
 
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

  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark; // Changer le thème
      this.$store.commit('setIsDarkMode', this.isDarkMode);
    },
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
      items: [
        {
          icon: 'mdi-apps',
          title: 'Accueil',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Affiliation',
          to: '/inspire'
        },
        // {
        //   icon: 'mdi-chart-bubble',
        //   title: 'Tournoi',
        //   href: 'https://prod.thomaslab.duckdns.org/',
        //  to: ''
        // },
      ],
      title: 'Scalper',
      tournoi: 'Tournoi',
      accueil: 'Accueil',
      affiliation: 'Affiliation',
      twitch: 'Twitch',
      to: '/'
    }


  }
  
}
</script>


<style lang="scss">
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
  // background: white !important;
}

.main-link-nav-link {
  display: flex;
  text-decoration: none;
  border: solid $main 1px !important;
  border-radius: 10px;
  text-decoration: none;
  &:hover {
    border: solid $main 1px !important;
    border-radius: 10px;
    background-color: $main !important;
  }
  // background: white !important;
}

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

.main-link-nav:hover {
  transform: scale(1.05);
  background-color: $main !important;
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
  background-color: #39a43d !important;
  // border: solid #2e8c35 3px !important;
  // border-radius: 10px;
  padding: 2%;
  margin-right: 4%;
}

.main-link-2-bis {
  text-decoration: none !important;
  color: white !important;
}


.main-link-3 {
  text-decoration: none !important;
  color: white !important;
  background-color: #39a43d !important;
  // border: solid #2e8c35 3px !important;
  // border-radius: 10px;
  // padding: 2%;
  margin-right: 1%;
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
  top: 50%; /* Position verticale au centre de l'écran */
  left: 50%; /* Position horizontale au centre de l'écran */
  transform: translate(-50%, -50%); /* Décalage pour centrer correctement */
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

.btn-tournoi {
  color: blue !important;
  background: bisque !important;
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
  width: 200px; /* Ajustez la largeur en fonction de vos besoins */
  height: auto;  /* Pour centrer horizontalement */
}

.logo-image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px; // Ajustez la largeur de l'image selon vos besoins
  height: auto; // Pour conserver le rapport hauteur/largeur
}
</style>