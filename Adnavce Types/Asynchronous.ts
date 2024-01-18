// Mocking

const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        if (true) {
            resolve("Hello World");
        } else {
            reject("Error");
        }
    });
}

const getPromiseData = async () => {
    const data = await makePromise();
    console.log(data);
}