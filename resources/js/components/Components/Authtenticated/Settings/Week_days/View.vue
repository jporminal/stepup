<template>
  <div>
    <manage_week_days v-if="$store.state.Week_days.week_day_open" />
    <v-card>
      <v-toolbar color="blue lighten-2" class="white--text" flat>
        <v-toolbar-title> Week Name </v-toolbar-title>
      </v-toolbar>
      <center>
        <v-list>
          <v-list-item>
            <v-list-item-title class="font-weight-bold"
              ><p>Name</p></v-list-item-title
            >
            <v-list-item-title class="font-weight-bold"
              ><p>Number of Weeks</p></v-list-item-title
            >
            <v-list-item-title></v-list-item-title>
          </v-list-item>
          <v-list-item
            v-for="(item, index) in $store.state.Week_days.week_days"
            :key="index"
          >
            <v-list-item-title>
              <p>{{ item.weekname }}</p>
            </v-list-item-title>
            <v-list-item-title>
              <p>{{ item.numberofweek }}</p>
            </v-list-item-title>
            <v-list-item-title>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon @click="edit(item)" v-on="on" v-bind="attrs">
                    mdi-pencil
                  </v-icon>
                </template>
                <span> Edit {{ item.weekname }} </span>
              </v-tooltip>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </center>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "location-view",

  components: {
    manage_week_days: () => import("./Manage"),
  },

  created() {
    this.$store.dispatch("WEEK_DAYS");
  },

  methods: {
    edit(e) {
      this.$store.commit("WEEK_DAY", e);
      this.$store.commit("WEEK_DAY_OPEN", true);
    },
  },
};
</script>
