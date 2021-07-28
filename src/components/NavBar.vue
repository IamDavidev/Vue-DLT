<template>
  <div class="navBar">
    <nav
      class="navbar navbar-expand-lg navbar-dark"
      style="background-color: #151515"
    >
      <div class="container-fluid">
        <router-link to="/">Vue-DLT</router-link>
        <button
          class="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ml-4">
            <li class="nav-item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="">
              <router-link to="/proyectos"> Projects</router-link>
            </li>
            <li class="">
              <router-link to="/registro">Register</router-link>
            </li>
            <li class="">
              <router-link to="/about">about</router-link>
            </li>
          </ul>
        </div>
      <a href="" class="btn btn-outline-light">login on</a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
