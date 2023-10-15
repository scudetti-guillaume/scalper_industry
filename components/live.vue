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
        // Chargez le lecteur Twitch ici
        const script = document.createElement('script');
        script.setAttribute('src', 'https://embed.twitch.tv/embed/v1.js');
        script.addEventListener('load', () => {
            new window.Twitch.Embed('twitch-embed', {
                layout: 'video',
                width: '100%',
                height: 480,
                channel: 'Scalper_Chirurgical',
            });
            fetch('https://api.twitch.tv/helix/streams?user_login=Scalper_Chirurgical', {
                headers: {
                    'Client-ID': 'zbyml1je4k1qan1u184grrq7ikjwkh',
                    'Authorization': 'Bearer c463aq8yt6tzu8vlr50caukwutyt63'
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    if (data.data.length > 0) {
                        console.log('Le stream est en direct');
                    } else {
                        console.log('Le stream n\'est pas en direct');
                    }
                })
                .catch(error => {
                    console.error('Erreur:', error);
                });
        });
        document.body.appendChild(script);
        

        // fetch('https://api.twitch.tv/helix/streams?user_login=Scalper_Chirurgical', {
        //     headers: {
        //         'Client-ID': 'zbyml1je4k1qan1u184grrq7ikjwkh',
        //         'Authorization': 'Bearer c463aq8yt6tzu8vlr50caukwutyt63'
        //     }
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.data.length > 0) {
        //             console.log('Le stream est en direct');
        //         } else {
        //             console.log('Le stream n\'est pas en direct');
        //         }
        //     })
        //     .catch(error => {
        //         console.error('Erreur:', error);
        //     });
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