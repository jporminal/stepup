<template>
  <v-dialog
    v-model="$store.state.Schedules.schedule_open"
    width="800"
    @click:outside="close"
  >
    <v-card>
      <v-toolbar color="blue lighten-2" dark flat>
        <v-toolbar-title> Edit </v-toolbar-title>
      </v-toolbar>
      <v-form ref="form" v-model="valid">
        <v-card-text>
          <v-autocomplete
            v-model="$store.state.Schedules.schedule.drid"
            :items="$store.state.Schedules.setting_details.date_ranges"
            item-value="drid"
            item-text="daterangename"
            label="Select Term"
            :rules="[(v) => v > 0 || 'required']"
          />
        </v-card-text>
        <v-card-text>
          <v-autocomplete
            v-model="$store.state.Schedules.schedule.vid"
            :items="$store.state.Schedules.setting_details.locations"
            item-value="vid"
            item-text="venuename"
            label="Location"
            :rules="[(v) => v > 0 || 'required']"
          />
        </v-card-text>
        <v-card-text>
          <v-autocomplete
            v-model="$store.state.Schedules.schedule.weekid"
            :items="$store.state.Schedules.setting_details.weekdays"
            item-value="weekid"
            item-text="weekname"
            label="Day"
            :rules="[(v) => v > 0 || 'required']"
          />
        </v-card-text>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="6">
              <v-menu
                ref="menu_start"
                v-model="time_start"
                :close-on-content-click="false"
                :nudge-right="40"
                :return-value.sync="
                  $store.state.Schedules.schedule.scheduletimestart
                "
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="$store.state.Schedules.schedule.scheduletimestart"
                    label="Time Start"
                    prepend-icon="mdi-clock-time-four-outline"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                  format="24hr"
                  v-if="time_start"
                  v-model="$store.state.Schedules.schedule.scheduletimestart"
                  @click:minute="
                    $refs.menu_start.save(
                      $store.state.Schedules.schedule.scheduletimestart
                    )
                  "
                ></v-time-picker>
              </v-menu>
            </v-col>

            <v-col cols="12" md="6">
              <v-menu
                ref="menu_end"
                v-model="time_end"
                :close-on-content-click="false"
                :nudge-right="40"
                :return-value.sync="
                  $store.state.Schedules.schedule.scheduletimeend
                "
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="$store.state.Schedules.schedule.scheduletimeend"
                    label="Time End"
                    prepend-icon="mdi-clock-time-four-outline"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                  format="24hr"
                  v-if="time_end"
                  v-model="$store.state.Schedules.schedule.scheduletimeend"
                  @click:minute="
                    $refs.menu_end.save(
                      $store.state.Schedules.schedule.scheduletimeend
                    )
                  "
                ></v-time-picker>
              </v-menu>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-text>
          <v-autocomplete
            v-model="$store.state.Schedules.schedule.sid"
            :items="$store.state.Schedules.setting_details.teachers"
            item-value="sid"
            item-text="staffname"
            label="Teacher"
            :rules="[(v) => v > 0 || 'required']"
          />
        </v-card-text>
        <v-card-text>
          <v-autocomplete
            v-model="$store.state.Schedules.schedule.classid"
            :items="$store.state.Schedules.setting_details.lessons"
            item-value="classid"
            item-text="classname"
            label="Lesson"
            :rules="[(v) => v > 0 || 'required']"
          />
        </v-card-text>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model.number="$store.state.Schedules.schedule.schedulestudio"
                type="number"
                label="Studio"
                :rules="[(v) => v > 0 || 'required']"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model.number="
                  $store.state.Schedules.schedule.schedulestudentlimit
                "
                type="number"
                label="Limit"
                :rules="[(v) => v > 0 || 'required']"
              />
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-text>
          <tiptap-vuetify
            v-model="$store.state.Schedules.schedule.schedulenotes"
            :extensions="extensions"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :disabled="!valid" class="text-none primary" @click="save"
            >Save</v-btn
          >
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>
<script>
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History,
  Image,
} from "tiptap-vuetify";
export default {
  name: "save-update",

  components: { TiptapVuetify },

  data() {
    return {
      valid: false,
      time_start: false,
      time_end: false,
      extensions: [
        History,
        Blockquote,
        Link,
        Underline,
        Strike,
        Italic,
        ListItem,
        BulletList,
        OrderedList,
        [
          Heading,
          {
            options: {
              levels: [1, 2, 3],
            },
          },
        ],
        Bold,
        Code,
        HorizontalRule,
        Paragraph,
        HardBreak,
        Image,
      ],
    };
  },

  methods: {
    save() {
        this.$store.commit('ATTENDANCE_LOADING', true)
      this.$store.commit("SCHEDULE", this.$store.state.Schedules.schedule);

      this.$store
        .dispatch("SAVE_SCHEDULE", {
          form: this.$store.state.Schedules.schedule,
        })
        .then((result) => {
          var snackbar = {
            snackbar: true,
            vertical: false,
            timeout: 2000,
            color: "blue lighten-2",
            dark: true,
            top: true,
            bottom: false,
            centered: true,
            left: false,
            right: false,
            text: "Schedule successfully save!",
          };
          this.$store.commit("SNACKBAR", snackbar);

          this.$store.dispatch(
            "ENROLLMENT_SCHEDULE",
            this.$store.state.Enrollments.enrollment_schedule_filter
          );
          this.close();
        })
        .catch((err) => {
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
            text: "Something went wrong. Please reload your browser",
          };
          this.$store.commit("SNACKBAR", snackbar);
        });
    },
    close() {
      var filter = {
        filter: null,
        page: 1,
        per_page: 10,
      };
      this.$store.commit("ENROLLMENT_SCHEDULE_FILTER", filter);
      this.$store.commit("SCHEDULE", {});
      this.$store.commit("SCHEDULE_OPEN", false);
    },
  },
};
</script>
