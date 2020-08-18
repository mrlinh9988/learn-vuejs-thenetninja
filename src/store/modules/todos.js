import axios from 'axios';

const state = {
  todos: [],
};

const getters = {
  allTodos: (state) => state.todos,
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

    commit('setTodos', response.data);
  },
  async addTodo({ commit }, title) {
    const respone = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false });
    commit('newTodo', respone.data);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit('deleteTodo', id);
  },
  async filterTodos({ commit }, e) {
    console.log(e);
    const limit = parseInt(e.target.value);
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
    commit('setTodos', response.data);
  },
  async updateTodo({ commit }, updateTodo) {
    await axios.put(`https://jsonplaceholder.typicode.com/todos/${updateTodo.id}`);

    commit('updateTodo', updateTodo);
  },
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, newTodo) => state.todos.unshift(newTodo),
  deleteTodo: (state, id) => (state.todos = state.todos.filter((todo) => todo.id !== id)),
  updateTodo: (state, updateTodo) => {
    const index = state.todos.findIndex((todo) => todo.id === updateTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updateTodo);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
