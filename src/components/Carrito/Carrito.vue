<template>
  <div class="carrito">
    <Cabecera/>
    <TablaCarrito :carrito="arrayCarritos"/>
    <Pie/>
  </div>
</template>

<script>

import Cabecera from '../Cabecera/Cabecera'
import TablaCarrito from '../TablaCarrito/TablaCarrito'
import Pie from '../Pie/Pie'
import firebase from 'firebase/app'
import { db } from "../../db";
import Firebase from "../../db";

export default {
  name: 'Carrito',
  components:{
    Cabecera,
    TablaCarrito,
    Pie
  },
  data () {
    return {
       user: {
        email:'',
        data: {},
      },
      arrayCarritos:[]
    }
  },
  //Si existe un usuario activo, lo guarda en la variable user y si no cambia el valor de esta a null
  created (){
    firebase.auth().onAuthStateChanged(user =>{
      if(user){
       this.user = user;
      }else{
       this.user = null;
      }
    })
  },
  firestore: {
    carrito: db.collection("arrayCarritos").where("email", "==", Firebase.auth.currentUser ? Firebase.auth.currentUser.email:""),
  },
  mounted: function () {
    //Obtiene la colección del carrito del usuario que está actualmente conectado, si no hay ninguno, te pide que inicies sesión y te lleva al Inicio
    if(Firebase.auth.currentUser){
        this.user.data = Firebase.auth.currentUser;
        this.$bind('arrayCarritos', db.collection("arrayCarritos").where("email", "==", Firebase.auth.currentUser.email));
      }else{
        this.$notify({title: 'Inicio de Sesión', type: 'error', text: 'Tienes que iniciar sesión para acceder al carrito.'})
        this.$router.push({name:'Inicio'});
        this.$bind('arrayCarritos', db.collection("arrayCarritos").where("email", "==", ""));
      }
  },
}
</script>

<style scoped>
  .carrito{
    min-height: 100vh;
    position: relative;
  }
</style>
