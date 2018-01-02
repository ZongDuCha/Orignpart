
(function($){
	$.fn.num = function(options){
		_this = $(this)
		var _thisTop,_thisRight,_thisBottom,_thisLeft,_thisTopBottom,_thisRightLeft,_thisAll
		
		n1 = _this.width();
		h1 = _this.height();
		
		var defaults = {
			Type:'num1',
			Color:'#ff0000',
			speed:300,
		}
		var options = $.extend({},defaults,options)
		var becurr = "background:"+options.Color+";position:absolute;border-radius:10px;opahide;"
		switch(options.Type){
			case 'num1': 
				num1()
				break;
			case 'num2': 
				num2()
				break;
			case 'num3': 
				num3()
				break;
			case 'num4': 
				num4()
				break;
			case 'num5': 
				num5()
				break;
			case 'num6': 
				num6()
				break;
			case 'num7': 
				num7()
				break;
			case 'num8':
				num8()
				break;
			case 'num9':
				num9()
				break;
			case 'num10':
				num10()
				break;
			case 'num11':
				num10()
				break;
		}
		
		function than(_this){
			var obj = new Object();
			obj.name = '123'
			obj.thsn = function(){
				_thisTop = _this.find('.divTop').stop().show()
				_thisRight = _this.find('.divRight').stop().show()
				_thisBottom = _this.find('.divBottom').stop().show()
				_thisLeft = _this.find('.divLeft').stop().show()
				_thisTopBottom = _this.find('.divTop,.divBottom').stop().show()
				_thisRightLeft = _this.find('.divLeft,.divRight').stop().show()
				_thisAll = _this.find('.divTop,.divBottom,.divLeft,.divRight').stop().show()
			}
			return obj;
		}

		var opashow = 'opashow',opahide = 'opahide'
		function num1(){
			var becurr = "background:"+options.Color+";position:absolute;"
			// top边框
			var divTop ="<div style='"+becurr+"top:-2px;left:-2px;width:0px;height:2px' class='divTop'></div>";

			// right边框
			var divRight ="<div style='"+becurr+"bottom:-2px;right:-2px;width:2px;height:0px;' class='divRight'></div>";

			// Bottom边框
			var divBottom ="<div style='"+becurr+"bottom:-2px;right:-2px;width:0px;height:2px' class='divBottom'></div>";

			// Left边框
			var divLeft ="<div style='"+becurr+"top:-2px;left:-2px;width:2px;height:0px;' class='divLeft'></div>";
			_this.hover(function(){
				el = $(this)
				el.append(divTop,divRight,divBottom,divLeft);
				num1 = new than(el)
				num1.thsn()
				_thisTopBottom.animate({width:n1+3.5,opashow},options.speed)
				_thisRightLeft.animate({height:h1+3.5,opashow},options.speed);
			},function(){
				_thisTopBottom.animate({width:0,opahide},options.speed)
				_thisRightLeft.animate({height:0,opahide},options.speed,function(){
					_thisAll.remove()
				});
			})
		}

			function num2(){
				// top边框
				var divTop = "<div style='"+becurr+"height:2px;width:50px;top:-2px;left:-80px;' class='divTop'></div";
	
				// right边框
				var divRight = "<div style='"+becurr+"height:50px;width:2px;top:-80px;right:-2px;' class='divRight'></div";
	
				// Bottom边框
				var divBottom = "<div style='"+becurr+"height:2px;width:50px;bottom:-2px;right:-80px;' class='divBottom'></div";
	
				// Left边框
				var divLeft = "<div style='"+becurr+"height:50px;width:2px;bottom:-80px;left:-2px;' class='divLeft'></div";
				_this.hover(function(){
					el = $(this)
					el.append(divTop,divRight,divBottom,divLeft);
					num2 = new than(el)
					num2.thsn()
					_thisTop.animate({left:-2,},options.speed).fadeOut(0)
					_thisRight.animate({top:-2},options.speed).fadeOut(0)
					_thisBottom.animate({right:-2,},options.speed).fadeOut(0)
					_thisLeft.animate({bottom:-2,},options.speed).fadeOut(0);
				},function(){
					_thisTop.show().animate({left:-80},options.speed).hide(0)
					_thisRight.show().animate({top:-80},options.speed).hide(0)
					_thisBottom.show().animate({right:-80},options.speed).hide(0)
					_thisLeft.show().animate({bottom:-80},options.speed,function(){
						_thisAll.remove()
					}).hide(0);
				})
			}

		function num3(){
				// top边框
				var divTop ="<div style='"+becurr+"top:-2px;left:-2px;width:0px;height:2px' class='divTop'></div>";
	
				// right边框
				var divRight ="<div style='"+becurr+"top:-2px;right:-2px;width:2px;height:0px;' class='divRight'></div>";
	
				// Bottom边框
				var divBottom ="<div style='"+becurr+"bottom:-2px;right:-2px;width:0px;height:2px' class='divBottom'></div>";
	
				// Left边框
				var divLeft ="<div style='"+becurr+"bottom:-2px;left:-2px;width:2px;height:0px;' class='divLeft'></div>"; 
			_this.hover(function(){
				el = $(this)
				el.append(divTop,divRight,divBottom,divLeft);
				num3 = new than(el)
				num3.thsn()
				_thisTopBottom.animate({width:n1+3.5},options.speed);
				_thisRightLeft.animate({height:h1+3.5},options.speed);
			},function(){
				_thisTopBottom.animate({width:0},options.speed);
				_thisRightLeft.animate({height:0},options.speed,function(){
					_thisAll.remove()
				});
			})
		}

		function num4(){
			// top边框
			var divTop ="<div style='"+becurr+"top:-2px;left:-2px;width:0px;height:2px' class='divTop'></div>";
	
			// right边框
			var divRight ="<div style='"+becurr+"top:-2px;right:-2px;width:2px;height:0px;' class='divRight'></div>";

			// Bottom边框
			var divBottom ="<div style='"+becurr+"bottom:-2px;right:-2px;width:0px;height:2px' class='divBottom'></div>";

			// Left边框
			var divLeft ="<div style='"+becurr+"bottom:-2px;left:-2px;width:2px;height:0px;' class='divLeft'></div>";
			_this.hover(function(){
				el =$(this)
				el.append(divTop,divRight,divBottom,divLeft);
				num4 = new than(el)
				num4.thsn()
				_thisTop.animate({width:n1+3.5},options.speed,function(){
					_thisRight.animate({height:h1+3.5},options.speed,function(){
						_thisBottom.animate({width:n1+3.5},options.speed,function(){
							_thisLeft.animate({height:h1+3.5},options.speed,)
						});
					});
				})
			},function(){
				_thisAll.stop()
				_thisLeft.animate({height:0},options.speed,function(){
					_thisBottom.animate({width:0},options.speed,function(){
						_thisRight.animate({height:0},options.speed,function(){
							_thisTop.animate({width:0},options.speed,function(){
								_thisAll.remove()
							})
						});
					});
				})
	
			})
		}

		function num5(){
			// top边框
			var divTop ="<div style='"+becurr+"top:-2px;left:-2px;width:0px;height:2px' class='divTop'></div>";
	
			// right边框
			var divRight ="<div style='"+becurr+"top:-2px;right:-2px;width:2px;height:0px;' class='divRight'></div>";

			// Bottom边框
			var divBottom ="<div style='"+becurr+"bottom:-2px;right:-2px;width:0px;height:2px' class='divBottom'></div>";

			// Left边框
			var divLeft ="<div style='"+becurr+"bottom:-2px;left:-2px;width:2px;height:0px;' class='divLeft'></div>";
			_this.hover(function(){
				el = $(this)
				el.append(divTop,divRight,divBottom,divLeft);
				num5 = new than(el)
				num5.thsn()
				_thisTopBottom.animate({width:n1+3.5},options.speed,function(){
					_thisRightLeft.animate({height:h1+3.5},options.speed);
				});
				
			},function(){
				_thisTopBottom.animate({width:0},options.speed,function(){
					_thisRightLeft.animate({height:0},options.speed,function(){
						_thisAll.remove()
					});
				});
				
			})
		}

		function num6(){
			// top边框
			var divTop ="<div style='"+becurr+"top:-2px;left:"+n1/2+"px;width:0;height:2px' class='divTop'></div>";
	
			// right边框
			var divRight ="<div style='"+becurr+"top:"+h1/2+"px;right:-2px;width:2px;height:0;' class='divRight'></div>";

			// Bottom边框
			var divBottom ="<div style='"+becurr+"bottom:-2px;right:"+n1/2+"px;width:0;height:2px' class='divBottom'></div>";

			// Left边框
			var divLeft ="<div style='"+becurr+"bottom:"+h1/2+"px;left:-2px;width:2px;height:0;' class='divLeft'></div>"; 
			
			_this.hover(function(){
				el = $(this)
				el.append(divTop,divRight,divBottom,divLeft);
				num6 = new than(el)
				num6.thsn()
				_thisTopBottom.animate({width:n1+3.5,left:-2},options.speed);
				_thisRightLeft.animate({height:h1+3.5,top:-2},options.speed);
			},function(){
				_thisTopBottom.animate({width:0,left:n1/2},options.speed);
				_thisRightLeft.animate({height:0,top:h1/2},options.speed,function(){
					_thisAll.remove()
				});
			})
		}


		function num7(){
			

			_this.hover(function(){
				// top边框
			var divTop ="<div style='"+becurr+"top: 0;left: 0;width: 100%;right: 0;bottom: 0;height: 0;margin: auto;border-radius:0;' class='divTop'></div>";
				el = $(this)
				el.append(divTop);
				num7 = new than(el)
				num7.thsn()
				_thisTop.animate({height:'100%'},options.speed)
			},function(){
				_thisTop.animate({height:'0'},options.speed,function(){
					_thisTop.remove()
				})
			})
		}

		function num8(){
			// top边框
			var divRight ="<div style='"+becurr+"top: 0;left: 0;right: 0;bottom: 0;width: 0;height: 100%;margin: auto;border-radius:0;' class='divRight'></div>";

			_this.hover(function(){
				el = $(this)
				el.append(divRight);
				num7 = new than(el)
				num7.thsn()
				_thisRight.animate({width:'100%'},options.speed)
			},function(){
				_thisRight.animate({width:'0'},options.speed,function(){
					_thisRight.remove()
				})
			})
		}

		function num9(){
			// top边框
			var divTop ="<div style='"+becurr+"top: 0;left: 0;right: 0;bottom: 0;width: 0;height: 0;margin: auto;border-radius:0;' class='divTop'></div>";

				
			_this.hover(function(){
				el = $(this)
				el.append(divTop);
				num7 = new than(el)
				num7.thsn()
				_thisTop.animate({width:'100%',height:'100%'},options.speed)
			},function(){
				_thisTop.animate({width:'0',height:'0'},options.speed,function(){
					_thisTop.remove()
				})
			})
		}

	}
})(jQuery);










	