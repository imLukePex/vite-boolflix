<script>
// Import Store.js
import { store } from '../store';

export default {
    name: 'AppHeader',
    props: ['message'],
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <header>
        <div class="logo-header">
            <h1>{{ message }}</h1>
        </div>

        <form class="d-flex" role="search">
            <input class="form-control" type="search" placeholder="Cerca il tuo film preferito" aria-label="Search"
                v-model.trim="store.searchMovie">
            <button class="btn btn-danger" type="submit" @click.prevent="$emit('performSearch')">Cerca</button>
        </form>
    </header>
</template>

<style lang="scss" scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: black;
    box-shadow: 0 7px 15px -15px gray;
}

h1 {
    color: red;
    font-weight: 700;
    margin: 0;
}
</style>
