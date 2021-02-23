<template>
  <div class="productos">
    <h2>PRODUCTOS</h2>
    <br>
    <div class="productos2">
        <div class="articulos" v-for="el in productos" v-bind:key="el.id">
          <div class="divImg">
            <img :src="el.img">
            <h3>{{el.precio}}€</h3>
          </div>
          <div class="divInfo">
            <hr>
            <h5><strong>{{el.articulo}}</strong></h5>
            <h4>{{el.descripcion}}</h4>
            <p>En stock: {{el.stock}}</p>
          </div>
          <div class="divButton">
            <button v-if="user" type="button" class="btn btn-secondary mx-0" @click="addProduct(el.img, el.articulo, el.stock, el.precio)">Añadir al carrito</button>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import { db } from "../../db";

export default {
  name: 'Productos',
  props:{
    productos:{
      type: Array,
      default: function(){
        return [];
      }
    }
  },
  data () {
    return {
       user : null,
       root: null
    }
  },
  //Si existe un usuario activo, lo guarda en la variable user y si no cambia el valor de esta a null, si el usuario es root, cambio el valor de user a null y de root a user para
  //que no aparezcan los botones de añadir carrito, que solo deben de verse al estar logueado como usuario ordinario
  created (){
    firebase.auth().onAuthStateChanged(user =>{
      if(user){
       this.user = user;
       if(user.email == "root@root.com"){
         this.root = user;
         this.user=null;
       }
      }else{
       this.user = null;
      }
    })
  },
  methods:{
     //Añade al carrito el elemento seleccionado y notifica
     addProduct: function (img, articulo, stock, precio) {
      db.collection("arrayCarritos").add({
        img: img,
        articulo: articulo,
        stock: stock,
        precio: precio,
        cantidad: 1,
        email: this.user.email,
      });
      this.$notify({
        title: "Se ha añadido un nuevo artículo al carrito: "+articulo
      });
    },
  }
}
</script>

<style scoped>
.productos{
  background-color: rgb(224, 224, 224);
}
  .productos2{
    height:100%;
    display: flex;
    justify-content: space-around;
    align-content:space-around;
    flex-wrap: wrap;
  }
  .articulos{
    position: relative;
    width: 20rem;
    margin-bottom: 1.5rem;
    background-color: rgb(191, 191, 191);
    padding:1rem;
    border-radius: 0.5rem;
    border: 1px solid black;
  }
  .articulos h4{
    font-size: 0.6rem;
  }
  .articulos:hover{
    transform: scale(1.05);
  }
  .divImg{
    position: relative;
    display: inline-block;
  }
  .divImg h3{
    visibility: hidden;
    position: absolute;
    padding:0.5rem;
    top: 50%;
    left: 2.5%;
  }
  .articulos:hover{
    background-color: rgb(0, 108, 186);
    transition: all 0.5s;
  }
  .articulos:hover h5{
    color:white;
  }
  .articulos:hover h4{
    color:white;
  }
  .articulos:hover h3{
    visibility: visible;
    width:95%;
    color:rgb(255, 255, 255);
    background-color: rgb(0, 108, 186);
  }
  .articulos .divImg img{
    width: 95%;
    border-radius: 0.5rem;
  }
  .articulos p{
    color:rgb(169, 57, 57);
    font-size: 0.8rem;
  }
  .articulos:hover p{
    color:rgb(0, 0, 0);
  }
  .articulos:hover button{
    background-color: black;
    border:black;
  }
  .divInfo{
    margin-bottom: 3rem;
  }
  .divButton{
    position: absolute;
    bottom: 0;
    left: 28%;
  }
</style>
