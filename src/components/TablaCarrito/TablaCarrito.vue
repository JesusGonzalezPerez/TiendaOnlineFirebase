<template>
  <div>
    <div class="tabla-carrito">
       <table id="tabla">
          <tr>
            <td colspan="2">Artículo</td> 
            <td>Cantidad</td>
            <td>Total producto</td>
          </tr>
          <!-- Bucle que crea un tr por cada elemento del array y rellena los td con los datos  -->
          <tr v-for="(el,index) in carrito" v-bind:key="el.id" :id="index">
            <td><img :src="el.img"/></td>
            <td><strong>{{el.articulo}}</strong></td>
            <td><input id="cant" :v-model="el.cantidad" type="number" :value="el.cantidad" min="1" :max="el.stock" @click="funcion(el.id,$event.target.value)"> /{{el.stock}}</td>
            <td id="totalP">{{(el.precio*el.cantidad).toFixed(2)}}€</td>
            <td><button class="btn btn-danger" @click="deleteProduct(el.id)"><i class="fa fa-trash" aria-hidden="true"></i> Eliminar</button></td>
          </tr>
        </table>
    </div>
    <button @click="comprar()" class="btn btn-primary" ><i class="fa fa-shopping-bag" aria-hidden="true"></i> Realizar compra</button>
  </div>
</template>

<script>
import { db } from "../../db";
import firebase from 'firebase/app'

export default {
  name: 'TablaCarrito',
  props:{
    carrito:{
      type: Array,
      default: function(){
        return [];
      }
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
  firestore:{
    arrayProductos: db.collection("arrayProductos"),
    arrayNovedades: db.collection("arrayNovedades"),
    arrayCarritos: db.collection("arrayCarritos")
  },
  data () {
    return {
      user: null,
      arrayCarritos: [],
      arrayProductos:[],
      arrayNovedades:[]
    }
  },
  methods:{
      //Método para borrar productos del carrito
      deleteProduct: function (id) {
        db.collection("arrayCarritos").doc(id).delete();
      },
      //Función que recibe el un id, y el elemento objetivo, para hacer un update de la cantidad de productos introducidas al carrito en tiempo real, de cada elemento del carrito
      funcion: function(id,target){
        var cant=parseInt(target);
        db.collection("arrayCarritos").doc(id).update({cantidad:cant});
      },
      //Borra el carrito, notifica y te lleva al inicio
      comprar: function(){
        for(var i=0;i<this.arrayCarritos.length;i++)
          db.collection("arrayCarritos").doc(this.arrayCarritos[i].id).delete();
        this.$notify({
          title: "Compra realizada con éxito",
          type: "success"
        });
        this.$router.push({ name: "Inicio" });
      }
  },
  computed:{
    //Obtiene el valor total del carrito

  }
}
</script>

<style scoped>
  .tabla-carrito{
    min-height: 81vh;
    padding-top:7rem;
    display: flex;
    justify-content: center;

  }
  table{
    width:70%;
  }
  tr:nth-child(odd) {
    background: rgb(226, 226, 226)
  }
  tr:nth-child(even) {
    background: #FFF
  }
  tr:nth-child(1){
    font-size: 1.3rem;
    color:black;
  }
  td{
    padding:1rem;
  }
  td:nth-child(1){
    padding: 0;
    width: 5rem;
  }
  td img{
    width:5rem;
  }
  td:nth-child(1){
    border: 1px solid;
  }
  td:nth-child(2){
    border: 1px solid;
  }
  td:nth-child(3){
    border: 1px solid;
  }
  td:nth-child(4){
    border: 1px solid;
    padding:0
  }
  td:nth-child(5){
    padding: 0;
    border: 0;
    background-color: white;
  }
  .btn-primary{
    background-color: rgb(0, 0, 0);
    border-color: black;
    color:white;
  }
  @media screen and (max-width: 578px){
    .tabla-carrito{
      width: 100vw;
    }
    table{
      font-size: 30%;
      box-sizing: content-box;
    }
    tr:nth-child(1){
      font-size:0.6rem;
    }
    td:nth-child(5) .btn{
      padding:0.25rem;
      font-size: 0.5rem;
    }
  }
</style>
