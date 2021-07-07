<template>
  <v-card>
    <v-card-title>Add Blog</v-card-title>
    <v-card-text>
      <p>Enter the blog URL or blog Feed URL to add a blog</p>
      <v-form>
        <v-text-field v-model="blogUrl" label="URL" required />
        <v-btn @click="addBlog">
          Submit
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Add',
  data () {
    return {
      blogUrl: ''
    }
  },
  methods: {
    addBlog () {
      console.log('add blog', this.blogUrl)
      const data = new URLSearchParams()
      data.append('url', this.blogUrl)
      const g = this
      fetch('http://localhost:8682/blog', { method: 'POST', body: data }).then(function (data) {
        //redirect to blog
        g.$router.push('/')
      })
    }
  }
}
</script>

<style scoped>

</style>
