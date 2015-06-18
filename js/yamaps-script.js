function BaloonImage(balloon, action) {
    this._action = action;

    balloon.events.add('open', this._onMapBalloonOpen, this);
    balloon.events.add('close', this._onMapBalloonclose, this);
}

BaloonImage.prototype = {
    constructor: BaloonImage,
    _onMapBalloonOpen: function (e) {
        var balloon = this._balloon = e.get('balloon'),
            position = this._position = balloon.getPosition();
    },
    _onMapBalloonClose: function (e) {
        this._button.off('click');
    }
};

ymaps.ready(function () {
    /**
     * @see http://api.yandex.ru/maps/doc/jsapi/2.x/ref/reference/templateLayoutFactory.xml
     */
    BaloonImage.BalloonLayout = ymaps.templateLayoutFactory.createClass(
        '<div class="popover">' +
            '<a class="close" href="#" title="Закрыть">&times;</a>' +
            '<div class="image-wrapper">' +
	            '<div class="work-item-ymaps" data-images="$[data_images]">' +
	            	'<img src="$[img]" style="max-height: 100px;"onclick="clicked();" alt="Нажмите чтобы увидеть еще фотографии">' +
	            '</div>' +
	        '</div>' +
			'<div class="arrow"></div>' +
        '</div>', {
        build: function () {
            this.constructor.superclass.build.call(this);

            this.$element = $(this.getParentElement()).find('.popover');
            this._applyElementOffset();

            this.$element
                .find('.close')
                .on('click', $.proxy(this._onCloseButtonClick, this));
        },
        clear: function () {
            this.$element
                .find('.close')
                .off('click');

            this.constructor.superclass.clear.call(this);
        },
        /**
         * Сдвигаем балун чтобы "хвостик" указывал на точку привязки.
         * @see http://api.yandex.ru/maps/doc/jsapi/2.x/ref/reference/IBalloonLayout.xml#event-userclose
         * @function
         * @private
         * @name applyElementOffset
         */
        _applyElementOffset: function () {
            this.$element.css({
                left: -(this.$element[0].offsetWidth / 2 + 10),
                top: -(this.$element[0].offsetHeight + this.$element.find('.arrow')[0].offsetHeight - 10)
            });
        },
        _onCloseButtonClick: function (e) {
            e.preventDefault();

            this.events.fire("userclose");
        }
    });
});

function clicked() {
	console.log("click");
}