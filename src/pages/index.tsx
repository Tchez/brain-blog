import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HeroSection() {
  const { i18n } = useDocusaurusContext();
  const isPT = i18n.currentLocale === 'pt';

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {isPT ? 'Bem-vindo ao Brain Blog!' : 'Welcome to Brain Blog!'}
        </Heading>
        <p className="hero__subtitle">
          {isPT
            ? 'Esse blog é um backup do meu cérebro, com anotações e tutoriais sobre assuntos que estou aprendendo.'
            : 'This blog is a backup of my brain, with notes and tutorials on topics I am learning.'}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/about">
            {isPT ? 'Entenda o projeto' : 'Understand the project'}
          </Link>
        </div>
      </div>
    </header>
  );
}

function Section({ title, description, link, emoji }: { title: string; description: string; link: string; emoji: string }) {
  return (
    <div className="col col--4">
      <div className="text--center">
        <h3>{emoji} {title}</h3>
        <p>{description}</p>
        <Link className="button button--outline button--sm" to={link}>
          Acessar / Explore
        </Link>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const { i18n } = useDocusaurusContext();
  const isPT = i18n.currentLocale === 'pt';

  return (
    <Layout title="Brain Blog" description="Structured learning journal, in English and Portuguese.">
      <HeroSection />
      <main className="container margin-vert--xl">
        <Heading as="h2" className="text--center">
          {isPT ? '🧭 Explore por Seções' : '🧭 Explore the Sections'}
        </Heading>
        <div className="row margin-top--lg">
          <Section
            emoji="🔍"
            title={isPT ? 'Fundamentos' : 'Foundations'}
            description={isPT ? 'Blocos de conhecimento reutilizáveis, como Regressão Linear, Vetores e Lógica.' : 'Reusable knowledge blocks like Regression, Vectors, and Logic.'}
            link="/docs/foundations/intro"
          />
          <Section
            emoji="📘"
            title={isPT ? 'Jornadas' : 'Jorneys'}
            description={isPT ? 'Caminhos temáticos, como a jornada Aprendendo IA.' : 'Thematic paths, like Learning AI.'}
            link="/docs/jorneys/intro"
          />
          <Section
            emoji="🛠️"
            title={isPT ? 'Tutoriais' : 'Tutorials'}
            description={isPT ? 'Guias rápidos e práticos sobre assuntos específicos.' : 'Quick and practical guides on focused topics.'}
            link="/docs/tutorials/intro"
          />
        </div>
      </main>
    </Layout>
  );
}
