<template>
  <v-app>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="9">
          <v-avatar
            class="hidden-sm-and-down"
            color="grey darken-1 shrink"
            size="32"
          ></v-avatar>&nbsp;Blog Aggregator
        </v-col>
        <v-col cols="1">
          <v-btn to="/blogs/add">
            Add Blog
          </v-btn>
        </v-col>
      </v-row>


    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt/>
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Blog Aggregator'
    }
  }
}
</script>
