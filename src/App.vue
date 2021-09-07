<template>
  <div>
    <div>
      <b-navbar toggleable="md" type="light" variant="light">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand href="#" class="brand">Mi App</b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav align="right">
          <b-navbar-nav >
            <b-nav-item href="#">INICIO</b-nav-item>
            <b-nav-item href="#">BUSCAR</b-nav-item>
            <b-nav-item href="#">ACERCA DE</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
      <b-row>
        <b-col v-for="(personaje, $index) in personajes" :key="$index" class="" cols="4">
            <b-card-group >
              <b-card class="text-left">
                <b-card-img v-bind:src="personaje.imagen"></b-card-img>
                <b-card-text>{{personaje.nombre}}</b-card-text>
              </b-card>
            </b-card-group>
        </b-col>
      </b-row>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    personajes: [
      {
        id: 1,
        nombre: "Morty",
        imagen: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      },
      {
        id: 2,
        nombre: "Rick",
        imagen: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      },
      {
        id: 3,
        nombre: "Summer",
        imagen: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
      },
      {
        id: 4,
        nombre: "Beth",
        imagen: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
      },
      {
        id: 5,
        nombre: "Jerry",
        imagen: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
      },
    ],
  }),
};
</script>

<style>
.brand {
  margin-left: 1rem;
}
</style>
