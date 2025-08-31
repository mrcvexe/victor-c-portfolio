import { createRouter, createWebHistory } from 'vue-router'
import AboutSection from '../views/AboutView.vue'
import ProjectsSection from '../views/ProjectsView.vue'
import ExperienceSection from '../views/ExperienceView.vue'
import ContactSection from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory('/victor-c-portfolio/'),  // Add this base path
  routes: [
    {
      path: '/',
      name: 'about',
      component: AboutSection,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsSection,
    },
    {
      path: '/experience',
      name: 'experience',
      component: ExperienceSection,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactSection,
    },
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
