<script>
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import CardList from './components/CardList.vue'

import { store } from './store';

export default {
  components: {
    AppHeader,
    CardList,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCards() {
      axios
        .get(store.apiURL)
        .then((res => {
          store.cardList = res.data.data;
          console.log(store.cardList);
        }))
        .catch((err) => {
          console.log("Errori", err);
        })
    }
  },
  created() {
    this.getCards();
  },

}
</script>

<template>
  <AppHeader message="Yu-Gi-Oh Api" />
  <main>
    <CardList />
  </main>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables.scss' as *;


main {
  padding: 1rem;
}
</style>
