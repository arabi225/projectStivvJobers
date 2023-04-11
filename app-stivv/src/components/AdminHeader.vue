<template>
    <div class="adminHeader">
       page header
        <router-view/>
    </div>


</template>

<script>
export default { 
    name: 'AdminHeader',
    
}
</script>

<style>
    .adminHeader{
        border-bottom: solid 1px black;
    }
    button{
        float: right;
    }
</style>