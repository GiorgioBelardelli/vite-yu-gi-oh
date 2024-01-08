<script>
export default {
    name: 'AppHeader',
    props: ['message'],
}
</script>

<template>
    <header>
        <div class="container">
            <h1>{{ message }}</h1>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables.scss' as *;

header {
    background-color: $white;
    padding: 1rem;
}
</style>