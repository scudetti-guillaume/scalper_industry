<template>
  <div class="social-main">
    <!-- Utilisez v-for pour générer des cartes avec des liens -->
    <a v-for="(carte, index) in cartes" :key="index" :href="carte.lien" target="_blank" class="card-link">
      <v-card class="card-social" :style="{ backgroundImage: `url(${carte.backgroundImage})` }">
        <v-card-title>{{ carte.titre }}</v-card-title>
        <v-card-text>{{ carte.description }}</v-card-text> 
         <v-card-actions>
          {{ carte.texteDuLien }}
        </v-card-actions> 
      </v-card>
    </a>
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
         backgroundImage: 'x.png', // Couleur de fond pour la carte 1
        },
        {
          titre: '',
          description: '',
          texteDuLien: '',
          lien: 'https://www.bitget.com/expressly?channelCode=hete&vipCode=9k3f&languageType=0',
          backgroundImage: 'bitget.png', // Dégradé linéaire pour la carte 2
        },
         {
          titre: '',
          description: '',
          texteDuLien: '',
          lien: 'https://app.tealstreet.io/chirurgical',
          backgroundImage: 'tealstreet.png', // Dégradé linéaire pour la carte 2
        },
           {
          titre: '',
          description: '',
          texteDuLien: '',
          lien: '',
          backgroundImage: 'mexc.png', // Dégradé linéaire pour la carte 2
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
}

.card-social{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  // background-color: rgb(27, 33, 149) !important;
  border: 3px solid rgb(255, 255, 255) !important;
  border-radius: 10px !important;
  background-size: contain !important;
  background-position: center !important;
}

.card-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 200px;
  height: 200px;
  border: 3px solid rgb(255, 255, 255) !important;
  border-radius: 10px !important;
}
</style>