<template>
  <footer class="footer container">
    <ul class="footer__list">
      <li>
        <a
          href="https://www.linkedin.com/in/professorvictorconde/"
          target="_blank"
          class="footer__link"
        >
          <i class="ri-linkedin-box-fill"></i> <span>LinkedIn</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/mrcvexe" target="_blank" class="footer__link">
          <i class="ri-github-fill"></i> <span>GitHub</span>
        </a>
      </li>
    </ul>
  </footer>
</template>
<style scoped>
.footer {
  width: 100%;
  margin-top: auto;
  background: var(--white-color);
  border-top: 1px solid #eee;
  box-shadow: 0 -2px 16px rgba(0, 0, 0, 0.1);
  /* New styles for footer flexbox to center content */
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* This container style is kept for mobile responsiveness, but the one in styles.css will handle the full-width desktop view. */
.container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
}

.footer__list {
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.footer__link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--red-color);
  font-size: 1.1rem;
  font-weight: var(--font-semi-bold);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition:
    color 0.3s,
    background 0.3s;
}

.footer__link:hover {
  color: var(--black-color);
  background: var(--body-color);
}

.footer__link i {
  font-size: 1.5rem;
}

@media screen and (max-width: 700px) {
  .footer__link span {
    display: none;
  }
  .footer__link {
    padding: 0.5rem;
    font-size: 1.5rem;
  }
}
</style>
