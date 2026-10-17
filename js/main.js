:root {
  --primary: #0d4d8d;
  --primary-dark: #0a3e74;
  --accent: #e7b93d;
  --accent-soft: #f9f0d1;
  --text: #1d2430;
  --muted: #5a6474;
  --bg: #f6f9fc;
  --card: #ffffff;
  --line: #dfe7f0;
  --shadow: 0 12px 30px rgba(20, 35, 65, 0.12);
  --radius: 18px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  color: var(--text);
  background: var(--bg);
  line-height: 1.7;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

button,
input,
textarea {
  font: inherit;
}

.container {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
}

.section {
  padding: 5rem 0;
}

.section-heading {
  margin-bottom: 2rem;
}

.section-heading.center {
  text-align: center;
}

.section-action {
  margin-top: 2rem;
  text-align: center;
}

.eyebrow {
  font-size: 0.8rem;
  letter-spacing: 0.14em;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.8rem;
}

.eyebrow.accent {
  color: var(--primary);
}

h1, h2, h3, h4, p {
  margin-top: 0;
}

h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.1;
  margin-bottom: 1rem;
}

h2 {
  font-size: clamp(2rem, 3vw, 2.8rem);
  line-height: 1.2;
  margin-bottom: 1rem;
}

p {
  color: var(--muted);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 30;
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(6px);
  border-bottom: 1px solid rgba(13, 77, 141, 0.08);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  min-height: 80px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 800;
}

.brand strong {
  display: block;
  font-size: 1.25rem;
  color: var(--text);
}

.brand small {
  display: block;
  color: var(--muted);
  font-weight: 600;
}

.brand-mark {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: #fff;
  border-radius: 12px;
  box-shadow: var(--shadow);
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-weight: 600;
}

.main-nav a {
  color: var(--muted);
  transition: color 0.2s ease;
}

.main-nav a:hover,
.main-nav a.active {
  color: var(--primary);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0.8rem 1.35rem;
  border-radius: 999px;
  border: 1px solid transparent;
  font-weight: 700;
  transition: 0.2s ease;
  cursor: pointer;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: #fff;
  box-shadow: var(--shadow);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  border-color: rgba(255, 255, 255, 0.5);
}

.btn-secondary.dark {
  background: transparent;
  color: var(--primary);
  border-color: rgba(13, 77, 141, 0.2);
}

.hero {
  position: relative;
  background: url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80") center/cover no-repeat;
  min-height: 620px;
  display: flex;
  align-items: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(8, 28, 52, 0.82), rgba(8, 28, 52, 0.58));
}

.hero-content {
  position: relative;
  z-index: 1;
  padding: 5rem 0;
}

.hero-copy {
  max-width: 620px;
  color: #fff;
}

.hero-copy p {
  color: rgba(255, 255, 255, 0.82);
  font-size: 1.08rem;
  max-width: 540px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.hero-stats {
  list-style: none;
  display: flex;
  gap: 2rem;
  padding: 0;
  margin: 2rem 0 0;
  flex-wrap: wrap;
}

.hero-stats li {
  display: grid;
  gap: 0.25rem;
  min-width: 110px;
  color: #fff;
}

.hero-stats strong {
  font-size: 1.1rem;
}

.hero-stats span {
  color: rgba(255, 255, 255, 0.72);
}

.two-col,
.split-section,
.contact-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2.5rem;
  align-items: center;
}

.grid {
  display: grid;
  gap: 1.5rem;
}

.three-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.two-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.four-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.info-card,
.program-card,
.value-box,
.program-panel,
.info-panel,
.contact-card,
.contact-form,
.testimonial-card,
.news-card,
.news-item,
.principal-card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.info-card,
.program-card,
.value-box,
.program-panel,
.contact-card,
.contact-form,
.info-panel,
.testimonial-card,
.news-card,
.news-item,
.principal-card {
  padding: 1.8rem;
}

.icon {
  width: 48px;
  height: 48px;
  background: var(--accent-soft);
  color: var(--primary);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.alt-bg {
  background: #edf4fa;
}

.image-panel img {
  border-radius: var(--radius);
  min-height: 420px;
  object-fit: cover;
  box-shadow: var(--shadow);
}

.feature-list {
  list-style: none;
  margin: 1.5rem 0 0;
  padding: 0;
  display: grid;
  gap: 0.75rem;
}

.feature-list li {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  color: var(--text);
}

.feature-list li::before {
  content: "✓";
  color: var(--primary);
  font-weight: 800;
}

.principal-box {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  align-items: center;
}

.principal-copy {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 2rem;
  box-shadow: var(--shadow);
}

.principal-avatar {
  width: 78px;
  height: 78px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: #fff;
  font-weight: 800;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.stats-band {
  background: linear-gradient(135deg, var(--primary-dark), var(--primary));
  padding: 1.5rem 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.5rem;
  text-align: center;
}

.stat-item {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 18px;
  padding: 1.25rem 1rem;
}

.stat-item strong,
.stat-item span {
  display: block;
  color: #fff;
}

.stat-item strong {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.gallery-grid.large-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.gallery-grid img {
  width: 100%;
  height: 270px;
  object-fit: cover;
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.testimonial-card {
  border-top: 4px solid var(--accent);
}

.testimonial-card p {
  color: var(--text);
  font-style: italic;
}

.testimonial-card h4 {
  margin-top: 1rem;
  color: var(--primary);
}

.news-card {
  border-top: 4px solid var(--primary);
}

.news-card span,
.tag {
  display: inline-flex;
  background: rgba(13, 77, 141, 0.08);
  color: var(--primary);
  border-radius: 999px;
  padding: 0.35rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 0.8rem;
}

.cta-band {
  padding-top: 0;
}

.cta-box {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  border-radius: 24px;
  padding: 2rem 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  box-shadow: var(--shadow);
}

.cta-box h2,
.cta-box p {
  color: #fff;
}

.site-footer {
  background: #0d1728;
  color: #e7edf5;
  padding-top: 4rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 2rem;
}

.site-footer h3,
.site-footer h4 {
  color: #fff;
}

.site-footer p,
.site-footer li,
.site-footer a {
  color: rgba(231, 237, 245, 0.8);
}

.site-footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.5rem;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  margin-top: 2rem;
  padding: 1rem 0 2rem;
}

.page-hero {
  position: relative;
  background: url("https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1600&q=80") center/cover no-repeat;
  min-height: 360px;
  display: flex;
  align-items: center;
}

.small-hero .container {
  position: relative;
  z-index: 1;
  padding: 3rem 0 2rem;
  color: #fff;
}

.small-hero .eyebrow {
  color: var(--accent);
}

.text-block {
  max-width: 900px;
}

.info-panel {
  background: linear-gradient(180deg, var(--card), #f0f7ff);
}

.contact-list {
  list-style: none;
  padding: 0;
  margin: 1.25rem 0 0;
  display: grid;
  gap: 0.8rem;
  color: var(--text);
}

.field-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

label {
  display: grid;
  gap: 0.5rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 1rem;
}

input,
textarea {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 0.9rem 1rem;
  font: inherit;
  color: var(--text);
  background: #fff;
}

input:focus,
textarea:focus {
  outline: 2px solid rgba(13, 77, 141, 0.15);
  border-color: rgba(13, 77, 141, 0.35);
}

.map-box {
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  border: 1px solid var(--line);
}

.map-box iframe {
  width: 100%;
  min-height: 420px;
  border: 0;
}

.news-list {
  display: grid;
  gap: 1.5rem;
}

.news-item {
  border-left: 4px solid var(--primary);
}

.faq-wrap {
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
}

.faq-item {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
}

.faq-question {
  width: 100%;
  background: transparent;
  border: 0;
  text-align: left;
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text);
  padding: 1.2rem 1.4rem;
  cursor: pointer;
  position: relative;
}

.faq-question::after {
  content: "+";
  position: absolute;
  right: 1.4rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem;
  color: var(--primary);
}

.faq-item.active .faq-question::after {
  content: "−";
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.25s ease;
}

.faq-item.active .faq-answer {
  max-height: 200px;
}

.faq-answer p {
  padding: 0 1.4rem 1.2rem;
  margin: 0;
}

.mobile-toggle {
  display: none;
  width: 46px;
  height: 46px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: #fff;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
}

.mobile-toggle span {
  width: 22px;
  height: 2px;
  display: block;
  background: var(--text);
}

@media (max-width: 860px) {
  .mobile-toggle {
    display: flex;
  }

  .main-nav {
    position: absolute;
    top: 80px;
    left: 1rem;
    right: 1rem;
    background: rgba(255, 255, 255, 0.98);
    border: 1px solid var(--line);
    border-radius: 16px;
    box-shadow: var(--shadow);
    display: none;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 1.25rem;
  }

  .main-nav.open {
    display: flex;
  }

  .desktop-only {
    display: none;
  }

  .three-grid,
  .four-grid,
  .two-col,
  .split-section,
  .contact-grid,
  .footer-grid,
  .two-grid,
  .principal-box,
  .stats-grid,
  .gallery-grid.large-grid {
    grid-template-columns: 1fr;
  }

  .cta-box {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 540px) {
  .nav-wrap {
    flex-wrap: wrap;
    padding: 0.75rem 0;
  }

  .brand {
    width: 100%;
  }

  .hero {
    min-height: 520px;
  }

  .field-row {
    grid-template-columns: 1fr;
  }

  .btn {
    width: 100%;
  }
}
