<template>
    <div id="app" class="container mt-5">
        <h1>{{welcome}}</h1>
        <h4>
            <router-link class="link" to="/data/people">Meet the characters</router-link> |
            <router-link class="link" to="/data/planet">Explore the planets</router-link>
        </h4>        
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