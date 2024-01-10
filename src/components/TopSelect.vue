<script>
import { store } from '../store';

export default {
    name: 'TopSelect',

    data() {
        return {
            store,
        }
    },
}

</script>

<template>
    <div class="container">
        <div class="select-container">
            <select v-model="store.filterTerm" @change="$emit('filter')" id="archetype">
                <option v-for="archetype in store.archetypeList" :value="archetype.archetype_name">
                    {{ archetype.archetype_name }}
                </option>
            </select>
            <!-- <p>opzione selezionata {{ store.filterTerm }}</p> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables.scss' as *;

.select-container {
    padding: 1rem;
}

select {
    background-color: $white;
    font-size: 1rem;
    width: 10rem;
    padding: .5rem 1rem;
    border-radius: 8px;
    border: 1px solid #a5a5a5;
}
</style>