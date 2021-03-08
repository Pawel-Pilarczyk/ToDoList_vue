import Vue from 'vue';
import Vuex from 'vuex';
import {data} from '../data/tasksData'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      tasks: data,
    },
    mutations: {
      addNewTask(state,payload){
        state.tasks.push(payload);
      },
      removeElement(state,id){
        state.tasks.splice(id,1);
      }
    }
  })