import React, {useEffect, useRef} from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './api-explorer.module.css';

function Explorer() {
  const specUrl = useBaseUrl('/steadfast-api.yaml');
  const scriptUrl = useBaseUrl('/vendor/swagger-ui-bundle.js');
  const cssUrl = useBaseUrl('/vendor/swagger-ui.css');
  const containerRef = useRef(null);

  useEffect(() => {
    let active = true;
    let script = document.querySelector('script[data-steadfast-swagger]');
    let stylesheet = document.querySelector('link[data-steadfast-swagger]');

    if (!stylesheet) {
      stylesheet = document.createElement('link');
      stylesheet.rel = 'stylesheet';
      stylesheet.href = cssUrl;
      stylesheet.dataset.steadfastSwagger = 'styles';
      document.head.appendChild(stylesheet);
    }

    const mount = () => {
      if (!active || !containerRef.current || !window.SwaggerUIBundle) return;
      window.SwaggerUIBundle({
        url: specUrl,
        domNode: containerRef.current,
        deepLinking: true,
        filter: true,
        persistAuthorization: true,
        displayRequestDuration: true,
        tryItOutEnabled: true,
        defaultModelsExpandDepth: 1,
        docExpansion: 'list',
      });
    };

    if (window.SwaggerUIBundle) {
      mount();
    } else if (!script) {
      script = document.createElement('script');
      script.src = scriptUrl;
      script.defer = true;
      script.dataset.steadfastSwagger = 'bundle';
      script.addEventListener('load', mount, {once: true});
      document.body.appendChild(script);
    } else {
      script.addEventListener('load', mount, {once: true});
    }

    return () => {
      active = false;
      script?.removeEventListener('load', mount);
      if (containerRef.current) containerRef.current.replaceChildren();
    };
  }, [cssUrl, scriptUrl, specUrl]);

  return <div ref={containerRef} className="swagger-ui"><div className={styles.loading}>Loading the API explorer…</div></div>;
}

export default function ApiExplorer() {
  return (
    <Layout title="API Explorer" description="Search, authorize, and test Steadfast Courier API endpoints from your browser.">
      <main className={styles.page}>
        <header className={styles.header}>
          <div>
            <span className={styles.eyebrow}><i/> INTERACTIVE REFERENCE</span>
            <h1>API Explorer</h1>
            <p>Search endpoints, inspect schemas, authorize with your credentials, and send live requests.</p>
          </div>
          <div className={styles.server}><span>Production</span><code>https://portal.packzy.com/api/v1</code></div>
        </header>
        <div className={styles.notice}><b>Keep credentials private.</b> Authorization values stay in this browser session and are sent only with requests you initiate.</div>
        <section className={styles.explorer}><Explorer /></section>
      </main>
    </Layout>
  );
}
