<template>
    <div class="main-live">
        <!-- Utilisez un ID pour l'élément -->
        <div id="twitch-embed" style="width: 100%; height: 480px;" ></div>
    </div>
</template>

<script>
export default {
    name: 'Live',
    mounted() {
            // Chargez le lecteur Twitch ici
            const script = document.createElement('script');
            script.setAttribute('src', 'https://embed.twitch.tv/embed/v1.js');
            script.addEventListener('load', () => {
                new window.Twitch.Embed('twitch-embed', {
                    layout: 'video',
                    width: '100%',
                    height: 480,
                    channel: 'Scalper_Chirurgical',
                    // Supprimez le chat
                    // parent: ['twitch-embed'],
                    // allowfullscreen: false,
                });
            });
            document.body.appendChild(script); // Ajoutez le script au corps du document
        }
    }
</script>

<style lang="scss">

.main-live{
margin-top: 2%;
}

</style>