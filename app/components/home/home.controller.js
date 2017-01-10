class HomeController {
    constructor(kraken) {
        this.title = 'kraken'
        this.kraken = kraken;
    }
    $onInit() {
        this.balance = this.kraken.getBalance();
    }
}

export default HomeController;