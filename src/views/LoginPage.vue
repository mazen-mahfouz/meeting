<template>
    <div id="auth">
        <div id="nav">
          <router-link to="/login">Login</router-link> 
        </div>
    
        <p> Enter your username to start video chat </p>
        <p>Create an account through your CometChat dashboard or login with one of our test users (superhero1, superhero2)</p>

        <form v-on:submit.prevent="authLoginUser">
            <div class="form-group">
                <input name="username" id="username" class="form-control" placeholder="Enter your username" v-model="username"/>
            </div>

            <div class="form-group">
                <button type="submit" class="btn btn-success"> Login <span v-if="showSpinner" class="fa fa-spin fa-spinner"></span></button>
            </div>
        </form>
    </div>
</template>


<script>
import { CometChat } from "@cometchat-pro/chat";
export default {
  name: 'HomePage',
  data() {
    return {
      username: "",
      showSpinner: false
    };
  },
  methods: {
    authLoginUser() {
      var apiKey = '1b7e1361355e96c2772bf9364a196a4f85ec76d3';
      this.showSpinner = true;

      CometChat.login(this.username, apiKey).then(
        () => {
          this.showSpinner = false;
          this.$router.push('/home');
        },
        error => {
          this.showSpinner = false;
          console.log("Login failed with error:", error.code);
        }
      );
    }
  }
};
</script>
