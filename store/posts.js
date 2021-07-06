export const SAVE_POSTS = 'SAVE_POSTS'

export const state = () => ({
  list: []
})

export const mutations = {
  SAVE_POSTS(state,posts) {
    console.log(posts)
    state.list = posts;
  }
}

export const actions = {
  loadPosts({commit}) {
    fetch('http://localhost:8682/posts').
    then(result => result.json()).
    then(data => commit(SAVE_POSTS,data.items)).catch(error => {throw new Error(`Error ${error}`)})
  }
}
