<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="list-group">
          <h3 href="#" class="list-group-item  list-group-item-action active">
            Cras justo odio
          </h3>
          <Sidebar v-for="article in articles" :sidebarArticle="article" :key="article._id"></Sidebar>
        </div>
      </div>
      <div class="col-md-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Sidebar from '@/components/Sidebar'
export default {
  components: {
    Sidebar
  },
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
