<template>
    <div class="card-presentation">
        <!-- <v-card-title class="headline-1">
            <div><span class="title-pmu">PMU DES TRADERS </span>| Prend une bière, rejoins la guerre !</div>
        </v-card-title> -->
           <v-card-title class="headline">
              scalper
            </v-card-title>
        <v-card-text  class="cp-text">
            streamer, trader à plein temps et expert en patern BEUTEU
                <a href="https://www.twitch.tv/scalper_chirurgical" target="_blank" class="social-link">
            <v-icon >mdi-twitch</v-icon> Twitch
          </a>
        </v-card-text>
           <!-- <a href="https://www.twitch.tv/scalper_chirurgical" target="_blank" class="social-link">
          <v-icon >mdi-twitch</v-icon> Twitch
        </a> -->
        <!-- <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions> -->
    </div>
</template>
      
<script >
export default {
    name: 'presentation'
}
</script>
      
<style lang="scss">   

.card-presentation{
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
margin: 0 auto;
margin-bottom: 2%;
background-color: #1e1e1e !important;
color: beige !important;
width: 80% !important;
// border-top:3px solid #39a43d !important;
// border-bottom:3px solid #39a43d !important;
}

.headline-1{
width: 100%;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
// border-bottom: #39a43d solid 1px !important;
}


.cp-text{
    color: beige !important;
}

.title-pmu{
    color: #39a43d !important;
    font-size: 1em;
    font-weight: bold;
}

</style>