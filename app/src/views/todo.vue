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
@Component({
  name: "todo",
  components: {
    TodoItem
  }
})
export default class Todo extends Vue {
  public edittingIndex = -1;
  public list = [
    {
      text: "学习",
      complete: false
    },
    {
      text: "学习1111",
      complete: false
    }
  ];
  public handleSave({ index, content }) {
    this.list[index].text = content;
    this.handleCancel();
  }

  public handleEdit(index) {
    this.edittingIndex = index;
  }
  public handleCancel() {
    this.edittingIndex = -1;
  }
  public handleComplete(index) {
    this.list[index].complete = true;
  }
}
</script>
