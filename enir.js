// Create a new metadata object
const metadata = {
  userId: 123,
  timestamp: new Date().toISOString()
};

// Define the data to be pushed
const data = {
  name: "John Doe",
  age: 30
};

// Send the data to the backend using the Fetch API
fetch('https://www.example.com {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Metadata': JSON.stringify(metadata) // Include the metadata in the request headers
  },
  body: JSON.stringify(data)
})
  .then(response => {
    if (response.ok) {
      console.log('Data pushed successfully');
    } else {
      console.error('Failed to push data');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
