<template lang="html">
  <div class="container">
    <form class="" @submit.prevent="login(formUser)">
      <div class="form-group">
        <label for="exampleInputEmail1">username</label>
        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="username" required="" v-model="formUser.username">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">password</label>
        <input type="password" class="form-control" id="exampleInputEmail1" placeholder="password" required="" v-model="formUser.password">
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary"> login</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      formUser: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login (data) {
      axios.post(`http://localhost:3000/users/login`, data)
      .then(({ data }) => {
        localStorage.setItem('token', data)
        this.formUser = {}
        this.$router.push('/admin')
      })
      .catch((err) => {
        console.error(err)
      })
    }
  }
}
</script>

<style lang="css">
</style>
