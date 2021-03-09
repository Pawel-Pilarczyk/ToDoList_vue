<template>
    <div class='taskAdder'>
        <input type="text" name="" id="newTaskAdder" v-model="newTaskName">
        <button @click.prevent="addTask" class="btn btn-info">Add Task</button>
    </div>
</template>
<script>


export default {
    name:'TaskAdder',
    data(){
        return{
            newTaskName: "",
        }
    },

    props:[],

    methods: {
        addTask(){
            this.$store.commit('addNewTask',
            {
                id:this.$store.state.tasks.length,
                taskName:this.newTaskName,
                finished: false,
            },

            this.newTaskName = ""
            )
        }
    },
}
</script>

<style>

</style>
