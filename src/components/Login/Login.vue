<template>
  <div class="login">
      <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email" placeholder="Email aqui.." v-model="email">
          </div>
      </div>
      <br>
      <div class="field">
          <label class="label">Contraseña</label>
          <div class="control">
            <input class="input" type="password" placeholder="Contraseña aqui.." v-model="contraseña">
          </div>
      </div>
      <br>
      <div class="field" id="menu">
        <button class="btn btn-secondary" @click="iniciaSesion">Iniciar sesión </button>
        <router-link  to="/Registrar"><button class="btn btn-secondary"> Regístrarse</button></router-link>
      </div>
      <div>
        <button id="fbButton" class="btn btn-dark" @click="iniciaSesionFB"><i class="fa fa-facebook-square" aria-hidden="true"></i> Facebook</button>
        <button id="gButton" class="btn btn-dark" @click="iniciaSesionG"><i class="fa fa-google-plus-square" aria-hidden="true"></i> Google</button>
        <button id="gitButton" class="btn btn-dark" @click="iniciaSesionGit"><i class="fa fa-github-square" aria-hidden="true"></i> GitHub</button>
      </div>
  </div> 
</template>



<script>
import firebase from "firebase/app";


export default {
  name: "Login",
  data() {
    return {
      email: "",
      contraseña: "",
      logueado: false,
    };
  },
  methods: {
    //Inicia sesión con un correo previamente registrado, en caso de no existir el usuario o equivocarte al introducir la contraseña, te saca un mensaje de error
    iniciaSesion: function () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.contraseña)
        .then(() => {
          this.$notify({title: 'Inicio de Sesión', text: 'Se ha iniciado sesión con email: '+this.email, type:'success'});
          this.$router.push({ name: "Inicio" });  
          this.logueado=true; 
        })
        .catch(() => {
          this.$notify({title: 'Inicio de Sesión', text: 'Email o contraseña incorrectos.', type:'warn'})
        });
    },
    //Inicia sesión con una cuenta de Facebook
    iniciaSesionFB: function(){
      const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(() =>{
          this.$notify({title: 'Inicio de Sesión',text: 'Se ha iniciado sesión con Facebook.', type:'success'});
          this.$router.push({name:'Inicio'});
        })
        .catch(function(){
          this.$notify({text: 'No se ha podido iniciar sesión con Facebook.', type:'warn'})
        })
    },
    //Inicia sesión con una cuenta de Google
    iniciaSesionG: function(){
      const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(() =>{
          this.$notify({title: 'Inicio de Sesión',text: 'Se ha iniciado sesión con Google.', type:'success'});
          this.$router.push({name:'Inicio'});
        })
        .catch(function(){
          this.$notify({text: 'No se ha podido iniciar sesión con Google.', type:'warn'})
        })
    },
    //Inicia sesión con una cuenta de GitHub
    iniciaSesionGit: function(){
      const provider = new firebase.auth.GithubAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(() =>{
          this.$notify({title: 'Inicio de Sesión',text: 'Se ha iniciado sesión con GitHub.', type:'success'});
          this.$router.push({name:'Inicio'});
        })
        .catch(function(){
          this.$notify({text: 'No se ha podido iniciar sesión con GitHub.', type:'warn'})
        })
    },
  }
};

</script>

<style scope>
  .login{
    background-color: rgb(0, 108, 186);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: initial;
    color:white;
  }
  .btn{
    margin: 1rem;
  }
  .menu{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>
