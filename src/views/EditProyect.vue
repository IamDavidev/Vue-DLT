<template>
  <div class="EditProyect">
    <div class="container">
      <h1 class="text-center">edit project</h1>
      <hr />
      <form @submit.prevent="updateProyect" autocomplete="off">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Edit Title</label>
          <input
            type="text"
            class="form-control "
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            style="background-color:#191919;color:#ffffff"
            v-model="registerProyect.title"
            required
          />
          <div id="emailHelp" class="form-text">
            Name Project
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Edit Description</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            style="background-color:#191919;color:#ffffff"
            required
            v-model="registerProyect.description"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Edit Date</label
          >
          <input
            type="date"
            required
            class="form-control"
            id="exampleInputPassword1"
            style="background-color:#191919;color:#ffffff"
            v-model="registerProyect.date"
          />
        </div>
        <div class="mb-3">
          <select
            class="form-select"
            aria-label="Default select example"
            style="background-color:#191919;color:#ffffff"
            v-model="registerProyect.langs"
            required
          >
            <option value="Vue">Vue</option>
            <option value="react">React</option>
            <option value="Js">JavaScript</option>
            <option value="Phyton">phyton</option>
            <option value="C">C</option>
            <option value="css-html">Css-html</option>
          </select>
          <label 
          class="btn  btn-danger  mx-3 mt-3">
            Sttatus  Proyect
          </label>
          <select
            class="form-select mt-3"
            aria-label="Default Render"
            style="background-color:#191919;color:#ffffff"
            v-model="registerProyect.status"
            name=""
            id=""
          >
            <option value="true">Render</option>
            <option value="false">Delete</option>
          </select>
        </div>
        <button type="submit" class="btn btn-outline-light">Register</button>
      </form>
      <hr />
      <!-- {{ registerProyect }} -->
      <router-link to="/proyectos"> back </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerProyect: {},
      id: this.$route.params.id,
    };
  },
  mounted() {
    this.editProyect();
  },
  methods: {
    async editProyect() {
      //   const id = this.$route.params.id;
      const user = JSON.parse(localStorage.getItem("user"))
      const res = await fetch(
        `https://vue-dlt-default-rtdb.firebaseio.com/Proyects/${this.id}.json?auth=${user.idToken}`
      );
      const data = await res.json();
      this.registerProyect = data;
    },

    async deleteProyect() {
      const user = JSON.parse(localStorage.getItem("user"))
      const deleteStatus = this.registerProyect.statu;
      const res = await fetch(
        `https://vue-dlt-default-rtdb.firebaseio.com/Proyects/${this.id}.json?auth=${user.idToken}`,
        {
          method: "PATCH",
          body: JSON.stringify({ deleteStatus: false }),
        }
      );
      const data = await res.json();
      console.log(deleteStatus);
    },

    
    async updateProyect() {
      const user = JSON.parse(localStorage.getItem("user"))
      await fetch(
        `https://vue-dlt-default-rtdb.firebaseio.com/Proyects/${this.id}.json${user.idToken}`,
        {
          method: "PATCH",
          body: JSON.stringify(this.registerProyect),
        }
      );
    },
  },
};
</script>

<style></style>
