<template lang="html">
  <p class="list-group-item  list-group-item-action active">
    <router-link :to="{ name: 'articleSumery', params: {id:sidebarArticle._id } }">
      {{ sidebarArticle.title }}
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
