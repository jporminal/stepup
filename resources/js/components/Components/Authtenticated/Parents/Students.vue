<template>
  <v-dialog
    v-model="$store.state.Parents.parent_childs_open"
    width="800"
    @click:outside="close"
  >
    <v-card>
      <v-toolbar color="blue lighten-2" dark flat>
        <v-toolbar-title> Child Details </v-toolbar-title>
      </v-toolbar>
      <v-data-table
        :items="$store.state.Parents.parent_childs"
        :headers="headers"
      >
        <template v-slot:item.name="{ item }">
          {{ item.firstname | toUpper }} {{ item.lastname | toUpper }}
        </template>
        <template v-slot:item.dob="{ item }">
          {{ item.dateofbirth | date }}
        </template>
        <template v-slot:item.age="{ item }">
          {{ get_age(item.dateofbirth) }}
        </template>
      </v-data-table>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "parent-child",

  data() {
    return {
      headers: [
        {
          text: "Name",
          value: "name",
          align: "center",
          sortable: false,
        },
        {
          text: "Date of Birth",
          value: "dob",
          align: "center",
          sortable: false,
        },
        {
          text: "Age",
          value: "age",
          align: "center",
          sortable: false,
        },
      ],
    };
  },

  methods: {
    close() {
      this.$store.commit("PARENT_CHILDS", []);
      this.$store.commit("PARENT_CHILDS_OPEN", false);
    },

    get_age(e) {
      let currentDate = new Date();
      let birthDate = new Date(e);
      let difference = currentDate - birthDate;
      let age = Math.floor(difference / 31557600000);
      return age;
    },
  },
};
</script>
