(function($){
	$.fn.tabs = function(options){
		var def = {
			range: 100
		}
		var options = $.extend({},def,options)
		el = $(this)

		// 获取刷新的元素
		function resfEl(){
			contLi = el.find('.cont-scroll li') // 标签
			contScr = el.find('.cont-scroll') // 标签父容器
			contLiActive = el.find('.cont-scroll .active') // 标签内的active

			wrapCont = el.find('.wrap-content') // 内容父容器
			contIndex = el.find('.wrap-content .cont-index') // 标签对应的内容容器
			contDel = el.find('.cont-scroll li .del') // 标签内的删除

			addCont = el.find('.Add .add-cont') // 添加内容 按钮
			delCont = el.find('.Add .del-cont')

			// 添加 
			Add = $('.full-add') // 全屏修改
			fullWrap = el.find('.full-add .full-wrap')
			fullWrapClose = el.find('.full-add .full-wrap .full-top span')

			// 添加内容 确定按钮
			inpBotton = el.find('.full-inp botton')
			// 添加内容 标题
			inpTitle = el.find('.full-inp input')
			// 添加内容 内容
			inpSect = el.find('.full-inp textarea')


			// 修改内容
			modify = el.find('.full-modify')
			
			// 修改内容 关闭按钮
			modifyClose = el.find('.full-modify .full-top span')

			// 修改内容 标题
			modifyTitle = el.find('.full-modify .full-modi input')

			// 修改内容 段落
			modifySec = el.find('.full-modify .full-modi textarea')

			// 修改内容 确认按钮
			modifyBotton = el.find('.full-modify .full-modi botton')

			//tab-left
			tabLeft = el.find('.tab-left')
			tabRight = el.find('.tab-right')
		}
		resfEl()

		// 点击标签页
		contScr.on('click','li',function(){
			resfEl()
			var _this = $(this)
			_this
				.addClass('active')
				.siblings(_this)
				.removeClass('active')

			contIndex.eq(_this.index()).show().siblings().hide()
		})

		contDel.on('click',function(){
			resfEl()
			// 如果在当前标签下 点击删除 ， 那么就在后面哪个添加active
			console.log(contLiActive.index())
			contLiActive.index() == $(this).parent().index() ? contLi.eq(contLiActive.index() + 1).addClass('active') : ''
			 
			// 如果在最后一个标签下 点击删除 ， 那么就在倒数第二个添加active
			contLiActive.index() ==  contLi.length-1 ? contLi.eq(contLi.length-2).addClass('active') : ''
			
			var _this = $(this)
			parLi = _this.parent().index()
			_this.parent().remove()
			contIndex.eq(parLi).remove()
			
			resfEl()
			contIndex.eq(contLiActive.index()).show()
		})

		// 点击 添加内容 关闭按钮
		addCont.on('click',function(){
			Add.show()
		})

		// 点击删除全部内容
		delCont.on('click',function(){
			contLi.remove()
			contIndex.remove()
		})

		// 点击全屏添加内容
		fullWrapClose.click(function(){
			Add.hide()
		})

		// 添加内容 确定按钮
		inpBotton.on('click',function(){
			title = inpTitle.val()
			sect = inpSect.val()
			strLi = "<li><span>"+title+"</span><a href='' class='del'>X</a></li>" 
			strSec = "<div class='cont-index'>"+sect+"</div>"
			contScr.append(strLi)
			wrapCont.append(strSec)
			inpTitle.val(inpSect.val(''))
			Add.hide()
			resfEl()
			contLi.eq(contLi.length-1).addClass('active').siblings(this).removeClass('active')
			contIndex.eq(contLi.length - 1).show().siblings(this).hide()
			getliWidth()
		})


		// 双击标签 显示修改内容框
		var secIndex;
		contScr.on('dblclick','li',function(){
			secIndex = $(this).index()
			modTitle = $(this).find('span').text().trim()
			modifyTitle.val(modTitle)

			modSec = contIndex.eq(secIndex).text().trim()
			modifySec.val(modSec)
			modify.show()
		})

		modifyBotton.on('click',function(){
			contLi.eq(secIndex).find('span').text(modifyTitle.val())
			contIndex.eq(secIndex).text(modifySec.val())

			modify.hide()
			getliWidth()
		})

		

		var moveIndex = 0;
		// 标签左滑
		tabLeft.on('click',function(){
			moveIndex < 0 ? moveIndex++ : moveIndex = 0
			contScr.stop().animate({'marginLeft':moveIndex*options.range})
		})

		// 标签右滑
		tabRight.on('click',function(){
			-(contScr.css('width').slice(0,-2)-1000) < contScr.css('margin-left').slice(0,-2) ? moveIndex-- : ''
			contScr.stop().animate({'marginLeft':moveIndex*options.range})
		})

		// 标签父容器 宽度
		getliWidth()
		function getliWidth(){
			var contLiWidth = 0;
			contLi.each(function(){
				contLiWidth += $(this).outerWidth(true)
			})
			contScr.css('width',contLiWidth + 2)
			console.log(contLiWidth + 2)
		}
	}	
})(jQuery);





















