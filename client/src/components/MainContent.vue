<template lang="html">
  <div class="row">
    <div class="col-sm-12" v-for="article in articles">
      <div class="thumbnail">
        <img :src="article.imgUrl" alt="gambar" style="width:100%; height:400px;">
        <div class="caption">
          <div v-for=" user in article.author">
            <b><p>author: {{ user.username }}</p></b>
          </div>
          <h3>{{ article.title }}</h3>
          <p>{{ article.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState([
      'articles'
    ])
  },
  methods: {
    ...mapActions([
      'getArticle'
    ])
  },
  created () {
    this.getArticle()
  }
}
</script>

<style lang="css">
</style>
