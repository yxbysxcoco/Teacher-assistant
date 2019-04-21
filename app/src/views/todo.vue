<template>
  <div class="todo">
    <ul>
      <TodoItem
        v-for="(item, index) in list"
        :key="index"
        :item="item"
        :index="index"
        :edittingIndex="edittingIndex"
        @on-save="handleSave"
        @on-edit="handleEdit"
        @on-cancel="handleCancel"
        @on-complete="handleComplete"
      ></TodoItem>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"; // @ is an alias to /src
import TodoItem from "../components/todo-item";
import { State, Mutation } from "vuex-class";

@Component({
  name: "todo",
  components: {
    TodoItem
  }
})
export default class Todo extends Vue {
  @State("todoList") public list;
  @Mutation("updateList") public updateList;
  @Mutation("updateComplete") public handleComplete;

  public edittingIndex = -1;

  public handleSave({ index, content }) {
    this.updateList({ index, content });
    this.handleCancel();
  }

  public handleEdit(index) {
    this.edittingIndex = index;
  }
  public handleCancel() {
    this.edittingIndex = -1;
  }
}
</script>
