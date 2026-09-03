import Link from 'next/link';
import Image from 'next/image';
import { Footer, Header, serviceFamilies } from '../components';

export const metadata = { title: 'Lawn, Landscaping & Property Services | Cavalry Green LLC', description: 'Explore lawn care, landscaping, mulch, planting, cleanup, debris removal, hauling, and seasonal property services around Hope Mills, NC.', alternates: { canonical: '/services' }, openGraph: { title: 'Lawn, Landscaping & Property Services | Cavalry Green LLC', description: 'Lawn, landscape, cleanup, hauling, and seasonal property services for Hope Mills and surrounding communities.', url: '/services', type: 'website' }, twitter: { card: 'summary' as const, title: 'Lawn, Landscaping & Property Services | Cavalry Green LLC', description: 'Explore practical year-round property services around Hope Mills, NC.' } };

export default function Services() {
  const imageData = [
    {src:'/service-landscape.png',alt:'Fresh mulch and planting beds framing a residential entrance'},
    {src:'/service-cleanup.png',alt:'Yard debris and branches loaded for removal from a residential property'},
    {src:'/service-hauling.png',alt:'Utility trailer loaded with brush and property debris for hauling'},
  ];
  return <><Header /><main id="main-content"><section className="page-hero services-hero"><div><p className="eyebrow">Residential property services</p><h1><span className="keep">Property care,</span><br /><em>from routine to seasonal.</em></h1></div><p>Cavalry Green handles the recurring work, the seasonal reset, and the projects that help a property feel under control.</p></section>
    <section className="catalog" aria-label="Property service catalog">{serviceFamilies.map((family,index)=><article className={`catalog-family family-${index+1}`} key={family.title}><div className="category-copy"><p className="eyebrow">Service family</p><h2>{family.title}</h2><p>{family.note}</p></div><div className="catalog-items">{family.items.map(item=><div className="catalog-item" key={item}><h3>{item}</h3></div>)}</div><div className="category-photo"><Image src={imageData[index].src} alt={imageData[index].alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1200px) 100vw, 25vw" /></div></article>)}</section>
    <section className="fit-cta"><p className="eyebrow">Not sure which service fits?</p><h2>Start with the property,<br /><em>not the service name.</em></h2><p>Describe what needs attention, the condition of the property, and what you would like handled. We’ll determine the appropriate category from there.</p><Link className="button button-dark" href="/quote">Request a property service quote</Link></section>
    </main><Footer /></>;
}
