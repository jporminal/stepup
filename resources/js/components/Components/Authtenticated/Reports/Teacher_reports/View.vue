<template>
  <v-card flat>
    <v-card-actions class="d-print-none">
      <v-spacer></v-spacer>
      <v-btn class="text-none" small @click="excel">
        <v-icon>mdi-microsoft-excel</v-icon> Excel</v-btn
      >
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
      <p class="text-h5 font-weight-bold text-center">Teacher Sales Reports</p>
      <div class="text-h6 font-weight-bold text-center">
        Date: {{ date_title }}
      </div>
    </v-card-text>
    <v-card-text>
      <div>
        <v-list shaped>
          <v-list-item>
            <v-list-item-avatar width="10%"> Teacher </v-list-item-avatar>
            <v-list-item-avatar width="10%"> Location </v-list-item-avatar>
            <v-list-item-avatar width="20%"> Service </v-list-item-avatar>
            <v-list-item-avatar width="10%"> Quantity </v-list-item-avatar>
            <v-list-item-avatar width="15%"> Taxable </v-list-item-avatar>
            <v-list-item-avatar width="15%"> Discount </v-list-item-avatar>
            <v-list-item-avatar width="15%"> VAT 5% </v-list-item-avatar>
            <v-list-item-avatar width="15%"> Total </v-list-item-avatar>
          </v-list-item>

          <v-divider></v-divider>
            <div v-for="(item, index) in $store.state.Reports.teacher_reports" :key="index">
              <v-list-item>
                <v-list-item-avatar tile width="10%">
                   {{ item.teacher }}
                </v-list-item-avatar>
                <v-list-item-avatar tile width="10%">
                  {{ item.location }}
                </v-list-item-avatar>
                <v-list-item-avatar tile width="20%">
                  {{ item.title }} - {{ item.name }}
                </v-list-item-avatar>
                <v-list-item-avatar tile width="10%">
                  {{ item.quantity }}
                </v-list-item-avatar>
                <v-list-item-avatar tile width="15%">
                  {{ item.taxable | currency }}
                </v-list-item-avatar>
                <v-list-item-avatar tile width="15%">
                  {{ item.discount | currency }}
                </v-list-item-avatar>
                <v-list-item-avatar tile width="15%">
                  {{ item.vat | currency }}
                </v-list-item-avatar>
                <v-list-item-avatar tile width="15%">
                  {{ item.price | currency }}
                </v-list-item-avatar>
              </v-list-item>
              <v-divider></v-divider>
            </div>

        </v-list>
      </div>
    </v-card-text>
    <v-card-text>
      <table
        style="width: 100%; border: 1px solid black; border-collapse: collapse"
      >
        <tr>
          <th style="border: 1px solid black">Quantity</th>
          <th style="border: 1px solid black">Grand Taxable</th>
          <th style="border: 1px solid black">Grand Discount</th>
          <th style="border: 1px solid black">Grand VAT 5%</th>
          <th style="border: 1px solid black">Grand Total</th>
        </tr>
        <tr>
          <td style="border: 1px solid black; text-align: center">
            {{ total_qty }}
          </td>
          <td style="border: 1px solid black; text-align: center">
            {{ total_taxable | currency }}
          </td>
          <td style="border: 1px solid black; text-align: center">
            {{ total_discount | currency }}
          </td>
          <td style="border: 1px solid black; text-align: center">
            {{ total_vat | currency }}
          </td>
          <td style="border: 1px solid black; text-align: center">
            {{ total_price | currency }}
          </td>
        </tr>
      </table>
    </v-card-text>
    <div style="page-break-after: always"></div>
    <v-card-text>
      <div id="excel" class="d-none">
        <table>
          <tr>
            <th>Teacher</th>
            <th>Location</th>
            <th>Service</th>
            <th>Quantity</th>
            <th>Taxable</th>
            <th>Discount</th>
            <th>VAT 5</th>
            <th>Total</th>
          </tr>
        </table>
        <table
          v-for="(item, index) in $store.state.Reports.teacher_reports"
          :key="index"
        >
          <tr>
            <td>{{ item.teacher }}</td>
            <td>{{ item.location }}</td>
            <td>{{ item.title }} - {{ item.name }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.taxable | currency }}</td>
            <td>{{ item.discount | currency }}</td>
            <td>{{ item.vat | currency }}</td>
            <td>{{ item.price | currency }}</td>
          </tr>
        </table>

        <table
          style="
            width: 100%;
            border: 1px solid black;
            border-collapse: collapse;
          "
        >
          <tr>
            <th style="border: 1px solid black">Quantity</th>
            <th style="border: 1px solid black">Grand Taxable</th>
            <th style="border: 1px solid black">Grand Discount</th>
            <th style="border: 1px solid black">Grand VAT 5</th>
            <th style="border: 1px solid black">Grand Total</th>
          </tr>
          <tr>
            <td style="border: 1px solid black; text-align: center">
              {{ total_qty }}
            </td>
            <td style="border: 1px solid black; text-align: center">
              {{ total_taxable | currency }}
            </td>
            <td style="border: 1px solid black; text-align: center">
              {{ total_discount | currency }}
            </td>
            <td style="border: 1px solid black; text-align: center">
              {{ total_vat | currency }}
            </td>
            <td style="border: 1px solid black; text-align: center">
              {{ total_price | currency }}
            </td>
          </tr>
        </table>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
function myFunction() {
  alert("You are about to print this document!");
}
export default {
  name: "payment-by-schedules",

  methods: {
    print() {
      window.print();
    },
    excel() {
      this.$excel("excel", `Teacher Reports ${this.date_title}`);
    },
  },

  computed: {
    date_title() {
      return this.$store.state.Reports.teacher_report_filter.dates.join(" ~ ");
    },
    total_price() {
      var services = this.$store.state.Reports.teacher_reports.reduce(
        (total, item) => {
          return total + Number(item.price);
        },
        0
      );

      return services;
    },
    total_qty() {
      var services = this.$store.state.Reports.teacher_reports.reduce(
        (total, item) => {
          return total + Number(item.quantity);
        },
        0
      );

      return services;
    },
    total_discount() {
      var services = this.$store.state.Reports.teacher_reports.reduce(
        (total, item) => {
          return total + Number(item.discount);
        },
        0
      );

      return services;
    },
    total_vat() {
      var services = this.$store.state.Reports.teacher_reports.reduce(
        (total, item) => {
          return total + Number(item.vat);
        },
        0
      );

      return services;
    },
    total_taxable() {
      var services = this.$store.state.Reports.teacher_reports.reduce(
        (total, item) => {
          return total + Number(item.taxable);
        },
        0
      );

      return services;
    },
  },
};
</script>
