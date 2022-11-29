<template>
    <tr v-bind:class="{present: student.present, absent: !student.present}">
        <td>{{ student.name }}</td>
        <td>{{ student.starID }}</td>
        <td>
        <input type="checkbox" v-bind:checked="student.present" v-on:change="arrivedOrLeft(student, $event.target.checked)">
        </td>

        <!-- gets the delete image makes it clickable -->
        <!-- v-show if edit checkbox is on -->
        <td v-show="edit"> <img v-on:click="deleteStudent" src="@/assets/delete.png"> </td>
    </tr>
</template>

<script>
export default {
    name: 'StudentRow',
    props: {
        student: Object,
        edit: Boolean
    },
    methods: {
        arrivedOrLeft(student, present) {
            this.$emit('student-arrived-or-left', student, present)
        },
        deleteStudent() {
            if (confirm(`Delete ${this.student.name}?`)) {
                this.$emit('delete-student', this.student)
            }
        }
    }
}
</script>

<style scoped>

.present {
    color: black;
    font-style: italic;
    background-color: lightblue;
}

.absent {
    color: black;
    font-weight: bold;
    background-color: lightgreen;
}

img {
    height: 32px;
}

</style>