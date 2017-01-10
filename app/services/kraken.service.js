import Kraken from 'kraken-exchange-api';
export default class {
    constructor() {
        this.kraken = new Kraken('', '') 
    }
    $onInit() {
           }

    getBalance() {
        this.kraken.api('Balance', null, (error, data) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log(data.result);
                return data.result;
            }
        })
    }
}