<template>
  <v-row>
    <v-col>
      <a :href="post.link" ><h2>{{ post.title }}</h2></a>
      <p>{{ post.description }}</p>
      <span><a :href="post.blog.url">{{ post.blog.title }}</a> | {{ post.published | formatDate }}</span>
      <CategoryList :categories="post.categories" />
    </v-col>
  </v-row>
</template>

<script>
import CategoryList from './CategoryList'
export default {
  components: { CategoryList },
  props: {
    post: {
      type: Object
    }
  },
}
</script>

<style scoped>

</style>
