<template>
  <!-- <v-container fluid mt-n3> -->
  <v-row no-gutters>
    <v-col cols="12" xs="12" md="3" v-for="offer in offered" :key="offer.text">
      <!-- <v-btn block :color="offer.color" x-large class="text-none" dark tile>
                        {{ offer.text }}
                    </v-btn> -->
      <v-card :color="offer.color" class="text-none" dark tile>
        <v-card-text>
          <h1
            :class="
              $vuetify.breakpoint.md
                ? 'caption text-center'
                : $vuetify.breakpoint.sm
                ? 'caption text-center'
                : $vuetify.breakpoint.lg
                ? 'body-2 text-center'
                : 'body-2 text-center'
            "
          >
            {{ offer.text }}
          </h1>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <!-- </v-container> -->
</template>
<script>
export default {
  name: "StepUp-Offered",
  data() {
    return {
      offered: [
        { text: "Dance & Performing Arts", color: "#5680E9" },
        { text: "Competition Teams & Elite Training", color: "#84CEEB" },
        { text: "Fitness", color: "#8860D0" },
        { text: "Camps", color: "#5AB9EA" },
      ],
    };
  },
};
</script>
