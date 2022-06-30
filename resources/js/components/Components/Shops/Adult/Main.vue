<template>
  <v-card flat :loading="$store.state.Motor_city.product_adult_open">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-row>
      <v-col
        cols="12"
        md="4"
        v-for="selection in selections"
        :key="selection.title"
      >
        <v-card 
              height="180"
          @click="selected(selection)"
        >
          
            <v-row
              class="fill-height"
              align="center"
              justify="end"
            >
              <v-col>
                <v-card-text>
                  <p class="text-center text-h4">{{ selection.title }}</p>
                </v-card-text>
              </v-col>
            </v-row>
        </v-card>
      </v-col>
      <adult_details />
    </v-row>
  </v-card>
</template>
<script>
export default {
  name: "adult-classes-main-view",

  components: {
    adult_details: () => import('./Details')
    },

  data() {
    return {
      selections: [
        {
          title: 'Pay as you go – Motor City',
          class_ids: [3, 4, 7, 10, 14, 15, 16, 105, 140, 554, 555, 556, 557, 558, 559, 560, 561],
          is_unli: false 
        },
        {
          title: 'x1 month unlimited classes – Motor City',
          class_ids: [571],
          is_unli: true 
        },
        {
          title: 'x3 months unlimited classes – Motor City',
          class_ids: [572],
          is_unli: true 
        }
      ]
    }
  },

  methods: {
    selected(e) {
      var filter = {
        per_page: 50,
        class_ids: e.class_ids,
        is_unli: e.is_unli,
      }
      this.$store.commit('MOTOR_CITIES_ADULT_CLASSES', e.is_unli)
      this.$store.dispatch('MOTOR_CITIES_ADULT_CLASSES', filter)
    },
  },

  computed: {
    
  },
};
</script>
