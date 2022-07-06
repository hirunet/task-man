<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>TODOリスト</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          v-model="input"
          label="タスクを追加"
          placeholder="タスクを追加"
          solo
          clearable
          @keydown.enter="addTask"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <TaskListTable v-model="tasks" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TaskListTable from "@/components/TaskListTable.vue";
const LOCAL_STRAGE_KEY_TASKS = "task-man-tasks";

export default {
  components: {
    TaskListTable,
  },
  data: () => ({
    input: null,
    tasks: [],
  }),
  methods: {
    addTask(event) {
      // 日本語入力確定時のエンターは無視する
      if (event.keyCode !== 13) return;

      if (!this.input) return;

      this.tasks.push({
        id: 99,
        name: this.input,
      });

      this.input = null;
    },
  },
  watch: {
    tasks: {
      handler: function () {
        localStorage.setItem(
          LOCAL_STRAGE_KEY_TASKS,
          JSON.stringify(this.tasks)
        );
      },
    },
  },
  mounted() {
    this.tasks = JSON.parse(localStorage.getItem(LOCAL_STRAGE_KEY_TASKS));
    if (this.tasks === null) this.tasks = [];
  },
};
</script>
