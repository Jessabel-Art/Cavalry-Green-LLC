import Link from 'next/link';
import Image from 'next/image';
import { FinalCta, Footer, Header, serviceFamilies } from './components';

export const metadata = {
  title: 'Cavalry Green LLC | Lawn Care & Property Services in Hope Mills, NC',
  description: 'Veteran-owned lawn care, landscaping, cleanup, and property maintenance serving Hope Mills, Fayetteville, and nearby North Carolina communities.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Cavalry Green LLC | Lawn Care & Property Services', description: 'Year-round lawn, landscaping, cleanup, and property maintenance around Hope Mills, North Carolina.', url: '/', type: 'website' },
  twitter: { card: 'summary' as const, title: 'Cavalry Green LLC | Property Care', description: 'Year-round lawn, landscaping, cleanup, and property maintenance around Hope Mills, NC.' },
};

export default function Home() {
  return <><Header /><main id="main-content">
    <section className="hero">
      <div className="hero-photo"><Image src="/hero-lawn.avif" alt="Lawn care professional mowing a residential front yard" fill priority sizes="(max-width: 960px) 100vw, 57vw" /></div>
      <div className="hero-copy"><p className="eyebrow">Hope Mills · Fayetteville · Surrounding communities</p><h1><span className="keep">Year‑round</span><br /><em>property care.</em></h1><p className="hero-deck">Lawn care, landscaping, cleanup, and practical property maintenance—handled with discipline and attention to detail.</p><div className="hero-actions"><Link className="button button-dark" href="/quote">Request a quote</Link><Link className="text-link" href="/services">Explore all services</Link></div></div>
      <div className="hero-rail"><span>Veteran owned</span><span>Community focused</span></div>
    </section>
    <section className="intro split-statement" aria-labelledby="intro-heading"><span className="watermark" aria-hidden="true">CAVALRY</span><div><p className="eyebrow">Built for the work</p><h2 id="intro-heading">Built on discipline.<br /><em>Focused on your property.</em></h2></div><p className="statement-copy">Cavalry Green brings a steady, detail-oriented approach to property care—from recurring lawn maintenance to landscaping, cleanup, seasonal work, and other practical needs around the home.</p></section>
    <section className="service-preview"><div className="section-heading"><p className="eyebrow">Capabilities in the field</p><h2>Care for the<br /><em>whole property.</em></h2><Link className="text-link" href="/services">View the full service list</Link></div><div className="service-index">{serviceFamilies.map((family)=><article key={family.title} className="service-row"><h3>{family.title}</h3><p>{family.items.slice(0,3).join(' · ')}</p></article>)}</div></section>
    <section className="veteran-story"><div className="story-photo"><Image src="/service-landscape.avif" alt="Freshly maintained planting bed and lawn at a residential property" fill sizes="(max-width: 850px) 100vw, 58vw" /></div><div className="story-copy"><p className="eyebrow">A service mindset</p><h2>Veteran owned.<br /><em>Community focused.</em></h2><p>Discipline, reliability, attention to detail, and respect for your property guide every job. Cavalry Green brings that steady service mindset to homes throughout the communities we serve.</p></div></section>
    <section className="service-area"><span className="watermark" aria-hidden="true">GREEN</span><div><p className="eyebrow">Local coverage</p><h2>Close to home.<br /><em>Ready for the work.</em></h2><p>Serving surrounding communities where scheduling and project scope allow.</p></div><div className="area-grid" aria-label="Service areas"><span>Hope Mills</span><span>Fayetteville</span><span>Raeford</span><span>Spring Lake</span><span>Cameron</span><span>Surrounding communities</span></div></section>
    <FinalCta /><Footer />
  </main></>;
}
