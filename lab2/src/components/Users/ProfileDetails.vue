<template>
    <div class="row mt-5">
        <div class="col-12  ">
            <div class="card mb-3" >
                <div class="row">
                  <div class="col-md-6">
                    <img :src="user.image" style="height: 450px; width: 500px;" class="img-fluid rounded-start" alt="..">
                  </div>
                  <div class="col-md-6" style="margin-top: 100px;">
                    <div class="card-body ">
                        <h5 class="card-title">FullName:{{ user.firstName }} {{ user.lastName }}</h5>
                        <p class="card-text">Email:   {{ user.email }}</p>
                        <p class="card-text">Phone:    {{ user.phone }}</p>
                        <p class="card-text">BirthData:     {{ user.birthDate }}</p>
                        
                    </div>
    
                  </div>
                </div>
              </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "ProfileDetails",
      data() {
          return {
              id: "",
          };
      },

      computed: {
          user() {
              return this.$store.state.user;
          },
      },

      created() {
          this.id = this.$route.params.id;
          this.$store.dispatch("getUserById", this.id);
      },
  };
</script>

<style scoped>

</style>