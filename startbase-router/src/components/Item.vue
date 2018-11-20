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
        <button type="button" class="btn mt-4 btn-success">Change {{this.type}}</button>
      </div>
    </div>
  </div>
</template>
<script>
    export default{
        props: ['item'],
        data(){
            return{
                type: this.$route.params.type
            }
        }       
    }
</script>