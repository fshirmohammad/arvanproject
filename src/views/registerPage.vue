<template>
  <div class="register">
    <div class="row">
      <div class="col-lg-4 mx-auto bg-light
       border shadow rounded p-4 mt-3">
        <h1 class="text-center mt3 mb-4 ">Register</h1>
        <form @submit.prevent="registerUser" >
          <div class="mb-3">
            <label for="exampleInputUser" class="form-label">user</label>
            <input type="text" class="form-control" id="exampleInputUser" aria-describedby="emailHelp" v-model="username" >
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" v-model="password" :class="{ 'border border-danger': requireFeild }" >
            <div class="mt-3" :class="{'d-none': !requireFeild }" >
               Required field
             </div>
          </div>
          <button type="submit" class="btn btn-primary form-control">Register</button>

          <div class="mt-3">
            <span class="pl-2 text-[#373a3c] text-base font-['HelveticaNeue'] h-[18px]">Already Registered?</span>
            <span class="pl-[11px] font-bold text-base font-['HelveticaNeue']">
              <router-link class=" px-2" to="/">Login</router-link>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { checkAuth } from './services.js/AuthService';
import { setAuthToken } from './services.js/AuthService';

// @ is an alias to /src
export default {
  name: 'registerPage',
  data(){
    return{
      email:'',
      password:'',
      requireFeild:false,
    };
  },
  methods: {
    

    registerUser() {
   
  const body={
    username:this.username,
    password:this.password,
  };
  axios
  .post("'https://api.realworld.io/api/users/register'",body)

  .then ((Response) => {
    const token =Response.data.token;
    setAuthToken (token);
  
  this.$router.replace("/articles");
  })
  .catch((error)=>{
    console.log(error);
  });
},

},

  
  

}
</script>