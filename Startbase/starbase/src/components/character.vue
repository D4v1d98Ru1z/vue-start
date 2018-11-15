<template>
    <div>
        {{character}}
    </div>   
</template>
<script>
    export default{
        data(){
            return{
                character: {}
            }
        },
        methods:{
            fetchCharacter(){
                // Fetch the data from API
                fetch('https://swapi.co/api/people/1', {
                    method: 'GET'
                    //create a promise to respose the data from API
                }).then(response => response.json()).then(json => this.character = json)
            }
        },
        //created hook
        created(){
            this.fetchCharacter()
        }

    }
</script>