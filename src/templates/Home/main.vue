<template>
  <div class="home-page">

    <section class="bg-dark h-screen content-center text-lighter mb-5">
      <div class="container">
        <h1 class="mb-0">Cute Framework</h1>
        <p>Responsive based css framework</p>
      </div>
    </section>

    <section class="mb-5">
      <div class="container">
        <div class="row">
          <div class="col md-up:col-6 sm-down:mb-4">
            <div class="d-block bg-lighter px-3 py-1">1</div>
          </div>
          <div class="xs:col-12 col sm-down:mb-4">
            <div class="d-block bg-lighter px-3 py-1">2</div>
          </div>
          <div class="xs:col-12 col">
            <div class="d-block bg-lighter px-3 py-1">3</div>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-5">
      <div class="container">
        <div class="row">
          <div class="col lg-up:col-6 sm-down:mb-4">
            <div class="d-block bg-lighter px-3 py-1">1</div>
          </div>
          <div class="col md:col-6 sm-down:mb-4">
            <div class="d-block bg-lighter px-3 py-1">2</div>
          </div>
          <div class="col md:col-6">
            <div class="d-block bg-lighter px-3 py-1">3</div>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-5">
      <div class="container">
        <p class="d-none md:d-block">Display only in md</p>
        <p class="d-none md-up:d-block">Display on md and higher</p>
        <p class="d-none md-down:d-block">Display on md and lower</p>
      </div>
    </section>

    <br/>

    <div class="bg-lighter py-3 md:py-4 lg-up:py-5 mb-5">
      <div class="container">
        <p class="md:text-center lg-up:text-right mb-0">Dynamic text align</p>
      </div>
    </div>

    <section class="mb-5">
      <div class="container">
        <h1>Title h1</h1>
        <h2>Title h2</h2>
        <h3>Title h3</h3>
        <h4>Title h4</h4>
        <h5>Title h5</h5>
        <h6>Title h6</h6>
        <p>The following snippet of text is <b>rendered as bold text</b>.</p>
        <p>The following snippet of text is <em>rendered as italicized text</em>.</p>
        <p>You can use the mark tag to <mark>highlight</mark> text.</p>
        <p>This line of text is meant to be <del>treated as deleted text</del>.</p>
        <p>
          <span class="text-primary">Simple</span>
          <span class="text-info">line</span>
          <span class="text-success">of</span>
          <span class="text-warning">rainbow</span>
          <span class="text-danger">text.</span>
        </p>
        <p><small>Here is line of small text</small></p>
        <p>
          <a href="#" class="text-primary">Simple link</a>
          <a href="#" class="text-info">Info link</a>
          <a href="#" class="text-success">Success link</a>
          <a href="#" class="text-warning">Warning link</a>
          <a href="#" class="text-danger">Danger link</a>
        </p>
        <p>
          <span class="btn bg-light btn-lg">Button lg</span>
          <span class="btn bg-light">Button</span>
          <span class="btn bg-light btn-sm">Button sm</span>
          <span class="btn bg-light btn-xs">Button xs</span>
        </p>
        <p>
          <span class="btn bg-light btn-rounded btn-lg">Rounded button lg</span>
          <span class="btn bg-light btn-rounded">Rounded button</span>
          <span class="btn bg-light btn-rounded btn-sm">Rounded button sm</span>
          <span class="btn bg-light btn-rounded btn-xs">Rounded button xs</span>
        </p>
        <p>
          <span class="btn text-primary">Button</span>
          <span class="btn text-info">Button</span>
          <span class="btn text-success">Button</span>
          <span class="btn text-warning">Button</span>
          <span class="btn text-danger">Button</span>
          <span class="btn text-light">Button</span>
          <span class="btn text-dark">Button</span>
        </p>
        <p>
          <span class="btn bg-primary">Button</span>
          <span class="btn bg-info">Button</span>
          <span class="btn bg-success">Button</span>
          <span class="btn bg-warning">Button</span>
          <span class="btn bg-danger">Button</span>
          <span class="btn bg-light">Button</span>
          <span class="btn bg-dark">Button</span>
        </p>
        <p>
          <span class="btn btn-xs bg-primary">Button</span>
          <span class="btn btn-xs bg-info">Button</span>
          <span class="btn btn-xs bg-success">Button</span>
          <span class="btn btn-xs bg-warning">Button</span>
          <span class="btn btn-xs bg-danger">Button</span>
          <span class="btn btn-xs bg-light">Button</span>
          <span class="btn btn-xs bg-dark">Button</span>
        </p>
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
        mini: false
      }
    },
    components: {
      MainNavbar,
      MainFooter,
      HomeHero
    }
  }
</script>
