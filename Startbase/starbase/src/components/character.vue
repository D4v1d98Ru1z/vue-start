<template>
    <div >
        <button @click="switchCharacter" type="button" class="btn btn-success">Change Character</button>
        {{character}}
    </div>   
</template>
<script>
    export default{
        props: ['id'],
        data(){
            return{
                character: {}
            }
        },
        methods:{
            fetchCharacter(id){
                // Fetch the data from API
                fetch(`https://swapi.co/api/people/${id}`, {
                    method: 'GET'
                    //create a promise to respose the data from API
                }).then(response => response.json()).then(json => this.character = json)
            },
            //Show random character 
            switchCharacter(){
                let radom_char = Math.floor(Math.random()*83)+1
                this.fetchCharacter(radom_char)
            }
        },
        //created hook
        created(){
            this.fetchCharacter(this.id)
        }

    }
</script>