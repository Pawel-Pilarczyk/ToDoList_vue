<template>
    <div class='task' :class="[(finishedTask ? 'finished' : ''), (urgent ? 'urgent' : '')]">
        <h1>{{taskName}}</h1>
        <nav>
            <button :disabled="finishedTask" @click="taskUrgent">Urgent</button>
            <button @click="taskfinishedAction" :disabled="finishedTask">Finished</button>
            <button @click="removeTask">Remove</button>
        </nav>
    </div>
</template>
<script>
export default {
    name:'Task',
    data(){
        return{
            finishedTask:false,
            urgent:false
        }
    },

    props:['taskName','taskId'],

    methods: {
        taskfinishedAction(){
            this.finishedTask = !this.finishedTask;
            this.urgent ? this.urgent = false : "";
        },
        taskUrgent(){
            this.urgent = !this.urgent;
        },
        removeTask(){
            this.$store.commit('removeElement',this.taskId)
        }
    },
}
</script>

<style>
    .task{
        min-height: 5vh;
        margin: auto;
        display: flex;
        justify-content: space-between;
        border: 1px solid black;
    }

    .finished{
        background-color: chartreuse;
    }

    .urgent{
        background-color: rgb(206, 0, 0);
    }

    .task >h1{
        padding-left: 10%;
        margin:auto 0;
        font-size: 1.1rem;
    }

    .task button{
        height: 80%;
        margin: auto;
    }
</style>
