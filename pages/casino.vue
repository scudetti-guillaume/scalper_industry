<template>
    <div class="social-main-casino">
        <div class="banniere-affi-casino">
            <bannierecasino></bannierecasino>
        </div>
        <v-card class="card-leo">
        <a class="card-main-logo" href="https://cryptoleo.com/fr/" target="_blank"></a>
        <v-card-title>{{ $t('leoReviewTitle') }}</v-card-title>
        <v-card-text class="card-avis">
            <p>{{ $t('leoReviewContent1') }}</p>
            <p>{{ $t('leoReviewContent2') }}</p>
            <p>{{ $t('leoReviewContent3') }}</p>
        </v-card-text>
        <v-card-title class="tilte-bonus">{{ $t('welcomeBonusTitle') }}</v-card-title>
        <v-card-text class="card-leo-text-1"><span class="card-leo-text-1-bis"><span class="card-leo-text-1-150">{{ $t('bonusPercentage') }}&nbsp</span>{{ $t('upTo') }}</span></v-card-text>
        <v-card-text class="card-leo-text-1">{{ $t('wager') }} X 35</v-card-text>
        <v-card-text class="card-leo-text-1">{{ $t('minDeposit') }} </v-card-text>
        <v-card-text class="card-leo-text-1">{{ $t('maxBet') }} €5</v-card-text>
        <v-card-text class="card-leo-text-2">{{ $t('wagerPeriod') }}</v-card-text>
        <div class="link-casino-main">
            <a href="https://cryptoleo.com/fr/" target="_blank" class="casino-link-btn">
                <span>{{ $t('claimBonus') }}</span>
            </a>
        </div>
    </v-card>


        <div class="card-container">
            <v-card class="card-casino-1">
                <v-card-title class="headline-casino">{{ $t('cashbackTitle') }}</v-card-title>
                <v-card-text class="headline-casino">{{ $t('cashbackConditions') }}</v-card-text>
                <div class="link-casino-info">
                    <a href="https://cryptoleo.com/fr/" target="_blank" class="casino-link-btn">
                        <span>{{ $t('claimBonus') }}</span>
                    </a>
                    <div class="info-casino" @click="openModal"><span class="info-casino-i">i</span></div>
                </div>
                <v-dialog ref="dialog" v-model="dialog" max-width="600">
                    <v-card class="title-condition">
                        <v-card-title class="title-condition-casino">{{ $t('cashbackConditionsCard') }}</v-card-title>
                        <v-card-text class="title-condition-casino-1">{{ $t('cashbackConditionsCard1') }}</v-card-text>
                        <v-card-text class="title-condition-casino-1">{{ $t('cashbackConditionsCard2') }}</v-card-text>
                        <v-card-actions>
                            <v-btn @click="closeModal">{{ $t('closeButton') }}</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-card>
            <v-card class="card-casino-2">
                <v-card-title class="headline-casino">{{ $t('freeSpinTitle') }}</v-card-title>
                <v-card-text class="headline-casino">{{ $t('freeSpinConditions') }}</v-card-text>
                <div class="link-casino">
                    <a href="https://cryptoleo.com/fr/" target="_blank" class="casino-link-btn">
                        <span>{{ $t('claimBonus') }}</span>
                    </a>
                </div>
            </v-card>
            <v-card class="card-casino-3">
                <v-card-title class="headline-casino">{{ $t('fortuneWheelTitle') }}</v-card-title>
                <v-card-text class="headline-casino">{{ $t('fortuneWheelConditions') }}</v-card-text>
                <div class="link-casino">
                    <a href="https://cryptoleo.com/fr/" target="_blank" class="casino-link-btn">
                        <span>{{ $t('claimBonus') }}</span>
                    </a>
                </div>
            </v-card>
        </div>
        <div class="prevent-main">
            <v-card class="prevent-card">
                <!-- <v-card-title class="prevent-card-title">Prévention</v-card-title> -->
                <v-card-text class="prevent-card-1">{{ $t('preventText1') }} </v-card-text>
                <v-card-text  class="prevent-card-2">{{ $t('preventText2') }}  </v-card-text>
                <v-card-text class="prevent-card-title">{{ $t('preventSubtitle1') }}  </v-card-text>
                <v-card-text class="prevent-card-title">{{ $t('preventSubtitle2') }}  </v-card-text>
                <v-card-text class="prevent-card-title"> <a class="link-info-casino" href="https://www.joueurs-info-service.fr/" target="_blank">{{ $t('preventSubtitle3Link') }}  </a></v-card-text>
            </v-card>
        </div>
    </div>
</template>

<script>
import bannierecasino from '../components/banniere-casino.vue';
export default {
    name: 'socialnetwork',
    components: {
        bannierecasino,
    },
    methods: {
        openModal() {
            this.$refs.casinoCard.$refs.dialog.open(); // Ouvrir la modale associée à la carte
        },
        openModal() {
            this.dialog = true;
        },
        closeModal() {
            this.dialog = false;
        }

    },
    data() {
        return {
            dialog: false,
        };
    },
};
</script>

<style lang="scss">
// @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400;500;700&display=swap');
.social-main-casino {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
}

.card-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
}

.card-main-logo {
    display: flex;
    width: 80%;
    height: 100px;
    background: url('../static/Cryptoleowhite.png') center center no-repeat;
    background-size: contain;
    margin-bottom: 2%;
    padding-top: 2%;

    // &:hover {
    //     transform: scale(1.05);
    //     //   background-color: #1e1e1e;
    //     cursor: pointer;
    // }

    @media (max-width: 1265px) {
        width: 60% !important;
    }

    @media (max-width: 550px) {
        width: 100% !important;
    }
}

.card-leo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 530px;
    margin-bottom: 3%;
    border-radius: 10px !important;
}

.card-avis{
text-align: center;
}


.tilte-bonus {
    color: #4bcf50 !important;
    font-size: 1.8rem !important;

}

.card-leo-text-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    // border-bottom: #39a43d solid 0.5px !important;
    border-top: #184519 solid 0.2px !important;
}

.card-leo-text-1-bis {
    padding-top: 3%;
}

.card-leo-text-1-150{
font-size: 1.1rem;
}

.card-leo-text-2 {
    padding-top: 3%;
    padding-bottom: 3%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: #184519 solid 0.5px !important;
    border-top: #184519 solid 0.5px !important;
    margin-bottom: 2%;
}

.link-casino-main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: left;
    width: 250px;
    z-index: 10;
    margin-top: auto;
    padding-left: 3%;
    font-family: Kanit;
    margin-bottom: 2%;
}

.card-casino-1 {
    background: url('../static/bonus.jpg') right center no-repeat;
    background-size: contain;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 2%;
    padding-bottom: 1%;
    background-color: #1e1e1e !important;
    color: beige !important;
    width: 530px;
    border-radius: 10px !important;
    word-wrap: break-word;

    @media (max-width: 1265px) {
        width: 60% !important;
    }

    @media (max-width: 866px) {
        width: 80% !important;
    }

    @media (max-width: 610px) {
        width: 100% !important;
    }
}

.card-casino-2 {
    background: url('../static/freespin2.jpg') right center no-repeat;
    background-size: contain;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 2%;
    padding-bottom: 1%;
    background-color: #1e1e1e !important;
    color: beige !important;
    width: 530px;
    border-radius: 10px !important;
    word-wrap: break-word;

    @media (max-width: 1265px) {
        width: 60% !important;
    }

    @media (max-width: 866px) {
        width: 80% !important;
    }

    @media (max-width: 610px) {
        width: 100% !important;
    }
}

.card-casino-3 {
    background: url('../static/roulette.jpg') right center no-repeat;
    background-size: 240px;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 2%;
    padding-bottom: 1%;
    background-color: #1e1e1e !important;
    color: beige !important;
    width: 530px;
    border-radius: 10px !important;
    word-wrap: break-word;

    @media (max-width: 1265px) {
        width: 60% !important;
    }

    @media (max-width: 866px) {
        width: 80% !important;
    }

    @media (max-width:610px) {
        width: 100% !important;
    }
}



.image-droite {
    width: 100%;
    height: 100px;
    background: url('../static/freespin2.jpg') center center no-repeat;
    background-size: cover;

}

.headline-casino {
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    text-align: center;
    z-index: 10;
    // font-size: 2rem;
    font-weight: bold;
    word-wrap: break-word;
}

.headline-casino-free {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 10;
    font-weight: bold;
    //   font-size: 2rem;
    word-wrap: break-word;
}


.banniere-affi-casino {
    width: 100%;
    height: 100%;
}

.span-casino {
    word-wrap: break-word;
}

.link-casino {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: left;
    width: 250px;
    z-index: 10;
    margin-top: auto;
    padding-left: 3%;
    font-family: Kanit;
    // margin-bottom: 1%;
}

.link-casino-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: left;
    width: 280px;
    z-index: 10;
    margin-top: auto;
    padding-left: 3%;
    font-family: Kanit;
    // margin-bottom: 1%;



}


.casino-link-btn {
    display: inline-block;
    text-decoration: none;
    background-color: $main;
    color: #fff !important;
    padding: 10px 20px;
    border-radius: 25px;
    transition: background-color 0.2s;
    z-index: 10;
    margin-right: 1%;

    &:hover {
        transform: scale(1.05);
    }
}

.info-casino {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 25px;
    width: 40px !important;
    height: 40px;
    border-radius: 50%;
    border: solid 1px $main;

    &:hover {
        background-color: $main;
        cursor: pointer;

    }

}

.title-condition {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.title-condition-casino-1 {
    text-align: center;
}

.img-vip {
    margin-left: 5%;
    width: 30px;
    height: 30px;
}

.cc-detail-casino {
    display: flex;
    justify-content: center;
    align-items: center;

}







.card-link-casino {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 2%;
    width: 100%;
}

.card-social-affi {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    background-size: contain !important;
    background-position: center !important;
    position: relative;
    transition: transform 0.2s;
}

.card-link-affi {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 200px;
    height: 200px;
    margin-bottom: 2%;
}

.card-content-affi {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 10px;
    text-align: center;
    transform: translateY(100%);
}

.card-social-affi:hover .card-content-affi {
    display: block;
    transform: translateY(0);
}

.link-info-casino {
    text-decoration: none !important;
    color: #39a43d !important;
    font-size: 1.2rem;
    &:hover{
    transform: scale(1.05); 
    }
}

.prevent-card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: #39a43d solid 1px !important;
    border-radius: 10px !important;
}


.prevent-card-title {
    display: flex;
    justify-content: center;
    align-items: center;
}

.prevent-card-1{
font-size: 1.2rem;
color: #fff !important;
text-align: center;

}

.prevent-card-2{
text-align: center;

}

</style>