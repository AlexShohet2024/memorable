export default function Nav({ page, setPage }) {
  const tabs = [
    { id: "schedule",  label: "Schedule" },
    { id: "venue",     label: "Venue" },
    { id: "directory", label: "Directory" },
    { id: "area",      label: "Area" },
    { id: "emergency", label: "Emergency" },
  ]
  return (
    <nav className="bottom-nav">
      {tabs.map(t => (
        <button key={t.id} className={"nav-tab" + (page === t.id ? " active" : "")} onClick={() => setPage(t.id)}>
          {t.label}
        </button>
      ))}
      
        href="https://t.me/memorableretreat_bot"
        target="_blank"
        rel="noreferrer"
        className="nav-tab nav-tab-beora"
      >
        Beora AI
      </a>
    </nav>
  )
}
