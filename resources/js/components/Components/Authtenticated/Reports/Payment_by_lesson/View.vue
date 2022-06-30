<template>
  <v-card flat v-if="$store.state.Reports.payment_by_lessons.length > 0">
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
      <p class="text-h5 font-weight-bold text-center">Payment By Schedules</p>
      <div class="text-h6 font-weight-bold text-center">
        Date: {{ date_title }}
      </div>
    </v-card-text>
    <v-card-text>
      <div>
        <v-list shaped>
          <v-list-item>
            <v-list-item-avatar width="45%"> Lesson </v-list-item-avatar>
            <v-list-item-avatar width="45%"> Total </v-list-item-avatar>
            <v-list-item-avatar width="10%"> </v-list-item-avatar>
          </v-list-item>

          <v-divider></v-divider>
          <template
            v-for="(item, index) in $store.state.Reports.payment_by_lessons"
          >
            <div :key="index">
              <v-list-item>
                <v-list-item-avatar tile width="45%">
                  {{ item.lesson }}
                </v-list-item-avatar>
                <v-list-item-avatar tile width="45%">
                  {{ item.total }}
                </v-list-item-avatar>
                <v-list-item-avatar tile width="10%">
                  <v-icon @click="viewTrans(item)">
                    mdi-magnify
                  </v-icon>
                </v-list-item-avatar>
              </v-list-item>
              <v-divider></v-divider>
            </div>
          </template>
          <v-list-item>
            <v-list-item-avatar tile width="50%">Total</v-list-item-avatar>
            <v-list-item-avatar tile width="50%"
              ><p class="text-h5 font-weight-bold red--text">
                {{ total_payment | currency }}
              </p></v-list-item-avatar
            >
          </v-list-item>
        </v-list>
        <v-dialog
          v-model="open"
          width="800"
        >
          <v-card>
            <v-card-text>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Transaction
                      </th>
                      <th class="text-left">
                        Name
                      </th>
                      <th class="text-left">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item, index) in trans.trans"
                      :key="index"
                    >
                      <td>{{ item.tranNumber }}</td>
                      <td>{{ item.firstName }} {{ item.familyName }}</td>
                      <td>{{ item.total }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
      <div id="excel" class="d-none">
        <table>
          <thead>
            <tr>
              <th>Lesson</th>
              <th>Transaction</th>
              <th>Name</th>
              <th>Total</th>
            </tr>
          </thead>
          <template v-for="(item, index) in $store.state.Reports.payment_by_lessons">
            <div :key="index">
              <tbody>
                <tr
                  v-for="(trans,i) in item.trans" :key="i"
                >
                  <td>{{ item.lesson }}</td>
                  <td>{{ trans.tranNumber }}</td>
                  <td>{{ trans.firstName }} {{ trans.familyName }}</td>
                  <td>{{ trans.total | currency }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="3">Total</td>
                  <td> {{ item.total | currency }} </td>
                </tr>
              </tfoot>
              <tr></tr>
            </div>
          </template>
          
        </table>
      </div>
    </v-card-text>
    <div style="page-break-after: always"></div>
  </v-card>
</template>
<script>
export default {
  name: "payment-by-lesson",

  data() {
    return {
      open: false,
      trans: {}
    }
  },

  methods: {
    print() {
      window.print();
    },
    excel() {
      this.$excel("excel", `Paymeny By Lesson ${this.date_title}`);
    },

    viewTrans(e) {
      this.open = true
      this.trans = e
    }
  },

  computed: {
    date_title() {
      return this.$store.state.Reports.payment_by_schedule_filter.dates.join(
        " ~ "
      );
    },
    total_payment() {
      return this.$store.state.Reports.payment_by_lessons.reduce(
        (total, item) => {
          return total + Number(item.total);
        },
        0
      );
    },
  },
};
</script>
