import { useState, useEffect } from "react"

const KEY  = import.meta.env.VITE_OPENWEATHER_API_KEY
const LAT  = "36.9741"
const LON  = "-122.0308"

const ICONS = {
  Clear: "☀️", Clouds: "⛅", Rain: "🌧️", Drizzle: "🌦️",
  Thunderstorm: "⛈️", Snow: "❄️", Mist: "🌫️", Fog: "🌫️"
}

function icon(main) { return ICONS[main] || "🌤️" }

export default function WeatherWidget() {
  const [current, setCurrent] = useState(null)
  const [forecast, setForecast] = useState([])
  const [error, setError]   = useState(false)

  useEffect(() => {
    if (!KEY) return
    const base = "https://api.openweathermap.org/data/2.5"

    fetch(`${base}/weather?lat=${LAT}&lon=${LON}&units=imperial&appid=${KEY}`)
      .then(r => r.json())
      .then(d => setCurrent(d))
      .catch(() => setError(true))

    fetch(`${base}/forecast?lat=${LAT}&lon=${LON}&units=imperial&appid=${KEY}`)
      .then(r => r.json())
      .then(d => {
        const days = {}
        const RETREAT = ["May 29","May 30","May 31"]
        ;(d.list || []).forEach(item => {
          const date = new Date(item.dt * 1000)
          const label = date.toLocaleDateString("en-US",{month:"short",day:"numeric"})
          if (RETREAT.includes(label) && !days[label]) {
            days[label] = {
              label,
              high: Math.round(item.main.temp_max),
              low:  Math.round(item.main.temp_min),
              main: item.weather[0].main,
              desc: item.weather[0].description,
            }
          }
        })
        setForecast(Object.values(days))
      })
      .catch(() => {})
  }, [])

  if (!KEY || error) return null

  return (
    <div className="weather-widget">
      {current && (
        <div className="weather-current">
          <span className="weather-icon">{icon(current.weather?.[0]?.main)}</span>
          <div>
            <div className="weather-temp">{Math.round(current.main?.temp)}°F</div>
            <div className="weather-desc">{current.weather?.[0]?.description}</div>
          </div>
          <div className="weather-loc">Santa Cruz, CA</div>
        </div>
      )}
      {forecast.length > 0 && (
        <div className="weather-forecast">
          {forecast.map((d,i) => (
            <div key={i} className="weather-day">
              <div className="weather-day-label">{d.label}</div>
              <div className="weather-day-icon">{icon(d.main)}</div>
              <div className="weather-day-temps">{d.high}° <span>{d.low}°</span></div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
