<template>
   <div class="col-md-4 mb-3">
    <div class="card card-bord">
      <div class="card-body">
        <h5 class="card-title mb-4">{{item.name}}</h5>
        <h6 class="card-subtitle mb-2 text-muted"></h6>
        <div v-for="(value, keyName, index) in item">
            <div v-if="index < 5">
                <p class="card-text"><strong>{{keyName}}</strong>: {{value}}</p>
            </div>
        </div>
        <button type="button" @click="switchItem" class="btn mt-4 btn-success">Change {{this.type}}</button>
      </div>
    </div>
  </div>
</template>
<script>
    export default{
        props: ['passedItem', 'type'],
        data(){
            return{
                item:{}
            }
        },
        methods:{
            switchItem(){
                let random_id = Math.floor(Math.random()*63)+1
                fetch(`https://swapi.co/api/${this.type}/${random_id}`, {method: "GET"
                }).then(response => response.json()).then(json => this.item = json)
            }
        },
        created(){
            this.item = this.passedItem
        } 
    }
</script>