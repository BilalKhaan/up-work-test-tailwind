function mapLogin (user) {
  const data = {
    id: user.data.id,
    name: user.data.name,
    token: user.meta && user.meta.token
  }
  return {
    success: true,
    data
  }
}

function userData (info) {
  const user = info.data
  const company = info.data.company
  const data =  {
    id: user.id,
    key: user.uuid,
    name: user.name,
    email: user.email,
    phone: user.phone,
    avatar: user.profile_photo,
    company: {
      id: company.id,
      key: company.uuid,
      name: company.name,
      timezone: company.timezone,
      avatar: company.profile_photo,
    }
  }
  return {
    success: true,
    data
  }
}

export default {
  mapLogin,
  userData
}