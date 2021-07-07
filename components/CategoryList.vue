<template>
  <v-chip-group column>
    <v-chip v-for="category in categories" :key="category.id" :link="'/topics/'+category.id" >{{ category.title }} </v-chip>
  </v-chip-group>
</template>

<script>
export default {
  name: 'CategoryList',
  props: {
    categories: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
