<template>
  <div class="registro">
    <div class="container">
      <h1 class="text-center">Project registration</h1>
      <hr />
      <form @submit.prevent="addProyect" autocomplete="off">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Title The Project</label
          >
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
          <label for="exampleInputPassword1" class="form-label"
            >Description</label
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
          <label for="exampleInputPassword1" class="form-label">Date</label>
          <input
            type="date"
            required
            class="form-control"
            id="exampleInputPassword1"
            style="background-color:#191919;color:#ffffff"
            v-model="registerProyect.date"
          />
        </div>
        <div class="mb-3" style="background-color:#191919">
          <select
            class="form-select"
            aria-label="Default select example"
            style="background-color:#191919;color:#ffffff"
            v-model="registerProyect.langs"
            required
          >
            <option selected>select langs</option>
            <option value="Vue">Vue</option>
            <option value="react">React</option>
            <option value="Js">JavaScript</option>
            <option value="Phyton">phyton</option>
            <option value="C">C</option>
            <option value="css-html">Css-html</option>
          </select>
        </div>
        <button type="submit" class="btn btn-danger">Register</button>
      </form>
      <hr />
      <!-- {{ registerProyect }} -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerProyect: {
        title: "",
        description: "",
        date: "",
        langs: [],
        status: true,
      },
    };
  },
  mounted() {
    // this.editProyect();
  },
  methods: {
    // async editProyect() {
    //   const id = this.$route.params.id
    //   const res = await fetch(`https://vue-dlt-default-rtdb.firebaseio.com/Proyects/${id}.json`)
    //   const data = await res.json();
    //   this.registerProyect = data 
    // },
    async addProyect() {
      const user = JSON.parse(localStorage.getItem("user"));

      await fetch(`https://vue-dlt-default-rtdb.firebaseio.com/Proyects.json?auth=${user.idToken}`, {
        method: "POST",
        body: JSON.stringify(this.registerProyect),
      });
      
    },
  },
};
</script>

<style scoped>
hr {
  height: 12px;
  color: #00ffff;
}
</style>
