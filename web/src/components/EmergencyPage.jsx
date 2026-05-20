import { EMERGENCY_CONTACTS, MEDICAL } from "../data/static"
export default function EmergencyPage() {
  return (
    <div className="page">
      <h2 className="page-title">Emergency</h2>
      <p className="page-sub">Tap any name to call directly</p>
      <div className="section-header">Retreat Contacts</div>
      {EMERGENCY_CONTACTS.map((c,i) => (
        <div key={i} className="card">
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div><div className="card-title">{c.name}</div><div className="card-sub">{c.role} · {c.display}</div></div>
            <a href={"tel:" + c.phone} className="call-btn" style={{marginTop:0,padding:"8px 14px",fontSize:13}}>Call</a>
          </div>
        </div>
      ))}
      <div className="section-header">Medical</div>
      {MEDICAL.map((m,i) => (
        <div key={i} className="card">
          <span className={"tag " + (i===0 ? "tag-amber" : "tag-green")} style={{marginBottom:8,display:"inline-block"}}>{m.type}</span>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
            <div>
              <div className="card-title">{m.name}</div>
              <div className="card-sub">{m.address} · {m.distance}</div>
              <a href={m.mapsUrl} target="_blank" rel="noreferrer" className="map-link">Directions</a>
            </div>
            <a href={"tel:" + m.phone.replace(/[^0-9]/g,"")} className="call-btn" style={{marginTop:0,padding:"8px 14px",fontSize:13,flexShrink:0,marginLeft:12}}>Call</a>
          </div>
        </div>
      ))}
    </div>
  )
}
