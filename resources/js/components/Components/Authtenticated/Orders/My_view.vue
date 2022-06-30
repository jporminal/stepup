<template>
  <div>
    <my_receipt v-if="$store.state.Orders.receipt_open" />
    <v-card>
      <v-toolbar color="blue lighten-2" dark flat>
        <v-toolbar-title> My Order(s) </v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="$store.state.Orders.orders.data"
          :server-items-length="$store.state.Orders.orders.total"
          :loading="$store.state.Orders.order_loading"
          :items-per-page="10"
          :options.sync="options"
          :footer-props="{
            'items-per-page-options': [10, 15, 20],
            'items-per-page-text': 'Categories per page',
            'show-current-page': true,
            'show-first-last-page': true,
          }"
          :mobile-breakpoint="200"
          class="elevation-1"
        >
          <template v-slot:item.amount="{ item }">
            <p>{{ item.amount_incl | currency }}</p>
          </template>
          <template v-slot:item.date="{ item }">
            <span> {{ item.create_at | date }} </span>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  color="blue"
                  @click="view(item.id)"
                  v-on="on"
                  v-bind="attrs"
                >
                  mdi-eye
                </v-icon>
              </template>
              <span> View Order #{{ item.id }} </span>
            </v-tooltip>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "my-orders",

  components: {
    my_receipt: () => import("./Receipt"),
  },

  data() {
    return {
      options: {},
      headers: [
        {
          text: "Order #",
          value: "id",
          align: "center",
          sortable: false,
        },
        {
          text: "Total",
          value: "amount",
          align: "center",
          sortable: false,
        },
        {
          text: "Date",
          value: "date",
          align: "center",
          sortable: false,
        },
        {
          text: "",
          value: "actions",
          align: "center",
          sortable: false,
        },
      ],
    };
  },

  watch: {
    options: {
      handler(e) {
        const filter = {
          page: e.page,
          per_page: e.itemsPerPage,
        };
        this.$store.commit("ORDER_PAGINATE", filter);
        this.pagination();
      },
      deep: true,
    },
  },

  methods: {
    pagination() {
      this.$store.dispatch("MY_ORDERS", this.$store.state.Orders.paginate);
    },

    view(e) {
      this.$store.dispatch("RECEIPT", e);
    },
  },
};
</script>
