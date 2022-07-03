<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="tasks"
      :disable-pagination="true"
      class="elevation-1"
    >
      <template v-slot:body="props">
        <draggable :list="props.items" tag="tbody">
          <tr v-for="(item, i) in props.items" :key="i">
            <td>
              <v-icon small class="page__grab-icon"> mdi-arrow-all </v-icon>
            </td>
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>
              <v-icon small @click="editUser(user.id)"> mdi-pencil </v-icon>
            </td>
          </tr>
        </draggable>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  props: ["tasks"],
  model: {
    prop: "tasks",
    event: "updated",
  },
  components: { draggable },
  data() {
    return {
      headers: [
        { text: "", sortable: false },
        { text: "ID", value: "id", sortable: false },
        { text: "name", value: "name", sortable: false },
      ],
    };
  },
  watch: {
    tasks: {
      handler: function () {
        this.$emit("updated", this.tasks);
        console.log("[TaskListTable] tasks: " + JSON.stringify(this.tasks));
      },
    },
  },
};
</script>
