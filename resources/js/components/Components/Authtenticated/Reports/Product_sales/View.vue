<template>
  <v-card flat v-if="$store.state.Reports.product_sales.length > 0">
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
      <p class="text-h5 font-weight-bold text-center">Product Sales</p>
      <div class="text-h6 font-weight-bold text-center">
        Date: {{ date_title }}
      </div>
    </v-card-text>
    <v-card-text>
      <div>
        <v-list shaped>
          <v-list-item>
            <v-list-item-avatar width="20%"> Product </v-list-item-avatar>
            <v-list-item-avatar width="20%"> Location </v-list-item-avatar>
            <v-list-item-avatar width="20%"> Discount </v-list-item-avatar>
            <v-list-item-avatar width="20%"> VAT </v-list-item-avatar>
            <v-list-item-avatar width="20%"> Taxable </v-list-item-avatar>
            <v-list-item-avatar width="20%"> Price </v-list-item-avatar>
          </v-list-item>

          <v-divider></v-divider>
          <template v-for="(item, index) in $store.state.Reports.product_sales">
            <div :key="index">
              <v-list-item>
                <v-list-item-avatar tile width="20%">
                  {{ item.name }}
                </v-list-item-avatar>
                <v-list-item-avatar tile width="20%">
                  {{ item.location }}
                </v-list-item-avatar>
                <v-list-item-avatar tile width="20%">
                  {{ item.discount | currency }}
                </v-list-item-avatar>
                <v-list-item-avatar tile width="20%">
                  {{ item.VAT | currency }}
                </v-list-item-avatar>
                <v-list-item-avatar tile width="20%">
                  {{ item.Taxable | currency }}
                </v-list-item-avatar>
                <v-list-item-avatar tile width="20%">
                  {{ item.price | currency }}
                </v-list-item-avatar>
              </v-list-item>
              <v-divider></v-divider>
            </div>
          </template>
          <v-list-item>
            <v-list-item-avatar tile width="20%"></v-list-item-avatar>
             <v-list-item-avatar tile width="20%"></v-list-item-avatar>
            <v-list-item-avatar tile width="20%"
              ><p class="text-h6 font-weight-bold red--text">
                {{ total_discount | currency }}
              </p></v-list-item-avatar
            >
            <v-list-item-avatar tile width="20%"
              ><p class="text-h6 font-weight-bold red--text">
                {{ total_VAT | currency }}
              </p></v-list-item-avatar
            >
            <v-list-item-avatar tile width="20%"
              ><p class="text-h6 font-weight-bold red--text">
                {{ total_Taxable | currency }}
              </p></v-list-item-avatar
            >
            <v-list-item-avatar tile width="20%"
              ><p class="text-h6 font-weight-bold red--text">
                {{ total_price | currency }}
              </p></v-list-item-avatar
            >
          </v-list-item>
        </v-list>
      </div>
      <div id="excel" class="d-none">
        <table>
          <tr>
            <th>Product</th>
            <th>Discount</th>
            <th>VAT</th>
            <th>Taxable</th>
            <th>Price</th>
          </tr>
          <tr
            v-for="(item, index) in $store.state.Reports.product_sales"
            :key="index"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.discount | currency }}</td>
            <td>{{ item.VAT | currency }}</td>
            <td>{{ item.Taxable | currency }}</td>
            <td>{{ item.price | currency }}</td>
          </tr>
          <tr>
            <td></td>
            <td>{{ total_discount | currency }}</td>
            <td>{{ total_VAT | currency }}</td>
            <td>{{ total_Taxable | currency }}</td>
            <td>{{ total_price | currency }}</td>
          </tr>
        </table>
      </div>
    </v-card-text>
    <div style="page-break-after: always"></div>
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
      this.$excel("excel", `Product Sales ${this.date_title}`);
    },
  },

  computed: {
    date_title() {
      return this.$store.state.Reports.product_sale_filter.dates.join(" ~ ");
    },
    total_price() {
      return this.$store.state.Reports.product_sales.reduce((total, item) => {
        return total + Number(item.price);
      }, 0);
    },
    total_discount() {
      return this.$store.state.Reports.product_sales.reduce((total, item) => {
        return total + Number(item.discount);
      }, 0);
    },
    total_VAT() {
      return this.$store.state.Reports.product_sales.reduce((total, item) => {
        return total + Number(item.VAT);
      }, 0);
    },
    total_Taxable() {
      return this.$store.state.Reports.product_sales.reduce((total, item) => {
        return total + Number(item.Taxable);
      }, 0);
    },
  },
};
</script>
