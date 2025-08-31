<script setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { t } = useI18n()

// Define the data for the two experience sections.
// The `name_key` links to the i18n translation strings.
// The `icon` property now contains a simple text character.
const educationSkills = ref([
  {
    name_key: 'experience.education.skills.english_teaching',
    icon: '📝',
    hover_class: 'english-icon',
  },
  {
    name_key: 'experience.education.skills.foreign_languages',
    icon: '🗣️',
    hover_class: 'language-icon',
  },
  {
    name_key: 'experience.education.skills.curriculum_design',
    icon: '🧠',
    hover_class: 'curriculum-icon',
  },
  { name_key: 'experience.education.skills.esol_specialist', icon: '💬', hover_class: 'esol-icon' },
  { name_key: 'experience.education.skills.ese_specialist', icon: '🤝', hover_class: 'ese-icon' },
  { name_key: 'experience.education.skills.siop', icon: '🧑‍🏫', hover_class: 'siop-icon' },
  { name_key: 'experience.education.skills.dyslexia', icon: '🔤', hover_class: 'dyslexia-icon' },
  {
    name_key: 'experience.education.skills.reading_literacy',
    icon: '📚',
    hover_class: 'reading-icon',
  },
  { name_key: 'experience.education.skills.udl', icon: '🧩', hover_class: 'udl-icon' },
  {
    name_key: 'experience.education.skills.differentiation',
    icon: '🎯',
    hover_class: 'differentiation-icon',
  },
  {
    name_key: 'experience.education.skills.small_groups',
    icon: '👥',
    hover_class: 'small-groups-icon',
  },
  {
    name_key: 'experience.education.skills.targeted_intervention',
    icon: '🏹',
    hover_class: 'targeted-icon',
  },
  {
    name_key: 'experience.education.skills.sat_act_tutoring',
    icon: '🎓',
    hover_class: 'tutoring-icon',
  },
  { name_key: 'experience.education.skills.fast_tutoring', icon: '⚡', hover_class: 'fast-icon' },
])

const technologySkills = ref([
  {
    name_key: 'experience.technology.skills.kotlin_java',
    icon: 'fa-brands fa-android',
    hover_class: 'kotlin-java-icon',
  },
  {
    name_key: 'experience.technology.skills.swift',
    icon: 'fa-brands fa-apple',
    hover_class: 'swift-icon',
  },
  {
    name_key: 'experience.technology.skills.javascript',
    icon: 'fa-brands fa-js',
    hover_class: 'js-icon',
  },
  {
    name_key: 'experience.technology.skills.vuejs',
    icon: 'fa-brands fa-vuejs',
    hover_class: 'vue-icon',
  },
  {
    name_key: 'experience.technology.skills.python',
    icon: 'fa-brands fa-python',
    hover_class: 'python-icon',
  },
  { name_key: 'experience.technology.skills.cpp', icon: 'fa-solid fa-c', hover_class: 'cpp-icon' },
  {
    name_key: 'experience.technology.skills.game_programming',
    icon: '🎮',
    hover_class: 'game-icon',
  },
  { name_key: 'experience.technology.skills.edtech', icon: '💻', hover_class: 'edtech-icon' },
])
</script>

<template>
  <div class="section-container glow-box">
    <h1>{{ t('experience.title') }}</h1>

    <section class="experience-section">
      <h2>{{ t('experience.education.title') }}</h2>
      <p>{{ t('experience.education.description_p1') }}</p>
      <p>{{ t('experience.education.description_p2') }}</p>
      <p>{{ t('experience.education.description_p3') }}</p>
      <div class="skills-grid">
        <div v-for="skill in educationSkills" :key="skill.name_key" class="skill-card glow-box">
          <span :class="skill.hover_class" class="icon-char">{{ skill.icon }}</span>
          <span>{{ t(skill.name_key) }}</span>
        </div>
      </div>
    </section>

    <section class="experience-section">
      <h2>{{ t('experience.technology.title') }}</h2>
      <p>{{ t('experience.technology.description') }}</p>
      <div class="skills-grid">
        <div v-for="skill in technologySkills" :key="skill.name_key" class="skill-card glow-box">
          <template v-if="skill.icon.startsWith('fa-')">
            <i :class="[skill.icon, skill.hover_class]"></i>
          </template>
          <template v-else>
            <span :class="skill.hover_class" class="icon-char">{{ skill.icon }}</span>
          </template>
          <span>{{ t(skill.name_key) }}</span>
        </div>
      </div>
    </section>
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

h2 {
  font-size: 1.5rem;
  margin: 2rem 0 1rem;
  color: var(--black-color);
}

.experience-section {
  margin-bottom: 2rem;
}

.experience-section p {
  margin-bottom: 1.5rem;
  color: var(--black-color);
  line-height: 1.8;
  text-align: left; /* Aligns text to the left for better readability */
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.skill-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: var(--body-color);
  border-radius: 0.5rem;
  transition: transform 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
}

/* Base icon styling for emojis */
.icon-char {
  font-size: 4rem; /* Increased size for emojis */
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

/* Base icon styling for Font Awesome */
.skill-card i {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: var(--black-color);
  transition: color 0.3s ease;
}

/* Custom hover colors for education icons */
.skill-card:hover .english-icon {
  color: #f7931e;
}
.skill-card:hover .language-icon {
  color: #007bff;
}
.skill-card:hover .curriculum-icon {
  color: #9c27b0;
}
.skill-card:hover .esol-icon {
  color: #ff5722;
}
.skill-card:hover .ese-icon {
  color: #4caf50;
}
.skill-card:hover .siop-icon {
  color: #2196f3;
}
.skill-card:hover .dyslexia-icon {
  color: #607d8b;
}
.skill-card:hover .reading-icon {
  color: #795548;
}
.skill-card:hover .udl-icon {
  color: #009688;
}
.skill-card:hover .differentiation-icon {
  color: #3f51b5;
}
.skill-card:hover .small-groups-icon {
  color: #e91e63;
}
.skill-card:hover .targeted-icon {
  color: #d50000;
}
.skill-card:hover .tutoring-icon {
  color: #ff9800;
}
.skill-card:hover .fast-icon {
  color: #673ab7;
}

/* Technology icons with branded colors */
.skill-card:hover .kotlin-java-icon {
  color: #a4c639;
}
.skill-card:hover .swift-icon {
  color: #c5c6c8;
}
.skill-card:hover .js-icon {
  color: #f7df1e;
}
.skill-card:hover .vue-icon {
  color: #41b883;
}
.skill-card:hover .python-icon {
  color: #3776ab;
}
.skill-card:hover .cpp-icon {
  color: #659ad2;
}
.skill-card:hover .game-icon {
  color: #607d8b;
}
.skill-card:hover .edtech-icon {
  color: #8bc34a;
}

.skill-card span {
  font-size: var(--normal-font-size);
  color: var(--black-color);
}

@media screen and (max-width: 600px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
}
</style>
