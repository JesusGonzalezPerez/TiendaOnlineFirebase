<template>
  <div id="app">
    <!-- <div v-if="isloading"> -->
      <!-- <Loader/> -->
    <!-- </div> -->
    <!-- <div v-else> -->
      <Cabecera/>
      <Jumbotron/>
      <Novedades :novedades="arrayNovedades"/>
      <Productos :productos="arrayProductos"/>
      <Pie/>
    <!-- </div> -->
  </div> 
</template>

<script>

import Cabecera from '../Cabecera/Cabecera'
import Jumbotron from '../Jumbotron/Jumbotron'
import Novedades from '../Novedades/Novedades'
import Productos from '../Productos/Productos'
import Pie from '../Pie/Pie'
// import Loader from '../Loader/Loader'
import { db } from "../../db";



export default {
  name: "Inicio",
  components:{
    Cabecera,
    Jumbotron,
    Novedades,
    Productos,
    Pie,
    // Loader
  },
  data() {
    return {
      arrayProductos: [],
      arrayNovedades: [],

    };
  },
  firestore: {
    arrayProductos: db.collection("arrayProductos"),
    arrayNovedades: db.collection("arrayNovedades")
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
