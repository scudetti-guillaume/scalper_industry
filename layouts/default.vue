<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app class="main-bar">
      <!-- Icône du menu burger uniquement en version mobile -->
      <v-app-bar-nav-icon v-if="isMobile" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <router-link to="/" class="main-link">
        <v-toolbar-title>{{ title }}</v-toolbar-title>
      </router-link>
      <v-spacer />

        <div  v-if="!isMobile" class="header-link">
          <router-link to="/" class="main-link-2">
            <v-toolbar-title>{{ accueil }}</v-toolbar-title>
          </router-link>
          <router-link to="/" class="main-link-2">
            <v-toolbar-title>{{ tournoi }}</v-toolbar-title>
          </router-link>
          <router-link to="/inspire" class="main-link-2">
            <v-toolbar-title>{{ affiliation }}</v-toolbar-title>
          </router-link>
        </div>
        <!-- <v-btn @click="toggleDarkMode" class="toggle-button">
          <span v-if="isDarkMode">
            <i class="mdi mdi-weather-night mdi-24px"></i>
          </span>
          <span v-else>
            <i class="mdi mdi-weather-sunny mdi-24px"></i>
          </span>
        </v-btn> -->

    </v-app-bar>
    
    
    
  <v-navigation-drawer v-if="isMobile" v-model="drawer" app>
    <v-list>
        <template v-for="(item, index) in items" >
          <router-link :to="item.to" class="main-link">
            <v-list-item class="main-link-nav">
              <v-icon class="main-link-nav-icon">{{ item.icon }}</v-icon><v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </router-link>
        </template>
    </v-list>
  </v-navigation-drawer>

    <!-- <v-navigation-drawer  v-if="isMobile" v-model="drawer" app>
      <v-list>
        <router-link to="/" class="main-link">
          <v-list-item>
            <v-list-item-title>{{ acceuil }}</v-list-item-title>
          </v-list-item>
        </router-link>
        <router-link to="/tournoi" class="main-link">
          <v-list-item>
            <v-list-item-title>{{ tournoi }}</v-list-item-title>
          </v-list-item>
        </router-link>
        <router-link to="/inspire" class="main-link">
          <v-list-item>
            <v-list-item-title>{{ affiliation }}</v-list-item-title>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer> -->

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
    isMobile() {
      // Utilisez $vuetify.breakpoint pour détecter si l'écran est en mode mobile (xs)
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
         {
          icon: 'mdi-chart-bubble',
          title: 'Tournoi',
          to: '/'
        }
      ],
      title: 'Scalper',
      tournoi: 'Tournoi',
      accueil: 'Accueil',
      affiliation: 'Affiliation',
      to: '/'
    }


  }
}
</script>


<style lang="scss">
.main-bar {
  background: $main !important;
}

.main-link-nav {
display: flex;
  text-decoration: none;
  border: solid $main 1px !important;
  border-radius: 10px;
}

.main-link-nav-icon{
margin-right: 2px;

}

 .main-link-nav:hover {
     transform: scale(1.05);
    background-color:$main !important; 
  }

.main-link {
  text-decoration: none;
  color: rgb(0, 0, 0) !important;
}

.main-link-2:hover {
  text-decoration: none;
 transform: scale(1.05);
}


.main-link-2 {
  text-decoration: none;
  color: rgb(0, 0, 0) !important;
  border: solid #2e8c35 3px !important;
  border-radius:10px;
  padding: 2%;
  margin-right: 4%;
}

.main-link:hover {
  text-decoration: none;
 transform: scale(1.05);
}

.footer {
  background: $main !important;
}

.header-link {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  margin-right: 2%;
  
  //  @media (max-width: 1200px) {
  //   width: 30%; /* Par exemple, 50% de largeur pour les écrans de 768px et plus */
  // }
  // @media (max-width: 656px) {
  //   width: 60%; /* Par exemple, 50% de largeur pour les écrans de 768px et plus */
  // }

  // @media (max-width: 440px) {
  //   width: 80%; 
  //   font-size: 1rem !important;
  // }
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
.social-link{
  text-decoration: none;
  color: white !important;
  margin: 0 10px;
}
.social-link-icone {
  color: white !important;
  text-align: center;
  margin-right: 10px;
 
}
</style>