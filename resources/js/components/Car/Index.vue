<template>
    <div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Model</th>
                <th scope="col">Category</th>
                <th scope="col">Status</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="car in cars">
                <th scope="row">{{ car.id }}</th>
                <td>{{ car.model }}</td>
                <td>{{ car.category }}</td>
                <td>{{ car.status }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import api from "../../api";
export default {
    name: "Index",
    data(){
      return {
          cars: null,
      }
    },

    mounted() {
        this.getCars()
    },

    methods: {
        getCars() {
            api.get('/api/auth/cars')
            .then( res => {
                this.cars = res.data.data
            })
        },

    }
}
</script>

<style scoped>

</style>
