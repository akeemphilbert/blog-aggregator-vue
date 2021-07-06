<template>
  <v-row>
    <v-col>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    publishDate: {
      type: Date
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
