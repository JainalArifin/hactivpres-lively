<template lang="html">
  <div class="container">
    <form @submit.prevent="addArticle(formArticle)">
      <div class="form-group">
        <label for="exampleInputEmail1">title</label>
        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="title" required="" v-model="formArticle.title">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">content</label>
        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="content" required="" v-model="formArticle.content">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">category</label>
        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="category" required="" v-model="formArticle.category">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">imgUrl</label>
        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="imgUrl" required="" v-model="formArticle.imgUrl">
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary"> add</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      formArticle: {
        title: '',
        content: '',
        category: '',
        imgUrl: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'addArticle'
    ])
  }
}
</script>

<style lang="css">
</style>
