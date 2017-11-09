<template lang="html">
  <p href="#">
    <router-link :to="{ name: 'articleSumery', params: {id: sidebarArticle._id } }">
      <ul>
        <li>{{ sidebarArticle.title }}</li>
      </ul>
    </router-link>
  </p>
</template>

<script>
export default {
  props: ['sidebarArticle']
}
</script>

<style lang="css">
</style>
