import type { ReactNode } from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

export default function Home(): ReactNode {
  const { i18n } = useDocusaurusContext();
  const t = (en: string, pt: string) => (i18n.currentLocale === 'pt' ? pt : en);

  /* --- SEO helpers --- */
  const siteUrl = 'https://tchez.dev/brain-blog';
  const ogImage = `${siteUrl}/img/logo-og.png`;
  const locale = i18n.currentLocale === 'pt' ? 'pt_BR' : 'en_US';

  return (
    <Layout
      description={t(
        'Brain Blog – AI articles, structured notes and project logs.',
        'Brain Blog – artigos sobre IA, notas estruturadas e diários de projeto.',
      )}
    >
      {/* ---------- Meta + Open Graph ---------- */}
      <Head>
        <title>{t(
          'Brain Blog – AI, Notes & Projects',
          'Brain Blog – IA, Notas & Projetos',
        )}</title>

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={locale} />
        <meta property="og:site_name" content="Brain Blog" />
        <meta property="og:title" content={t(
          'Brain Blog – AI, Notes & Projects',
          'Brain Blog – IA, Notas & Projetos',
        )} />
        <meta property="og:description" content={t(
          'Articles, tutorials, structured notes and build logs by Marco Antônio.',
          'Artigos, tutoriais, notas estruturadas e diários de projeto por Marco Antônio.',
        )} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@_tchez" />
        <meta name="twitter:title" content="Brain Blog" />
        <meta name="twitter:description" content={t(
          'AI articles, notes and projects',
          'Artigos sobre IA, notas e projetos',
        )} />
        <meta name="twitter:image" content={ogImage} />

        {/* Canonical */}
        <link rel="canonical" href={siteUrl} />
      </Head>

      {/* ---------- HERO ---------- */}
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
            {t('Full-Stack Developer • AI-focused',
              'Desenvolvedor Full-Stack • focado em IA')}
          </p>

          <p className={styles.heroIntro}>
            {t(
              `Brain Blog is my public “second brain”: a place to capture what I’m
               learning and building. Expect articles, structured notes,
               tutorials and project logs.`,
              `O Brain Blog é meu “segundo cérebro” público: um lugar onde registro o que
               estou aprendendo e construindo. Espere artigos, notas estruturadas,
               tutoriais e diários de projeto.`,
            )}
          </p>

          <div className={styles.ctaRow}>
            <Link className="button button--primary" to="/blog/welcome">
              {t('About Brain Blog', 'Sobre o Brain Blog')}
            </Link>
            {/* TODO: Criar about me */}
            <Link className="button button--secondary" to="https://www.linkedin.com/in/tchez/">
              {t('About me', 'Sobre mim')}
            </Link>
          </div>
        </div>

        <Link
          className={styles.heroLogoLink}
          to="https://www.linkedin.com/in/tchez/"
          target="_blank">
          <img
            src="https://github.com/tchez.png"
            alt={t('Author avatar', 'Avatar do autor')}
            className={styles.avatar}
            width={220}
            height={220}
            loading="lazy"
          />
        </Link>
      </section>

      <hr className={styles.sectionDivider} />

      {/* ---------- FEATURED PROJECTS ---------- */}
      <section className={styles.projectSection}>
        <h2 className={styles.projectSectionTitle}
        >{t('Featured Projects', 'Projetos de Destaque')}</h2>
        <div className={styles.projectGrid}>
          <div className={styles.projectCard}>
            <h3 className={styles.projectCardTitle}>{t('SpeakUp Palmas', 'SpeakUp Palmas')}</h3>
            <p className={styles.projectCardDescription}>
              {t('A free community that connects people to practice English conversation, online or in person.',
                'Uma comunidade gratuita que conecta pessoas para praticar conversação em inglês, online ou presencialmente.')}
            </p>
            <Link className="button button--primary" to="/notes/projects/speakup-palmas/intro">
              {t('Learn more', 'Saiba mais')}
            </Link>
          </div>
          <div className={styles.projectCard}>
            <h3 className={styles.projectCardTitle}>{t('Brain Blog', 'Brain Blog')}</h3>
            <p className={styles.projectCardDescription}>
              {t('My personal blog where I share articles, tutorials, structured notes, and project logs.',
                'Meu blog pessoal, onde compartilho artigos, tutoriais, notas estruturadas e diários de projeto.')}
            </p>
            <Link className="button button--primary" to="/blog">
              {t('Learn more', 'Saiba mais')}
            </Link>
          </div>
          <div className={styles.projectCard}>
            <h3 className={styles.projectCardTitle}>{t('AI Learning Journey', 'Jornada de Aprendizado em IA')}</h3>
            <p className={styles.projectCardDescription}>
              {t(
                'Follow my journey learning and building AI projects. With roadmaps, structured notes, and tutorials.',
                'Acompanhe minha jornada aprendendo e construindo projetos de IA. Com roadmaps, notas estruturadas e tutoriais.',
              )}
            </p>
            <Link className="button button--primary" to="/notes/journeys/learning-ai/intro">
              {t('Learn more', 'Saiba mais')}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
