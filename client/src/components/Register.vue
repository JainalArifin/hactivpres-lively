<template lang="html">
  <div class="container">
    <form class="" @submit.prevent="register(formUser)">
      <div class="form-group">
        <label for="exampleInputEmail1">username</label>
        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="username" required="" v-model="formUser.username">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">password</label>
        <input type="password" class="form-control" id="exampleInputEmail1" placeholder="password" required="" v-model="formUser.password">
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary"> register</button>
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
    register (data) {
      axios.post(`http://localhost:3000/users/register`, data)
      .then(({ data }) => {
        this.formUser = {}
        this.$router.push('/login')
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
