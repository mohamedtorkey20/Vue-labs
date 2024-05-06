<template>
    <div class="row mt-2">
        <div class="col-12 d-flex flex-column justify-content-center align-items-center">
            <h1 style="color: #FFF8DC;">Add Movie</h1>
            <div class="card" style="max-width: 700px;">
                <div class="card-body d-flex flex-column justify-content-center align-items-center">
                    <form class="row g-3" @submit="submitData($event)">
                        <div class="col-md-6">
                          <label for="title" class="form-label">Title</label>
                          <input type="text" v-model="moive.movie" class="form-control" id="title" placeholder="Enter Title" required>
                        </div>
                        <div class="col-md-6">
                          <label for="Rate" class="form-label">Rate</label>
                          <input type="number"  v-model="moive.rate" class="form-control" id="Rate" required>
                        </div>
                        <div class="col-md-6">
                          <label for="image" class="form-label">Link Image</label>
                          <input type="text"  v-model="moive.image" class="form-control" id="image" required>
                        </div>
                          
                        <div class="col-md-6">
                          <label for="link" class="form-label">Link</label>
                          <input type="text"   v-model="moive.link" class="form-control" id="link" required>
                        </div>
                          
        
                        
                        <div class="col-12">
                          <button   class="btn" style="background-color: #6C0345; color: #FFF8DC;"> Add </button>
                        </div>
                      </form>
                </div>
            </div>          
        </div>
    </div>
</template>

<script>
import MovieService  from '../../../public/Mixins/MovieService.js';
    export default {
      name:"addMovie",
      mixins:[MovieService],
     data(){
      return {
        moive:{
        movie:'',
        rate:'',
        image:'',
        link:''
      }
      }
     },
     methods:{
      submitData(e){
                e.preventDefault();
                this.addMovie(this.moive)
                this.$router.push("/Movies")
            }
     }

        
    }
</script>

<style scoped>

</style>



















// {
  //   "id": "7",
  //   "movie": "Fight Club",
  //   "rating": 8.8,
  //   "image": "images/fight_club.jpg",
  //   "imdb_url": "https://www.imdb.com/title/tt0137523/"
  // },
  // {
  //   "id": "8",
  //   "movie": "The Lord of the Rings: The Fellowship of the Ring",
  //   "rating": 8.8,
  //   "image": "images/lotr_fellowship.jpg",
  //   "imdb_url": "https://www.imdb.com/title/tt0120737/"
  // },
  // {
  //   "id": "9",
  //   "movie": "Forrest Gump",
  //   "rating": 8.8,
  //   "image": "images/forrest_gump.jpg",
  //   "imdb_url": "https://www.imdb.com/title/tt0109830/"
  // },
  // {
  //   "id": "10",
  //   "movie": "Inception",
  //   "rating": 8.8,
  //   "image": "images/inception.jpg",
  //   "imdb_url": "https://www.imdb.com/title/tt1375666/"
  // },
  // {
  //   "id": "11",
  //   "movie": "Interstellar",
  //   "rating": 8.6,
  //   "image": "images/interstellar.jpg",
  //   "imdb_url": "https://www.imdb.com/title/tt0816692/"
  // },
  // {
  //   "id": "12",
  //   "movie": "The Matrix",
  //   "rating": 8.7,
  //   "image": "images/matrix.jpg",
  //   "imdb_url": "https://www.imdb.com/title/tt0133093/"
  // },
  // {
  //   "id": "13",
  //   "movie": "Schindler's List",
  //   "rating": 8.9,
  //   "image": "images/schindlers_list.jpg",
  //   "imdb_url": "https://www.imdb.com/title/tt0108052/"
  // },
  // {
  //   "id": "14",
  //   "movie": "The Silence of the Lambs",
  //   "rating": 8.6,
  //   "image": "images/silence_lambs.jpg",
  //   "imdb_url": "https://www.imdb.com/title/tt0102926/"
  // },
  // {
  //   "id": "15",
  //   "movie": "Star Wars: Episode V - The Empire Strikes Back",
  //   "rating": 8.7,
  //   "image": "images/empire_strikes_back.jpg",
  //   "imdb_url": "https://www.imdb.com/title/tt0080684/"
  // },
  // {
  //   "id": "16",
  //   "movie": "Saving Private Ryan",
  //   "rating": 8.6,
  //   "image": "images/saving_private_ryan.jpg",
  //   "imdb_url": "https://www.imdb.com/title/tt0120815/"
  // },
  // {
  //   "id": "17",
  //   "movie": "Parasite",
  //   "rating": 8.6,
  //   "image": "images/parasite.jpg",
  //   "imdb_url": "https://www.imdb.com/title/tt6751668/"
  // },
  // {
  //   "id": "18",
  //   "movie": "Gladiator",
  //   "rating": 8.5,
  //   "image": "images/gladiator.jpg",
  //   "imdb_url": "https://www.imdb.com/title/tt0172495/"
  // },
  // {
  //   "id": "19",
  //   "movie": "Jurassic Park",
  //   "rating": 8.1,
  //   "image": "images/jurassic_park.jpg",
  //   "imdb_url": "https://www.imdb.com/title/tt0107290/"
  // },
  // {
  //   "id": "20",
  //   "movie": "The Lion King",
  //   "rating": 8.5,
  //   "image": "images/lion_king.jpg",
  //   "imdb_url": "https://www.imdb.com/title/tt0110357/"
  // },
  // {
  //   "id": "21",
  //   "movie": "Blade Runner 2049",
  //   "rating": 8,
  //   "image": "images/blade_runner_2049.jpg",
  //   "imdb_url": "https://www.imdb.com/title/tt1856101/"
  // },
  // {
  //   "id": "22",
  //   "movie": "The Prestige",
  //   "rating": 8.5,
  //   "image": "images/the_prestige.jpg",
  //   "imdb_url": "https://www.imdb.com/title/tt0482571/"
  // },
  // {
  //   "id": "23",
  //   "movie": "Mad Max: Fury Road",
  //   "rating": 8.1,
  //   "image": "images/mad_max_fury_road.jpg",
  //   "imdb_url": "https://www.imdb.com/title/tt1392190/"
  // }