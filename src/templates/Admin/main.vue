<template>
  <div class="admin-page bg-lighter" :class="{'side-menu-mini': side_mini}">

    <div class="side-menu bg-dark">

      <div class="menu-header">
        <div class="logo mx-auto">
          <img class="d-inline-block" src="data:image/svg+xml;base64,PHN2ZyBpZD0ic3ZnMiIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIGhlaWdodD0iMjg1LjYiIHZpZXdCb3g9IjAgMCAyODUuNjE4NjUgMjg1LjYxNzM0IiB3aWR0aD0iMjg1LjYiIHZlcnNpb249IjEuMSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj48cGF0aCBpZD0icGF0aDMwIiBmaWxsPSIjNWNjOGM4IiBkPSJtMTQyLjYgMGwtNzEuMzggMTkuMjQtNTIuMTkgNTIuMzUtMTkuMDMgNzEuNDEgMTkuMjQgNzEuNCA1MS45NyA1MS44IDAuMzggMC40IDcxLjQxIDE5IDcxLjQtMTkuMiA1MS44LTUyIDAuNC0wLjQgMTktNzEuNC0xOS4yLTcxLjM4LTUyLjQtNTIuMTktNzEuNC0xOS4wM3ptMiA2LjE1OGw1NC42IDMxLjI5LTU0LjUgMjEuMzctMC4xLTUyLjY2em0tNCAwLjAwNGwwLjEgNTIuNjYtNTQuMzMtMjEuMzMgNTQuMjMtMzEuMzN6bTE0LjIgMS4yMjNsNTUuNiAxNC44LTcuNCAxMi44OC00OC4yLTI3LjY4em0tMjQuNCAwLjAzNWwtNDcuODggMjcuNjgtNy4zMi0xMi43OSA1NS4yLTE0Ljg5em0tNTguNjMgMTYuOTRsNy4yOCAxMi43NC00Ny4xMyAyNy4yMiAzOS44NS0zOS45NnptMTQxLjkgMC4wMmwzOS43IDM5LjU4LTQ2LjktMjYuOTEgNy4yLTEyLjY3em0tMTEuNSAxNi4ybDguMiA1Ny44Mi02My4xLTM2LjMxIDU0LjktMjEuNTF6bS0xMTguOCAwLjA0bDU0LjcgMjEuNDgtNjIuOTkgMzYuNDkgOC4yOS01Ny45N3ptMTIyLjkgMC45NGw1My45IDMwLjkxLTQ1LjcgMjYuNDktOC4yLTU3LjR6bS0xMjcuMSAwLjA2bC04LjIzIDU3LjU2LTQ1Ljc5LTI2LjM1IDU0LjAyLTMxLjIxem02NS40OCAyMy41OWw2NC4yIDM2Ljk5LTY0LjEgMzcuMS0wLjEtNzQuMDl6bS00IDAuMDFsMC4xIDc0LjA4LTY0LjI1LTM2LjkgNjQuMTUtMzcuMTh6bTEyMS41IDEwLjcxbDAuMSA2Mi40Ny00NS44LTM2IDQ1LjctMjYuNDd6bS0yMzkgMC4zNmw0NS44IDI2LjMxLTQ1LjcyIDM2LjItMC4wOC02Mi41MXptMjQzIDkuODFsMTQuNyA1NC41aC0xNC42bC0wLjEtNTQuNXptLTI0NyAwLjM2bDAuMDYgNTQuNDQtMTQuNTkgMC4xIDE0LjUzLTU0LjU0em0xOTEuOCAxOS4xNGwwLjEgNzQuMi02NC4zLTM3IDY0LjItMzcuMnptLTEzNi40IDAuMmw2NC4yNCAzNy02NC4xNCAzNy4yLTAuMS03NC4yem0xNDAuNCAwLjVsNDYgMzYuMy00NS45IDM2LjUtMC4xLTcyLjh6bS0xNDQuNCAwLjJsMC4xIDcyLjgtNDYuMTYtMzYuNCA0Ni4wNi0zNi40em0xOTUuNyAzOC4xaDE0LjZsLTE0LjYgNTV2LTU1em0tMjQ3IDAuM2wwLjA3IDU0LjUtMTQuNjctNTQuNCAxNC42LTAuMXptMTI1LjUgMS40bDY0LjMgMzYuOS02NC4yIDM3LjItMC4xLTc0LjF6bS00IDBsMC4xIDc0LjEtNjQuMjMtMzcgNjQuMTMtMzcuMXptMTIxLjUgMC40djYyLjZsLTQ1LjctMjYuMyA0NS43LTM2LjN6bS0yMzkgMC40bDQ1Ljg0IDM2LjEtNDUuNzYgMjYuNS0wLjA4LTYyLjZ6bTE5MS4zIDM5LjNsNDUuNyAyNi4zLTU0LjIgMzEuNiA4LjUtNTcuOXptLTE0My41IDAuMmw4Ljc1IDU4LTU0LjUyLTMxLjQgNDUuNzctMjYuNnptMTM5LjQgMC40bC04LjYgNTguMy01NC40LTIxLjggNjMtMzYuNXptLTEzNS4yIDAuMmw2My4xMyAzNi40LTU0LjMxIDIyLTguODItNTguNHptMTc4LjYgMzMuOWwtNDAuMSA0MC4zLTcuNi0xMi42IDQ3LjctMjcuN3ptLTIyMS42IDAuN2w0Ny40NiAyNy40LTcuMyAxMi42LTQwLjE2LTQwem0xMTIuNiA1bDU0IDIxLjctNTMuOSAzMS4zLTAuMS01M3ptLTQgMGwwLjEgNTMtNTMuOTEtMzEuMSA1My44MS0yMS45em02MS45IDI0bDcuNSAxMi41LTU0LjEgMTQuNiA0Ni42LTI3LjF6bS0xMTkuNiAwLjRsNDYuNDUgMjYuNy01My42NC0xNC4zIDcuMTktMTIuNHoiLz48L3N2Zz4K" alt="">
          <span><b>AR</b>round</span>
        </div>
      </div>

      <nav class="nav py-3 flex-column">
        <a href="#" class="nav-link text-muted"><i class="i-home"></i> <span>Dashboard</span></a>
        <a href="#" class="nav-link text-muted active"><i class="i-users"></i> <span>Users</span></a>
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

    <header class="bg-dark text-lighter bg-image overlay-90 overlay-dark" style="background-image: url('https://images.pexels.com/photos/1902647/pexels-photo-1902647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');">
      <div class="container py-5 sm-down:text-center">
        <h1 class="mb-0">Dashboard</h1>
        <p class="mb-0">Welcome Administrator</p>
      </div>
    </header>

    <section class="py-5">
      <div class="container">

        <div class="row mb-4">

          <div class="sm-down:col-12 md:col-6 lg-up:col-3 mb-3">
            <div class="card small-card">
              <div class="card-body py-0">
                <div class="row text-center">

                  <div class="col xs:col-12 lg:col-12 py-4 bg-muted text-lighter content-center">
                    <i class="i-users icon"></i>
                  </div>

                  <div class="col xs:col-12 lg:col-12 py-4 py-4">
                    <p class="font-bold mb-1 count">123</p>
                    <span class="text-muted">users</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="sm-down:col-12 md:col-6 lg-up:col-3 mb-3">
            <div class="card small-card">
              <div class="card-body py-0">
                <div class="row text-center">

                  <div class="col xs:col-12 lg:col-12 py-4 bg-muted text-lighter content-center">
                    <i class="i-layers icon"></i>
                  </div>

                  <div class="col xs:col-12 lg:col-12 py-4 py-4">
                    <p class="font-bold mb-1 count">123</p>
                    <span class="text-muted">rounds</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="sm-down:col-12 md:col-6 lg-up:col-3 mb-3">
            <div class="card small-card">
              <div class="card-body py-0">
                <div class="row text-center">

                  <div class="col xs:col-12 lg:col-12 py-4 bg-muted text-lighter content-center">
                    <i class="i-package icon"></i>
                  </div>

                  <div class="col xs:col-12 lg:col-12 py-4 py-4">
                    <p class="font-bold mb-1 count">123</p>
                    <span class="text-muted">models</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="sm-down:col-12 md:col-6 lg-up:col-3 mb-3">
            <div class="card small-card">
              <div class="card-body py-0">
                <div class="row text-center">

                  <div class="col xs:col-12 lg:col-12 py-4 bg-muted text-lighter content-center">
                    <i class="i-folder icon"></i>
                  </div>

                  <div class="col xs:col-12 lg:col-12 py-4">
                    <p class="font-bold mb-1 count">123</p>
                    <span class="text-muted">Groups</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">

          <div class="xs:col-12 sm:col-6 md:col-4 lg-up:col-3 mb-5" v-for="item in 4">
            <span class="btn d-block text-left block-hover">
              <i class="i-folder-solid float-left opacity-50"></i>
              <span>Folder name</span>
            </span>
          </div>
        </div>

        <div class="row">

          <div class="xs:col-12 sm:col-6 md:col-4 lg-up:col-3 mb-5" v-for="item in 4">
            <div class="card rounded">

              <div class="card-header">

                <nav class="nav ml-auto events-disable">
                  <span class="btn bg-white p-0"><i class="i-eye"></i></span>
                  <span class="btn bg-white p-0"><i class="i-close"></i></span>
                </nav>
              </div>

              <div class="card-media">
                <div class="r-1x1">
                  <div class="content-center p-absolute w-fill h-fill">
                    <span class="media-icon btn bg-light p-0 cursor-default"><i class="i-folder"></i></span>
                  </div>
                </div>
              </div>

              <div class="card-body text-center">
                <span class="bg-lighter d-block mx-auto mb-2 py-2" style="width: 100px"></span>
                <span class="bg-lighter d-block mx-auto mb-3 py-2" style="width: 120px"></span>
              </div>
            </div>
          </div>
        </div>

        <div class="row">

          <div class="xs:col-12 sm:col-6 md:col-4 lg-up:col-3 mb-5" v-for="i in 12">
            <div class="card rounded block-hover">

              <div class="card-header">
                <nav class="nav">
                  <span class="btn bg-white p-0" @click="setTarget(i)"><i :class="isTarget(i) ? 'i-circle-solid text-light' : 'i-circle'"></i></span>
                </nav>

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
  export default {
    name: 'AdminPage',
    data () {
      return {
        side_mini: false,
        targets: [],
        overlay_show: false
      }
    },
    methods: {

      setTarget(index) {
        this.targets.push(index);
      },

      isTarget(index) {
        return this.targets.includes(index);
      },
    }
  }
</script>
