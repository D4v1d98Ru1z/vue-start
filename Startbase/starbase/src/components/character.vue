<template>
  <div class="col-md-4">
    <div class="card card-bord">
      <div class="card-body">
        <h5 class="card-title">{{character.name}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Height: {{character.height}}</h6>
        <p class="card-text">Gender: {{character.gender}}</p>
        <p class="card-text">Birth Year: {{character.birth_year}}</p>
        <button @click="switchCharacter" type="button" class="btn btn-success">Change Character</button>
      </div>
    </div>
    {{character}}
  </div>
</template>
<script>
  export default {
    props: ['id'],
    data() {
      return {
        character: {}
      }
    },
    methods: {
      fetchCharacter(id) {
        // Fetch the data from API
        fetch(`https://swapi.co/api/people/${id}`, {
          method: 'GET'
          //create a promise to respose the data from API
        }).then(response => response.json()).then(json => this.character = json)
      },
      //Show random character 
      switchCharacter() {
        let radom_char = Math.floor(Math.random() * 83) + 1
        this.fetchCharacter(radom_char)
      }
    },
    //created hook
    created() {
      this.fetchCharacter(this.id)
    }

  }

</script>
