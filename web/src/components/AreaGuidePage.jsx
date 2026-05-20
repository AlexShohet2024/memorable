import { useState } from "react"
import { ERRANDS, RESTAURANTS, SIGHTS, AA_MEETINGS } from "../data/static"
const TABS = ["AA Meetings","Errands","Restaurants","Sights"]
export default function AreaGuidePage() {
  const [tab, setTab] = useState("AA Meetings")
  return (
    <div className="page">
      <h2 className="page-title">Area Guide</h2>
      <p className="page-sub">Santa Cruz near the venue</p>
      <div className="tab-row">
        {TABS.map(t => <button key={t} className={"tab-pill" + (tab===t ? " active" : "")} onClick={() => setTab(t)}>{t}</button>)}
      </div>
      {tab === "AA Meetings" && <>
        <div className="warning">Verify current times at santa-cruz-aa.org before the retreat.</div>
        {AA_MEETINGS.map((m,i) => (
          <div key={i} className="card">
            <span className="tag tag-green" style={{marginBottom:6,display:"inline-block"}}>{m.type}</span>
            <div className="card-title">{m.name}</div>
            <div className="card-sub">{m.time}</div>
            <div className="card-sub">{m.location}</div>
            <a href={m.mapsUrl} target="_blank" rel="noreferrer" className="map-link" style={{marginTop:6}}>Directions</a>
          </div>
        ))}
      </>}
      {tab === "Errands" && ERRANDS.map((cat,i) => (
        <div key={i}>
          <div className="section-header">{cat.category}</div>
          <div className="card">
            {cat.items.map((item,j) => (
              <div key={j} className="row-item">
                <div><div className="row-name">{item.name}</div><div className="row-meta">{item.address} · {item.hours}</div></div>
                <a href={item.mapsUrl} target="_blank" rel="noreferrer" className="map-link" style={{margin:0,flexShrink:0,marginLeft:12}}>Map</a>
              </div>
            ))}
          </div>
        </div>
      ))}
      {tab === "Restaurants" && <div className="card">
        {RESTAURANTS.map((r,i) => (
          <div key={i} className="row-item">
            <div><div className="row-name">{r.name}</div><div className="row-meta">{r.cuisine} · {r.distance} · {r.address}</div></div>
            <a href={r.mapsUrl} target="_blank" rel="noreferrer" className="map-link" style={{margin:0,flexShrink:0,marginLeft:12}}>Map</a>
          </div>
        ))}
      </div>}
      {tab === "Sights" && <div className="card">
        {SIGHTS.map((s,i) => (
          <div key={i} className="row-item">
            <div>
              <span className="tag tag-green" style={{marginBottom:4,display:"inline-block"}}>{s.type}</span>
              <div className="row-name">{s.name}</div>
              <div className="row-meta">{s.description}</div>
              <a href={s.mapsUrl} target="_blank" rel="noreferrer" className="map-link" style={{marginTop:4}}>Directions</a>
            </div>
          </div>
        ))}
      </div>}
    </div>
  )
}
