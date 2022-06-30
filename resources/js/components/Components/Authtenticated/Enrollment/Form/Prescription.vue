<template>
    <div>
        <v-card flat>
            <v-card-text>
                <v-row>
                    <!-- anti septic -->
                    <v-col cols="3">
                        <v-checkbox
                            v-model="
                                $store.state.Enrollments.enrollment_child
                                    .prescription.antiseptic
                            "
                            label="Antiseptic Lotion / Liquid / Wipe"
                            @change="text_input"
                        />
                    </v-col>
                    <v-col cols="8">
                        <v-text-field
                            label="Details"
                            v-model="
                                $store.state.Enrollments.enrollment_child
                                    .prescription.textantiseptic
                            "
                            :disabled="
                                $store.state.Enrollments.enrollment_child
                                    .prescription.antiseptic
                                    ? true
                                    : false
                            "
                            @input="text_input"
                        />
                    </v-col>
                    <!-- plasters -->
                    <v-col cols="3">
                        <v-checkbox
                            v-model="
                                $store.state.Enrollments.enrollment_child
                                    .prescription.plasters
                            "
                            label="Plasters"
                            @change="text_input"
                        />
                    </v-col>
                    <v-col cols="8">
                        <v-text-field
                            label="Details"
                            v-model="
                                $store.state.Enrollments.enrollment_child
                                    .prescription.textplasters
                            "
                            :disabled="
                                $store.state.Enrollments.enrollment_child
                                    .prescription.plasters
                                    ? true
                                    : false
                            "
                            @input="text_input"
                        />
                    </v-col>
                    <!-- Insect Bite Cream -->
                    <v-col cols="3">
                        <v-checkbox
                            v-model="
                                $store.state.Enrollments.enrollment_child
                                    .prescription.insectbite
                            "
                            label="Insect Bite Cream / Lotion"
                            @change="text_input"
                        />
                    </v-col>
                    <v-col cols="8">
                        <v-text-field
                            label="Details"
                            v-model="
                                $store.state.Enrollments.enrollment_child
                                    .prescription.textinsectbite
                            "
                            :disabled="
                                $store.state.Enrollments.enrollment_child
                                    .prescription.insectbite
                                    ? true
                                    : false
                            "
                            @input="text_input"
                        />
                    </v-col>
                    <!-- First Aid Ointment -->
                    <v-col cols="3">
                        <v-checkbox
                            v-model="
                                $store.state.Enrollments.enrollment_child
                                    .prescription.firstaid
                            "
                            label="First Aid Ointment"
                            @change="text_input"
                        />
                    </v-col>
                    <v-col cols="8">
                        <v-text-field
                            label="Details"
                            v-model="
                                $store.state.Enrollments.enrollment_child
                                    .prescription.textfirstaid
                            "
                            :disabled="
                                $store.state.Enrollments.enrollment_child
                                    .prescription.firstaid
                                    ? true
                                    : false
                            "
                            @input="text_input"
                        />
                    </v-col>
                    <!-- Calpol -->
                    <v-col cols="3">
                        <v-checkbox
                            v-model="
                                $store.state.Enrollments.enrollment_child
                                    .prescription.calpol
                            "
                            label="Calpol / Nuerofen / Panadol"
                            @change="text_input"
                        />
                    </v-col>
                    <v-col cols="8">
                        <v-text-field
                            label="Details"
                            v-model="
                                $store.state.Enrollments.enrollment_child
                                    .prescription.textcalpol
                            "
                            :disabled="
                                $store.state.Enrollments.enrollment_child
                                    .prescription.calpol
                                    ? true
                                    : false
                            "
                            @input="text_input"
                        />
                    </v-col>
                    <!-- Ice -->
                    <v-col cols="3">
                        <v-checkbox
                            v-model="
                                $store.state.Enrollments.enrollment_child
                                    .prescription.ice
                            "
                            label="Ice"
                            @change="text_input"
                        />
                    </v-col>
                    <v-col cols="8">
                        <v-text-field
                            label="Details"
                            v-model="
                                $store.state.Enrollments.enrollment_child
                                    .prescription.textice
                            "
                            :disabled="
                                $store.state.Enrollments.enrollment_child
                                    .prescription.ice
                                    ? true
                                    : false
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
    name: "prescription-form",

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
