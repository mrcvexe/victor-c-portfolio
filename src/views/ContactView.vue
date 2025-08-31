<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

// Function to handle the email link
const sendEmail = () => {
  window.location.href = 'mailto:vicoprofesor@yahoo.com'
}
</script>

<template>
  <div class="section-container glow-box">
    <h1>{{ t('contact.title') }}</h1>
    <p>{{ t('contact.description') }}</p>

    <div class="contact-links">
      <a href="#" @click.prevent="sendEmail" class="contact-link glow-box">
        <i class="ri-mail-fill"></i>
        <span>Email Me</span>
      </a>
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

.contact-links {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.25rem;
  font-weight: var(--font-semi-bold);
  color: var(--red-color);
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  background: var(--body-color);
  transition:
    transform 0.3s ease,
    color 0.3s;
}

.contact-link:hover {
  transform: translateY(-5px);
  color: var(--black-color);
  background-color: rgba(188, 0, 45, 0.1);
}

.contact-link i {
  font-size: 1.75rem;
}
</style>
