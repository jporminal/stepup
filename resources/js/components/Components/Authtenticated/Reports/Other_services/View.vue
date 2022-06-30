<template>
  <v-card flat v-if="$store.state.Reports.other_service_reports.other_services.length > 0">
    <v-card-actions class="d-print-none">
      <v-spacer></v-spacer>
      <!-- <v-btn class="text-none" small @click="excel">
        <v-icon>mdi-microsoft-excel</v-icon> Excel</v-btn
      > -->
      <v-btn class="text-none" small @click="print">
        <v-icon>mdi-printer</v-icon> Print</v-btn
      >
    </v-card-actions>
    <v-card-text>
      <div class="text-center">
        <v-avatar tile size="250">
          <img src="/img/logoStepUp.png" />
        </v-avatar>
      </div>
      <p class="text-h5 font-weight-bold text-center">Other Service Report</p>
      <div class="text-h6 font-weight-bold text-center">
        Date: {{ date_title }}
      </div>
    </v-card-text>
    <v-card-text>
      <div>
        <v-list shaped>
          <v-list-item>
            <v-list-item-avatar width="5%"> Invoice </v-list-item-avatar>
            <v-list-item-avatar width="20%"> Customer Name </v-list-item-avatar>
            <v-list-item-avatar width="20%"> Date </v-list-item-avatar>
            <v-list-item-avatar width="10%"> Payment </v-list-item-avatar>
            <v-list-item-avatar width="25%"> Title </v-list-item-avatar> 
            <v-list-item-avatar width="20%"> Option </v-list-item-avatar>
            <v-list-item-avatar width="10%"> Total </v-list-item-avatar>
          </v-list-item>

          <v-divider></v-divider>
          <template
            v-for="(item, index) in $store.state.Reports.other_service_reports.other_services"
          >
            <div :key="index">
              <v-list-item>
                <v-list-item-avatar tile width="5%">
                  {{ item.sale_id }}
                </v-list-item-avatar>
                <v-list-item-avatar tile width="20%">
                  {{ item.firstname }} {{ item.lastname }}
                </v-list-item-avatar>
                <v-list-item-avatar tile width="20%">
                  {{ item.created_at | date }}
                </v-list-item-avatar>
                <v-list-item-avatar tile width="10%">
                  {{ item.payment_type }}
                </v-list-item-avatar>
                <v-list-item-avatar tile width="25%">
                  {{ item.title }}
                </v-list-item-avatar>
                <v-list-item-avatar tile width="20%">
                  {{ item.name }}
                </v-list-item-avatar>
                <v-list-item-avatar tile width="10%">
                  {{ item.total }}
                </v-list-item-avatar>
              </v-list-item>
              <v-divider></v-divider>
            </div>
          </template>
          <v-list-item>
            <v-list-item-avatar tile width="5%"></v-list-item-avatar>
            <v-list-item-avatar tile width="5%"></v-list-item-avatar>
            <v-list-item-avatar tile width="5%"></v-list-item-avatar>
            <v-list-item-avatar tile width="5%"></v-list-item-avatar>
            <v-list-item-avatar tile width="5%"></v-list-item-avatar>
            <v-list-item-avatar tile width="5%"></v-list-item-avatar>
            <v-list-item-avatar tile width="15%"></v-list-item-avatar>
            <v-list-item-avatar tile width="15%">Total</v-list-item-avatar>
            <v-list-item-avatar tile width="40%"
              ><p class="text-h5 font-weight-bold red--text">
                {{ total_payment | currency }}
              </p></v-list-item-avatar
            >
          </v-list-item>
        </v-list>
      </div>
      <div id="excel" class="d-none">
        <table>
          <tr>
            <th>Invoice</th>
            <th>Name</th>
            <th>Date</th>
            <th>Payment Type</th>
            <th>Title</th>
            <th>Option</th>
            <th>Total</th>
          </tr>
          <tr
            v-for="(item, index) in $store.state.Reports.other_service_reports.other_services"
            :key="index"
          >
            <td>{{ item.sale_id }}</td>
            <td>{{ item.firstname }} {{ item.lastname }}</td>
            <td>{{ item.created_at | date }}</td>
            <td>{{ item.payment_type }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.total }}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Total</td>
            <td>{{ total_payment | currency }}</td>
          </tr>
        </table>
      </div>
    </v-card-text>
    <div style="page-break-after: always"></div>
  </v-card>
</template>
<script>
export default {
  name: "payment-by-schedules",

  methods: {
    print() {
      window.print();
    },
    // excel() {
    //   this.$excel("excel", `Other Service Reports - ${this.date_title}`);
    // },
  },

  computed: {
    date_title() {
      return this.$store.state.Reports.other_service_report_filter.dates.join(
        " ~ "
      );
    },
    total_payment() {
      return this.$store.state.Reports.other_service_reports.other_services.reduce(
        (total, item) => {
          return total + Number(item.total);
        },
        0
      );
    },
  },
};
</script>
