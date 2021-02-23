<template>
  <div class="root">
    <Cabecera/>
    <TablaRoot :root="arrayProductos"/>
    <Pie/>
   
  </div>
</template>

<script>
import Cabecera from '../Cabecera/Cabecera'
import TablaRoot from '../TablaRoot/TablaRoot'
import Pie from '../Pie/Pie'
import { db } from "../../db";


export default {
  name: 'Root',
  components:{
    Cabecera,
    TablaRoot,
    Pie
  },
  data () {
    return {
      arrayProductos:[]
    }
  },
  firestore:{
    arrayProductos: db.collection("arrayProductos")
  },
  methods:{

  }
}
</script>

<style scoped>
  .root{
    position: absolute;
  }
  #admin{
    min-height: 93vh;
  }
</style>
