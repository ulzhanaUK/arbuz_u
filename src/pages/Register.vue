<template>
 <div class="uk-position-relative">
  <center>

  <vk-card class="uk-width-1-3@m uk-inline">
  <!-- <form @submit.prevent="signup"> -->
    <form @submit.prevent="signup">
  <a slot="center"><img class="uk-width-1-1@s" src="../assets/logo_1.jpg"></a>
    <h3 style="font-weight: bold;">Регистрация</h3>
    <div class="uk-margin uk-width-1-1">
        <input class="uk-input" required v-model="email" type="email" placeholder="Email">
    </div>
    <div class="uk-margin uk-width-1-1">
        <input class="uk-input" required v-model="password" type="password" placeholder="Пароль">
    </div>
    <button style="background-color:#a6c4b1" class="uk-width-1-1 uk-button-large">Зарегистрироваться</button>
  </form>
  <p>Используя сервис, вы соглашаетесь с Правилами использования.</p>
  <h4 style="color:red;">{{errorlog}}</h4>
</vk-card>

  <vk-card class="uk-width-1-3@m">
       <p>Есть аккаунт? <a href="/#/loginPre">Логин</a></p>
  </vk-card>
  </center>
  <!-- <Footer /> -->
</div>
</template>

<script>
// import axios from 'axios';
export default {
  data() {
    return {
      email: "",
      password: "",
      errorlog:""
    }
  },
  methods: {
    signup() {
      let api='https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBRgHXvvBlw2NBNvLfWTS-DRua0hYML6Us'
      let email = this.email
      let password = this.password
      this.axios.post(api, {
        email, password
      }).then( (result) =>{
        console.log(result)
        this.$router.push('/')
      }, (err) => {
        this.errorlog = "Ошибка! Попробуйте еще раз.",
        console.log(err)
      })
    }
  }
}
</script>

<style scooped>
.button {
  display: inline-block;
  padding: 5px 15px;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #055095;
  border: none;
  border-radius: 8px;
  box-shadow: 0 9px #999;
}
.button:hover {background-color: #005BA1}
.button:active {
  background-color: #055095;
  box-shadow: 0 3px #666;
  transform: translateY(4px);
}
.uk-position-relative {
  background-color: rgb(242, 246, 252);
}
</style>