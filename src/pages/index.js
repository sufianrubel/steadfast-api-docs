import React, {useState} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const snippets = {
  cURL: `curl --request POST \\\
  --url https://portal.packzy.com/api/v1/create_order \\\
  --header "Api-Key: YOUR_API_KEY" \\\
  --header "Secret-Key: YOUR_SECRET_KEY" \\\
  --header "Content-Type: application/json" \\\
  --data '{
    "invoice": "INV-1001",
    "recipient_name": "Nadia Rahman",
    "recipient_phone": "01711111111",
    "recipient_address": "Dhanmondi, Dhaka",
    "cod_amount": 1290
  }'`,
  Node: `const response = await fetch(
  "https://portal.packzy.com/api/v1/create_order",
  {
    method: "POST",
    headers: {
      "Api-Key": process.env.STEADFAST_API_KEY,
      "Secret-Key": process.env.STEADFAST_SECRET_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(order)
  }
);

const shipment = await response.json();`,
  PHP: `$response = Http::withHeaders([
  'Api-Key' => env('STEADFAST_API_KEY'),
  'Secret-Key' => env('STEADFAST_SECRET_KEY'),
])->post(
  'https://portal.packzy.com/api/v1/create_order',
  $order
);

$shipment = $response->throw()->json();`,
};

const endpoints = [
  {method: 'POST', path: '/create_order', title: 'Create an order', tone: 'post'},
  {method: 'POST', path: '/create_order/bulk-order', title: 'Create orders in bulk', tone: 'post'},
  {method: 'GET', path: '/status_by_invoice/{invoice}', title: 'Track by invoice', tone: 'get'},
  {method: 'GET', path: '/get_balance', title: 'Get current balance', tone: 'get'},
];

function CodeWindow() {
  const [language, setLanguage] = useState('cURL');
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard?.writeText(snippets[language]);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className={styles.codeWindow} aria-label="Create order code example">
      <div className={styles.codeTopbar}>
        <div className={styles.windowDots} aria-hidden="true"><i/><i/><i/></div>
        <div className={styles.codeTabs} role="tablist" aria-label="Code language">
          {Object.keys(snippets).map((item) => (
            <button key={item} role="tab" aria-selected={language === item} className={language === item ? styles.activeTab : ''} onClick={() => setLanguage(item)}>{item}</button>
          ))}
        </div>
        <button className={styles.copyButton} onClick={copyCode} aria-label="Copy code example">{copied ? 'Copied' : 'Copy'}</button>
      </div>
      <pre className={styles.code}><code>{snippets[language]}</code></pre>
      <div className={styles.responseBar}>
        <span><i/> 200 OK</span>
        <span>248 ms</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout title="Courier API for modern commerce" description="Build reliable delivery workflows with the Steadfast Courier REST API. Explore endpoints, authenticate requests, and test live calls.">
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.glowOne}/><div className={styles.glowTwo}/>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <div className={styles.eyebrow}><span/> Steadfast API · v1.2</div>
              <h1>Delivery infrastructure,<br/><em>built for developers.</em></h1>
              <p>Integrate courier operations into your product with a fast, predictable REST API. Create orders, track deliveries, manage returns, and reconcile payments.</p>
              <div className={styles.heroActions}>
                <Link className={styles.primaryButton} to="/docs/quick-start">Start building <span>→</span></Link>
                <Link className={styles.secondaryButton} to="/api-explorer">Explore the API <span>↗</span></Link>
              </div>
              <div className={styles.heroMeta}>
                <span><b>99.99%</b> API uptime</span>
                <span><b>&lt;300ms</b> median response</span>
                <span><b>REST</b> JSON over HTTPS</span>
              </div>
            </div>
            <CodeWindow />
          </div>
        </section>

        <section className={styles.trustStrip} aria-label="Developer experience highlights">
          <span>Built for every stack</span>
          <div>⌘ cURL</div><div>JS Node.js</div><div>PHP Laravel</div><div>Py Python</div><div>Go Go</div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionIntro}>
            <span className={styles.kicker}>ONE API. EVERY WORKFLOW.</span>
            <h2>Everything you need to ship,<br/>without the complexity.</h2>
            <p>A consistent developer experience from your first request to production-scale delivery operations.</p>
          </div>
          <div className={styles.featureGrid}>
            <article className={styles.featureCard}>
              <div className={styles.featureIcon}>⌁</div>
              <h3>Predictable by design</h3>
              <p>Resource-oriented endpoints, clear status codes, and structured JSON responses that behave the way you expect.</p>
              <Link to="/docs/api-reference">Read the API reference <span>→</span></Link>
            </article>
            <article className={styles.featureCard}>
              <div className={styles.featureIcon}>⌘</div>
              <h3>Test before you ship</h3>
              <p>Authorize once, edit request payloads, and send live API calls directly from the interactive explorer.</p>
              <Link to="/api-explorer">Open API Explorer <span>→</span></Link>
            </article>
            <article className={styles.featureCard}>
              <div className={styles.featureIcon}>◎</div>
              <h3>Built for operations</h3>
              <p>Create orders in bulk, track every parcel state, handle returns, and understand settlements from one API.</p>
              <Link to="/docs/orders/create-order">Explore order APIs <span>→</span></Link>
            </article>
          </div>
        </section>

        <section className={`${styles.section} ${styles.endpointSection}`}>
          <div className={styles.endpointHeader}>
            <div>
              <span className={styles.kicker}>API AT A GLANCE</span>
              <h2>A small surface area.<br/>Powerful outcomes.</h2>
            </div>
            <Link className={styles.textLink} to="/api-explorer">View all endpoints <span>→</span></Link>
          </div>
          <div className={styles.endpointList}>
            {endpoints.map((endpoint) => (
              <Link to="/api-explorer" className={styles.endpointRow} key={endpoint.path}>
                <span className={`${styles.method} ${styles[endpoint.tone]}`}>{endpoint.method}</span>
                <code>{endpoint.path}</code>
                <span className={styles.endpointTitle}>{endpoint.title}</span>
                <span className={styles.rowArrow}>↗</span>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.ctaOrb}/>
          <span className={styles.kicker}>READY WHEN YOU ARE</span>
          <h2>Your first delivery is<br/>one request away.</h2>
          <p>Grab your API credentials, follow the quick start, and create a shipment in minutes.</p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} to="/docs/quick-start">Read the quick start <span>→</span></Link>
            <Link className={styles.secondaryButton} to="/docs/authentication">Set up authentication</Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
