<template>
  <div class="login_reg ">
    <div class="bg-dark m-3 p-2">
      <form class="from" @submit.prevent="register" autocomplete="off">
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="staticEmail"
              required
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label  "
            >Password</label
          >
          <div class="col-sm-10">
            <input
              v-model="password"
              type="text"
              class="form-control"
              required
            />
          </div>
        </div>
        <button type="submit" class="btn btn-secondary">Register User</button>
        <button type="reset" class="btn btn-secondary mx-2">Reset Form</button>
      </form>
    </div>
    {{ email }}
    {{ password }}
  </div>
</template>

<script>
import route from "../router/index";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      const API_KEY = "AIzaSyAQyasVK2_sFpv3iS66C19n4zv-l-K2YeE";
      const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
        {
          method: "POST",
          body: JSON.stringify({
            email: this.email,
            password: this.password,
            returnSecureToken: true,
          }),
        }
      );
      route.push("/proyectos");
      localStorage.setItem("user", JSON.stringify(await res.json()));
      // console.log("user register ");
      // console.log(this.email);
      // console.log();
    },
  },
};
</script>
