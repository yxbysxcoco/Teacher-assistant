import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: [
      {
        text: "学习",
        complete: false
      },
      {
        text: "学习1111",
        complete: false
      }
    ]
  },
  mutations: {
    updateList(state, { index, content }) {
      state.todoList[index].text = content;
    },
    updateComplete(state, index) {
      state.todoList[index].complete = true;
    }
  },
  actions: {},
});
