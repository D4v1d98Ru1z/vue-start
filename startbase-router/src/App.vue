<template>
    <div id="app">
        {{welcome}}
    </div>
</template>
<script>
    export default {
        name: 'app',
        data(){
            return{
                welcome: 'Hello everyone!'
            }
        }        
    }
</script>