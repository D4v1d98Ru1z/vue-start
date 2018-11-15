<template>
    <div id="app">
        <div class="container mt-5">
            <h2>{{title}}</h2>    
            <p>{{description}}</p>   
            <Character/>
            
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
                description: 'Here you can find all information about your favorite star wars characters.'
            }
        },
        components: {
           Character 
        }
    }
</script>