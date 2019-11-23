<template>
  <div>
    <h3>Secret Route</h3>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
import { getUserFromCookie, getUserFromSession } from '@/helpers'
export default {
  asyncData({ req, redirect }) {
    if (process.server) {
      console.log('server', req.headers)
      const user = getUserFromCookie(req)
      //   console.log('b', getUserFromCookie(req))
      if (!user) {
        console.log('redirecting server')
        redirect('/login')
      }
    } else {
      var user = firebase.auth().currentUser
      if (!user) {
        redirect('/login')
      }
      //   console.log($nuxt.$router)
    }
  }
}
</script>

<style lang="scss" scoped></style>
