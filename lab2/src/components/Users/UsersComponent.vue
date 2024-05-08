<template>
    <div class="row mt-5">
      <div class="col-4 col-md-6 col-lg-4 mt-5 mb-5"   v-for="{ id, firstName, lastName, age, image } in Users"
      :key="id">
          <div class="card" style="width: 18rem;height: 400px; background-color: #FFF8DC">
              <img :src="image" class="card-img-top" height="200px" alt="...">
              <div class="card-body">
                  <h5 class="card-title text-center">{{ firstName }} {{ lastName }}</h5>
                  <h5 class="card-title text-center">{{ age }}</h5>
                    
                   
                <router-link class="btn mx-1" style="background-color: #6C0345; color: #FFF8DC;"  :to="`/Users/${id}`">Details</router-link>
                <router-link class="btn" style="background-color: #6C0345; color: #FFF8DC;"  :to="`/UpdateUser/${id}`">Update</router-link>

                <button  class="btn mx-1" style="background-color: #6C0345; color: #FFF8DC;"  @click="deleteUser(id)">Delete</button>

               
              </div>
          </div>
      </div>
  </div>
  </template>
  
  <script>
  
   export default {
          name: "UsersComponent",
          computed: {
              Users() {
                  return this.$store.state.users;
              },
          },
          created() {
              this.$store.dispatch("getAllUsers");
          },
  
          methods: {
              deleteUser(id) {
                  this.$store.dispatch("deleteUser", id);
              },
          },
      };
  </script>
  
  
<style scoped>
@media screen and (max-width: 767px) {
    .col-lg-4 {
        margin-left: 40px;
        flex: 0 0 100%;
        max-width: 100%;
    }
}
</style>
