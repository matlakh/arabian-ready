var app = (function($) {

    var $body = $('body'),
        page = $body.data('page'),
        options = {
            elAddToCart: '.add-product',
            attrId: 'data-id',
            attrName: 'data-productName',
            attrImg: 'data-productImg',
            attrInvestment: 'data-productInvestment',
            attrRating: 'data-productRating',
            elCart: '.modal-cart--wrapper',
            elCartItem: '.modal-cart--card',
            elRemoveFromCart: '.modal-cart--close'
        },
        optionsCart = options;


    function init() {
        console.log(options);
        cart.init(options);
    }

    return {
        init: init
    }

})(jQuery);

jQuery(document).ready(app.init);