<template>
  <div>
    <div class="text-right d-print-none mt-2">
      <v-btn class="text-none" small @click="print">
        <v-icon>mdi-printer</v-icon> Print</v-btn
      >
    </div>
    <v-row justify="center" id="print">
      <v-col
        cols="12"
        v-for="(item, index) in $store.state.Attendance.attendance_download"
        :key="index"
      >
        <p style="text-align: center; font-size: 24px; font-weight: bold">
          {{ item.lesson }}
        </p>
        <p style="text-align: center; font-size: 16px">
          {{ item.day_time }}
        </p>
        <p style="text-align: center; font-size: 16px">
          {{ item.teacher }}
        </p>
        <p style="text-align: center; font-size: 16px">
          {{ item.location }}
        </p>
        <table style="width: 100%; border: 1px solid black">
          <tr>
            <th style="border: 1px solid black"></th>
            <th
              v-for="(date, i) in item.dates"
              :key="i"
              style="border: 1px solid black"
            >
              {{ date | date_attendance }}
            </th>
          </tr>
          <tr v-for="(student, j) in item.students" :key="j">
            <td style="width: 20%; border: 1px solid black">
              {{ student.student }}
            </td>
            <td
              v-for="(attendance, k) in student.attendance"
              :key="k"
              style="border: 1px solid black; text-align: center"
            >
              <i
                v-if="attendance.attendancestatus == 1"
                style="color: green"
                class="fas fa-check"
              ></i>
              <i
                v-else-if="attendance.attendancestatus == 2"
                style="color: red"
                class="fas fa-times"
              ></i>
              <p v-else></p>
            </td>
          </tr>
        </table>
        <div style="page-break-after: always"></div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "attendance-download-view",

  methods: {
    print() {
      var print = document.getElementById("print").outerHTML;
      this.$print(print, 1);
    },
  },
};
</script>
<style lang="scss" scoped>
.v-application p {
  margin-bottom: 0px;
}
</style>
