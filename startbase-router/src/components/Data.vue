<template>
    <div class="row d-flex">
        <div class="container">
            <div class="input-group mb-3">
                <input type="number" class="form-control" id="in" :placeholder="'Enter the number of your favorite '+ this.type" aria-label="Recipient's username" aria-describedby="button-addon2">
                <div class="input-group-append">
                    
                </div>
            </div>
            <div class="input-group mb-3">
                <input type="number" class="form-control" id="in1" :placeholder="'Enter the number of your favorite '+ this.type" aria-label="Recipient's username" aria-describedby="button-addon2">
                <div class="input-group-append">
                    
                </div>
            </div>
            <div class="input-group mb-3">
                <input type="number" class="form-control" id="in2" :placeholder="'Enter the number of your favorite '+ this.type" aria-label="Recipient's username" aria-describedby="button-addon2">
                <div class="input-group-append">
                    
                </div>
            </div>
            <button @click="fetchItems" class="btn btn-outline-secondary mb-3" type="button" id="button-addon2">Save</button>
        </div>
        <Item v-for="(item, index) in items" key="index" :passed-item="item" :type="type" />
    </div>  
</template>
<script>
    import Item from './Item.vue'
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
                let list_items = []
                list_items[0] = document.getElementById("in").value
                list_items[1] = document.getElementById("in1").value
                list_items[2] = document.getElementById("in2").value
                for (let id in list_items){
                    let ids_selected = list_items[id]
                    console.log(ids_selected, this.type)
                    fetch(`https://swapi.co/api/${this.type}/${ids_selected}`, {
                            method: 'GET'
                        }).then(response => response.json()).then(json => this.items.push(json))
                }
            }
        },
        components:{
            Item
        }
    }
</script>