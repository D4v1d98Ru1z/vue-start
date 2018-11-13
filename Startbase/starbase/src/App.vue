<template>
    <div id="app">
        <div class="container mt-5">
            <h2>{{title}}</h2>    
            <p>{{description}}</p>   
            <button type="button" class="btn btn-success" @click="fetchCharacter">Get the data</button> 
        </div>
    </div>
</template>

<script>
    export default{
        name: 'app',
        data(){
            return {
                title: 'Welcome to Starbase!',
                description: 'Here you can find all information about your favorite star wars characters.'
            }
        },
        methods: {
            fetchCharacter(){
                // Fetch the data from API
                fetch('https://swapi.co/api/people/', {
                    method: 'GET'
                    //create a promise to respose the data from API
                }).then(response => response.json()).then(json => console.log(json))
            }
        }
    }
</script>