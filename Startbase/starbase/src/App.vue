<template>
    <div id="app">
        <div class="container mt-5">
            <h2>{{title}}</h2>    
            <p>{{description}}</p>    
        </div>
    </div>
</template>

<script>
    export default{
        name: 'app',
        data(){
            return {
                title: 'Welcome to Starbase!',
                description: 'Here you can find all information about your favorite star wars characters.'
            }
        }
    }
</script>