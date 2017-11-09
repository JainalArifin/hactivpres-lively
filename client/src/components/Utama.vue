<template lang="html">
  <div class="container">
    <div class="jumbotron">
      <h1>Hello, world!</h1>
      <p>...</p>
      <p><a class="btn btn-primary btn-lg" href="#" role="button" @click="blog"> Masuk ke blog</a></p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    blog () {
      this.$router.push('/blog')
    }
  }
}
</script>

<style lang="css">
</style>
