<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'
import { useI18n } from "vue-i18n"
import i18n from "./plugins/i18n"

const selected = ref('')

  const languages = ref([
    { language: 'en', title: 'English' },
    { language: 'ur', title: 'اردو' },
    { language: 'ar', title: 'عربى' },
  ])

  const { t } = useI18n({
    inheritLocale: true,
    useScope: 'local'
  })

  const changeLocale = (locale:string) => {
    i18n.global.locale.value = locale
  }
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld :msg="t('welcome')" :crp="t('createdProject')" />
      <div class="select">
        <select v-model="selected" @change="changeLocale(selected)">
          <option disabled value="">Select Language</option>
          <option
          v-for="lang in languages"
          :key="lang.title"
          :value="lang.language"
          >
          {{lang.title}}
          </option>
        </select>
      </div>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/LifeCycleHook">LifeCycle Hook</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

  select {
    width: 11rem;
    height: 2rem;
    margin-top: 1rem;
    border: solid green 1px;
    border-radius: 3px;
  }
  input {
    height: 2rem;
    width: 11rem;
    border: solid green 1px;
    border-radius: 3px;
  }
  div.select {
    text-align: center;
  }
}
</style>
