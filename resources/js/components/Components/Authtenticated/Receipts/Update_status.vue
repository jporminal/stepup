<template>
  <v-dialog
    v-model="$store.state.Receipts.receipt_update_status_open"
    width="450"
    @click:outside="close"
  >
    <v-card>
      <v-toolbar color="blue lighten-2" dark flat>
        <v-toolbar-title>
          Receipt#{{ $store.state.Receipts.receipt.id }}
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-autocomplete
          label="Select Status"
          :items="statuses"
          v-model="$store.state.Receipts.receipt.status"
        >
          <template v-slot:append-outer>
            <v-btn class="text-none primary" @click="save"> Save</v-btn>
          </template>
        </v-autocomplete>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "receipt-status",

  data() {
    return {
      statuses: [
        {
          text: "Onprocess",
          value: "onprocess",
        },
        {
          text: "Cancelled",
          value: "cancelled",
        },
        {
          text: "Completed",
          value: "completed",
        },
      ],
    };
  },

  methods: {
    save() {
      this.$store
        .dispatch("UPDATE_RECEIPT_STATUS", {
          receipt: this.$store.state.Receipts.receipt,
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
            text: `Receipt#${this.$store.state.Receipts.receipt.id} successfully updated`,
          };
          this.$store.commit("SNACKBAR", snackbar);
          this.$store.commit("RECEIPT_LOADER", true);
          this.$store.dispatch(
            "RECEIPTS",
            this.$store.state.Receipts.receipt_filter
          );
          this.close();
        });
    },
    close() {
      this.$store.commit("RECEIPT_ITEMS", {});
      this.$store.commit("RECEIPT_UPDATE_STATUS_OPEN", false);
    },
  },
};
</script>
