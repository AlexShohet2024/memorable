const https = require("https")

exports.handler = async function() {
  const key = process.env.VITE_SHEETS_API_KEY
  const id  = process.env.VITE_SHEETS_SPREADSHEET_ID

  if (!key || !id) {
    return { statusCode: 500, body: JSON.stringify({ error: "Missing config" }) }
  }

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/A:F?key=${key}`

  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = ""
      res.on("data", chunk => { data += chunk })
      res.on("end", () => {
        try {
          const json = JSON.parse(data)
          const rows = json.values || []
          const contacts = rows.slice(1)
            .filter(row => row[5] && row[5].toLowerCase().includes("yes"))
            .map(row => ({
              room:  row[0] || "",
              name:  row[1] || "",
              email: row[2] || "",
              phone: row[3] || "",
              city:  row[4] || "",
            }))
            .filter(c => c.name)
          resolve({
            statusCode: 200,
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
            body: JSON.stringify({ contacts })
          })
        } catch(e) {
          resolve({ statusCode: 500, body: JSON.stringify({ error: "Parse failed" }) })
        }
      })
    }).on("error", err => {
      resolve({ statusCode: 500, body: JSON.stringify({ error: err.message }) })
    })
  })
}
