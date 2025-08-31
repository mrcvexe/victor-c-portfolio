<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { t, locale } = useI18n()
const isMenuOpen = ref(false)
const router = useRouter()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const changeLanguage = () => {
  locale.value = locale.value === 'en' ? 'ja' : 'en'
}

// Function to close the menu
const closeMenu = () => {
  isMenuOpen.value = false
}

// Listen for route changes and close the menu
router.afterEach(closeMenu)
</script>

<template>
  <header class="header">
    <nav class="nav container">
      <router-link to="/" class="nav__logo">
        {{ t('about.nav_left') }}
      </router-link>
      <div class="nav__toggle" id="nav-toggle" @click="toggleMenu">
        <i class="ri-menu-line nav__burger" :class="{ 'open-menu': !isMenuOpen }"></i>
        <i class="ri-close-line nav__close" :class="{ 'open-menu': isMenuOpen }"></i>
      </div>
      <div class="nav__menu" id="nav-menu" :class="{ 'show-menu': isMenuOpen }">
        <ul class="nav__list">
          <li>
            <router-link to="/" class="nav__link">{{ t('nav.about') }}</router-link>
          </li>
          <li>
            <router-link to="/projects" class="nav__link">{{ t('nav.projects') }}</router-link>
          </li>
          <li>
            <router-link to="/experience" class="nav__link">{{ t('nav.experience') }}</router-link>
          </li>
          <li>
            <router-link to="/contact" class="nav__link">{{ t('nav.contact') }}</router-link>
          </li>
          <li>
            <button @click="changeLanguage" class="nav__link language-button">
              <i class="ri-translate-2"></i> {{ locale === 'en' ? '日本語' : 'English' }}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--white-color);
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.3);
  z-index: var(--z-fixed);
}
.nav {
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav__logo {
  display: inline-flex;
  align-items: center;
  font-weight: var(--font-semi-bold);
  color: var(--red-color);
  transition: text-shadow 0.3s; /* Add transition for hover effect */
}
.nav__logo:hover {
  text-shadow:
    0 0 8px var(--red-color),
    0 0 2px var(--red-color); /* Add the same hover effect */
}

.nav__toggle {
  position: relative;
  width: 32px;
  height: 32px;
}
.nav__burger,
.nav__close {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  font-size: 1.25rem;
  cursor: pointer;
  color: var(--red-color);
  transition:
    opacity 0.4s,
    transform 0.4s;
}
.nav__close {
  opacity: 0;
  transform: rotate(90deg);
}
.nav__toggle .open-menu {
  opacity: 1;
  transform: rotate(0deg);
}
.nav__menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--white-color);
  z-index: 1999;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 5rem;
  overflow-y: auto;
  transition: transform 0.4s;
  transform: translateX(-100%);
}
.show-menu {
  transform: translateX(0);
}
.nav__list {
  width: 100%;
  flex-direction: column;
  align-items: stretch;
}
.nav__link,
.language-button {
  color: var(--red-color);
  background: var(--white-color);
  font-weight: var(--font-semi-bold);
  padding: 1.25rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s;
  border: none;
  width: 100%;
  cursor: pointer;
}
.nav__link:hover,
.language-button:hover {
  background-color: rgba(188, 0, 45, 0.05); /* Lighter, more subtle red */
  color: var(--red-color);
  text-shadow:
    0 0 8px var(--red-color),
    0 0 2px var(--red-color);
}
@media (min-width: 1118px) {
  .nav {
    justify-content: space-between;
  }
  .nav__logo {
    margin-right: auto;
  }
  .nav__menu {
    position: static;
    display: flex !important;
    width: auto;
    height: auto;
    background: transparent;
    padding-top: 0;
    justify-content: flex-end;
    transform: none;
  }
  .nav__toggle {
    display: none;
  }
  .nav__list {
    display: flex;
    flex-direction: row;
    column-gap: 2rem;
  }
  .nav__link,
  .language-button {
    padding: 0;
    background: transparent;
    transition:
      color 0.3s,
      text-shadow 0.3s;
  }
  .nav__link:hover,
  .language-button:hover {
    background: transparent;
  }
}
</style>
