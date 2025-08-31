<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

// Load project screenshots from the new `src/pictures` directory
const cardGameScreenshot = new URL('@/pictures/CardGame.jpg', import.meta.url).href
const scrollerScreenshot = new URL('@/pictures/InstaCLone.jpg', import.meta.url).href

// The translator app has two pictures, so we'll use an array
const translatorScreenshots = [
  new URL('@/pictures/DictionaryWordLookup_picture_one.jpg', import.meta.url).href,
  new URL('@/pictures/DictionaryWordLookup_picture_two.jpg', import.meta.url).href,
]

// Updated GitHub project links based on your provided URLs.
const cardGameGithub = 'https://github.com/mrcvexe/CardGameAndroid'
const scrollerGithub = 'https://github.com/mrcvexe/InstaCLone'
const translatorGithub = 'https://github.com/mrcvexe/DictionaryWordLookup'
</script>

<template>
  <div class="section-container glow-box">
    <h1>{{ t('projects.title') }}</h1>
    <p class="section-description">{{ t('projects.description') }}</p>

    <div class="projects-grid">
      <div class="project-card glow-box">
        <h3>{{ t('projects.card_game.title') }}</h3>
        <p>{{ t('projects.card_game.description') }}</p>
        <div v-if="cardGameScreenshot" class="project-screenshot-container">
          <img :src="cardGameScreenshot" alt="Card Game Screenshot" class="project-screenshot" />
        </div>
        <a :href="cardGameGithub" target="_blank" class="github-link" v-if="cardGameGithub !== '#'">
          <i class="ri-github-fill"></i> GitHub Repo
        </a>
      </div>

      <div class="project-card glow-box">
        <h3>{{ t('projects.scroller.title') }}</h3>
        <p>{{ t('projects.scroller.description') }}</p>
        <div v-if="scrollerScreenshot" class="project-screenshot-container">
          <img
            :src="scrollerScreenshot"
            alt="Endless Scroller Screenshot"
            class="project-screenshot"
          />
        </div>
        <a :href="scrollerGithub" target="_blank" class="github-link" v-if="scrollerGithub !== '#'">
          <i class="ri-github-fill"></i> GitHub Repo
        </a>
      </div>

      <div class="project-card glow-box">
        <h3>{{ t('projects.translator.title') }}</h3>
        <p>{{ t('projects.translator.description') }}</p>
        <div class="translator-images-container">
          <div
            v-for="(image, index) in translatorScreenshots"
            :key="index"
            class="project-screenshot-container"
          >
            <img
              :src="image"
              :alt="'Japanese Text Translator Screenshot ' + (index + 1)"
              class="project-screenshot"
            />
          </div>
        </div>
        <a
          :href="translatorGithub"
          target="_blank"
          class="github-link"
          v-if="translatorGithub !== '#'"
        >
          <i class="ri-github-fill"></i> GitHub Repo
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section-container {
  max-width: 800px;
  margin: 4rem auto;
  padding: 2rem;
  background: var(--white-color);
  border-radius: 1rem;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.04);
  text-align: center;
}

.section-container:hover {
  box-shadow:
    0 0 16px 4px var(--red-color),
    0 2px 16px rgba(0, 0, 0, 0.04);
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--black-color);
}

.section-description {
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.projects-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 2rem;
}

.project-card {
  padding: 1.5rem;
  background: var(--body-color);
  border-radius: 0.75rem;
  text-align: left;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--red-color);
}

.project-card p {
  color: var(--black-color);
  line-height: 1.6;
  flex-grow: 1;
  margin-bottom: 1rem;
}

/* Container for displaying two images side-by-side */
.translator-images-container {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.project-screenshot-container {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: var(--white-color);
  /* Adjustments for side-by-side images */
  flex: 1;
}

.project-screenshot {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.github-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  color: var(--red-color);
  font-weight: var(--font-semi-bold);
  padding: 0.5rem 1rem;
  border: 1px solid var(--red-color);
  border-radius: 0.5rem;
  transition:
    background-color 0.3s,
    color 0.3s,
    border-color 0.3s;
  text-align: center;
  justify-content: center;
  align-self: flex-start;
}

.github-link:hover {
  background-color: var(--red-color);
  color: var(--white-color);
}

.github-link i {
  font-size: 1.2rem;
}
</style>
