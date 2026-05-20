import { EMERGENCY_CONTACTS, MEDICAL } from '../data/static'

export default function EmergencyPage() {
  return (
    <div className="page">
      <h2 className="page-title">Emergency</h2>
      <p className="page-sub">Tap any name to call directly</p>

      <div className="section-header">Retreat Contacts</div>
      {EMERGENCY_CONTACTS.map((c, i) => (
        <div key={i} className="card">
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
            <div>
              <div className="card-title">{c.name}</div>
              <div className="card-sub">{c.role} · {c.display}</div>
            </div>
            <a href={`tel:${c.phone}`} className={`call-btn${i === 0 ? '' : ''}`} style={{marginTop:0, padding:'8px 14px', fontSize:13}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              Call
            </a>
          </div>
        </div>
      ))}

      <div className="section-header">Medical Services</div>
      {MEDICAL.map((m, i) => (
        <div key={i} className="card">
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <div>
              <span className={`tag ${i === 0 ? 'tag-amber' : 'tag-green'}`} style={{marginBottom:8, display:'inline-block'}}>{m.type}</span>
              <div className="card-title">{m.name}</div>
              <div className="card-sub">{m.address} · {m.distance}</div>
              <a href={m.mapsUrl} target="_blank" rel="noreferrer" className="map-link">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Directions
              </a>
            </div>
            <a href={`tel:${m.phone.replace(/[^0-9]/g,"")}`} className="call-btn" style={{marginTop:0, alignSelf:'flex-start', padding:'8px 14px', fontSize:13, flexShrink:0, marginLeft:12}}>
              Call
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
