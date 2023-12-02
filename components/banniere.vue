<template>
  <div>
    <div class="card-banniere" >
      <v-card-title class="headline-1">
        <div>
  <!-- <img src="biere.svg" height="30px" class="biere"/> -->
          <span class="title-pmu">{{$i18n.t('pmuTitle')}}</span>
              
          <span class="span-pmu">{{$i18n.t('pmuDescription')}}</span>
        </div>
      </v-card-title>
    </div>
    <!-- <div class="card-banniere" v-else>
      <v-card-title class="headline-1">
        <div>
          <span class="title-pmu">{{ $i18n.t('pmuTitle') }}</span>
          <span class="span-green-pmu">{{ $i18n.t('pmuGreenDescription') }}</span>
        </div>
      </v-card-title>
    </div> -->
  </div>
</template>
      
<script >
export default {
    name: 'presentation',
    computed: {
        isDarkMode() {
            return this.$store.state.isDarkMode;
        },
    },
}
</script>
      
<style lang="scss">   


.card-banniere {
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
       text-align: center;
       margin-top: 1%;
       margin-bottom: 2%;
    //    background-color: #1e1e1e !important;
       color: beige !important;
       width: 100% !important;
       overflow: hidden;
       border-top: 3px solid $main !important;
       border-bottom: 3px solid $main !important;
       font-size: 1.8rem;
     @media (max-width: 1264px) {
    font-size: 1.6rem;
  }
  //    @media (max-width: 1044px) {
  //   font-size: 1.2rem;
  // }

  @media (max-width: 1024px) {
    font-size: 1.6rem;
  }
  @media (max-width: 860px) {
    font-size: 1.2rem;
  }
   }

   .headline-1 {
       width: 100%;
       display: flex;
       justify-content: center;
       align-items: center;
       text-align: center;
       border-bottom: $main solid 1px !important;
       padding: 0;
       font-size: larger;
       padding-top: 1%;
       padding-bottom: 1%;
   }

img.biere{
z-index: 3;
     @media (max-width: 1264px) {
    height: 25px;
  }
  //    @media (max-width: 1044px) {
  //   font-size: 20px;
  // }

  @media (max-width: 1024px) {
     height: 25px;
  }
  @media (max-width: 860px) {
     height: 20px;
  }

}


   .title-pmu {
       color:$main ;
       border-right: $main solid 3px !important;
       padding-right: 10px;
       height: 100%;
   }

   .span-pmu {
    //  font-size: 1.9rem;
       display: inline-block;
       white-space: nowrap;
       margin-left: 15px;
   }
   
     .span-green-pmu {
     color :  $main !important;
       display: inline-block;
       white-space: nowrap;
       margin-left: 15px;
   }
</style>