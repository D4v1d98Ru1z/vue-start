<template>
    <div class="col-md-12">
        {{items}}
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
                this.type = this.$route.params.type
                let list_items = [1, 13, 20]
                for (let id in list_items){
                    let ids_selected = list_items[id]
                    console.log(ids_selected)
                    fetch(`https://swapi.co/api/${this.type}/${ids_selected}`, {
                            method: 'GET'
                        }).then(response => response.json()).then(json => this.items.push(json))
                }
            }
        },
        created() {
            this.fetchItems()
        }
    }
</script>