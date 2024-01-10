import { reactive } from 'vue'

export const store = reactive({
    cardList: [],
    narrowURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    archetypeList: [],
    archetypesURL: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    filterTerm: "",
});