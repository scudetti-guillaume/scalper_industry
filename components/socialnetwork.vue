<template>
  <div>
    <div class="social-main">
      <a v-for="(carte, index) in cartes" :key="index" :href="carte.lien" target="_blank" class="card-link">
        <v-card class="card-social" :style="{ backgroundImage: `url(${carte.backgroundImage})` }" alt="logo de partenaire">
          <div class="card-content">
            <v-card-actions class="cc-detail-title">{{ carte.titre }}</v-card-actions>
            <v-card-text class="cc-detail-title-2">{{ carte.description }}</v-card-text>
            <v-card-actions class="cc-detail-title-3">{{ carte.texteDuLien }}</v-card-actions>
          </div>
        </v-card>
      </a>
    </div>

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
          backgroundImage: 'x.png',
        },
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
          texteDuLien: '0 % Frais de maker en future, frais de taker en future  0,01 %',
          lien: '',
          backgroundImage: 'mexc.png',
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
   flex-wrap: wrap; 
}

.card-social {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  background-size: contain!important;
  background-position: center !important;
  position: relative;
  transition: transform 0.2s;
}

.card-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 200px;
  height: 200px;
  margin: 10px; 
  // border: 5px solid $main !important;
  // border-radius: 10px !important;
}


.card-content {
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

.card-social:hover .card-content {
  display: block;
  transform: translateY(0);
}

.cc-detail-title{
padding: 0;
}

.cc-detail-title-2{
padding: 0;
padding-top: 6%;

}

.cc-detail-title-3{
padding: 0;
padding-top: 6%;

}

</style>