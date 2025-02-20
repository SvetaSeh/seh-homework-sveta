function fetchJson(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => {
                console.error('Error fetching JSON:', error);
                reject(error);
            });
    });
}

function processData(data) {
    console.log('Processed Data:', data);
}


fetchJson('https://disqus.com/api/3.0/forums/details?forum=uk-javascript-info&attach=forumFeatures&api_key=E8Uh5l5fHZ6gD8U3KycjAIAk46f68Zw7C6eW8WSjZvCLXebZ7p0r1yrYDrLilk2F')
    .then(data => processData(data))
    .catch(error => console.error('Error processing data:', error));


