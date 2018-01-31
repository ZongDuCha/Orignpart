!(function($){
    $.fn.zdMagnifier = function(options){
        console.log(1)
        var el = $(this);

        // 缩略图li
        var _zdLi = el.find('.zd-wrapper--list li')
        _zdLi.eq(0).addClass('active')

        function getActive(){
            var _Active = el.find('.zd-wrapper--list .active').index()
            return _Active;
        }
        getActive();
    }
})(jQuery);