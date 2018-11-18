<template>
    <div>
        Type: {{type}}
    </div>  
</template>
<script>
    export default{
        data(){
            return{
                type: this.$route.params.type
            }
        },
        //watch propety
        watch:{
            '$route': 'change'
        },
        methods: {
            change(){
                this.type = this.$route.params.type
            }
        }
    }
</script>