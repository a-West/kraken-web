//DEV evnironment version - config.js file
export default class Config {
    constructor() {
    }

    getApiEndpoint() {
            return "https://api.genesispure.com";
    }


    isTestMode() {
        return true;
    }
}
