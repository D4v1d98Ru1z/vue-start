<template>
    <div>
        {{Character}}
    </div>   
</template>
<script>
    export default{
        data(){
            return{
                Character: {}
            }
        },
        methods:{
            fetchCharacter(){
                // Fetch the data from API
                fetch('https://swapi.co/api/people/', {
                    method: 'GET'
                    //create a promise to respose the data from API
                }).then(response => response.json()).then(json => console.log(json))
            }
        },
        //created hook
        created(){
            this.fetchCharacter()
        }

    }
</script>