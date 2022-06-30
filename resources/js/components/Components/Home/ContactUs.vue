<template>
  <div class="slant-card-others-container">
    <div class="slant-card-others">
      <div class="slant-card-others-inner">
        <v-lazy
          v-model="isActive"
          :option="{ threshold: 0.5 }"
          transition="fade-transition"
        >
          <v-container>
            <v-row align="center" justify="center">
              <v-col cols="12" xs="12" md="5">
                <v-card>
                  <v-card-title>
                    <h1 class="display-1">Contact Us</h1>
                  </v-card-title>
                  <v-card-text>
                    <v-form ref="form" v-model="valid">
                      <v-row>
                        <v-col cols="12">
                          <v-text-field
                            label="Name"
                            v-model="contact_us.name"
                            :rules="formRules.name"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            label="Email Address"
                            v-model="contact_us.email"
                            :rules="formRules.email"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            type="number"
                            label="Contact Number"
                            v-model="contact_us.contact"
                            :rules="formRules.contact"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-textarea
                            label="Message"
                            v-model="contact_us.message"
                            :rules="formRules.message"
                          ></v-textarea>
                        </v-col>
                      </v-row>
                    </v-form>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn :disabled="!valid" color="primary" @click="send">
                      Send
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col cols="12" xs="12" md="5">
                <div style="color: #525252">
                  <h1 class="text-center display-1">Keep in Touch!</h1>
                  <!-- <br>
                                    <h3> Visit Us </h3>
                                    <h4 class="ml-5"> StepUp Academy, 113 Apex Atrium, Motor City, Dubai, United Arab Emirates </h4> -->
                  <br />
                  <h3>Call Us</h3>
                  <h4 class="ml-5">
                    Phone: <a href="tel:+97144534360"> +971 4 453 4360 </a>
                    <br />
                    Mobile: <a href="tel:+971558552797"> +971 55 855 2797 </a>
                    <br />
                    <!-- Email: <a href="mailto:info@stepup.ae"> info@stepup.ae </a> -->
                  </h4>
                  <br />
                  <h3>Office Timings</h3>
                  <h4 class="ml-5">
                    Monday - Saturday: 9:00am - 7:00pm<br />
                    Sunday: Closed
                  </h4>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-lazy>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "contact-form",
  data() {
    return {
      currentItem: "tab-Contact",
      isActive: false,
      valid: true,
      contact_us: {
        name: "",
        email: "",
        contact: "",
        message: "",
        status: "inprogress",
        type: "tab-Contact",
      },
      items: ["Contact", "Complaint"],
      formRules: {
        name: [(v) => !!v || "Name is required"],
        email: [
          (v) => !!v || "Email address is required",
          (v) => /.+@.+/.test(v) || "E-mail must be valid",
        ],
        contact: [(v) => !!v || "Contact is required"],
        message: [(v) => !!v || "Message is required"],
      },
    };
  },
  methods: {
    fresh() {
      this.$refs.form.reset();
    },

    send() {
    //   this.contactUS();
    this.$store.dispatch('CONTACT_US', {
            contact: this.contact_us,
        })
        .then((result) => {
            var snackbar = {
                snackbar: true,
                vertical: true,
                timeout: 2000,
                color: "blue lighten-2",
                dark: true,
                top: true,
                bottom: false,
                centered: true,
                left: false,
                right: false,
                text: "Thank you. We will contact you soon!",
            };
            this.$store.commit("SNACKBAR", snackbar);
            this.valid = false;
            this.fresh();
        }).catch((err) => {
            console.log(err)
        });
    },

  },
};
</script>
