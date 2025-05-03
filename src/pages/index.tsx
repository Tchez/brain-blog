import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/about"
          >
            About the Blog
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Brain Blog"
      description="A structured brain-dump — bilingual (EN / PT‑BR)">
      <HomepageHeader />
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6">
            <Heading as="h2">🧠 What is Brain Blog?</Heading>
            <p>
              Brain Blog is my public, structured brain-dump. I use it to record
              notes, learning journeys (called <strong>sagas</strong>),
              tutorials, and code demos.
            </p>
            <p>
              Everything is written in English first, then translated to
              Portuguese. The idea is to learn by teaching — and share as I go.
            </p>
            <p>
              My first saga is <strong>Learning AI</strong>, starting with the
              book <em>Why Machines Learn?</em>
            </p>
          </div>
          <div className="col col--6">
            <Heading as="h2">🧠 O que é o Brain Blog?</Heading>
            <p>
              O Brain Blog é meu “segundo cérebro” público. Uso para registrar
              anotações, jornadas de estudo (as <strong>sagas</strong>),
              tutoriais e exemplos de código.
            </p>
            <p>
              Tudo é escrito primeiro em inglês e depois traduzido para o
              português. A ideia é aprender ensinando — e compartilhar no caminho.
            </p>
            <p>
              A primeira saga é <strong>Learning AI</strong>, começando pelo
              livro <em>Why Machines Learn?</em>
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
