<template>
    <div id="app" class="container mt-5">
        <h1>{{welcome}}</h1>
        <h4>
            <router-link class="link" to="/data/people">{{titlePeople}}</router-link> |
            <router-link class="link" to="/data/planets">{{titlePlanet}}</router-link> | 
            <router-link class="link" to="/data/vehicles" >{{titleVehicle}}</router-link>
        </h4>        
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: 'app',
        data(){
            return{
                welcome: 'Hello everyone!',
                titlePeople: 'Meet the characters',
                titlePlanet: 'Explore the planets',
                titleVehicle: 'Look the vehicles'
            }
        }        
    }
</script>