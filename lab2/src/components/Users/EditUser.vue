<template>
    <div class="row mt-2">
        <div class="col-12 d-flex flex-column justify-content-center align-items-center">
            <h1 style="color: #FFF8DC;"> Update User </h1>
            <div class="card" style="max-width: 700px;">
                <div class="card-body d-flex flex-column justify-content-center align-items-center">
                    <form class="row g-3" @submit="addUser()">
                        <div class="col-md-6">
                          <label for="firstName" class="form-label">firstName</label>
                          <input type="text"    v-model.trim.lazy="FormValue.firstName" class="form-control" id="firstName" placeholder="Enter firstName" required>
                        </div>
                        <div class="col-md-6">
                          <label for="lastName" class="form-label">lastName</label>
                          <input type="text"  v-model.trim.lazy="FormValue.lastName" class="form-control" id="lastName" required>
                        </div>
                        <div class="col-md-6">
                          <label for="email" class="form-label">Email</label>
                          <input type="text"  v-model.trim.lazy="FormValue.email" class="form-control" id="email" required>
                        </div>
                          
                        <div class="col-md-6">
                          <label for="age" class="form-label">Age</label>
                          <input type="text" v-model.lazy.number="FormValue.age" class="form-control" id="age" required>
                        </div>
                          
        
                        
                        <div class="col-12">
                          <button class="btn" style="background-color: #6C0345; color: #FFF8DC;">Update</button>
                        </div>
                      </form>
                </div>
            </div>          
        </div>
    </div>
  </template>
  
  <script>
  import { mapState } from "vuex";
    export default {
        name: "EditUser",
        data() {
            return {
                id: "",
                FormValue: {
                    firstName: "",
                    lastName: "",
                    email: "",
                    age: 0,
                },
            };
        },

        computed: {
            ...mapState({
                user: "user",
            }),
        },

        watch: {
            user(newUser) {
                if (newUser) {
                    this.FormValue = { ...newUser };
                }
            },
        },

        created() {
            this.id = this.$route.params.id;
            this.$store.dispatch("getUserById", this.id);
        },

        methods: {
            editUser() {
                const { firstName, lastName, email, age } = this.FormValue;
                const userInfo = { firstName, lastName, email, age };
                userInfo["id"] = this.id;
                this.$store.dispatch("updateUser", userInfo);
                this.$router.push("/Users");
            },
        },
    };
  </script>
  
  <style scoped>
  </style>
  
  
  