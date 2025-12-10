import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Banner from '@site/src/components/Banner';

import styles from './index.module.css';

function HomepageHeader() {
  const imgLogoUrl = useBaseUrl('/img/Elven.png');
  const { siteConfig } = useDocusaurusContext();
  const bannerImageUrl = useBaseUrl('/img/banner2.png');
  
  return (
    <header
      className={clsx(styles.heroBanner)}
      style={{
        backgroundImage: `url(${bannerImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '420px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textShadow: '0 0 15px rgba(0,0,0,0.5)',
        position: 'relative',
      }}
    >

<h1 style={{ fontSize: '3.25rem', maxWidth: '700px', textAlign: 'center' }}>Elven</h1>

      <p style={{ fontSize: '1.25rem', maxWidth: '700px', textAlign: 'center' }}>
        Welcome to the official documentation for Elven.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <Link className="button button--secondary button--lg" to="/docs/landing">
          Get Started with Elven
        </Link>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Official documentation for the Elven RPG platform."
    >
      <Banner
        message="Elven Docs v1.0 released! Check out the latest features."
        link="/docs/intro"
        linkText="Read the release notes"
      />
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
