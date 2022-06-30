<template>
  <v-card flat v-if="$store.state.Reports.class_information.length > 0">
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
      <p class="text-h5 font-weight-bold text-center">Class Information</p>
      <div class="text-h6 font-weight-bold text-center">
        Date: {{ date_title }}
      </div>
    </v-card-text>
    <v-card-text>
      <div>
        <v-list shaped>
          <v-list-item>
            <v-list-item-avatar tile width="12%"> Name </v-list-item-avatar>
            <v-list-item-avatar tile width="3%"> Date of Birth </v-list-item-avatar>
            <v-list-item-avatar tile width="1%"> Age </v-list-item-avatar>
            <v-list-item-avatar tile width="15%"> Mom </v-list-item-avatar>
            <v-list-item-avatar tile width="20%"> Email </v-list-item-avatar>
            <v-list-item-avatar tile width="7%"> Mobile </v-list-item-avatar>
            <v-list-item-avatar tile width="10%"> Location </v-list-item-avatar>
            <v-list-item-avatar tile width="10%"> Lesson </v-list-item-avatar>
            <v-list-item-avatar tile width="7%"> Day </v-list-item-avatar>
            <v-list-item-avatar tile width="5%"> Time </v-list-item-avatar>
            <v-list-item-avatar tile width="10%"> Teacher </v-list-item-avatar>
          </v-list-item>

          <v-divider></v-divider>
          <template
            v-for="(item, index) in $store.state.Reports.class_information"
          >
            <div :key="index">
              <v-list-item>
                <v-list-item-avatar tile height="80" width="12%">
                  {{ item.name }}
                </v-list-item-avatar>
                <v-list-item-avatar tile height="80" width="3%">
                  {{ item.dob }}
                </v-list-item-avatar>
                <v-list-item-avatar tile height="80" width="1%">
                  {{ $age(item.dob) }}
                </v-list-item-avatar>
                <v-list-item-avatar tile height="80" width="15%">
                  {{ item.mom }}
                </v-list-item-avatar>
                <v-list-item-avatar tile height="80" width="20%">
                  {{ item.email }}
                </v-list-item-avatar>
                <v-list-item-avatar tile height="80" width="7%">
                  {{ item.mobile }}
                </v-list-item-avatar>
                <v-list-item-avatar tile height="80" width="10%">
                  {{ item.location }}
                </v-list-item-avatar>
                <v-list-item-avatar tile height="80" width="10%">
                  {{ item.lesson }}
                </v-list-item-avatar>
                <v-list-item-avatar tile height="80" width="7%">
                  {{ item.day }}
                </v-list-item-avatar>
                <v-list-item-avatar tile height="80" width="5%">
                  {{ item.time }}
                </v-list-item-avatar>
                <v-list-item-avatar tile height="80" width="10%">
                  {{ item.teacher }}
                </v-list-item-avatar>
              </v-list-item>
              <v-divider></v-divider>
            </div>
          </template>
        </v-list>
      </div>
      <div id="excel" class="d-none">
        <table>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Age</th>
            <th>Mom</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Location</th>
            <th>Lesson</th>
            <th>Day</th>
            <th>Time</th>
            <th>Teacher</th>
          </tr>
          <tr
            v-for="(item, index) in $store.state.Reports.class_information"
            :key="index"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.dob }}</td>
            <td>{{ $age(item.dob) }}</td>
            <td>{{ item.mom }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.mobile }}</td>
            <td>{{ item.location }}</td>
            <td>{{ item.lesson }}</td>
            <td>{{ item.day }}</td>
            <td>{{ item.time }}</td>
            <td>{{ item.teacher }}</td>
          </tr>
        </table>
      </div>
    </v-card-text>
    <div style="page-break-after: always"></div>
  </v-card>
</template>
<script>
export default {
  name: "class-information-view",

  methods: {
    print() {
      window.print();
    },
    excel() {
      this.$excel("excel", `Class Information ${this.date_title}`);
    },
  },

  computed: {
    date_title() {
      return this.$store.state.Reports.class_information_filter.dates.join(
        " ~ "
      );
    },
  },
};
</script>
