// src/pages/index.tsx
import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

export default function Home(): ReactNode {
  const { i18n } = useDocusaurusContext();
  const t = (en: string, pt: string) =>
    i18n.currentLocale === 'pt' ? pt : en;

  return (
    <Layout description="Brain Blog – AI, notes & portfolio">
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Heading as="h1" className={styles.heroTitle}>
            <a
              href="https://linkedin.com/in/tchez"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroTitleLink}
            >
              Marco Antônio
            </a>
          </Heading>

          <p className={styles.heroTagline}>
            {t(
              'Full-Stack Developer • AI-focused',
              'Desenvolvedor Full-Stack • foco em IA'
            )}
          </p>

          <p className={styles.heroIntro}>
            {t(
              `Brain Blog is my public “second brain” — a place to capture what I'm
              learning and building. Expect articles, structured notes, tutorials, and build logs.`,
              `O Brain Blog é meu “segundo cérebro” público — aqui registro o que
              estou aprendendo e construindo. Espere artigos, anotações estruturadas, tutoriais e diários de projeto.`
            )}
          </p>

          <div className={styles.ctaRow}>
            <Link className="button button--primary" to="/blog/welcome">
              {t('Welcome post', 'Post de boas-vindas')}
            </Link>
            <Link className="button button--secondary" to="/blog">
              {t('Browse the blog', 'Ver blog')}
            </Link>
          </div>
        </div>

        <img
          src="https://github.com/tchez.png"
          alt={t('Author avatar', 'Avatar do autor')}
          className={styles.avatar}
          width={220}
          height={220}
          loading="lazy"
        />
      </section>
    </Layout>
  );
}
