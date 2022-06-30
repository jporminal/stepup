import axios from 'axios'

export default {
    CONTACT_US: (context, payload) => {
        return new Promise((res, rej) => {
            axios.post('/api/CONTACT-US', {
                    contact: payload.contact
                })
                .then((result) => {
                    res(result)
                }).catch((err) => {
                    rej(err)
                });
        })
    }
}