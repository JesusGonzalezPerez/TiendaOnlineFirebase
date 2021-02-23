<template>
  <nav class="navbar navbar-expand-sm navbar-light">
    <router-link to="/"><a class="navbar-brand"><img src="../../../img/logo.png"/></a></router-link>
    <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
     <router-link to="/"><a class="nav-link mr-1" id="correo" v-on:click="desconectar" v-if="user"><i class="fa fa-sign-out" aria-hidden="true"></i>Cerrar sesión: {{correo}}</a></router-link>  
    <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
        <li class="nav-item" id="login" v-if="!user">
          <router-link to="/Login"><a class="nav-link" id="inicio-sesion"><i class="fa fa-user" aria-hidden="true"></i> Iniciar sesión</a></router-link>
        </li>
        <li class="nav-item active" v-if="root">
          <router-link  to="/Root"><a class="nav-link" id="root"><i class="fa fa-lock" aria-hidden="true"></i> Root</a></router-link>
        </li>
        <li class="nav-item active" v-if="user">
          <router-link to="/Carrito"><a class="nav-link" id="carrito" v-if="!root"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Carrito</a></router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import firebase from "firebase/app";

export default {
  name: "Cabecera",
  data() {
    return {
      user: null,
      root: null
    };
  },
  //Si existe un usuario activo, lo guarda en la variable user y si no cambia el valor de esta a null, además comprueba si el email pertenece al administrador
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        if(user.email == "root@root.com"){
          this.root = user;
        }
      } else { 
        this.user = null;
        this.root = null;
      }
    });
  },
  methods: {
    //Cierra sesión y muestra mensaje
    desconectar: function () {
      firebase.auth().signOut();
      this.$notify({
        title: "Cierre de Sesión",
        text: "Se ha cerrado sesión de la cuenta: " + this.user.email
      });
    }
  },
  computed:{
    //Obtiene el correo del usuario que actualmente tiene iniciada sesión
    correo(){
      if(this.user.email)
        return this.user.email;
      else
        return null;
    }
  }
};
</script>

<style scoped>
.navbar {
  z-index: 99;
  position: fixed;
  width: 100vw;
  background-color: rgb(0, 108, 186);
  border-bottom: black 0.1rem solid;
}
.navbar-brand img {
  width: 7rem;
}
ul li{
  display: flex;
  align-items: center;
  justify-content: center;
}
button{
  display: inline-block;
}
#login {
  color: black;
}
#inicio-sesion {
  color: black;
}
#correo {
  margin-top: 0.55rem;
  margin-bottom: 0;
  font-size: 0.75rem;
  font-weight: bold;
  color:rgb(8, 8, 69);
}
#carrito {
  color: black;
}
#root{
   color: black;
}
a:hover {
  text-decoration: none;
  transform: scale(1.025);
}
  @media screen and (max-width: 578px){
      ul li:hover{
        background-color: black;
      }
      ul li:hover a{
        color:rgb(0, 108, 186);
      }
  }
</style>
