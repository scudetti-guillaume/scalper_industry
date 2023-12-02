<template>
    <div class="social-main-casino">
        <div class="banniere-affi-casino">
            <bannierecasino></bannierecasino>
        </div>

        <v-card class="unique-card">
            <div class="card-header">
                <a class="card-main-logo" href="https://cryptoleo7.com/fr/?cxd=42807_961319&bta=42807&nci=5791#register"
                    target="_blank"> <span class="sr-only">Logo de cryptoleo</span></a>
            </div>
            <v-divider></v-divider>
            <v-card-title class="uc-title">{{ $i18n.t('leoReviewTitle') }}</v-card-title>
            <v-card-text class="card-avis">
                <p>{{ $i18n.t('leoReviewContent1') }}</p>
                <p>{{ $i18n.t('leoReviewContent2') }}</p>
                <p>{{ $i18n.t('leoReviewContent3') }}</p>
            </v-card-text>
            <v-divider class="divider"></v-divider>
            <v-card-title class="tilte-bonus">{{ $i18n.t('welcomeBonusTitle') }}</v-card-title>
            <v-card-text class="bonus-info">
                <div class="bonus-row">
                    <div class="bonus-label">{{ $i18n.t('bonusPercentage') }} {{ $i18n.t('upTo') }}</div>
                </div>
                <div class="bonus-row">
                    <div class="bonus-label">{{ $i18n.t('wager') }} </div>
                </div>
                <div class="bonus-row">
                    <div class="bonus-label">{{ $i18n.t('minDeposit') }}</div>
                </div>
                <div class="bonus-row">
                    <div class="bonus-label">{{ $i18n.t('maxBet') }} </div>
                </div>
                <div class="bonus-row">
                    <div class="bonus-label">{{ $i18n.t('wagerPeriod') }}</div>
                </div>
            </v-card-text>
            <v-divider class="dividerbis"></v-divider>
            <v-card-text class="bonus-info-bis">
                <div class="bonus-row">
                    <div class="bonus-label">{{ $i18n.t('fortune') }}</div>
                    <div class="bonus-label">{{ $i18n.t('fortunebis') }}</div>
                </div>
            </v-card-text>
            <v-divider class="divider"></v-divider>
            <div class="link-section">
                <div class="link-casino-main">
                    <a href="https://cryptoleo7.com/fr/?cxd=42807_961319&bta=42807&nci=5791#register" target="_blank"
                        class="casino-link-btn-bis">
                        <span>{{ $i18n.t('claimBonus') }}</span>
                    </a>
                </div>
            </div>
        </v-card>

        <div class="card-container">
            <v-card class="card-casino-1">
                <div class="background-description" role="presentation">
                    logo casino
                </div>
                <v-card-title class="headline-casino">{{ $i18n.t('cashbackTitle') }}</v-card-title>
                <v-card-text class="headline-casino-bis" @click="openModal">{{ $i18n.t('cashbackConditions')
                }}</v-card-text>
                <div class="link-casino-info">
                    <a href="https://cryptoleo7.com/fr/?cxd=42807_961319&bta=42807&nci=5791#register" target="_blank"
                        class="casino-link-btn">
                        <span>{{ $i18n.t('depositNow') }}</span>
                    </a>
                    <div class="info-casino" @click="openModal(1)"><span class="info-casino-i">i</span></div>
                </div>
                <v-dialog ref="dialog1" v-model="dialog1" max-width="600" :overlay-opacity="0.8">
                    <v-card class="title-condition">
                        <v-card-title class="title-condition-casino">
                            {{ $i18n.t('cashbackConditionsCard') }}
                            <v-btn icon @click="closeModal(1)" class="close-btn">
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </v-card-title>
                        <v-divider class="divider-bis"></v-divider>
                        <v-card-text class="title-condition-casino-1">
                            <span class="tcc5">{{ $i18n.t('cashbackConditionsCard5%') }}</span>
                            {{ $i18n.t('cashbackConditionsCard1') }}
                            <span class="tcc5">{{ $i18n.t('cashbackConditionsCard12.5%') }}</span>
                            {{ $i18n.t('cashbackConditionsCard1bis') }}
                        </v-card-text>
                        <v-card-text class="title-condition-casino-1">
                            <span class="tcc5">{{ $i18n.t('cashbackConditionsCard25%') }}</span>
                            {{ $i18n.t('cashbackConditionsCard2') }}
                        </v-card-text>
                        <v-card-actions>
                            <div class="link-casino-info-bis">
                                <a href="https://cryptoleo7.com/fr/?cxd=42807_961319&bta=42807&nci=5791#register"
                                    target="_blank" class="casino-link-btn-bis">
                                    <span>{{ $i18n.t('depositNow') }}</span>
                                </a>
                            </div>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-card>

            <v-card class="card-casino-2">
              <div class="background-description" role="presentation">
                        logo casino
                    </div>
                <v-card-title class="headline-casino">{{ $i18n.t('freeSpinTitle') }}</v-card-title>
                <v-card-text class="headline-casino">{{ $i18n.t('freeSpinConditions') }}</v-card-text>
                <div class="link-casino-info">
                    <a href="https://cryptoleo7.com/fr/?cxd=42807_961319&bta=42807&nci=5791#register" target="_blank"
                        class="casino-link-btn">
                        <span>{{ $i18n.t('depositNow') }}</span>
                    </a>
                    <div class="info-casino" @click="openModal(2)"><span class="info-casino-i">i</span></div>
                </div>
                <v-dialog ref="dialog2" v-model="dialog2" max-width="600">
                    <v-card class="title-condition">
                        <v-card-title class="title-condition-casino">{{ $i18n.t('freeSpinConditionsCard') }}
                            <v-btn icon @click="closeModal(2)" class="close-btn">
                                <v-icon>mdi-close</v-icon>
                            </v-btn></v-card-title>
                        <v-divider class="divider-bis"></v-divider>
                        <v-card-text class="title-condition-casino-1">{{ $i18n.t('freeSpinConditionsText1') }}</v-card-text>
                        <v-card-text class="title-condition-casino-1">{{ $i18n.t('freeSpinConditionsText2') }}</v-card-text>
                        <v-card-actions>
                            <div class="link-casino-info-bis">
                                <a href="https://cryptoleo7.com/fr/?cxd=42807_961319&bta=42807&nci=5791#register"
                                    target="_blank" class="casino-link-btn-bis">
                                    <span>{{ $i18n.t('depositNow') }}</span>
                                </a>
                            </div>
                            <!-- <v-btn @click="closeModal(2)">{{ $i18n.t('closeButton') }}</v-btn> -->
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-card>
            <v-card class="card-casino-3">
              <div class="background-description" role="presentation">
                        logo casino
                    </div>
                <v-card-title class="headline-casino">{{ $i18n.t('fortuneWheelTitle') }}</v-card-title>
                <v-card-text class="headline-casino">{{ $i18n.t('fortuneWheelConditions') }}</v-card-text>
                <div class="link-casino-info">
                    <a href="https://cryptoleo7.com/fr/?cxd=42807_961319&bta=42807&nci=5791#register" target="_blank"
                        class="casino-link-btn">
                        <span>{{ $i18n.t('depositNow') }}</span>
                    </a>
                    <div class="info-casino" @click="openModal(3)"><span class="info-casino-i">i</span></div>
                </div>
                <v-dialog ref="dialog3" v-model="dialog3" max-width="600">
                    <v-card class="title-condition">
                        <v-card-title class="title-condition-casino">{{ $i18n.t('fortuneWheelCard') }}
                            <v-btn icon @click="closeModal(3)" class="close-btn">
                                <v-icon>mdi-close</v-icon>
                            </v-btn></v-card-title>
                        <v-divider class="divider-bis"></v-divider>
                        <v-card-text class="title-condition-casino-1">{{ $i18n.t('fortuneWheelText1') }}</v-card-text>
                        <v-card-text class="title-condition-casino-1">{{ $i18n.t('fortuneWheelText2') }}</v-card-text>
                        <v-card-actions>
                            <div class="link-casino-info-bis">
                                <a href="https://cryptoleo7.com/fr/?cxd=42807_961319&bta=42807&nci=5791#register"
                                    target="_blank" class="casino-link-btn-bis">
                                    <span>{{ $i18n.t('depositNow') }}</span>
                                </a>
                            </div>
                            <!-- <v-btn @click="closeModal(2)">{{ $i18n.t('closeButton') }}</v-btn> -->
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-card>
        </div>
        <div class="prevent-main">
            <v-card class="prevent-card">
                <!-- <v-card-title class="prevent-card-title">Prévention</v-card-title> -->
                <v-card-text class="prevent-card-1">{{ $i18n.t('preventText1') }} </v-card-text>
                <v-card-text class="prevent-card-2">{{ $i18n.t('preventText2') }} </v-card-text>
                <v-card-text class="prevent-card-title">{{ $i18n.t('preventSubtitle1') }} </v-card-text>
                <v-card-text class="prevent-card-title">{{ $i18n.t('preventSubtitle2') }} </v-card-text>
                <v-card-text class="prevent-card-title"> <a class="link-info-casino"
                        href="https://www.joueurs-info-service.fr/" target="_blank">{{ $i18n.t('preventSubtitle3Link') }}
                    </a></v-card-text>
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
    computed: {
        isMobilexss() {
            return this.$vuetify.breakpoint.name === 'xxs';
        },
    },
    methods: {
        openModal(cardNumber) {
            // Utilisez le numéro de la carte pour déterminer quelle modale ouvrir
            if (cardNumber === 1) {
                this.dialog1 = true;
            } else if (cardNumber === 2) {
                this.dialog2 = true;
            } else if (cardNumber === 3) {
                this.dialog3 = true;
            }
        },
        closeModal(cardNumber) {
            // Utilisez le numéro de la carte pour déterminer quelle modale fermer
            if (cardNumber === 1) {
                this.dialog1 = false;
            } else if (cardNumber === 2) {
                this.dialog2 = false;
            } else if (cardNumber === 3) {
                this.dialog3 = false;
            }
        },

    },
    data() {
        return {
            dialog1: false,
            dialog2: false,
            dialog3: false,
        };
    },
    // mounted() {
    //     console.log('Langue détectée:', this.$i18n.locale);
    // }
};
</script>

<style lang="scss">
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
    width: 100%;
    height: 100px;
    background: url('../static/Cryptoleowhite.png') center center no-repeat;
    background-size: contain;
    margin-bottom: 2%;
    padding-top: 2%;
    margin-right: 0;
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
}

.unique-card {
    max-width: 600px;
    margin-bottom: 20px;
    // box-shadow: 0px 0px 15px 0px #000000;
    color: #333;
    text-align: center;
    border-radius: 10px !important;
    border: solid 1px $main !important;
}

.card-header {
    background-color: $main;
    border-radius: 7px 7px 0 0 !important;
    padding: 10px;
}

.uc-title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: #fff;
    margin: 0;
    color: $main;
}

.card-avis {
    text-align: center;
    //   margin: 10px 20px;
    color: #333;
}

.tilte-bonus {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    //   margin: 10px 0;
    color: $main;
}

.bonus-info {
    //   margin: 10px 20px;
    color: #333;
}

.bonus-info-bis {
    padding-top: 0 !important;

}

.bonus-row {
    margin-top: 10px;
}

.bonus-label {
    font-weight: bold;
}

// .casino-link-btn {
//     text-decoration: none;
//     padding: 10px 20px;
//     background-color: #4bcf50;
//     color: #fff;
//     border-radius: 5px;
//     transition: background-color 0.3s, color 0.3s;
// }

.casino-link-btn:hover {
    background-color: #1e9628;
}

.link-section {
    padding: 10px;
}

.divider {
    margin-left: 20px;
    margin-right: 20px;
    border: solid 1px $main !important;
}

.dividerbis {
    // margin-left: 150px;
    // margin-right: 150px;
    width: 300px;
    margin: auto;
    border: solid 1px $main !important;
    border-style: dashed !important;
}

.divider-bis {
    margin-left: 20px;
    margin-right: 20px;
    width: 100%;
    border: solid 1px $main !important;
    margin-bottom: 2%;
}



////////////////////////////V7 //////////////////////////////////// -
.card-casino-1 {
    background: url('../static/leolion.png') right center no-repeat;
    background-size: contain;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 2%;
    padding-bottom: 2%;
    background-color: #1e1e1e !important;
    color: beige !important;
    width: 530px;
    max-width: 600px;
    border-radius: 10px !important;
    word-wrap: break-word;

    @media (max-width: 1265px) {
        width: 600px !important;
    }

    @media (max-width: 405px) {
        background: none;
        align-items: center;
        justify-content: center;
    }

}


.background-description {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
}


.card-casino-2 {
    background: url('../static/leofreespin.png') right center no-repeat;
    background-size: contain;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 2%;
    padding-bottom: 2%;
    background-color: #1e1e1e !important;
    color: beige !important;
    width: 530px;
    max-width: 600px;
    border-radius: 10px !important;
    word-wrap: break-word;

    @media (max-width: 1265px) {
        width: 600px !important;
    }

    @media (max-width: 405px) {
        background: none;
        align-items: center;
        justify-content: center;
    }

    //    @media (max-width: 866px) {
    //     width: 80% !important;
    // }
    //      @media (max-width: 770px) {
    //     width: 90% !important;
    // }

    // @media (max-width: 630px) {
    //     width: 100% !important;
    // }
}

.card-casino-3 {
    background: url('../static/leowheel.png') right center no-repeat;
    background-size: contain;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 2%;
    padding-bottom: 2%;
    background-color: #1e1e1e !important;
    color: beige !important;
    width: 530px;
    max-width: 600px;
    border-radius: 10px !important;
    word-wrap: break-word;

    @media (max-width: 1265px) {
        width: 600px !important;
    }

    @media (max-width: 405px) {
        background: none;
        align-items: center;
        justify-content: center;
    }
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

    @media (max-width: 405px) {
        background: none;
        align-items: center;
        justify-content: center;
    }
}

.headline-casino-bis {
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    text-align: center;
    z-index: 10;
    // font-size: 2rem;
    font-weight: bold;
    word-wrap: break-word;

    &:hover {
        cursor: pointer;
    }

    @media (max-width: 405px) {
        align-items: center;
        justify-content: center;
    }
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
    // justify-content: space-between;
    align-items: left;
    width: 280px;
    z-index: 10;
    margin-top: auto;
    padding-left: 3%;
    font-family: Kanit;
    // margin-bottom: 1%;
}

.link-casino-info-bis {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 280px;
    z-index: 10;
    margin-top: auto;
    font-family: Kanit;
    font-weight: bold;
}


.casino-link-btn {
    color: #fff;
    border-radius: 5px;
    font-family: Kanit;
    display: inline-block;
    text-decoration: none;
    background-color: $main;
    color: #fff !important;
    padding: 10px 20px;
    border-radius: 25px;
    transition: background-color 0.2s;
    z-index: 10;
    margin-right: 3%;
    font-weight: bold;

    &:hover {
        transform: scale(1.05);
    }
}

.casino-link-btn-bis {
    color: #fff;
    border-radius: 5px;
    font-family: Kanit;
    display: inline-block;
    text-decoration: none;
    background-color: $main;
    color: #fff !important;
    padding: 10px 20px;
    border-radius: 25px;
    transition: background-color 0.2s;
    z-index: 10;
    font-weight: bold;

    &:hover {
        transform: scale(1.05);
    }
}


.info-casino {
    display: flex;
    justify-content: center;
    align-items: center;
    // margin-right: 25px;
    width: 44px !important;
    height: 44px;
    border-radius: 50%;
    border: solid 1px $main;
    font-size: 1.2rem;

    &:hover {
        background-color: $main;
        cursor: pointer;

    }

}

// .close-btn {
//     margin-left: auto;
// }

.close-btn {
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
    border: 1px solid #4bcf50;
}


.title-condition {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px !important;
    border: solid 1px $main !important;
}

.title-condition-casino {
    text-align: center;
    color: $main;
}


.title-condition-casino-1 {
    text-align: center;
}

.tcc5 {
    font-size: 1.2rem;

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
    color: $main !important;
    font-size: 1.2rem;

    &:hover {
        transform: scale(1.05);
    }
}

.prevent-card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: $main solid 1px !important;
    border-radius: 10px !important;
    max-width: 600px !important;
}


.prevent-card-title {
    display: flex;
    justify-content: center;
    align-items: center;
}

.prevent-card-1 {
    font-size: 1.2rem;
    color: #fff !important;
    text-align: center;

}

.prevent-card-2 {
    text-align: center;

}</style>