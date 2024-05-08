<template>
	<div class="p-4 sm:ml-64 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div class="row mt-5">
            <div class="col-4 col-md-6 col-lg-4 mt-5 mb-5"  v-for="{ id, firstName, lastName, age, image } in users"
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
    </div>
</template>

<script>
import { computed, onMounted, watch } from 'vue';
import { useStore } from 'vuex';

export default {
	name: 'User-comp',
	setup() {
		let store = useStore();
		let users = computed(() => store.state.users);

		watch(users, (newUser) => {
			if (newUser !== users.value) {
				store.dispatch('getAllUsers');
			}
		});

		onMounted(() => {
			store.dispatch('getAllUsers');
		});
		const deleteUser = (id) => {
			store.dispatch('deleteUser', id);
		};
		return {
			users,
			deleteUser,
		};
	},
};
</script>

<style scoped></style>