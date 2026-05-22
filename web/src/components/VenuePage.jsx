import { VENUE } from "../data/static"
export default function VenuePage() {
  return (
    <div className="page">
      <h2 className="page-title">{VENUE.name}</h2>
      <p className="page-sub">{VENUE.address}</p>
      <div className="card">
        <div className="card-label">Address</div>
        <a href={VENUE.mapsUrl} target="_blank" rel="noreferrer" style={{display:"block",fontSize:16,fontWeight:600,color:"var(--primary)",marginBottom:2,textDecoration:"none"}}>{VENUE.address}</a>
        
        <a href={"tel:" + VENUE.phone.replace(/[^0-9]/g,"")} className="call-btn" style={{marginTop:12}}>Call Front Desk {VENUE.phone}</a>
      </div>
      <div className="section-header">Rooms</div>
      <div className="card">
        {VENUE.rooms.map((r,i) => (
          <div key={i} className="row-item"><div><div className="row-name">{r.name}</div><div className="row-meta">{r.description}</div></div></div>
        ))}
      </div>
      <div className="section-header">House Rules</div>
      <div className="card">
        {VENUE.rules.map((r,i) => <div key={i} className="row-item"><div className="row-name" style={{fontSize:14}}>{r}</div></div>)}
      </div>
    </div>
  )
}
