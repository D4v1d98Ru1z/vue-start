<template>
    <div id="app">
        {{welcome}}
        <router-view></router-view>
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