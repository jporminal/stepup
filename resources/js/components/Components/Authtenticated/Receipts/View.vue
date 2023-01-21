<template>
  <v-card>
    <v-data-table
      :headers="headers"
      :items="$store.state.Receipts.receipts.data"
      :server-items-length="$store.state.Receipts.receipts.total"
      :loading="$store.state.Receipts.receipt_loader"
      :options.sync="options"
      :items-per-page="25"
      :footer-props="{
        'items-per-page-options': [25, 35, 50],
        'items-per-page-text': 'Receipts per page',
        'show-current-page': true,
      }"
      :mobile-breakpoint="200"
    >
      <template v-slot:item.taxable="{ item }">
        {{ item.excl | currency }}
      </template>
      <template v-slot:item.vat="{ item }">
        {{ item.vat | currency }}
      </template>
      <template v-slot:item.total="{ item }">
        {{ item.amount_incl | currency }}
      </template>
      <template v-slot:item.status="{ item }">
        <p
          :class="
            item.status == 'completed'
              ? 'success white--text'
              : item.status == 'cancelled'
              ? 'error white--text'
              : 'primary white--text'
          "
          dark
        >
          {{ item.status | toUpper }}
        </p>
      </template>
      <template v-slot:top>
        <v-toolbar color="blue lighten-2 white--text" flat>
          <v-toolbar-title> {{ $route.name == 'receipts' ? 'Receipts' : 'Xero' }} </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-text-field
            class="mt-6"
            label="Receipt Number"
            @input="filter_receipts"
            solo
          >
          </v-text-field>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              small
              @click="update_receipt(item)"
              v-on="on"
              v-bind="attrs"
            >
              mdi-file-document-edit-outline
            </v-icon>
          </template>
          <span> Update status of receipt# {{ item.id }} </span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon small @click="receipt(item.id)" v-on="on" v-bind="attrs">
              mdi-receipt
            </v-icon>
          </template>
          <span> View receipt# {{ item.id }} </span>
        </v-tooltip>
        <v-tooltip bottom v-if="$route.name == 'xero' && item.xero == null">
          <template v-slot:activator="{ on, attrs }">
            <v-icon small @click="import_to_xero(item.id)" v-on="on" v-bind="attrs">
              mdi-file-import
            </v-icon>
          </template>
          <span> Import to Xero {{ item.id }} </span>
        </v-tooltip>
      </template>
    </v-data-table>
    <my_update_status v-if="$store.state.Receipts.receipt_update_status_open" />
    <my_receipt v-if="$store.state.Receipts.receipt_open_viewer" />
  </v-card>
</template>
<script>
export default {
  name: "receipts",

  components: {
    my_update_status: () => import("./Update_status"),
    my_receipt: () => import("./Receipt"),
  },

  data() {
    return {
      options: {},
      headers: [
        {
          text: "Order#",
          value: "id",
          align: "center",
          sortable: false,
        },
        {
          text: "Customer",
          value: "customer",
          align: "center",
          sortable: false,
        },
        {
          text: "Exclusive of VAT",
          value: "taxable",
          align: "center",
          sortable: false,
        },
        {
          text: "VAT 5%",
          value: "vat",
          align: "center",
          sortable: false,
        },
        {
          text: "Total",
          value: "total",
          align: "center",
          sortable: false,
        },
        {
          text: "Notes",
          value: "notes",
          align: "center",
          sortable: false,
        },
        {
          text: "Status",
          value: "status",
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

  created() {
    this.pagination();
  },

  watch: {
    options: {
      handler(e) {
        const filter = {
          filter: this.$store.state.Receipts.receipt_filter.filter,
          page: e.page,
          per_page: e.itemsPerPage,
        };
        this.$store.commit("RECEIPT_FILTER", filter);
        if (this.$store.state.Receipts.receipt_filter.filter) {
          this.$store.dispatch(
            "RECEIPT_FILTER",
            this.$store.state.Receipts.receipt_filter
          );
        } else {
          this.pagination();
        }
      },
      deep: true,
    },
  },

  methods: {
    receipt(e) {
      this.$store.dispatch("RECEIPT", e);
      this.$store.commit("RECEIPT_OPEN_VIEWER", true);
    },
    import_to_xero(e) {
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
                    text: "Xero token already expired bro!",
                };

      this.$store.dispatch("RECEIPT", e)
      .then((result) => {
          this.$store.dispatch('IMPORT_TO_XERO', {
              token: this.$store.state.Xero.xero_token,
                tenant_id: this.$store.state.Xero.xero_tenants,
              xero: result.data
          })
          .then((result) => {
                snackbar.color = "blue ligten-2";
                snackbar.text = "Successfully imported";
                this.$store.commit("SNACKBAR", snackbar);
                this.pagination();
              
          }).catch((err) => {
                snackbar.text = err.response.data.message;
                this.$store.commit("SNACKBAR", snackbar);
            
          });
      }).catch((err) => {
            this.$store.commit("SNACKBAR", snackbar);
      })
    },
    update_receipt(e) {
      this.$store.commit("RECEIPT_ITEMS", e);
      this.$store.commit("RECEIPT_UPDATE_STATUS_OPEN", true);
    },
    pagination() {
      this.$store.commit("RECEIPT_LOADER", true);
      this.$store.dispatch(
        "RECEIPTS",
        this.$store.state.Receipts.receipt_filter
      );
    },

    filter_receipts(e) {
      if (e.length > 0) {
        const filter = {
          filter: e,
          page: this.$store.state.Receipts.receipt_filter.page,
          per_page: this.$store.state.Receipts.receipt_filter.per_page,
        };
        this.$store.commit("RECEIPT_FILTER", filter);
        this.options = {
          page: 1,
          per_page: 10,
        };
        this.$store.dispatch(
          "RECEIPT_FILTER",
          this.$store.state.Receipts.receipt_filter
        );
      }

      if (e.length == 0) {
        const filter = {
          filter: null,
          page: this.$store.state.Receipts.receipt_filter.page,
          per_page: this.$store.state.Receipts.receipt_filter.per_page,
        };
        this.$store.commit("RECEIPT_FILTER", filter);
        this.pagination();
      }
    },
  },
};
</script>
