<template>
  <div class="main">
    <div class="main-links">
      <nuxt-link to="/">Home Page</nuxt-link>|
      <div @click="logout" v-if="loggedIn" class="logout-link">Logout</div>
      <nuxt-link v-else to="/login">Login Page</nuxt-link>|
      <nuxt-link to="/secret">Secret Page</nuxt-link>
    </div>
    <nuxt />
  </div>
</template>
<script>
import Cookies from 'js-cookie'
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data() {
    return {
      loggedIn: false
    }
  },
  mounted() {
    this.setupFirebase()
  },
  asyncData() {},
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // User is signed in.
          console.log('signed in')
          firebase
            .auth()
            .currentUser.getIdToken(true)
            .then(token => Cookies.set('access_token', token))

          this.loggedIn = true
        } else {
          Cookies.remove('access_token')

          // if (Cookies.set('access_token', 'blah')) {
          // }

          // No user is signed in.
          this.loggedIn = false
          console.log('signed out', this.loggedIn)
        }
      })
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: 'login' })
        })
    }
  }
}
</script>

<style>
.logout-link {
  cursor: pointer;
  text-decoration: underline;
  color: #551a8b;
}
.main {
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.main-links {
  margin: 10px 20px;
  display: flex;
  justify-content: space-around;
  width: 30%;
}
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
