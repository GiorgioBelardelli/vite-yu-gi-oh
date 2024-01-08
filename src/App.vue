<script>
import AppHeader from './components/AppHeader.vue'
import CardList from './components/CardList.vue';


export default {
  components: {
    AppHeader,
    CardList,
  }
}
</script>

<template>
  <AppHeader message="Yu-Gi-Oh Api" />
  <main>

  </main>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables.scss' as *;


main {
  padding: 5rem;
}
</style>
