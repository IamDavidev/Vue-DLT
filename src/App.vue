<template>
  <div id="nav">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  components: { NavBar },
};
</script>
<style>
body {
  background: #000;
  color:#00ffff;
}
a{
  color:#ffffff;
  margin-right: 12px;
  text-decoration: none;
  font-size:16px;
  font-weight: bold;
}

</style>
