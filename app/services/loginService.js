export default class {
    constructor(cartService, session, $q) {
        this.$q = $q;
        this.cartService = cartService;
        this.session = session;
    }

  loginUserAndUpdateItems() {
      let self = this;
      return self.cartService.getCart(5).then((response) => {
            let thisUser = self.session.getUser();
            thisUser.cart = response;
            self.session.putUser(thisUser);
            return response.cartId;
        }).then((cartId) => {
            let tempCart = self.session.getTempCart();
            if (tempCart) {
                return self.$q.all(tempCart.items.map((item) => {
                    return self.cartService.updateItem(cartId, item.sku, item.quantity);
                })).then(() => {
                    self.session.deleteTempCart();
                    return self.cartService.getItems(cartId);
                })
            }
        })
        .then((items) => {
            let thisUser = self.session.getUser();
            thisUser.cart.items = items;
            self.session.putUser(thisUser);
            // user.isUserAuthenticated() ? null : $state.go('app.home');   unneccesary??
        })
  }
}