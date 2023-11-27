<template>
  <div>
    <div class="social-main">
      <a v-for="(carte, index) in cartes" :key="index" :href="carte.lien" target="_blank" class="card-link">
        <v-card class="card-social" :style="{ backgroundImage: `url(${carte.backgroundImage})` }" alt="Partner's logo">
          <div class="card-content">
            <v-card-actions class="cc-detail-title">{{  $i18n.t(`socialNetworkCard${index + 1}Title`) }}</v-card-actions>
            <v-card-text class="cc-detail-title-2">{{  $i18n.t(`socialNetworkCard${index + 1}Description`) }}</v-card-text>
            <v-card-actions class="cc-detail-title-3">{{  $i18n.t(`socialNetworkCard${index + 1}LinkText`) }}</v-card-actions>
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
          backgroundImage: 'xxxx.png',
        },
        {
          titre: this.$i18n.t('socialNetworkCard2Title'),
          description: this.$i18n.t('socialNetworkCard2Description'),
          texteDuLien: this.$i18n.t('socialNetworkCard2LinkText'),
          lien: 'https://www.bitget.com/expressly?channelCode=hete&vipCode=9k3f&languageType=0',
          backgroundImage: 'bitget.png',
        },
        {
          titre: this.$i18n.t('socialNetworkCard3Title'),
          description: this.$i18n.t('socialNetworkCard3Description'),
          texteDuLien: this.$i18n.t('socialNetworkCard3LinkText'),
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