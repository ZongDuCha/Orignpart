!(function($){
    $.fn.zdMagnifier = function(options){
        console.log(1)
        var el = $(this);

        // list-wrapper
        var _listWrapper = el.find('.list-wrapper')

        // next
        var _next = el.find('.zd-wrapper--list .list-next')
        // prev
        var _prev = el.find('.zd-wrapper--list .list-prev')
        // ul
        var _listUl = el.find('.list-wrapper ul');
        // 缩略图li
        var _liImg = el.find('.list-wrapper li');

        var ulWidth = new Number();
        ;(function(){
            // 给第一个缩略图 加active
            _liImg.eq(0).addClass('active')

            // 设置ul的宽度
            _liImg.each(function(){
                ulWidth += $(this).outerWidth(true)
            })

            _listUl.width( ulWidth + 'px');
        })();

        // 获取active的位置
        function getActive(){
            var _Active = el.find('.list-wrapper .active').index();
            return _Active;
        }

        // 获取

        // 点击缩略图
        _liImg.on('click',function(){
            $(this).addClass('active').siblings(_liImg).removeClass('active');
            // this 距离父元素的left距离
            var posLeft = $(this).position().left;
            var parWidth = _listWrapper.width()

            if((parWidth - parWidth/1.5) < posLeft){
                _listUl.stop().animate({'left': -parWidth/2},600)
            }
        })

        var leftIndex = 1;
        _next.on('click',function(){
            leftIndex++;
            var wrapWidth = _listWrapper.width()
            var ulLeft = -wrapWidth/2 * leftIndex

            // 缩略图父宽度 - ul移动了的left < ul的父元素
            console.log(ulWidth,(-ulLeft) , wrapWidth)
            if(ulWidth - (-ulLeft) < wrapWidth){
                leftIndex--;
                _listUl.stop().animate({'right':0})
                return false;
            }
            _listUl.stop().animate({'left':ulLeft})
        })

        _prev.on('click',function(){
            leftIndex--;
            var wrapWidth = _listWrapper.width()
            var ulLeft = -wrapWidth/2 * leftIndex

            // 缩略图父宽度 - ul移动了的left < ul的父元素
            if(ulWidth + (-ulLeft) > wrapWidth){
                leftIndex++;
                _listUl.stop().animate({'left':0})
                return false;
            }
            _listUl.stop().animate({'right':-ulLeft})
        })
    }
})(jQuery);