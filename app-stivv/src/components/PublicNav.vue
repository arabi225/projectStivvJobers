<template>
    <div class="publicNav">
        <img alt="Vue logo" src="../assets/log2.png">
        <nav>
            <router-link to="/">Offre</router-link> |
            <router-link to="Connexion">Connexion</router-link> |
            <router-link to="admin/MyRepertoire">My repertoire</router-link> |
            <router-link to="Apropos">A propos</router-link>
        </nav>
        
    </div>


</template>

<script>
export default {
    name: 'PublicNav'
}
</script>
<style>
    .publicNav img{
        position: absolute;
        left: 30px;
        height: 200px;
    }
</style>

