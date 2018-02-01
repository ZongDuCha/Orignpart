!(function($){
    $.fn.zdMagnifier = function(options){
        var el = $(this);

        var def = {
            width: '400px',
            height: '500px',
            zoom: 3
        }

        var _o = $.extend({},def,options)

        var wrapperImg = el.find('.zd-wrapper--img')

        var staticImg = el.find('.zd-wrapper--img img')

        var moveImg = el.find('.zd-wrapper--img .move-img')

        var wrapList = el.find('.zd-wrapper--list');

        var bigImg = el.find('.big-img')

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

        // 获取active的位置
        function getActive(){
            var _Active = el.find('.list-wrapper .active').index();
            return _Active >= 0 ? _Active : '0';
        }

        // 设置wrapper 的图片
        function setWrapImg(img){
            !wrapperImg.find('img').length 
                ?  wrapperImg.append('<img src="'+img+'"width="350"/>')
                :  wrapperImg.find('img').attr('src',img)
            staticImg = el.find('.zd-wrapper--img img')
            
            !bigImg.find('img').length
                ? bigImg.append('<img src="'+img+'"/>')
                : bigImg.find('img').attr('src',img)
                
            
        }

        var imgSrc;
        var ulWidth = new Number();
        !(function(){
            // 给第一个缩略图 加active
            var _liActive = getActive();
            _liImg.eq(_liActive).addClass('active')
            imgSrc = _liImg.eq(_liActive).find('img').attr('src');
            setWrapImg(imgSrc)

            // 设置ul的宽度
            _liImg.each(function(){
                ulWidth += $(this).outerWidth(true)
            })
            _listUl.width( ulWidth + 'px');

            // 设置容器高宽
            wrapperImg.attr({'style':';width:'+_o.width+';height:'+_o.height+''})
            bigImg.attr('style','height:'+_o.height+';width:'+_o.width)
            el.attr({'style':'width:'+_o.width})
            

            wrapperImg.hover(function(e){
                var _x = e.pageX - moveImg.outerWidth(true)/2 - 10;
                var _y = e.pageY - moveImg.outerHeight(true)/2 - 10;
                moveImg.stop().css({'left':_x,'top':_y}).show();
                // 大图移动
                bigImg
                    .find('img')
                    .attr('style','width:' + _o.width*_o.zoom + 'px;height:' + _o.height*_o.zoom + 'px')
                wrapperImg.mousemove(function(e){

                    // 划入显示移动div
                    var imgPos = {
                        top: (wrapperImg.height() - staticImg.height())/2,
                        left: (wrapperImg.width() - staticImg.width())/2,
                    }

                    var _x = e.pageX - moveImg.outerWidth(true)/2 - 10;
                    var _y = e.pageY - moveImg.outerHeight(true)/2 - 10; 

                    
                    _y <= imgPos.top ?  _y = imgPos.top : 0
                    _x <= imgPos.left ?  _x = imgPos.left: 0


                    // 最下边：图片高度 - 移动的宽度 + 宽度间隙
                    _y >= staticImg.height() - moveImg.height() + imgPos.top 
                        ? _y = staticImg.height() - moveImg.height() + imgPos.top
                        : ''

                    // 最右边：图片宽度 - 移动的宽度 + 宽度间隙
                    _x >= staticImg.width() - moveImg.width() + imgPos.left
                        ? _x = staticImg.width() - moveImg.width() + imgPos.left
                        : ''
                    
                    moveImg.animate({'left':_x,'top':_y},0)

                    bigImg.find('img').stop().animate({'left':(-_x + imgPos.left),'top':(-_y - imgPos.top)*_o.zoom},1)

                    console.log((-_x + imgPos.left)*_o.zoom,(-_y + imgPos.top)*_o.zoom)
                    
                })
            },function(){
                moveImg.hide()
            })

        })();

        

        

        // 点击缩略图
        _liImg.on('mouseover',function(){
            $(this)
                .addClass('active')
                .siblings(_liImg)
                .removeClass('active');
            staticImg = el.find('.zd-wrapper--img img')

            imgSrc = $(this).find('img').attr('src')
            setWrapImg(imgSrc)
            
        })

        var leftIndex = 1;
        _prev.on('click',function(){
            leftIndex++;
            var wrapWidth = _listWrapper.width()
            var ulLeft = -wrapWidth/2 * leftIndex

            // 最右边：缩略图父宽度 - ul移动的left < ul的父元素
            if(ulWidth - (-ulLeft) < wrapWidth + 5){
                var ulLeft = ulWidth - wrapWidth;
                leftIndex--;
                _listUl.stop().animate({'marginLeft':-ulLeft})
                return false;
            }
            _listUl.stop().animate({'margin-left':ulLeft})
        })

        _next.on('click',function(){
            leftIndex--;
            
            // 移动次数 < 2
            if(leftIndex < 2){
                _listUl.stop().animate({'marginLeft':0});
                leftIndex=1;
                return false;
            }
            
            var wrapWidth = _listWrapper.width()
            var ulLeft = -wrapWidth/2 * leftIndex
            _listUl.stop().animate({'margin-left':ulLeft})
        })
    }
})(jQuery);