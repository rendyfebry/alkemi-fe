import cookies from 'js-cookie'
import axios from 'axios'
import { setAuthToken, resetAuthToken } from '~/utils/auth'

axios.defaults.baseURL = process.env.BASE_URL || ''

const token = cookies.get('x-access-token')

if (token) {
	setAuthToken(token)
} else {
	resetAuthToken()
}
