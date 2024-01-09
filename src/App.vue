<script>
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import CardList from './components/CardList.vue'
import TopSelect from './components/TopSelect.vue';

import { store } from './store';

export default {
  components: {
    AppHeader,
    CardList,
    TopSelect,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCards() {
      let myURL = store.apiURL;

      if (store.filterTerm !== "") {
        myURL += `?archetype=${store.filterTerm}`;
      }

      axios
        .get(myURL)
        .then((res => {
          store.cardList = res.data.data;
        }))
        .catch((err) => {
          console.log("Errori", err);
        })
    },

    getArchetypes() {
      axios
        .get(store.archetypesURL)
        .then((res => {
          store.archetypeList = res.data;
        }))
        .catch((err) => {
          console.log("Errori", err);
        })
    },
  },
  created() {
    this.getCards();
    this.getArchetypes();
  },

}
</script>

<template>
  <AppHeader message="Yu-Gi-Oh Api" />
  <main>
    <TopSelect />
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
