<template>
    <div>
        Type: {{type}}
    </div>  
</template>
<script>
    export default{
        data(){
            return{
                type: this.$route.params.type,
                items: []
            }
        },
        //watch propety
        watch:{
            '$route': 'fetchItems'
        },
        methods: {
            fetchItems(){
                this.items = []
                let list_items = [1, 13, 20]
                for (let id in list_items){
                    let ids_selected = list_items[id]
                    console.log(ids_selected)
                }
            }
        },
        created() {
            this.fetchItems()
        }
    }
</script>