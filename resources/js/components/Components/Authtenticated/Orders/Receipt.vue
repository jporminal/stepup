<template>
  <v-dialog
    v-model="$store.state.Orders.receipt_open"
    @click:outside="close"
    width="1200"
  >
    <v-card>
      <v-toolbar color="blue lighten-2" dark flat>
        <v-toolbar-title>
          Order #{{ $store.state.Orders.receipt.transaction.id }}
        </v-toolbar-title>
      </v-toolbar>

      <v-card-text>
        <center>
          <v-list dense>
            <v-list-item>
              <v-list-item-title>Item</v-list-item-title>
              <v-list-item-title>Unit Price</v-list-item-title>
              <v-list-item-title>Qty</v-list-item-title>
              <v-list-item-title>Tax</v-list-item-title>
              <v-list-item-title>Total</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item
              dense
              v-for="(item, index) in $store.state.Orders.receipt.Products"
              :key="index"
            >
              <v-list-item-title>
                <v-text-field readonly solo v-model="item.item" flat>
                </v-text-field>
              </v-list-item-title>
              <v-list-item-title>{{
                item.unit_price | currency
              }}</v-list-item-title>
              <v-list-item-title>{{ item.quantity }}</v-list-item-title>
              <v-list-item-title>{{ item.tax | currency }}</v-list-item-title>
              <v-list-item-title>{{ item.total | currency }}</v-list-item-title>
            </v-list-item>
            <v-list-item
              dense
              v-for="(item, index) in $store.state.Orders.receipt.Services"
              :key="index"
            >
              <v-list-item-title>
                <v-text-field readonly solo v-model="item.item" flat>
                </v-text-field>
              </v-list-item-title>
              <v-list-item-title>{{
                item.unit_price | currency
              }}</v-list-item-title>
              <v-list-item-title>{{ item.quantity }}</v-list-item-title>
              <v-list-item-title>{{ item.tax | currency }}</v-list-item-title>
              <v-list-item-title>{{ item.total | currency }}</v-list-item-title>
            </v-list-item>
            <v-list-item
              dense
              v-for="(item, index) in $store.state.Orders.receipt
                .Other_services"
              :key="index"
            >
              <v-list-item-title>
                <v-text-field readonly solo v-model="item.item" flat>
                </v-text-field>
              </v-list-item-title>
              <v-list-item-title>{{
                item.unit_price | currency
              }}</v-list-item-title>
              <v-list-item-title>{{ item.quantity }}</v-list-item-title>
              <v-list-item-title>{{ item.tax | currency }}</v-list-item-title>
              <v-list-item-title>{{ item.total | currency }}</v-list-item-title>
            </v-list-item>
            <v-list-item
              dense
              v-for="(item, index) in $store.state.Orders.receipt.Locations"
              :key="index"
            >
              <v-list-item-title>
                <v-text-field readonly solo v-model="item.item" flat>
                </v-text-field>
              </v-list-item-title>
              <v-list-item-title>{{
                item.unit_price | currency
              }}</v-list-item-title>
              <v-list-item-title>{{ item.quantity }}</v-list-item-title>
              <v-list-item-title>{{ item.tax | currency }}</v-list-item-title>
              <v-list-item-title>{{ item.total | currency }}</v-list-item-title>
            </v-list-item>
            <v-list-item
              dense
              v-for="(item, index) in $store.state.Orders.receipt.Trial"
              :key="index"
            >
              <v-list-item-title>
                <v-text-field readonly solo v-model="item.item" flat>
                </v-text-field>
              </v-list-item-title>
              <v-list-item-title>{{
                item.unit_price | currency
              }}</v-list-item-title>
              <v-list-item-title>{{ item.quantity }}</v-list-item-title>
              <v-list-item-title>{{ item.tax | currency }}</v-list-item-title>
              <v-list-item-title>{{ item.total | currency }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </center>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "view-receipt",

  methods: {
    close() {
      this.$store.commit("RECEIPT", {});
      this.$store.commit("RECEIPT_OPEN", false);
    },
  },
};
</script>
