<script>
import { store } from '../store';

export default {
    name: 'TopSelect',

    data() {
        return {
            store
        }
    },
}

</script>

<template>
    <div class="container">
        <div class="select-container">
            <select id="archetype">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="vw">VW</option>
                <option value="audi" selected>Audi</option>
            </select>
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