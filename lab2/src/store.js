import { createStore } from 'vuex';
import axios from 'axios';

const baseURL = 'http://localhost:3000/users';

const store = createStore({
	state() {
		return {
			users: [],
			user: {},
		};
	},

	mutations: {
		GET_ALL_USERS(state, users) {
			state.users = users;
		},

        GET_USER_BY_ID(state, user) {
            state.user = user;
          },

		CREATE_USER(state, userInfo) {
			state.products.push(userInfo);
		},

		UPDATE_USER(state, userInfo) {

			const index = state.users.findIndex((p) => p.id === userInfo.id);
			if (index !== -1) {
				state.users[index] = userInfo;
			}
		},

		DELETE_USER(state, id) {
          
        state.users = state.users.filter((user) => user.id !== id);
           
		}
	},

	actions: {
		async getAllUsers({ commit }) {
			try {
				const response = await axios.get(baseURL);
				commit('GET_ALL_USERS', response.data);
			} catch (error) {
				console.error(error);
			}
		},

		async getUserById({ commit }, id) {
			try {
				const response = await axios.get(`${baseURL}/${id}`);
				commit('GET_USER_BY_ID', response.data);
			} catch (error) {
				console.error(error);
			}
		},

		async createUser({ commit }, userInfo) {
			try {
				await axios.post(baseURL, userInfo);
				commit("ADD USER")
			} catch (error) {
				console.error(error);
			}
		},

		async updateUser({ commit }, userInfo) {
			try {
				await axios.put(`${baseURL}/${userInfo.id}`, userInfo);
				commit("Update User")
			} catch (error) {
				console.error(error);
			}
		},

		async deleteUser({ commit }, id) {
			try {
				await axios.delete(`${baseURL}/${id}`);
                commit("deleteUser", id);
			} catch (error) {
				console.log(error);
			}
		},
	},

	getters: {},
});

export default store;