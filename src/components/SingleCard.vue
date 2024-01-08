<script>
export default {
    name: 'SingleCard',

}
</script>

<template>
    <div class="card">
        <img alt="immagine carta" />
        <h3>Nome Carta</h3>
        <p>Specie</p>
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
    gap: 1rem;

    h3 {
        color: $titles-color;
    }
}
</style>