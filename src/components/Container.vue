<template>
  <div class="container">
    <div class="row">
      <div
        class="card text-center text-info mb-5"
        v-for="(proyect, i) in proyects"
        :key="i"
        style="background-color:#191919"
      >
        <div v-if="proyect.data.status">
          <div class="reder">
            <div class="card-header">
              <h3 class="text-danger">
                {{ proyect.data.title }}
              </h3>
            </div>
            <div class="card-body">
              <h5 class="card-title">
                {{ proyect.data.langs }}
              </h5>
              <p class="card-text">
                {{ proyect.data.description }}
              </p>
              <router-link
                class="btn btn-outline-light"
                :to="`/editProyect/${proyect.id}`"
                >Edit
              </router-link>
            </div>
            <div class="card-footer text-muted">
              {{ proyect.data.date }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Registro from "../views/Registro";
export default {
  data: () => ({
    proyects: [],
  }),
  components: { Registro },
  created() {
    this.getProyects();
  },
  methods: {
    async getProyects() {
      const user = JSON.parse(localStorage.getItem("user"))

      console.log(user.idToken);

      const res = await fetch(
      `https://vue-dlt-default-rtdb.firebaseio.com/Proyects.json?auth=${user.idToken}`
      );
      const data = await res.json();

      for (let i in data) {
        this.proyects.push({
          id: i,
          data: data[i],
        });
      }


      // console.log(this.proyects.status);


    },
  },
};
</script>

// :to="`/edit-registro/${proyect.id}`"
