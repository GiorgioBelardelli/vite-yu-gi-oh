<script>
import SingleCard from './SingleCard.vue';

export default {
    name: 'CardList',
    components: {
        SingleCard
    }
}
</script>

<template>
    <div class="container">

        <div class="container-filter">
            <h1>FILTRO VA QUA</h1>
        </div>

        <section>
            <div class="msg-container">
                <h4># Carte Trovate</h4>
            </div>
            <div class="row">
                <div class="col">
                    <SingleCard />
                </div>
            </div>

        </section>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables.scss' as *;

section {
    background-color: $white;
    padding: 2.5rem;

    .msg-container {
        background-color: #212529;
        padding: 1rem;

        h4 {
            color: $white;
        }
    }

    .row {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;

        .col {
            background-color: $bg-color;
        }
    }
}

.container-filter {
    padding: 1.5rem;
}
</style>