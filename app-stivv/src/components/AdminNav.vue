<template>
    <div class="adminNav">
        <ul>
            <li><router-link to='/'>Accueil</router-link></li>
            <li>&nbsp;</li>
            <li><router-link to='/admin/MyRepertoire'>My repertoire</router-link></li>
            
            <li><router-link to='/admin/JobbersRep/EditCv'>cv edit </router-link></li>
            <li><router-link to='/admin/JobbersRep/ListOffreEmp'>offre list</router-link></li>
            <li>&nbsp;</li>
            <li><router-link to='/admin/EmployerRep/AddOffre'>add offre</router-link></li>
            <li><router-link to='/admin/EmployerRep/EditOffre'>edit offre add</router-link></li>
            <li><router-link to='/admin/EmployerRep/ListOffre'>list offre </router-link></li>
        </ul>
    </div>


</template>

<script>
export default { 
    name: 'AdminNav',
    
}
</script>
 
<style>
    .adminNav ul{
        list-style: none;
        padding-left:0px;
        margin-right:10px;
    }
    .adminNav ul li{
        text-align:left;
    }
</style>