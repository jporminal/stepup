<template>
  <v-dialog
    v-model="$store.state.Receipts.receipt_open_viewer"
    width="800"
    @Click:outside="close"
  >
    <v-card>
      <v-toolbar color="blue lighten-2" dark flat>
        <v-toolbar-title>
          Receipt# {{ $store.state.Orders.receipt.transaction.id }}
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text ref="print">
        <p style="text-align: center">StepUp Academy</p>
        <p style="text-align: center">113 Apex Atrium Motor City, Dubai, UAE</p>
        <p style="text-align: center">04 453 4360</p>
        <p style="text-align: center">info@stepup.ae</p>
        <p style="text-align: center">https://stepup.ae</p>
        <p style="text-align: center">TRN: 1002540945100003</p>
        <p style="text-align: center">Tax Invoice</p>
        <p style="text-align: center">
          Invoice #: STEP-{{ $store.state.Orders.receipt.transaction.id }}
        </p>
        <hr />
        <p style="text-align: center">
          Date Purchased:
          {{ $store.state.Orders.receipt.transaction.created_at | date }}
        </p>
        <table
          style="
            width: 100%;
            border: 1px solid black;
            border-collapse: collapse;
          "
        >
          <tr>
            <th style="border-bottom: 1px solid black; width: 50%">Product</th>
            <th style="border-bottom: 1px solid black">Rate Incl Vat</th>
            <th style="border-bottom: 1px solid black">Qty</th>
            <th style="border-bottom: 1px solid black">VAT</th>
            <th style="border-bottom: 1px solid black">Disc</th>
            <th style="border-bottom: 1px solid black">Total Incl Vat</th>
          </tr>
          <tr
            v-for="(item, index) in $store.state.Orders.receipt.Products"
            :key="index"
          >
            <td style="border-bottom: 1px solid black; text-align: left">
              {{ item.item }}
            </td>
            <td style="border-bottom: 1px solid black; text-align: center">
              {{ item.unit_price }}
            </td>
            <td style="border-bottom: 1px solid black; text-align: center">
              {{ item.quantity }}
            </td>
            <td style="border-bottom: 1px solid black; text-align: center">
              {{ item.tax }}
            </td>
            <td style="border-bottom: 1px solid black; text-align: center">
              {{ item.discount }}
            </td>
            <td style="border-bottom: 1px solid black; text-align: center">
              {{ item.total }}
            </td>
          </tr>
          <tr
            v-for="(item, index) in $store.state.Orders.receipt.Services"
            :key="index + 100"
          >
            <td style="border-bottom: 1px solid black; text-align: left">
              {{ item.item }}
              {{ item.service_price ? item.service_price.serviceName : "" }}
            </td>
            <td style="border-bottom: 1px solid black; text-align: center">
              {{ item.unit_price }}
            </td>
            <td style="border-bottom: 1px solid black; text-align: center">
              {{ item.quantity }}
            </td>
            <td style="border-bottom: 1px solid black; text-align: center">
              {{ item.tax }}
            </td>
            <td style="border-bottom: 1px solid black; text-align: center">
              {{ item.discount }}
            </td>
            <td style="border-bottom: 1px solid black; text-align: center">
              {{ item.total }}
            </td>
          </tr>
          <tr
            v-for="(item, index) in $store.state.Orders.receipt.Other_services"
            :key="index + 200"
          >
            <td style="border-bottom: 1px solid black; text-align: left">
              {{ item.item }}
            </td>
            <td style="border-bottom: 1px solid black; text-align: center">
              {{ item.unit_price }}
            </td>
            <td style="border-bottom: 1px solid black; text-align: center">
              {{ item.quantity }}
            </td>
            <td style="border-bottom: 1px solid black; text-align: center">
              {{ item.tax }}
            </td>
            <td style="border-bottom: 1px solid black; text-align: center">
              {{ item.discount }}
            </td>
            <td style="border-bottom: 1px solid black; text-align: center">
              {{ item.total }}
            </td>
          </tr>
          <tr
            v-for="(item, index) in $store.state.Orders.receipt.Locations"
            :key="index + 300"
          >
            <td style="border-bottom: 1px solid black; text-align: left">
              {{ item.item }}
            </td>
            <td style="border-bottom: 1px solid black; text-align: center">
              {{ item.unit_price }}
            </td>
            <td style="border-bottom: 1px solid black; text-align: center">
              {{ item.quantity }}
            </td>
            <td style="border-bottom: 1px solid black; text-align: center">
              {{ item.tax }}
            </td>
            <td style="border-bottom: 1px solid black; text-align: center">
              {{ item.discount }}
            </td>
            <td style="border-bottom: 1px solid black; text-align: center">
              {{ item.total }}
            </td>
          </tr>
          <tr
            v-for="(item, index) in $store.state.Orders.receipt.Trial"
            :key="index + 400"
          >
            <td style="border-bottom: 1px solid black; text-align: left">
              {{ item.item }}
            </td>
            <td style="border-bottom: 1px solid black; text-align: center">
              {{ item.unit_price }}
            </td>
            <td style="border-bottom: 1px solid black; text-align: center">
              {{ item.quantity }}
            </td>
            <td style="border-bottom: 1px solid black; text-align: center">
              {{ item.tax }}
            </td>
            <td style="border-bottom: 1px solid black; text-align: center">
              {{ item.discount }}
            </td>
            <td style="border-bottom: 1px solid black; text-align: center">
              {{ item.total }}
            </td>
          </tr>
        </table>
        <table style="width: 100%">
          <tr>
            <td style="width: 60%"></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Taxable:</td>
            <td style="text-align: right">
              {{
                $store.state.Orders.receipt.transaction.amount_excl | currency
              }}
            </td>
          </tr>
          <tr v-if="$store.state.Orders.receipt.transaction.discount > 0">
            <td style="width: 60%"></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Discount:</td>
            <td style="text-align: right">
              {{ $store.state.Orders.receipt.transaction.discount | currency }}
            </td>
          </tr>
          <tr>
            <td style="width: 60%"></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Vat 5%:</td>
            <td style="text-align: right">
              {{ $store.state.Orders.receipt.transaction.vat | currency }}
            </td>
          </tr>
          <tr>
            <td style="width: 60%"></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Total Incl Vat:</td>
            <td style="text-align: right">
              {{
                $store.state.Orders.receipt.transaction.amount_incl | currency
              }}
            </td>
          </tr>
          <tr>
            <td style="width: 60%"></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Paid:</td>
            <td style="text-align: right">
              {{ $store.state.Orders.receipt.transaction.payment_type }}
            </td>
          </tr>
        </table>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="text-none primary" @click="print">
          <v-icon>mdi-printer</v-icon> Print</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "receipt-view",

  data() {
    return {
      email: null,
      loading: false,
    };
  },

  methods: {
    print() {
      var print = this.$refs.print.outerHTML;
      this.$print(print, 1);
    },
    close() {
      this.$store.dispatch("RECEIPT", {});
      this.$store.commit("RECEIPT_OPEN_VIEWER", false);
    },
  },
};
</script>
<style lang="scss" scoped>
.v-application p {
  margin-bottom: 0px;
}
</style>
