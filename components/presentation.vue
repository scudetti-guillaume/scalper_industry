<template>
    <v-card class="card-presentation">
        <v-card-title class="headline">
            Scalper
        </v-card-title>
        <v-card-text  class="cp-text">
            streamer et trader à plein temps et expert en patern BEUTEU
        </v-card-text>
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
    </v-card>
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
margin-bottom: 2%;
background-color: #1e1e1e !important;
color: beige !important;
}

.cp-text{
    color: beige !important;
}

</style>