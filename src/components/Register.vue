<template>
  <UserProfile 
    v-if="user && user.id" :person="user"
    @show-form="reset" />
  <RegistrationForm v-else />
</template>

<script>

import RegistrationForm from './RegisterationForm.vue'
import UserProfile from './UserProfile.vue'
import { mapGetters, mapMutations } from 'vuex'
export default {
  components: {
    RegistrationForm,
    UserProfile
  },
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  methods: {
    ...mapMutations({
      remove: 'saveUser'
    }),
    reset () {
      this.remove(null)
      localStorage.removeItem('user')
    }
  }
}
</script>