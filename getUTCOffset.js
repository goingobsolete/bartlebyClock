function getUTCOffset(timeZone) {
    const now = new Date();
    
    // Get the format options for the specific time zone
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone,
      timeZoneName: 'short'
    });
    
    // Extract the time zone offset (e.g., 'GMT-5' or 'GMT+1')
    const parts = formatter.formatToParts(now);
    const timeZonePart = parts.find(part => part.type === 'timeZoneName');
    
    return timeZonePart ? timeZonePart.value : null;
  }
  
  // Example usage
  console.log(getUTCOffset('America/New_York'));  // Output: 'GMT-4' or 'GMT-5' depending on DST
  console.log(getUTCOffset('Europe/London'));     // Output: 'GMT+1' or 'GMT' depending on DST
  console.log(getUTCOffset('Asia/Tokyo'));        // Output: 'GMT+9'
  