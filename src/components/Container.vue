<template>
  <div class="container">
    <div class="row">
      <div
        class="card text-center text-info mb-5"
        style="background-color:#191919"
        v-for="(proyect, i) in proyects"
        :key="i"
      >
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
</template>

<script>
import Registro from "../views/Registro";
export default {
  data: () => ({
    proyects: [],
    id:'hola',
  }),
  components: { Registro },
  created() {
    this.getProyects();
  },
  methods: {
    async getProyects() {

      const res = await fetch(
        "https://vue-dlt-default-rtdb.firebaseio.com/Proyects.json"
      );
      const data = await res.json();

      for (let i in data) {
        this.proyects.push({

          id: i,
        
          data: data[i],
        });
      }
    
    },
  },
};
</script>

// :to="`/edit-registro/${proyect.id}`"
