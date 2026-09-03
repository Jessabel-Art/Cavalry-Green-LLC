'use client';
import { FormEvent, useState } from 'react';
import { serviceFamilies } from '../components';

export default function QuoteForm(){
  const [status,setStatus]=useState<'idle'|'loading'|'success'|'error'>('idle');
  const [serviceError,setServiceError]=useState(false);
  const submit=(e:FormEvent<HTMLFormElement>)=>{e.preventDefault();const data=new FormData(e.currentTarget);if(!data.getAll('services').length){setServiceError(true);document.getElementById('service-options')?.focus();return}setServiceError(false);setStatus('loading');window.setTimeout(()=>setStatus('success'),700)};
  if(status==='success') return <section className="form-success" role="status"><p className="eyebrow">Request received</p><h2>Thanks for<br /><em>reaching out.</em></h2><p>Your request has been recorded. This does not confirm an appointment or price.</p><button className="text-link" onClick={()=>setStatus('idle')}>Send another request</button></section>;
  return <form className="quote-form" onSubmit={submit} aria-busy={status==='loading'}>
    <div className="field"><label htmlFor="name">Name <span aria-hidden="true">*</span></label><input id="name" name="name" autoComplete="name" required /></div>
    <div className="field"><label htmlFor="phone">Phone <span aria-hidden="true">*</span></label><input id="phone" name="phone" type="tel" autoComplete="tel" required /></div>
    <div className="field field-wide"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" /></div>
    <div className="field field-wide"><label htmlFor="address">Property address / service location <span aria-hidden="true">*</span></label><input id="address" name="address" autoComplete="street-address" required /></div>
    <fieldset className="field-wide service-selector" aria-describedby={serviceError?'service-error':undefined}><legend>Service needed <span aria-hidden="true">*</span><small>Select all that apply</small></legend><div className="service-options" id="service-options" tabIndex={serviceError?-1:undefined}>{serviceFamilies.flatMap(x=>x.items).map(item=><label key={item}><input type="checkbox" name="services" value={item} onChange={()=>setServiceError(false)} /><span>{item}</span></label>)}</div>{serviceError&&<p className="field-error" id="service-error" role="alert">Select at least one service so we know what needs attention.</p>}</fieldset>
    <fieldset className="field-wide contact-method"><legend>Preferred contact method <span aria-hidden="true">*</span></legend><label><input type="radio" name="contact" value="phone" required /><span>Phone call</span></label><label><input type="radio" name="contact" value="text" /><span>Text message</span></label><label><input type="radio" name="contact" value="email" /><span>Email</span></label></fieldset>
    <div className="field field-wide"><label htmlFor="details">Project details <span aria-hidden="true">*</span></label><textarea id="details" name="details" rows={7} required placeholder="Describe the property condition, approximate scope, specific problem, desired service, and any timing considerations." /></div>
    {status==='error'&&<p className="form-error" role="alert">We couldn’t send your request. Please try again or call 472-300-2290.</p>}
    <div className="form-submit field-wide"><button className="button button-olive" type="submit" disabled={status==='loading'}>{status==='loading'?'Sending request…':'Request a quote'} <span aria-hidden="true">→</span></button><p>Submitting a request does not confirm an appointment or price.</p></div>
  </form>;
}
