async function handler(request, response) {
  const result = await fetch(
    'http://worldtimeapi.org/api/timezone/America/Chicago',
  );
  const data = await result.json();

  console.log('triggered here...')

  return response.json({ datetime: data.datetime });
}

module.exports = handler;