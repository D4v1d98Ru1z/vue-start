<template>
   <div class="col-md-4 mb-3">
    <div class="card card-bord">
      <div class="card-body">
        <h5 class="card-title">{{item.name}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{item}}</h6>
        <p class="card-text"></p>
        <button type="button" class="btn btn-success">Change {{this.type}}</button>
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