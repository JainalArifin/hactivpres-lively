<template lang="html">
  <div class="row">
    <div class="col-sm-6 col-md-4">
      <div class="thumbnail">
        <img :src="dataArticle.imgUrl" alt="gambar">
        <div class="caption">
          <div v-for="user in dataArticle.author">
            <b><p>Author : {{ user.username }}</p></b>
          </div>
          <h3>{{ dataArticle.title }}</h3>
          <p>{{ dataArticle.content }}</p>
          <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['id'],
  data () {
    return {
      dataArticle: {}
    }
  },
  methods: {
    getById () {
      console.log('ini id yang di dapat', this.id)
      axios.get(`http://localhost:3000/article/${this.id}`)
      .then(({ data }) => {
        this.dataArticle = data
      })
      .catch((err) => {
        console.error(err)
      })
    }
  },
  created () {
    this.getById()
  }
}
</script>

<style lang="css">
</style>
