<template>
  <v-card class="mt-2">
    <v-card-text>
      <label for="email">Email Address</label>
      <v-autocomplete
        v-model="$store.state.Emails.email_filtered"
        :items="$store.state.Emails.email_filtered"
        height="100"
        id="email"
        multiple
        cache-items
        :allow-overflow="false"
        class="overflow-y-auto"
        flat
        solo
        disable-lookup
        readonly
      >
      </v-autocomplete>
      <p>Number of email(s) {{ $store.state.Emails.email_filtered.length }}</p>
      <div class="text-right">
        <v-btn class="text-none error" @click="remove" small
          >Remove emails</v-btn
        >
      </div>
    </v-card-text>
    <v-card-text v-if="is_sending">
      <v-row>
        <v-col cols="12" md="10">
          <v-progress-linear
            v-if="is_sending"
            :value="count"
            height="15"
            :buffer-value="$store.state.Emails.email_filtered.length"
          ></v-progress-linear>
        </v-col>
        <v-col cols="12" md="2">
          <v-card-text v-if="success">
            <v-icon color="green" x-large> mdi-check-bold </v-icon>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-text>
      <v-text-field label="Subject" v-model="subject" />
    </v-card-text>
    <v-card-text>
      <tiptap-vuetify v-model="body" :extensions="extensions" />
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn class="text-none primary" :loading="is_sending" @click="send"
        >Send</v-btn
      >
    </v-card-actions>
  </v-card>
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
  name: "email-view",

  components: { TiptapVuetify },

  data() {
    return {
      is_sending: false,
      subject: null,
      body: ``,
      count: 0,
      success: false,
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

  watch: {
    count() {
      if (this.count == this.$store.state.Emails.email_filtered.length) {
        this.success = true;
        this.remove();
        this.subject = null;
        this.body = ``;
        setTimeout(() => {
          this.is_sending = false;
          this.success = false;
        }, 5000);
      }
    },
  },

  methods: {
    remove() {
      this.$store.commit("EMAIL_FILTERED", []);
    },
    send() {
      this.email_template(this.$store.state.Emails.email_filtered);
      this.is_sending = true;
    },
    email_template(emails) {
      for (var i = 0; i < emails.length; i++) {
        Email.send({
          SecureToken: "29491cb9-4953-44f4-ac2e-8292c80452c8",
          To: emails[i],
          From: "info@stepup.ae",
          Bcc: "vincent@stepup.ae",
          Subject: this.subject,
          Body: `<div style="margin: 0; padding: 0;">
                    <table align="center" border="1" cellpadding="0" cellspacing="0" width="600">
                        <tr>
                            <td align="center" bgcolor="#fff" style="padding: 20px 0 0 0;">
                                <img src="https://stepup.ae/img/logoStepUp.png" alt="StepUp Academy" width="130" height="100" style="display: block;" />
                                <h1 style="color:#000">StepUp Academy</h1>
                                <h3>StepUp Academy</h3>
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="#fff" style="padding: 40px 30px 40px 30px;">
                                ${this.body}
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="#49a0d9 " style="padding: 30px 30px 30px 30px;">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tr>
                                        <td width="75%" style="color: #fff; font-family: Arial, sans-serif; font-size: 14px;">&copy; StepUp Academy<br/> <a href="mailto:info@stepup.ae" style="color: #fff; text-decoration: none;"><font color="#000">info@stepup.ae</font></a></td>
                                        <td align="right">
                                            <table border="0" cellpadding="0" cellspacing="0">
                                                <tr>
                                                    <td><a href="https://www.instagram.com/step_up_academy/" target="_blank">
                                                        <img src="https://enrollment.stepup.ae/img/instagram.png" alt="Instagram" width="38" height="38" style="display: block;" border="0" /></a></td><td><a href="https://www.facebook.com/StepUp-Academy-208684865876848/" target="_blank"><img src="https://enrollment.stepup.ae/img/facebook.png" alt="Facebook" width="38" height="38" style="display: block;" border="0" /></a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </div>`,
        }).then((result) => {
          this.count = i;
        });
      }
    },
  },
};
</script>
