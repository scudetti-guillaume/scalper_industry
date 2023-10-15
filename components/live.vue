<template>
    <div class="main-live">
        <!-- Utilisez un ID pour l'élément -->
        <div id="twitch-embed" style="width: 80%; height: 480px;"></div>
    </div>
</template>

<script>
export default {
    name: 'Live',
 
    mounted() {
        const script = document.createElement('script');
        script.setAttribute('src', 'https://embed.twitch.tv/embed/v1.js');
        script.addEventListener('load', () => {
        console.log("Le lecteur est prêt à être initialisé !");
            new window.Twitch.Embed('twitch-embed', {
                layout: 'video',
                width: '100%',
                height: 480,
                channel: 'Scalper_Chirurgical',
            });
        });
        document.body.appendChild(script);

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