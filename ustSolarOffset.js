import fetch from 'node-fetch';

async function getUTCToSolarTimeDifferenceAtPrimeMeridian() {
  const longitude = 0; // Prime Meridian
  const latitude = 0;  // Latitude is set to 0 for simplicity
  
  // Fetch solar noon time from the Sunrise-Sunset API
  const response = await fetch(`https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&formatted=0`);
  const data = await response.json();

  if (data.status === 'OK') {
    const solarNoonUTC = new Date(data.results.solar_noon); // Solar noon in UTC

    // Get current UTC time for comparison
    const nowUTC = new Date(); // Current UTC time

    // Calculate the difference in milliseconds
    const differenceInMilliseconds = solarNoonUTC.getTime() - nowUTC.getTime();
    
    return differenceInMilliseconds;
  } else {
    throw new Error('Failed to retrieve solar time');
  }
}

// Example usage:
getUTCToSolarTimeDifferenceAtPrimeMeridian()
  .then(difference => {
    console.log(`Difference between UTC and solar time at longitude 0 (solar time = 0): ${difference} milliseconds`);
  })
  .catch(error => {
    console.error('Error:', error);
  });
