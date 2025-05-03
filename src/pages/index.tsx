// src/pages/index.tsx
import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

export default function Home(): ReactNode {
  const { i18n } = useDocusaurusContext();
  const t = (en: string, pt: string) => (i18n.currentLocale === 'pt' ? pt : en);

  return (
    <Layout description="Brain Blog — AI, notes & portfolio">
      <section className={styles.hero}>
        <div className={styles.inner}>
          <Heading as="h1" className={styles.title}>
            {t(
              'Developer & AI Enthusiast',
              'Dev Full‑Stack & Entusiasta de IA'
            )}
          </Heading>
          <p className={styles.subtitle}>
            {t(
              'Writing to learn and share — welcome to my Brain Blog.',
              'Escrevo para aprender e compartilhar — bem‑vindo ao Brain Blog.'
            )}
          </p>

          <div className={styles.ctaRow}>
            <Link
              className="button button--primary button--lg"
              to="/blog/welcome">
              {t(
                'Welcome Post',
                'Post de Boas-Vindas'
              )}
            </Link>
            <Link
              className="button button--outline button--lg"
              to="/blog">
              {t('Blog Posts', 'Posts do Blog')}
            </Link>
          </div>
        </div>

        <img
          src="https://github.com/tchez.png"
          alt="Avatar"
          className={styles.avatar}
        />
      </section>
    </Layout>
  );
}
