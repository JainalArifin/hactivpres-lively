<template lang="html">
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Blog Canggih</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><a href="#" @click="blog">Blog</a></li>
            <li><a href="#" @click="register">Register</a></li>
            <li><a href="#" @click="login">login</a></li>
            <li><a href="#" @click="logOut">logOut</a></li>
            <li><a href="#" @click="admin">admin</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    register () {
      this.$router.push('/register')
    },
    blog () {
      this.$router.push('/blog')
    },
    login () {
      this.$router.push('/login')
    },
    admin () {
      this.$router.push('/admin')
    },
    logOut () {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="css">
</style>
