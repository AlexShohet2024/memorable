import { VENUE } from '../data/static'

export default function VenuePage() {
  return (
    <div className="page">
      <h2 className="page-title">{VENUE.name}</h2>
      <p className="page-sub">{VENUE.address}</p>

      <div className="card">
        <div className="card-label">Address</div>
        <div className="card-title">{VENUE.address}</div>
        <a href={VENUE.mapsUrl} target="_blank" rel="noreferrer" className="map-link">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          Open in Maps
        </a>
        <br/>
        <a href={`tel:${VENUE.phone.replace(/[^0-9]/g,"")}`} className="call-btn" style={{marginTop:12}}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          Call Front Desk {VENUE.phone}
        </a>
      </div>

      <div className="section-header">Rooms</div>
      <div className="card">
        {VENUE.rooms.map((r, i) => (
          <div key={i} className="row-item">
            <div>
              <div className="row-name">{r.name}</div>
              <div className="row-meta">{r.description}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="section-header">House Rules</div>
      <div className="card">
        {VENUE.rules.map((r, i) => (
          <div key={i} className="row-item">
            <div className="row-name" style={{fontSize:14}}>{r}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
