<template></template>
<script>
export default {
    name: "logout",
    created() {
        this.$store
            .dispatch("DESTROY_TOKEN")
            .then(result => {
                localStorage.removeItem("ze-zle");
                window.location.replace("/");
            })
            .catch(err => {});
    }
};
</script>
