<template>
    <div class="login">
        page login

        <h1>Connexion</h1>
        <form @submit.prevent="Login">
            <div class="formGroup">
                <label for="user_email">Email</label>
                <input type="text" id="user_email" />
            </div>
            <div class="formGroup">
                <label for="user_password">Mot de passe</label>
                <input type="text" id="user_password" />
            </div>
            <div class="formGroup">
                <button type="submit" class="button">Connexion</button>
            </div>
        </form>
    </div>


</template>

<script>

export default {
    name: 'Login',
    methode:{
        login(){
            console.log("stop form")
        }
    }

}
</script>
    
<style>
      form{
        max-width: 300px;
        margin: 0 auto;
    }
    .formGroup{
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
    }
</style>