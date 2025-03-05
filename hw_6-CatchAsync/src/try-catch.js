async function getWeb() {

    try {
        await fetch('https://invalid-url.example.com');
        console.log('You have access first website');
    } catch {
        console.log ('Error first website');
        try {
            await fetch('https://lms.academius.io/api/graphql');
            console.log('You have access second website');
        } catch (error) {
            const response2 = await fetch('https://lms.academius.io/api/graphql');
            if (!response2.ok) throw new Error('Error second website');
            throw error;
        }
        console.log('Website exist');
    }
}

getWeb();
