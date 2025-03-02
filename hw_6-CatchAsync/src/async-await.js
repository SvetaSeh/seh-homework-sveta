async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        processData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function processData(data) {
    console.log('Processed Data:', data);
}


fetchData('https://disqus.com/api/3.0/forums/details?forum=uk-javascript-info&attach=forumFeatures&api_key=E8Uh5l5fHZ6gD8U3KycjAIAk46f68Zw7C6eW8WSjZvCLXebZ7p0r1yrYDrLilk2F');


