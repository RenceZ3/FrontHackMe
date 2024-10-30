window.onload = () => {
    // Your code to execute when the page is loaded
    fetch('https://backme.onrender.com')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Assuming the response is JSON
        })
        .then(data => {
            console.log(data); // Process the data as needed
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
};
