function throwError() {
    throw new Error('What the error');
}


function example() {
    console.log('Some text');
    throwError();
}

try {
    example();
} catch (e) {
    if (e.message !== 'What the error') {
        throw e;
    }
    console.log('Error:', e.message);
}

console.log('After try block');
