<template>
  <v-row>
    <v-col cols="12" sm="12" md="12" v-for="post in posts" :key="post.id">
      <Post :title="post.title" :description="post.description"/>
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
    }
  },
  created () {
    this.$store.dispatch('posts/loadPosts');
  }
}
</script>
