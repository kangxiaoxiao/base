/**
 * Created by pengeorge on 2015/7/27.
 */
var Toast = function(config){
    this.context = config.context==null?$('body'):config.context;//上下文
    this.message = config.message;//显示内容
    this.time = config.time==null?3000:config.time;//持续时间
    this.left = config.left;//距容器左边的距离
    this.top = config.top;//距容器上方的距离
    this.right = config.right;
    this.bottom = config.bottom;
    this.offset_x = config.offset_x==null ? 0 : config.offset_x;
    this.offset_y = config.offset_y==null ? 0 : config.offset_y;
    this.font_size = config.font_size==null ? '16px' : config.font_size;
    this.bgcolor = config.bgcolor == null ? 'black' : config.bgcolor;
    this.color = config.color == null ? 'white' : config.color;
    this.extra_padding = config.extra_padding == null ? 0 : config.extra_padding;
    this.init();
    $("#toastMessage").css({
        'position':'fixed',
        'border-radius':'10px',
        'cursor':'pointer',
        'max-width':'240px',
        'left':'50%',
        'transform':'translateX(-50%)',
        '-ms-transform':'translateX(-50%)',
        '-moz-transform':'translateX(-50%)',
        '-webkit-transform':'translateX(-50%)',
        '-o-transform':'translateX(-50%)'
    });
}
var msgEntity;
Toast.prototype = {
    //初始化显示的位置内容等
    init : function(){
        $("#toastMessage").remove();
        //设置消息体
        var msgDIV = new Array();
        msgDIV.push('<div id="toastMessage">');
        msgDIV.push('<span>'+this.message+'</span>');
        msgDIV.push('</div>');
        msgEntity = $(msgDIV.join('')).appendTo(this.context);
        //设置消息样式
        var toastMessageWidth = $('#toastMessage').innerWidth();
        var toastMessageHeight = $('#toastMessage').innerHeight();
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
        var sidePadding = 10;
        var newLeft, newRight, newTop, newBottom;
        var xposObj, yposObj;
      /*  if(toastMessageWidth>200){
            toastMessageWidth == 200
        }*/
        if (this.right != null) {
            newRight = this.right;
            xposObj = {'right' : newRight + "px"};
        } else {
            if (this.left != null) {
                newLeft = this.left;
            } else {
                newLeft = (windowWidth - toastMessageWidth) / 2 - sidePadding + this.offset_x;
            }
            xposObj = {'left' : newLeft + "px"};
        }
        if (this.bottom != null) {
            newBottom = this.bottom;
            yposObj = {'bottom' : newBottom + "px"};
        } else {
            if (this.top != null) {
                newTop = this.top;
            } else {
                newTop = (windowHeight - toastMessageHeight) / 2 - sidePadding + this.offset_y;
            }
            yposObj = {'top' : newTop + "px"};
        }
        var cssObj = $.extend({}, xposObj, {'z-index':'999999','background-color':this.bgcolor,'color':this.color,
            'padding': this.extra_padding + sidePadding + 'px','font-size':this.font_size,'max-width':240+'px','opacity':0.8});
        cssObj = $.extend({}, yposObj, cssObj);
        msgEntity.css(cssObj);
    },
    //显示动画
    show :function(){
        msgEntity.fadeIn(this.time/3);
        msgEntity.delay(this.time/3).fadeOut(this.time/3);
    }
}
function makeToast(messageString){

    new Toast({context:$('body'),message:messageString}).show();
}

