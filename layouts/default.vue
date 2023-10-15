<template>
  <v-app dark>
    <!-- <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-app-bar :clipped-left="clipped" fixed app class="main-bar">

      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
      <!-- <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn> -->
      <!-- <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      > -->
      <!-- <v-icon>mdi-minus</v-icon> -->
      <!-- </v-btn> -->
      <!-- <v-spacer /> -->
      <router-link to="/" class="main-link">
        <v-toolbar-title>{{ title }}</v-toolbar-title>
      </router-link>
      <v-spacer />
      <!-- <v-btn class="btn-tournoi">
        Tournoi
        <v-icon>mdi-menu</v-icon> 
      </v-btn> -->
      <!-- <v-spacer />
          <v-spacer />
          <v-spacer />
          <v-spacer />
          <v-spacer />
          <v-spacer />
          <v-spacer />
          <v-spacer />
          <v-spacer /> -->
      <div class="header-link">
        <router-link to="/" class="main-link">
          <v-toolbar-title>{{ acceuil }}</v-toolbar-title>
        </router-link>
        <router-link to="/" class="main-link">
          <v-toolbar-title>{{ tournoi }}</v-toolbar-title>
        </router-link>
        <!-- <v-spacer /> -->
        <!-- <v-spacer /> -->
        <router-link to="/inspire" class="main-link">
          <v-toolbar-title>{{ affiliation }}</v-toolbar-title>
        </router-link>
      </div>
      <!-- <v-spacer /> -->
      <v-btn @click="toggleDarkMode" class="toggle-button">
        <span v-if="isDarkMode">
          <i class="mdi mdi-weather-night mdi-24px"></i>
        </span>
        <span v-else>
          <i class="mdi mdi-weather-sunny mdi-24px"></i>
        </span>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <!-- <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    > -->
    <!-- <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list> -->
    <!-- </v-navigation-drawer> -->
    <v-footer :absolute="!fixed" app class="footer">
      <a href="https://twitter.com/ScalperC" target="_blank" class="social-link-x ">
        <img src="x.svg" width="20" height="20" alt="Twitter Logo" class="social-link-icone" />Contact
        <!-- <v-icon class="social-link-icone">mdi-twitter</v-icon> Contact -->
      </a>
      <a href="https://www.twitch.tv/scalper_chirurgical" target="_blank" class="social-link">
        <v-icon >mdi-twitch</v-icon> Twitch
      </a>
      <v-spacer />
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark; // Changer le thème
    },
  },
  data() {
    return {
      isDarkMode: false,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: 'Scalper',
      tournoi: 'tournoi',
      acceuil: 'acceuil',
      affiliation: 'affiliation',
      to: '/'
    }


  }
}
</script>


<style lang="scss">
.main-bar {
  background: $main !important;
}

.main-link {
  text-decoration: none;
  /* Supprime le soulignement */
  color: rgb(0, 0, 0) !important
    /* Change la couleur du lien (remplacez 'red' par la couleur de votre choix) */
}

.footer {
  background: $main !important;
}

.header-link {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 40%;
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