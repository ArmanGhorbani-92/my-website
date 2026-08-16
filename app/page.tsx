"use client";

import Link from "next/link";
import { useEffect } from "react";
import { sections } from "./content";
import { Frame, useSitePrefs } from "./SiteShell";

export default function Home(){
  const prefs=useSitePrefs(); const fa=prefs.lang==="fa";
  useEffect(()=>{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.1});document.querySelectorAll(".reveal").forEach(el=>io.observe(el));return()=>io.disconnect()},[prefs.lang]);
  return <Frame prefs={prefs}>
    <section className="hero"><div className="hero-inner reveal"><p className="eyebrow"><i/>{fa?"پلتفرم هویت دیجیتال آرمان":"Arman’s digital identity platform"}</p><h1>{fa?"دنیای من، پشت شیشه‌ای از نقره":"My world, behind silver glass"}</h1><p>{fa?"بسکتبال، برنامه‌نویسی، مدرسه و پروژه‌هایی که مرحله‌به‌مرحله به واقعیت تبدیل می‌شوند.":"Basketball, programming, school and projects becoming real one step at a time."}</p><a href="#cards">{fa?"ورود به دنیای من":"Enter my world"}<span>↓</span></a></div><div className="glass-stage" aria-hidden="true"><div className="silver-disc"><span>AG</span></div><div className="float-tag one">DEFENSE × DRIVE</div><div className="float-tag two">CODE × ROBOTICS</div></div></section>
    <section id="cards" className="cards-section"><div className="section-head reveal"><p>ARMAN.GH / PERSONAL UNIVERSE</p><h2>{fa?"هر کارت، یک صفحهٔ مستقل":"Every card opens a distinct page"}</h2><span>{fa?"هر تصویر فقط برای همان موضوع ساخته شده است. برای ورود به صفحهٔ کامل، روی کارت بزن.":"Every image was made for its own story. Select a card to enter the full page."}</span></div><div className="card-grid">{sections.map((c,i)=><Link href={`/${c.id}`} className={`story-card reveal ${c.accent}`} style={{"--delay":`${(i%3)*90}ms`} as React.CSSProperties} key={c.id}><div className="card-image"><img src={c.image} alt={fa?`تصویر اختصاصی ${c.kicker.fa}`:`Custom ${c.kicker.en} artwork`} loading="lazy"/><span className="open-mark">↗</span><span className="image-shine"/></div><div className="card-copy"><small>{c.number} / {fa?c.kicker.fa:c.kicker.en}</small><h3>{fa?c.title.fa:c.title.en}</h3><p>{fa?c.summary.fa:c.summary.en}</p></div></Link>)}</div></section>
    <section id="contact" className="contact reveal"><p className="eyebrow"><i/>ARMAN.GH</p><h2>{fa?"آیدی و اطلاعات من":"My IDs & contact"}</h2><div className="identity-list"><a href="mailto:armanghorbani574@gmail.com"><b>Email</b><span>armanghorbani574@gmail.com</span></a><a href="https://t.me/arman92ghorbani"><b>Telegram</b><span>@arman92ghorbani</span></a><a href="tel:+989027128854"><b>{fa?"تلفن":"Phone"}</b><span>09027128854</span></a></div></section>
    <footer><b>ARMAN.GH</b><span>{fa?"دنیای دیجیتال شخصی آرمان":"Arman’s personal digital universe"}</span><small>© 2026</small></footer>
  </Frame>
}
