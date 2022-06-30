export default {
    state: {
        snackbar: {
            snackbar: false,
            vertical: true,
            timeout: 2000,
            color: 'blue lighten-2',
            dark: true,
            top: true,
            bottom: false,
            centered: true,
            left: false,
            right: false,
            text: ''
        }
    },

    mutations: {
        SNACKBAR: (state, payload) => {
            state.snackbar = payload
        }
    }
}