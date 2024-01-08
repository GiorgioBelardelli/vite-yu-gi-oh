<script>

export default {
    name: 'SingleCard',
    props: {
        info: Object
    },

}
</script>

<template>
    <div class="card">
        <img :src="info.card_images[0].image_url" alt="immagine carta" />
        <h3>{{ info.name }}</h3>
        <p>{{ info.archetype }}</p>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables.scss' as *;

.card {

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: center;
    gap: 2rem;
    text-align: center;
    padding-bottom: 1rem;
    width: 12rem;


    h3 {
        color: $titles-color;
    }
}
</style>