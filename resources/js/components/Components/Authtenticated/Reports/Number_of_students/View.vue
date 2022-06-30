<template>
  <v-card flat v-if="$store.state.Reports.number_of_students.length > 0">
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
      <p class="text-h5 font-weight-bold text-center">Number of Students</p>
    </v-card-text>
    <v-card-text>
      <div>
        <v-list shaped>
          <v-list-item>
            <v-list-item-avatar width="25%"> Location </v-list-item-avatar>
            <v-list-item-avatar width="25%"> Lesson </v-list-item-avatar>
            <v-list-item-avatar width="10%"> Day </v-list-item-avatar>
            <v-list-item-avatar width="15%"> Time </v-list-item-avatar>
            <v-list-item-avatar width="15%"> Teacher </v-list-item-avatar>
            <v-list-item-avatar width="10%"> Total </v-list-item-avatar>
          </v-list-item>

          <v-divider></v-divider>
          <template
            v-for="(item, index) in $store.state.Reports.number_of_students"
          >
            <div :key="index">
              <v-list-item>
                <v-list-item-avatar tile width="25%">
                  {{ item.location }}
                </v-list-item-avatar>
                <v-list-item-avatar tile width="25%">
                  {{ item.lesson }}
                </v-list-item-avatar>
                <v-list-item-avatar tile width="10%">
                  {{ item.day }}
                </v-list-item-avatar>
                <v-list-item-avatar tile width="15%">
                  {{ item.time }}
                </v-list-item-avatar>
                <v-list-item-avatar tile width="15%">
                  {{ item.teacher }}
                </v-list-item-avatar>
                <v-list-item-avatar tile width="10%">
                  {{ item.number_of_student }}
                </v-list-item-avatar>
              </v-list-item>
              <v-divider></v-divider>
            </div>
          </template>
          <v-list-item>
            <v-list-item-avatar tile width="25%"></v-list-item-avatar>
            <v-list-item-avatar tile width="25%"></v-list-item-avatar>
            <v-list-item-avatar tile width="10%"></v-list-item-avatar>
            <v-list-item-avatar tile width="15%"></v-list-item-avatar>
            <v-list-item-avatar tile width="15%">Total</v-list-item-avatar>
            <v-list-item-avatar tile width="10%"
              ><p class="text-h5 font-weight-bold red--text">
                {{ total_students }}
              </p></v-list-item-avatar
            >
          </v-list-item>
        </v-list>
      </div>
      <div id="excel" class="d-none">
        <table>
          <tr>
            <th>Location</th>
            <th>Lesson</th>
            <th>Day</th>
            <th>Time</th>
            <th>Teacher</th>
            <th>Total</th>
          </tr>
          <tr
            v-for="(item, index) in $store.state.Reports.number_of_students"
            :key="index"
          >
            <td>{{ item.location }}</td>
            <td>{{ item.lesson }}</td>
            <td>{{ item.day }}</td>
            <td>{{ item.time }}</td>
            <td>{{ item.teacher }}</td>
            <td>{{ item.number_of_student }}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Total Students</td>
            <td>
              <p class="font-weight-bold red--text">{{ total_students }}</p>
            </td>
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
      this.$excel("excel", `Number of students`);
    },
  },

  computed: {
    total_students() {
      return this.$store.state.Reports.number_of_students.reduce(
        (total, item) => {
          return total + item.number_of_student;
        },
        0
      );
    },
  },
};
</script>
