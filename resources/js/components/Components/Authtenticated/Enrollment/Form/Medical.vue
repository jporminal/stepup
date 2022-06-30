<template>
    <div>
        <v-card flat>
            <v-card-text>
                <v-row>
                    <!-- allergy -->
                    <v-col cols="12" md="3">
                        <v-checkbox
                            v-model="
                                $store.state.Enrollments.enrollment_child
                                    .medical.allergies
                            "
                            label="Allergies"
                            @change="text_input"
                        />
                    </v-col>
                    <v-col cols="12" md="8">
                        <v-text-field
                            label="Details"
                            v-model="
                                $store.state.Enrollments.enrollment_child
                                    .medical.textallergies
                            "
                            :disabled="
                                $store.state.Enrollments.enrollment_child
                                    .medical.allergies
                                    ? false
                                    : true
                            "
                            @input="text_input"
                        />
                    </v-col>
                    <!-- respiratory -->
                    <v-col cols="12" md="3">
                        <v-checkbox
                            v-model="
                                $store.state.Enrollments.enrollment_child
                                    .medical.respiratory
                            "
                            label="Respiratory Difficulties"
                            @change="text_input"
                        />
                    </v-col>
                    <v-col cols="12" md="8">
                        <v-text-field
                            label="Details"
                            v-model="
                                $store.state.Enrollments.enrollment_child
                                    .medical.textrespiratory
                            "
                            :disabled="
                                $store.state.Enrollments.enrollment_child
                                    .medical.respiratory
                                    ? false
                                    : true
                            "
                            @input="text_input"
                        />
                    </v-col>
                    <!-- physical -->
                    <v-col cols="12" md="3">
                        <v-checkbox
                            v-model="
                                $store.state.Enrollments.enrollment_child
                                    .medical.physical
                            "
                            label="Physical Disability"
                            @change="text_input"
                        />
                    </v-col>
                    <v-col cols="12" md="8">
                        <v-text-field
                            label="Details"
                            v-model="
                                $store.state.Enrollments.enrollment_child
                                    .medical.textphysical
                            "
                            :disabled="
                                $store.state.Enrollments.enrollment_child
                                    .medical.physical
                                    ? false
                                    : true
                            "
                            @input="text_input"
                        />
                    </v-col>
                    <!-- vision -->
                    <v-col cols="12" md="3">
                        <v-checkbox
                            v-model="
                                $store.state.Enrollments.enrollment_child
                                    .medical.vision
                            "
                            label="Vision Impairment"
                            @change="text_input"
                        />
                    </v-col>
                    <v-col cols="12" md="8">
                        <v-text-field
                            label="Details"
                            v-model="
                                $store.state.Enrollments.enrollment_child
                                    .medical.textvision
                            "
                            :disabled="
                                $store.state.Enrollments.enrollment_child
                                    .medical.vision
                                    ? false
                                    : true
                            "
                            @input="text_input"
                        />
                    </v-col>
                    <!-- hearing -->
                    <v-col cols="12" md="3">
                        <v-checkbox
                            v-model="
                                $store.state.Enrollments.enrollment_child
                                    .medical.hearing
                            "
                            label="Hearing Impairment"
                            @change="text_input"
                        />
                    </v-col>
                    <v-col cols="12" md="8">
                        <v-text-field
                            label="Details"
                            v-model="
                                $store.state.Enrollments.enrollment_child
                                    .medical.texthearing
                            "
                            :disabled="
                                $store.state.Enrollments.enrollment_child
                                    .medical.hearing
                                    ? false
                                    : true
                            "
                            @input="text_input"
                        />
                    </v-col>
                    <!-- other health -->
                    <v-col cols="12" md="3">
                        <v-checkbox
                            v-model="
                                $store.state.Enrollments.enrollment_child
                                    .medical.otherhealth
                            "
                            label="Other Health Concern"
                            @change="text_input"
                        />
                    </v-col>
                    <v-col cols="12" md="8">
                        <v-text-field
                            label="Details"
                            v-model="
                                $store.state.Enrollments.enrollment_child
                                    .medical.textotherhealth
                            "
                            :disabled="
                                $store.state.Enrollments.enrollment_child
                                    .medical.otherhealth
                                    ? false
                                    : true
                            "
                            @input="text_input"
                        />
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
export default {
    name: "medical-form",

    methods: {
        text_input() {
            this.$store.commit(
                "ENROLLMENT_CHILD",
                this.$store.state.Enrollments.enrollment_child
            );
        }
    }
};
</script>
