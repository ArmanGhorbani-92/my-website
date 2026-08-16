"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Frame, useSitePrefs } from "../SiteShell";
import { getSection } from "../content";

export default function SectionPage(){
  const prefs=useSitePrefs(); const fa=prefs.lang==="fa"; const id=usePathname().split("/").filter(Boolean)[0]||"about"; const section=getSection(id);
  if(!section) return <Frame prefs={prefs}><section className="not-found"><h1>404</h1><Link href="/">{fa?"بازگشت به خانه":"Back home"}</Link></section></Frame>;
  const isAbout=section.id==="about";
  return <Frame prefs={prefs}><article className={`detail-page ${section.accent} section-${section.id}`}>
    <div className="detail-hero"><div className="detail-copy reveal visible"><Link className="back" href="/">{fa?"← بازگشت به خانه":"← Back home"}</Link><p className="eyebrow"><i/>{section.number} / {fa?section.kicker.fa:section.kicker.en}</p><h1>{fa?section.title.fa:section.title.en}</h1><p>{fa?section.lead.fa:section.lead.en}</p></div><figure className="detail-art reveal visible"><img src={section.image} alt={fa?`تصویر اختصاصی صفحه ${section.kicker.fa}`:`Custom artwork for ${section.kicker.en}`}/><figcaption>ARMAN.GH / {section.kicker.en.toUpperCase()}</figcaption></figure></div>
    <section className="detail-content"><div className="facts-panel"><small>{fa?"نمای کلی این بخش":"Section overview"}</small><div className="facts-grid">{(fa?section.facts.fa:section.facts.en).map((fact,i)=><div key={fact}><span>{String(i+1).padStart(2,"0")}</span><p>{fact}</p></div>)}</div></div>
      <div className="story-groups">{section.groups.map((group,groupIndex)=><section className="story-group" key={group.title.fa} style={{"--group-delay":`${groupIndex*60}ms`} as React.CSSProperties}>
        <header><span>{String(groupIndex+1).padStart(2,"0")}</span><h2>{fa?group.title.fa:group.title.en}</h2></header>
        {group.text&&<p className="group-intro">{fa?group.text.fa:group.text.en}</p>}
        <div className="group-items">{(fa?group.items.fa:group.items.en).map((item,itemIndex)=><div key={item}><b>{String(itemIndex+1).padStart(2,"0")}</b><p>{item}</p></div>)}</div>
      </section>)}</div>
      {isAbout&&<div className="about-identity"><h2>{fa?"آیدی و اطلاعات من":"My IDs & information"}</h2><div><a href="mailto:armanghorbani574@gmail.com"><small>Email</small><b>armanghorbani574@gmail.com</b></a><a href="https://t.me/arman92ghorbani"><small>Telegram</small><b>@arman92ghorbani</b></a><a href="tel:+989027128854"><small>{fa?"شماره تماس":"Phone"}</small><b>09027128854</b></a></div></div>}
      <nav className="next-pages"><span>{fa?"ادامهٔ مسیر":"Keep exploring"}</span>{["basketball","programming","school","projects"].filter(x=>x!==section.id).slice(0,3).map(x=>{const s=getSection(x)!;return <Link href={`/${x}`} key={x}>{fa?s.kicker.fa:s.kicker.en}<b>↗</b></Link>})}</nav>
    </section>
  </article></Frame>
}
