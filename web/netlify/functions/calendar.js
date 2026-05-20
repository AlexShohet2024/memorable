const https = require('https')

exports.handler = async function() {
  const url = process.env.VITE_SCHEDULE_ICS_URL
  if (!url) return { statusCode: 500, body: 'No ICS URL configured' }

  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = ''
      res.on('data', chunk => { data += chunk })
      res.on('end', () => {
        resolve({
          statusCode: 200,
          headers: {
            'Content-Type': 'text/calendar; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
          },
          body: data
        })
      })
    }).on('error', (err) => {
      resolve({ statusCode: 500, body: 'Fetch failed: ' + err.message })
    })
  })
}
