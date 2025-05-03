import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig, i18n } = useDocusaurusContext();
  const isEnglish = i18n.currentLocale === 'en';

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {isEnglish ? 'Welcome to Brain Blog!' : 'Bem-vindo ao Brain Blog!'}
        </Heading>
        <p className="hero__subtitle">
          {isEnglish
            ? 'My structured second brain'
            : 'Meu segundo cérebro estruturado'}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/jorneys/learning-ai/overview">
            {isEnglish
              ? 'Start following my learning journey'
              : 'Comece a acompanhar minha jornada de aprendizado'}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Brain Blog – structured learning, in English and Portuguese.">
      <HomepageHeader />
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6">
            <Heading as="h2">🧠 What is Brain Blog?</Heading>
            <p>
              Brain Blog is where I organize everything I learn — from reusable
              concepts to thematic jorneys and technical tutorials.
            </p>
            <p>Everything is bilingual: English first, then Portuguese.</p>
            <ul>
              <li><strong>Foundations</strong> – key building blocks</li>
              <li><strong>Jorneys</strong> – learning paths (like Learning AI)</li>
              <li><strong>Tutorials</strong> – standalone how-to guides</li>
            </ul>
          </div>
          <div className="col col--6">
            <Heading as="h2">🧠 O que é o Brain Blog?</Heading>
            <p>
              O Brain Blog é onde organizo tudo o que aprendo — de conceitos
              reutilizáveis a jornadas temáticas e tutoriais técnicos.
            </p>
            <p>Todo o conteúdo é bilíngue: inglês primeiro, depois português.</p>
            <ul>
              <li><strong>Fundamentos</strong> – blocos essenciais</li>
              <li><strong>Jornadas</strong> – caminhos de estudo (ex: IA)</li>
              <li><strong>Tutoriais</strong> – guias práticos e objetivos</li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
}
