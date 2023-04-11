<template>
    <div>        
        <h1>inscription</h1>
        <form >
       
           
     
            <div class="formGroup">
                <label for="user_name">Nom</label>
                <input type="text" id="user_name" />
            </div>
            <div class="formGroup">
                <label for="user_prenom">Prénom</label>
                <input type="text" id="user_prenom" />
            </div>
            <div class="formGroup">
                <label for="user_pseudo">Pseudo</label>
                <input type="text" id="user_pseudo" />
            </div>
            <div class="formGroup">
                <label for="user_email">Email</label>
                <input type="text" id="user_email" />
            </div>
            <div class="formGroup">
                <label for="user_password">Mot de passe</label>
                <input type="text" id="user_password" />
            </div>
            <div class="formGroup">
                <label for="user_password">Confirme Mot de passe</label>
                <input type="text" id="user_password" />
            </div>
            <div class="formGroup">
                <button type="submit" class="button">envoyer</button>
            </div>
        </form>
    </div>
</template>

<script>
//import { userService } from '@/_services'
export default {
    name: 'Inscription',
    
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