import axios from 'axios'

export default {
  auth: {
    me: () => axios.get('/api/auth/me'),
    login: data => axios.post('/api/auth/login', data),
    google: data => axios.post('/api/auth/google', data),
  },
}
