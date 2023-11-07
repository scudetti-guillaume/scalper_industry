<template>
    <div class="main-live">
        <!-- Utilisez un ID pour l'élément -->
        <div id="twitch-embed" style="width: 80%; height: 480px;"></div>
    </div>
</template>

<script>
export default {
    name: 'Live',
    data() {
        return {
            isOffline: true,
        };
    },
    methods: {

        async loadTwitchPlayer() {
            try {
                await new Promise((resolve, reject) => {
                    const script = document.createElement('script');
                    script.setAttribute('src', 'https://embed.twitch.tv/embed/v1.js');
                    script.addEventListener('load', () => {
                        resolve();
                    });
                    script.addEventListener('error', (error) => {
                        reject(error);
                    });
                    document.body.appendChild(script);
                });
                new window.Twitch.Embed('twitch-embed', {
                    layout: 'video',
                    width: '100%',
                    height: 480,
                    channel: 'Scalper_Chirurgical',
                }); this.checkOfflineAfterDelay();
            } catch (error_1) {
                console.error('Erreur de chargement du script Twitch Embed:', error_1);
            }
        },
        checkOfflineAfterDelay() {
            setTimeout(() => {
                const offlineEmbeds = document.querySelectorAll('.offline-embeds');
                if (offlineEmbeds) {
                    this.isOffline = true;       
                    this.$store.commit('setIsOffline', this.isOffline);
                } else {
                    this.isOffline = false;
                    this.$store.commit('setIsOffline', this.isOffline);
                }
            }, 150);
        }





    },
    mounted() {
        this.loadTwitchPlayer();
        // const script = document.createElement('script');
        // script.setAttribute('src', 'https://embed.twitch.tv/embed/v1.js');
        // script.addEventListener('load', () => {
        //     new window.Twitch.Embed('twitch-embed', {
        //         layout: 'video',
        //         width: '100%',
        //         height: 480,
        //         channel: 'Scalper_Chirurgical',
        //     });
        // });
        // document.body.appendChild(script);
    }
}

</script>

<style lang="scss">
.main-live {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2%;
}
</style>