<template>
  <div id="toDoList">
    <TaskAdder/>
    <Container/>
  </div>
</template>

<script>

import Container from './components/Container'
import TaskAdder from './components/TaskAdder'

export default {
  name: 'App',
  components: {
    Container,
    TaskAdder,
  },
  methods:{
  },

}
</script>

<style>
  #toDoList{
    width: 50vw;
    margin: auto;
    padding-top: 100px;
  }
</style>
