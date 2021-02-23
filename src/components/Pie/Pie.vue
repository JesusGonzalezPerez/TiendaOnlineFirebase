<template>
  <nav class="navbar navbar-expand-sm navbar-light">
    
    <h4>@CopyRigth: Jesús González Pérez</h4>

    <div class="d-flex justify-content-end" id="collapsibleNavId">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a target="_blank" class="nav-link" href="https://github.com/JesusGonzalezPerez"><i class="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
        </li>
        <li class="nav-item active">
          <a target="_blank" class="nav-link" href="https://www.instagram.com/jesugonza3/?hl=hr"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
        </li>
        <li class="nav-item active">
          <a target="_blank" class="nav-link" href="https://www.linkedin.com/in/jesús-gonzález-pérez-324a29205/"><i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Pie',
  data () {
    return {}
  }
}
</script>

<style scoped>
  .navbar{
    position: relative;
    bottom:0;
    display: flex;
    justify-content: space-between;
    width: 100vw;
    z-index: 99;
    background-color: rgb(0, 108, 186);
    border-top:black 0.1rem solid;
    padding:0.5rem;
  }
  .navbar-brand img{
    width: 7rem;
  }
  ul{
    flex-direction: row;
  }
  ul li{
    margin-right: 1rem;
  }
  h4{
    font-size: 1rem;
    color:white;
  }
  @media screen and (max-width: 578px){
    #collapsibleNavId{
      width: 100%;
      justify-content: space-around;
    }
  }
</style>
