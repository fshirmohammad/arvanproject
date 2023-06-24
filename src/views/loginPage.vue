<template> 
  <div class="Login">
     <div class="row">
       <div class="col-lg-4 mx-auto bg-light
        border shadow rounded p-4 mt-3">
         <h1 class="text-center mt3 mb-4 ">LOGIN</h1>
         <form @submit.prevent="login">
           <div class="mb-3">
             <label for="exampleInputEmail1" class="form-label">Email</label>
             <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email" required>
           </div>
           <div class="mb-3">
             <label for="exampleInputPassword1" class="form-label">Password</label>
             <input type="password" class="form-control" id="exampleInputPassword1" v-model="password" :class="{ 'border border-danger': requireFeild }" >
             <div class="mt-3" :class="{ 'd-none': !requireFeild }" >
               Required field
             </div>
           </div>
 
           <button type="submit" class="btn btn-primary form-control">Login</button>
 
           <div class="mt-3">
             <span class="pl-2 text-[#373a3c] text-base font-['HelveticaNeue'] h-[18px]">Don’t have account?</span>
             <span class="pl-[11px] font-bold text-base font-['HelveticaNeue']">
              <router-link class=" px-2" to="/register">Register Now</router-link>
             </span>
           </div>
         </form>
       </div>
     </div>
   </div>
 </template>

<script>

// @ is an alias to /src
export default {
  name: 'loginPage',
  data(){
    return{
      email:'',
      password:'',
      requireFeild:false,
    };
  },
 
    
   methods:{
     login(){

       axios.post('https://api.realworld.io/api/users/login', {
         user: {
           email: this.email,
           password: this.password,
         },
         headers: {
                     'Content-Type': 'application/json'
                 },
       })
   .then(function (response) {
   
     console.log(response.data);
    
   })
   .catch(function (error) {
    
     console.log(error);
     this.requireFeild = true;
   });
     },
   }
  
  }


</script>
