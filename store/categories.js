export const SAVE_CATEGORIES = 'SAVE_CATEGORIES'

export const state = () => ({
  list: []
})

export const mutations = {
  SAVE_CATEGORIES(state,categories) {
    state.list = categories;
  }
}

export const actions = {
  loadCategories({commit}) {
    fetch('http://localhost:8682/categories').
    then(result => result.json()).
    then(data => commit(SAVE_CATEGORIES,data.items)).catch(error => {throw new Error(`Error ${error}`)})
  }
}
