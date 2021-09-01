import axios from 'axios'
import * as settings from '../../settings';

export default axios.create({
    baseURL: `${settings.API_SERVER}/api`
})