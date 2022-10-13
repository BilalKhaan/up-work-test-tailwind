import axios  from "../axios";
import Maper from './maper'

async function login (payload) {
  const response = await axios.post('/widget/visitors', payload)
  // there should be a success flag
  return response.status == 201 ? Maper.mapLogin(response.data) : response.data
}
async function userProfile () {
  const response = await axios.get('/widget/visitors/profile')
  // there should be a success flag
  return response.status == 200 ? Maper.userData(response.data) : response.data
}
export default {
  login,
  userProfile
}