<template>
  <v-dialog
    v-model="$store.state.Lessons.lesson_open"
    width="800"
    @click:outside="close"
  >
    <v-card>
      <v-toolbar color="blue lighten-2" dark flat>
        <v-toolbar-title>
          {{ title }}
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="Lesson"
              v-model="$store.state.Lessons.lesson.classname"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Price"
              v-model.number="$store.state.Lessons.lesson.price"
              type="number"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Xero"
              v-model="$store.state.Lessons.lesson.xero"
              type="number"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="overflow-y-auto" height="200">
              <v-card-text>
                <v-checkbox
                  v-model="$store.state.Lessons.lesson.categories"
                  v-for="(item, index) in $store.state.Lessons
                    .lesson_categories"
                  :key="index"
                  :value="item.id"
                  :label="item.name"
                />
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-checkbox
              v-model="$store.state.Lessons.lesson.isVisible"
              label="is active"
            />
          </v-col>
          <v-col cols="12">
            <tiptap-vuetify
              v-model="$store.state.Lessons.lesson.classnotes"
              :extensions="extensions"
            />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="text-none primary" @click="save">Save</v-btn>
      </v-card-actions>
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
  name: "manage-lessons",

  components: { TiptapVuetify },

  data() {
    return {
      valid: false,
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
        this.$store.commit('LESSON_LOADING', true)
      this.$store.commit("LESSON", this.$store.state.Lessons.lesson);
      this.$store
        .dispatch("LESSON_SAVE", {
          form: this.$store.state.Lessons.lesson,
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
            text: "Lesson successfully save!",
          };
          this.$store.commit('LESSON_LOADING', false)
          this.$store.commit("SNACKBAR", snackbar);
          this.$store.dispatch(
            "LESSONS",
            this.$store.state.Lessons.lesson_filter
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
      this.$store.commit("LESSON_FILTER", filter);
      this.$store.commit("LESSON", {});
      this.$store.commit("LESSON_OPEN", false);
    },
  },

  computed: {
    title() {
      return this.$store.state.Lessons.lesson.classid > 0
        ? "Edit " + this.$store.state.Lessons.lesson.classname
        : "New Lesson";
    },
  },
};
</script>
