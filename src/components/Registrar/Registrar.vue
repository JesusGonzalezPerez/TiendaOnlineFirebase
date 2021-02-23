<template>
  <div class="registrar">
      <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email" placeholder="Email aqui.." v-model="email">
          </div>
      </div>
      <div class="field">
          <label class="label">Contraseña (Min:6 caracts)</label>
          <div class="control">
            <input class="input" id="pass1" type="password" placeholder="Contraseña aqui..">
          </div>
      </div>
       <div class="field">
          <label class="label">Repetir contraseña</label>
          <div class="control">
            <input class="input" v-on:keyup="comprobarContraseñas()" id="pass2" type="password" placeholder="Contraseña aqui.." v-model="contraseña">
          </div>
      </div>
      <br>
      <div class="field">
        <button class="btn btn-secondary" id="registrar" @click="registrar">Registrar</button>
      </div>
  </div> 
</template>

<script>
import firebase from "firebase/app";

export default {
  name: "Registrar",
  data() {
    return {
      email: "",
      contraseña: "",
    };
  },
  methods: {
    //Registra un email con su contraseña, si no estaba registrado de antes notificará del correcto proceso y te llevara al Login, para que inicies sesión, si el email 
    //estaba ya registrado o dejas campos sin rellenar te notifica con error
    registrar: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email,this.contraseña)
      .then(() =>{
        this.$notify({text: '¡Usuario registrado!',type:'success'})
        this.$router.push({ name: "Login" });
      })
      .catch(() => {
          this.$notify({text: 'Faltan campos por rellenar o usuario ya registrado.', type:'warn'})
        });
    },
    //Comprueba que los dos campos de contraseñas son iguales, siendo así aparecera el botón para registrarse
    comprobarContraseñas: function(){
      if(document.getElementById('pass1').value == document.getElementById('pass2').value){
        document.getElementById('registrar').style.display = "inline-block";
      }else{
        document.getElementById('registrar').style.display = "none";
      }
    }
  }
};
</script>

<style scoped>
  .registrar{
    background-color: rgb(0, 108, 186);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: initial;
    color:white;
  }
  .field{
    margin-bottom: 0.5rem;
  }
  .btn{
    display: none;
  }
</style>
