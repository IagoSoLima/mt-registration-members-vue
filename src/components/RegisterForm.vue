<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  name: '',
  course: '',
  state: '',
  city: ''
})

const states = reactive([
  {
    name: 'São Paulo',
    code: 'SP'
  },
  {
    name: 'Rio de Janeiro',
    code: 'RJ'
  },
  {
    name: 'Minas Gerais',
    code: 'MG'
  }
])

const cities: { [key: string]: string[] } = reactive({
  SP: ['Mogi das Cruzes', 'Suzano', 'Poá', 'Guararema'],
  RJ: ['Angra dos Reis', 'Niterói', 'Itaboraí'],
  MG: ['Belo Horizonte', 'Monte Azul', 'Muzambinho']
})

function register() {
  const stateNameByCode = states.find((state) => state.code == form.state)?.name
  const confirmMessage = `Ingressante: ${form.name} Registrado para o curso de ${form.course}\n No estado de ${stateNameByCode} na cidade de ${form.city}`
  alert(confirmMessage)
}
</script>

<template>
  <div class="container">
    <h1 class="title">Cadastro de Ingressantes</h1>
    <form @submit.prevent="register" class="form">
      <fieldset>
        <label for="name"> Nome </label>
        <input type="text" id="name" name="name" required v-model="form.name" />
      </fieldset>
      <fieldset>
        <label for="course"> Curso </label>
        <select id="course" name="course" required v-model="form.course">
          <option selected></option>
          <option value="Matemática">Matemática</option>
          <option value="Letras">Letras</option>
          <option value="Geográfia">Geográfia</option>
        </select>
      </fieldset>
      <fieldset>
        <label for="state"> Estado </label>
        <select id="state" name="state" required v-model="form.state">
          <option selected></option>
          <option v-for="state in states" :key="state.code" :value="state.code">
            {{ state.name }}
          </option>
        </select>
      </fieldset>
      <fieldset>
        <label for="city"> Cidade </label>
        <select id="city" name="city" required v-model="form.city">
          <option v-if="!form.state">Por favor selecione um estado</option>
          <option v-for="city in cities[form.state]" :key="city" :value="city">
            {{ city }}
          </option>
        </select>
      </fieldset>
      <div class="buttons">
        <button type="button">Voltar</button>
        <button type="submit">Gravar</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.container {
  width: 400px;
  margin: 0px auto;
  border: 0.15rem solid #13729e;

  background-color: #fff;
  color: #000;

  border-radius: 0.5rem;
}
h1 {
  background-color: #13729e;
  color: #fff;
  font-size: 1.3rem;
  text-align: center;
  padding: 0.2rem;
}
.form {
  width: 100%;
  padding: 0rem 1rem 1rem;
}

.form input,
.form select {
  min-width: 100%;
  padding: 0.5rem;
  border-radius: 0.3rem;
  border: 0.1rem solid #13729e;
}

fieldset {
  border: none;
  padding: 0px;
  margin-top: 1.5rem;
}

.form label {
  margin-left: 0.5rem;
}

.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
}

.buttons button {
  border: none;
  border-radius: 0.3rem;
  width: 7rem;
  height: 1.5rem;

  color: #fff;
  cursor: pointer;
  font-size: 0.95rem;
}

.buttons button:hover {
  -webkit-filter: brightness(70%);
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
}

.buttons button[type='button'] {
  background-color: #f1d94e;
}

.buttons button[type='submit'] {
  height: 2rem;
  background-color: yellowgreen;
}
</style>
