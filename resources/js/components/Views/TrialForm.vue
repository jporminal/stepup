<template>
  <div>
    <v-container>
      <v-row align="center" justify="center">
        <v-col :cols="$vuetify.breakpoint.mdAndUp ? '10' : '12'">
          <div >
            <trial_form />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "enrollment-form",

  components: {
    trial_form: () => import("../Components/Form/Trial/Form"),
  },

  created() {
    var form = {
      location: "Motor City",
      children: [
        {
          first_name: '',
          family_name: '',
          nationality: '',
          gender: "Female",
          dob: '',
          dob_open: false,
          medical_status: 'Yes',
          medical_history: ''
        },
      ],
      mother: {
        first_name: '',
        family_name: '',
        nationality: '',
        home_number: 0,
        mobile_number: 0,
        work_number: 0,
        company: '',
        email: '',
      },
      father: {
        first_name: '',
        family_name: '',
        nationality: '',
        home_number: 0,
        mobile_number: 0,
        work_number: 0,
        company: '',
        email: '',
      },
      address: {
        development: '',
        street: '',
        building: '',
        landmark: '',
        POBox: '',
        emirate: '',
        same: true,
      },
      medical: {
        allergies: false,
        textallergies: '',
        respiratory: false,
        textrespiratory: '',
        physical: false,
        textphysical: '',
        vision: false,
        textvision: '',
        hearing: false,
        texthearing: '',
        otherhealth: false,
        textotherhealth: '',
      },
      prescription: {
        antiseptic: true,
        textantiseptic: '',
        plasters: true,
        textplasters: '',
        insectbite: true,
        textinsectbite: '',
        firstaid: true,
        textfirstaid: '',
        calpol: true,
        textcalpol: '',
        ice: true,
        textice: '',
      },
      emergency: {
        person_1: {
          first_name: '',
          family_name: '',
          contact_1: '',
          contact_2: '',
          contact_3: '',
          relation: '',
        },
        person_2: {
          first_name: '',
          family_name: '',
          contact_1: '',
          contact_2: '',
          contact_3: '',
          relation: '',
        },
      },
    };
    this.$store.commit("ENROLLMENT", form);
  },

  data() {
    return {
      steps: 1,
      seo: {
        title: "StepUp Academy",
        description:
          "We offer a great selection of Dance and Fitness classes to cater for all ages and abilities. We offer trial classes and afterwards our teachers will be happy to give you feedback, this will ensure we find a suitable class for you or your child.s",
        site_name: "StepUp Academy",
        img: "",
        site: "https://stepup.ae/",
      },
    };
  },

  metaInfo() {
    return {
      title: this.seo.title,
      titleTemplate: "%s - Online Enrollment Form",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: this.seo.description },
        {
          name: "keywords",
          content: "StepUp Academy, Enrollment Form, Online Form",
        },
        // OpenGraph data (Most widely used)
        { property: "og:title", content: this.seo.title },
        { property: "og:site_name", content: this.seo.site_name },
        // The list of types is available here: http://ogp.me/#types
        { property: "og:type", content: "article" },
        // Should the the same as your canonical link, see below.
        { property: "og:url", content: this.seo.site + "enrollment-form" },
        {
          property: "og:image",
          content: this.seo.site + "img/logo.jpg",
        },
        // Often the same as your meta description, but not always.
        { property: "og:description", content: this.seo.description },

        // Twitter card
        { name: "twitter:card", content: "summary" },
        { name: "twitter:site", content: this.seo.site + "enrollment-form" },
        { name: "twitter:title", content: this.seo.title },
        { name: "twitter:description", content: this.seo.description },
        // Your twitter handle, if you have one.
        { name: "twitter:creator", content: "@vmbcarabbacan" },
        {
          name: "twitter:image:src",
          content: this.seo.site + "img/logo.jpg",
        },

        // Google / Schema.org markup:
        { itemprop: "name", content: this.seo.title },
        { itemprop: "description", content: this.seo.description },
        {
          itemprop: "image",
          content: this.seo.site + "img/logo.jpg",
        },
      ],
    };
  },
};
</script>
