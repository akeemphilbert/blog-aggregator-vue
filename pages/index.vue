<template>
  <v-row>
    <v-col cols="8" sm="12" md="8">
      <Post :post="post" v-for="post in posts" :key="post.id"/>
    </v-col>
    <v-col cols="4" sm="12" md="4">
      <v-subheader>Recommended Topics</v-subheader>
      <CategoryList :categories="categories" />
    </v-col>
  </v-row>
</template>
<script>
import Post from '../components/Post'
export default {
  components: { Post },
  computed: {
    posts() {
      return  this.$store.state.posts.list;
    },
    categories() {
      return this.$store.state.categories.list;
    }
  },
  created () {
    this.$store.dispatch('posts/loadPosts');
    this.$store.dispatch('categories/loadCategories');
  }
}
</script>
