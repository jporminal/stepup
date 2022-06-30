<template>
  <v-dialog
    v-model="$store.state.Parents.parent_open"
    width="800"
    @click:outside="close"
  >
    <v-card>
      <v-toolbar class="blue lighten-2" dark flat>
        <v-toolbar-title>
          Edit {{ $store.state.Parents.details.motherfirstname | toUpper }}
          {{ $store.state.Parents.details.motherlastname | toUpper }}
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              label="First name"
              v-model="$store.state.Parents.details.motherfirstname"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Family name"
              v-model="$store.state.Parents.details.motherlastname"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Home Number"
              v-model="$store.state.Parents.details.motherhomenumber"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Nationality"
              v-model="$store.state.Parents.details.mothernationality"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Credit"
              v-model="$store.state.Parents.details.credit"
            />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="text-none primary" @click="save">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "manage-parent",

  methods: {
    save() {
      this.$store
        .dispatch("UPDATE_PARENT_DETAILS", {
          form: this.$store.state.Parents.details,
        })
        .then((result) => {
          var snackbar = {
            snackbar: true,
            vertical: false,
            timeout: 2000,
            color: "blue lighten-2",
            dark: true,
            top: true,
            bottom: false,
            centered: true,
            left: false,
            right: false,
            text: "Schedule successfully save!",
          };
          this.$store.commit("SNACKBAR", snackbar);
          this.close();
        })
        .catch((err) => {
          var snackbar = {
            snackbar: true,
            vertical: false,
            timeout: 2000,
            color: "red",
            dark: true,
            top: true,
            bottom: false,
            centered: true,
            left: false,
            right: false,
            text: "Something went wrong",
          };
          this.$store.commit("SNACKBAR", snackbar);
        });
    },
    close() {
      this.$store.commit("PARENT_DETAILS", {});
      this.$store.commit("PARENT_OPEN", false);
    },
  },
};
</script>
