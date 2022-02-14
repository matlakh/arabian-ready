var cart = (function($) {
    var cartData = new Array();
    var opts = {};


    function init(options) {
        initOptions(options);
        bindHandlers();
        renderCart();
        renderCartCount();
    }

    function bindHandlers() {
        _onClickAddBtn();
        _onClickRemoveFromCart();
    }

    function findCartElemById(id) {
        return $(opts.elCartItem + '[' + opts.attrId + '="' + id + '"]');
    }

    function renderCart() {

        var template = _.template($('#cart-template').html()),
            data = {
                items: cartData
            };
        $(opts.elCart).html(template(data));
    }

    function renderCartCount() {
        console.log($('#cart-count').html())
        var template = _.template($('#cart-count').html())
        data = {
            items: cartData
        };
        console.log(template);
        console.log($('.cart-counter').html())
        $('.cart-counter--count').html(template(data));
    }

    function deleteById(id) {
        console.log(id);
        cartData.forEach(function(el, index) {
            if (el.id == id) {
                console.log('good');
                cartData.splice(index, 1)
            }

        });
    }

    function _onClickAddBtn() {
        $('body').on('click', opts.elAddToCart, function(e) {
            var $this = $(this);
            addItem({
                id: +$this.attr(opts.attrId),
                img: $this.attr(opts.attrImg),
                name: $this.attr(opts.attrName),
                investment: $this.attr(opts.attrInvestment),
                rating: $this.attr(opts.attrRating),
                count: 1
            });
            renderCart();
            renderCartCount();
            console.log(this)
            alert('Товар добавлен в корзину');
        });
    }

    function _onClickRemoveFromCart() {

        $('body').on('click', opts.elRemoveFromCart, function(e) {
            if (!confirm('Удалить товар из корзины?')) return false;
            console.log(opts);
            console.log(this)
            var $this = $(this),
                id = +$this.attr(opts.attrId),

                $cartElem = findCartElemById(id);
            deleteById(id);
            $cartElem.remove();
            renderCart();
            renderCartCount();
        });
    }

    function initOptions(options) {
        var defaultOptions = {
            elAddToCart: '.add-product',
            attrId: 'data-id',
            attrName: 'data-productName',
            attrImg: 'data-productImg',
            attrInvestment: 'data-productInvestment',
            attrRating: 'data-productRating',
            elCart: '.modal-cart--wrapper',
            elCartItem: '.modal-cart--card',
            elRemoveFromCart: '.modal-cart--close'
        }
        _.defaults(options || {}, defaultOptions);
        opts = _.clone(options);
    }

    function addItem(item) {
        let oldItem = findCartElemById(item.id)

        cartData.push(item)
            // if (!oldItem) {

        // }
    }

    function getData() {
        return cartData;
    }

    return {
        init: init,
    }
})(jQuery);