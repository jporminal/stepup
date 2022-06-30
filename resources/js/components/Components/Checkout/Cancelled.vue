<template>
  <div>
    <v-card flat>
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="display-2 text-center">Payment Not Completed</div>
          </v-col>
          <v-col cols="12">
            <div class="body-2 text-center">
              We are sorry to inform you that your transaction has been declined
              and you have not been charged. <br />
              Please try 1 more time and if it happens again please either –
              <ul>
                <li>Try another card</li>
                <li>Contact your bank</li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "cancelled-transaction",

  methods: {
    cancelled() {
      var last_id = localStorage.getItem("last_id");
      this.$store.dispatch("/api/CANCELLED_TRANSACTION", last_id);
    },
  },
};
</script>
