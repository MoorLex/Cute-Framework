<template>
  <div class="admin-page bg-lighter" :class="{'side-menu-mini': side_mini}">

    <div class="side-menu bg-dark">

      <div class="menu-header"></div>

      <nav class="nav py-3 flex-column">
        <a href="#" class="nav-link text-muted"><i class="i-home"></i> <span>Dashboard</span></a>
        <a href="#" class="nav-link text-lighter"><i class="i-users"></i> <span>Users</span></a>
        <a href="#" class="nav-link text-muted"><i class="i-layers"></i> <span>Rounds</span></a>
        <a href="#" class="nav-link text-muted"><i class="i-folder"></i> <span>Groups</span></a>
        <a href="#" class="nav-link text-muted"><i class="i-package"></i> <span>Models</span></a>
      </nav>
    </div>

    <div class="overlay-menu" :class="{'show': overlay_show}">

      <div class="overlay-header d-flex p-3">
        <span class="btn bg-white p-0 ml-auto btn-sm" @click="overlay_show = false"><i class="i-close"></i></span>
      </div>

      <div class="card">

        <div class="card-media">
          <div class="r-1x1" style="background-image: url('https://images.pexels.com/photos/1902647/pexels-photo-1902647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');"></div>
        </div>

        <div class="card-body pb-0">
          <p class="h3 font-bold mb-0">Crocodile</p>
        </div>

        <nav class="nav flex-column">
          <span class="nav-text text-muted"><i class="i-user"></i> <span>Author</span></span>
          <span class="nav-text text-muted"><i class="i-cloud"></i> <span>12 Mb</span></span>
        </nav>

        <div class="card-body">
          <span class="btn d-block bg-light">Upload archive</span>
        </div>
      </div>

      <nav class="nav mt-3 flex-column mt-auto">
        <a href="#" class="nav-link text-muted"><i class="i-download"></i> <span>Download</span></a>
        <span class="nav-link text-muted"><i class="i-eye"></i> <span>Make visible</span></span>
        <span class="nav-link bg-danger"><i class="i-trash"></i> <span>Remove</span></span>
      </nav>
    </div>

    <div class="navbar py-3 sticky-top bg-white">
      <div class="container-fluid">

        <span class="btn bg-light p-0 mr-auto" @click="side_mini = !side_mini"><i class="i-menu-simple"></i></span>

        <div class="navbar-group md-down:d-none">

          <span class="btn bg-light p-0"><i class="i-bell"></i></span>
          <span class="btn bg-light p-0 ml-2"><i class="i-user"></i></span>
        </div>
      </div>
    </div>

    <header class="bg-dark text-lighter bg-image overlay-70" style="background-image: url('https://images.pexels.com/photos/1902647/pexels-photo-1902647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');">
      <div class="container py-5 sm-down:text-center">
        <h1 class="mb-0">Dashboard</h1>
        <p class="mb-0">Welcome Administrator</p>
      </div>
    </header>

    <section class="py-5">
      <div class="container">
        <div class="row">

          <div class="xs:col-12 sm:col-6 md:col-4 lg-up:col-3 mb-5" v-for="item in 12">
            <div class="card rounded">

              <div class="card-header">

                <nav class="nav ml-auto">
                  <span class="btn bg-white p-0"><i class="i-eye"></i></span>
                  <span class="btn bg-white p-0"><i class="i-close"></i></span>
                </nav>
              </div>

              <div class="card-media cursor-pointer" @click="overlay_show = true">
                <div class="r-1x1" style="background-image: url('https://images.pexels.com/photos/1902647/pexels-photo-1902647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');"></div>
              </div>

              <div class="card-body text-center">
                <p class="font-bold mb-0">Crocodile</p>
                <p class="small mb-0 text-muted">2 min | 384 kbps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import MainNavbar from '../_components/navbar'
  import MainFooter from '../_components/footer'

  import HomeHero from './sections/hero'

  export default {
    name: 'HomePage',
    data () {
      return {
        side_mini: false,
        overlay_show: false
      }
    },
    components: {
      MainNavbar,
      MainFooter,
      HomeHero
    }
  }
</script>
