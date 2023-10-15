<template>
    <div class="card-banniere">
        <v-card-title class="headline-1">
            <div><span class="title-pmu">PMU DES TRADERS </span><span class="span-pmu"> Prend une bière, rejoins la guerre !</span></div>
        </v-card-title>
    </div>
</template>
      
<script >
export default {
    name: 'presentation'
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
       border-top: 3px solid #39a43d !important;
       border-bottom: 3px solid #39a43d !important;
       font-size: 1.8rem;

     @media (max-width: 1264px) {
    /* Appliquez ces styles pour les écrans de largeur supérieure ou égale à 768px */
    font-size: 1.6rem;
  }
   
   
     @media (max-width: 1044px) {
    /* Appliquez ces styles pour les écrans de largeur supérieure ou égale à 768px */
    font-size: 1.2rem;
  }

  @media (max-width: 1024px) {
    /* Appliquez ces styles pour les écrans de largeur supérieure ou égale à 1024px */
    font-size: 1.6rem;
  }
  @media (max-width: 860px) {
    /* Appliquez ces styles pour les écrans de largeur supérieure ou égale à 1024px */
    font-size: 1.2rem;
  }
   }

   .headline-1 {
       width: 100%;
       display: flex;
       justify-content: center;
       align-items: center;
       text-align: center;
       border-bottom: #39a43d solid 1px !important;
       padding: 0;
       font-size: larger;
       padding-top: 1%;
       padding-bottom: 1%;
       // white-space: nowrap
   }

   .title-pmu {
       border-right: #39a43d solid 3px !important;
       padding-right: 10px;
       height: 100%;
   }

   .span-pmu {
       display: inline-block;
       white-space: nowrap;
       margin-left: 15px;
   }
</style>