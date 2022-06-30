<template>
  <v-dialog
    v-model="$store.state.Staffs.staff_open"
    width="800"
    @click:outside="close"
  >
    <v-card>
      <v-toolbar color="blue lighten-2" dark flat>
        {{ title }}
      </v-toolbar>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              label="Name"
              v-model="$store.state.Staffs.staff.staffname"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Contact Number 1"
              v-model="$store.state.Staffs.staff.staffphone1"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Contact Number 2"
              v-model="$store.state.Staffs.staff.staffphone2"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Contact Number 3"
              v-model="$store.state.Staffs.staff.staffmobile"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Email"
              v-model="$store.state.Staffs.staff.staffemail"
            />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="text-none primary" @click="save"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "add-edit-staff",

  methods: {
    save() {
      this.$store
        .dispatch("STAFF_SAVE", {
          form: this.$store.state.Staffs.staff,
        })
        .then((result) => {
          this.close();
        });
    },
    close() {
      this.$store.commit("STAFF", {});
      this.$store.commit("STAFF_OPEN", false);
    },
  },

  computed: {
    title() {
      return this.$store.state.Staffs.staff.id > 0
        ? `Edit ${this.$store.state.Staffs.staff.staffname}`
        : "New";
    },
  },
};
</script>
