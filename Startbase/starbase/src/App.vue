<template>
    <div id="app">
        <div class="container mt-5">
            <h2>{{title}}</h2>    
            <p>{{description}}</p>   
            <div class="row d-flex">
                <Character v-for="(id, index) in best_characters" :id="id" key="index"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Character from './components/character.vue'

    export default{
        name: 'app',
        data(){
            return {
                title: 'Welcome to Starbase!',
                description: 'Here you can find all information about your favorite star wars characters.',
                best_characters: [1, 13, 20] 
            }
        },
        components: {
           Character 
        }
    }
</script>