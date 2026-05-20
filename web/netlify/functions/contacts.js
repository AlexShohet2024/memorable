const https = require('https')

exports.handler = async function() {
  const key = process.env.VITE_SHEETS_API_KEY
  const id  = process.env.VITE_SHEETS_SPREADSHEET_ID

  if (!key || !id) {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ debug: 'missing config', hasKey: !!key, hasId: !!id })
    }
  }

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/A:E?key=${key}`

  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = ''
      res.on('data', chunk => { data += chunk })
      res.on('end', () => {
        resolve({
          statusCode: 200,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
          body: data
        })
      })
    }).on('error', err => {
      resolve({
        statusCode: 200,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ error: err.message })
      })
    })
  })
}
