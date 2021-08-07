<template>
  <div class="loginIn ">
    <h1>
      Login IN
    </h1>
    <form
      @submit.prevent="login"
      action=""
      class="m-5"
      style="background-color:#191919;"
      autocomplete="off"
    >
      <div class="form-floating my-3  text-danger">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          v-model="email"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating text-danger my-3">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          v-model="password"
        />
        <label for="floatingPassword">Password</label>
      </div>
      <button type="submit" class="btn btn-outline-info mt-4">login</button>
    </form>
    <div
      class="alert alert-primary d-flex align-items-center"
      role="alert"
      v-if="err"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
        viewBox="0 0 16 16"
        role="img"
        aria-label="Warning:"
      >
        <path
          d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
        />
      </svg>
      <div>
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
import route from "../router/index";
export default {
  name: "loginIn",
  data() {
    return {
      email: "",
      password: "",
      error: "",
      err: false,
    };
  },
  methods: {
    async login() {
      const API_KEY = "AIzaSyAQyasVK2_sFpv3iS66C19n4zv-l-K2YeE";
      const res = await fetch(
        ` https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
        {
          method: "POST",
          body: JSON.stringify({
            email: this.email,
            password: this.password,
            returnSecureToken: true,
          }),
        }
      );
      const err = await res.json();
      try {
        if (err.error.message !== undefined) {
          return (
            (this.error = "there was an error with the email or password"),
            (this.err = true)
          );
        }
        localStorage.setItem("user", JSON.stringify(res));
        console.log(err);
      } catch (err) {
        console.log(res);
        route.push("/proyectos");
      }
    },
  },
};
</script>
