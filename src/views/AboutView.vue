<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t, locale } = useI18n()
const isJapanese = computed(() => locale.value === 'ja')

// Load the portrait picture from the new path
let profilePic = null
try {
  profilePic = new URL('@/pictures/portrait_picture.jpg', import.meta.url).href
  // eslint-disable-next-line no-unused-vars
} catch (e) {
  profilePic = null // no image found
}
</script>

<template>
  <div class="about-section glow-box">
    <div class="text-container" :class="{ 'japanese-container': isJapanese }">
      <h1 :class="{ 'h1-japanese': isJapanese }">
        {{ t('about.greeting') }}
      </h1>
      <h1 :class="{ 'h1-japanese': isJapanese }">
        {{ t('about.name') }}
      </h1>

      <div v-if="profilePic" class="profile-pic-container">
        <img :src="profilePic" alt="Profile picture" />
      </div>

      <p :class="{ 'jp-text': isJapanese }">
        {{ t('about.content') }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.about-section {
  max-width: 800px;
  margin: 4rem auto;
  padding: 2rem 1.5rem;
  background: var(--white-color);
  border-radius: 1rem;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.3s;
}

.about-section:hover {
  box-shadow:
    0 0 16px 4px var(--red-color),
    0 2px 16px rgba(0, 0, 0, 0.04);
}

.text-container {
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  color: var(--black-color);
  margin-bottom: 0; /* Changed to 0 to bring the two lines closer */
}

h1:last-of-type {
  margin-top: 0.5rem; /* Add some space between the two h1s */
}

p {
  color: var(--black-color);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

.profile-pic-container {
  margin: 2rem auto;
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
  border: 5px solid var(--red-color);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.profile-pic-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.h1-japanese {
  font-size: 1.5rem;
  font-family: var(--japanese-font);
}

.jp-text {
  font-family: var(--japanese-font);
  text-align: center;
  writing-mode: horizontal-tb;
}
</style>
