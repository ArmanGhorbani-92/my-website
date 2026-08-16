"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Lang } from "./content";

export function useSitePrefs(){
  const [lang,setLang]=useState<Lang>("fa");
  const [theme,setTheme]=useState<"silver"|"dark">("silver");
  const [palette,setPalette]=useState<"original"|"warm"|"cool">("original");
  const [size,setSize]=useState("medium");
  const [motion,setMotion]=useState(true);
  const [effects,setEffects]=useState(true);
  const [drawer,setDrawer]=useState(false);
  const [themeChanging,setThemeChanging]=useState(false);
  const hydrated=useRef(false);
  useEffect(()=>{try{const s=JSON.parse(localStorage.getItem("arman-settings")||"{}");setLang(s.lang==="en"?"en":"fa");setTheme(s.theme==="dark"?"dark":"silver");setPalette(["warm","cool"].includes(s.palette)?s.palette:"original");setSize(["small","medium","large","xlarge"].includes(s.size)?s.size:"medium");setMotion(s.motion!==false);setEffects(s.effects!==false)}catch{}finally{hydrated.current=true}},[]);
  useEffect(()=>{if(hydrated.current)localStorage.setItem("arman-settings",JSON.stringify({lang,theme,palette,size,motion,effects}))},[lang,theme,palette,size,motion,effects]);
  const changeTheme=(next:"silver"|"dark")=>{if(next===theme)return;setThemeChanging(true);window.setTimeout(()=>setTheme(next),110);window.setTimeout(()=>setThemeChanging(false),650)};
  return {lang,setLang,theme,setTheme:changeTheme,palette,setPalette,size,setSize,motion,setMotion,effects,setEffects,drawer,setDrawer,themeChanging};
}

export function Frame({prefs,children}:{prefs:ReturnType<typeof useSitePrefs>,children:React.ReactNode}){
  const {lang,setLang,theme,setTheme,palette,setPalette,size,setSize,motion,setMotion,effects,setEffects,drawer,setDrawer,themeChanging}=prefs;
  const fa=lang==="fa";
  return <main className={`site ${theme} palette-${palette} text-${size} ${motion?"motion":"still"} ${effects?"effects":"flat"} ${themeChanging?"theme-changing":""}`} dir={fa?"rtl":"ltr"} lang={fa?"fa":"en"}>
    <header className="topbar"><Link className="brand" href="/">ARMAN<b>.GH</b></Link><nav><Link href="/">{fa?"خانه":"Home"}</Link><Link href="/about">{fa?"درباره من":"About"}</Link><Link href="/projects">{fa?"پروژه‌ها":"Projects"}</Link><a href="/#contact">{fa?"ارتباط":"Contact"}</a></nav><div className="actions"><button onClick={()=>setLang(fa?"en":"fa")} aria-label="Change language">{fa?"EN":"فا"}</button><button onClick={()=>setTheme(theme==="silver"?"dark":"silver")} aria-label="Change theme">◐</button><button onClick={()=>setDrawer(true)} aria-label={fa?"تنظیمات":"Settings"}>⚙</button></div></header>
    {children}
    {drawer&&<div className="drawer-backdrop" onClick={()=>setDrawer(false)}><aside className="drawer" onClick={e=>e.stopPropagation()}><div className="drawer-title"><h2>{fa?"تنظیمات":"Settings"}</h2><button onClick={()=>setDrawer(false)} aria-label={fa?"بستن":"Close"}>×</button></div><Setting label={fa?"زبان":"Language"}><div className="seg"><button className={fa?"active":""} onClick={()=>setLang("fa")}>فارسی</button><button className={!fa?"active":""} onClick={()=>setLang("en")}>English</button></div></Setting><Setting label={fa?"ظاهر":"Appearance"}><div className="seg"><button className={theme==="silver"?"active":""} onClick={()=>setTheme("silver")}>{fa?"روشن":"Silver"}</button><button className={theme==="dark"?"active":""} onClick={()=>setTheme("dark")}>{fa?"سرمه‌ای":"Navy glass"}</button></div></Setting><Setting label={fa?"رنگ‌ها":"Colors"}><div className="seg three">{([['original',fa?'اصلی':'Original'],['warm',fa?'گرم':'Warm'],['cool',fa?'سرد':'Cool']] as const).map(([key,label])=><button key={key} className={`${palette===key?"active":""} palette-choice ${key}`} onClick={()=>setPalette(key)}><i/>{label}</button>)}</div></Setting><Setting label={fa?"اندازه نوشته":"Text size"}><div className="seg four">{["small","medium","large","xlarge"].map(x=><button key={x} className={size===x?"active":""} onClick={()=>setSize(x)}>{x[0].toUpperCase()}</button>)}</div></Setting><Toggle label={fa?"حرکت و انیمیشن":"Motion"} on={motion} set={setMotion}/><Toggle label={fa?"افکت شیشه‌ای":"Glass effects"} on={effects} set={setEffects}/><button className="reset" onClick={()=>{setLang("fa");setTheme("silver");setPalette("original");setSize("medium");setMotion(true);setEffects(true)}}>{fa?"بازنشانی":"Reset"}</button></aside></div>}
  </main>
}
function Setting({label,children}:{label:string,children:React.ReactNode}){return <label className="setting"><span>{label}</span>{children}</label>}
function Toggle({label,on,set}:{label:string,on:boolean,set:(x:boolean)=>void}){return <label className="setting toggle-row"><span>{label}</span><button className={`toggle ${on?"on":""}`} onClick={()=>set(!on)} aria-pressed={on}><i/></button></label>}
