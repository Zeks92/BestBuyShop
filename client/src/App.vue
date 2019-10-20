<template>
  <div id="app">
    <Navbar/>
    <div id="view">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
body {
  margin: 0;
}
#view {
  min-height: 70vh;
}
h1, h2, h3 {
  color: #00BBF0;
}
p {
  color: #283149;
}
a, a:visited {
  color: #00BBF0;
  text-decoration: none;
}
.btn {
  border: none;
  text-decoration: none;
  cursor: pointer;
  color: #f2f2f2;
  background-color: #005792;
  padding: .5em;
  font-size: 16px;
}
.btn-red {
  background-color: #F73859;
}
button:disabled,
button[disabled]{
  background-color: #e6fcff;
  color: #00204A;
  cursor: default;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  display: flex;
  margin-left: auto;
  margin-right: auto;
}
</style>
