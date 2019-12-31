
$(document).ready(function () {


    $("img").on("mousedown", function (e) {
        e.preventDefault()
    })

    $("#totop").on("click", function () {
        $('html , body').animate({scrollTop: 0}, 500);
    })

    if ($(".banner .swiper-slide").length > 1) {
        var homeBanner = new Swiper(".banner .swiper-container", {
            speed: 800,
            loop: true,
            runCallbacksOnInit: false,
            watchSlidesProgress: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            pagination: {
                el: '.banner .swiper-pagination',
                clickable: true,
            },
            navigation: {
                prevEl: '.banner .swiper-button-prev',
                nextEl: '.banner .swiper-button-next'
            },
        })
    }


    if ($(".hot").length > 0) {
        $(".hot").jParticle({
            background: "#f2f2f2",//背景颜色
            color: "#c8c8c8",//粒子和连线的颜色
            particlesNumber: 100,//粒子数量
            particle: {
                minSize: 1,//最小粒子
                maxSize: 12,//最大粒子
                speed: 30,//粒子的动画速度
            }
        });
    }
    if ($(".honour-swiper").length > 0) {
        new Swiper(".honour-swiper .swiper-container", {
            speed: 800,
            loop: true,
            slidesPerView: 5,
            spaceBetween: 15,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            navigation: {
                prevEl: '.honour-swiper .swiper-button-prev',
                nextEl: '.honour-swiper .swiper-button-next'
            },
        })
    }

    if ($(".customer-swiper").length > 0) {
        new Swiper(".customer-swiper .swiper-container", {
            speed: 800,
            loop: true,
            spaceBetween: 1,
            slidesPerView: "auto",
            centeredSlides: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            navigation: {
                prevEl: '.customer-swiper .swiper-button-prev',
                nextEl: '.customer-swiper .swiper-button-next'
            },
        })
    }

    if ($(".hot").length > 0) {
        new Swiper(".hot .swiper-container", {
            speed: 600,
            loop: true,
            slidesPerView: "auto",
            spaceBetween: 30,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
        })
    }

    if ($(".prominent").length > 0) {
        var prominentSwiper = new Swiper(".prominent .swiper-container", {
            speed: 600,
            spaceBetween: 30,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false
            },
            on: {
                transitionStart: function () {
                    $(".prominent-tabs li").eq(this.activeIndex).addClass("active").siblings().removeClass("active")
                }
            }
        })
    }
    $(".prominent-tabs li").on("click", function () {
        var _index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active')
        prominentSwiper.slideTo(_index, 600)
    })
    $(".toshow").on("click", function () {
        var text = $(this).find("a").text();
        if (text) {
            $(this).find("a").text(text === '收起职位' ? '查看职位' : '收起职位');
        }
        $(this).parents(".litit").siblings(".licon").stop().slideToggle(200)
    })
    if ($("#map").length > 0) {

        loadScript(function () {
            setTimeout(function () {
                initMap()
            }, 500)
        })
        // loadScript(() => {
        //     setTimeout(() => {
        //         initMap()
        //     }, 500)
        // })

    }

    if ($(".allipics").length > 0) {
        var anliGalleryThumbs = new Swiper('.allipics .anli-gallery-thumbs', {
            direction: 'vertical',
            spaceBetween: 5,
            speed: 600,
            // slidesPerView: 'auto',
            slidesPerView: 3,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });
        var anliGalleryTop = new Swiper('.allipics .anli-gallery-top', {
            spaceBetween: 5,
            speed: 600,
            navigation: {
                nextEl: '.allipics  .swiper-button-next',
                prevEl: '.allipics  .swiper-button-prev',
            },
            thumbs: {
                swiper: anliGalleryThumbs
            }
        });
    }


    if ($(".cppics").length > 0) {
        var cpGalleryThumbs = new Swiper('.cppics .cp-gallery-thumbs', {
            spaceBetween: 10,
            speed: 600,
            // slidesPerView: 'auto',
            slidesPerView: 4,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });
        var cpGalleryTop = new Swiper('.cppics .cp-gallery-top', {
            spaceBetween: 10,
            speed: 600,
            navigation: {
                nextEl: '.cppics  .swiper-button-next',
                prevEl: '.cppics  .swiper-button-prev',
            },
            thumbs: {
                swiper: cpGalleryThumbs
            }
        });
    }


    $("#play-btn").on("click", function () {
        $(".film-mask").show()

        $("body").css("overflow", "hidden")

        $(".film-mask").on("click", function () {
            $(this).hide()
            $("body").css("overflow", "auto")
        })
        $(".film-mask video").on("click", function (e) {
            e.stopPropagation()
        })
    })

    if ($(".khal").length > 0) {
        new Swiper(".khal .swiper-container", {
            speed: 600,
            effect: 'coverflow',
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: true,
            slideToClickedSlide: true,
            navigation: {
                nextEl: '.khal  .swiper-button-next',
                prevEl: '.khal  .swiper-button-prev',
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 400,
                modifier: 1,
                slideShadows: true,
            },
        })
    }


})


function AddFavorite(sURL, sTitle) {
    try {
        window.external.addFavorite(sURL, sTitle);
    } catch (e) {
        try {
            window.sidebar.addPanel(sTitle, sURL, "");
        } catch (e) {
            alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}

function SetHome(obj, vrl) {
    try {
        alert("已为您加入首页")
        obj.style.behavior = 'url(#default#homepage)';
        obj.setHomePage(vrl);
    } catch (e) {
        if (window.netscape) {
            try {

                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            } catch (e) {
                alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
            }
            var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
            prefs.setCharPref('browser.startup.homepage', vrl);
        }
    }
}

// function loadJScript() {
//     var script = document.createElement("script");
//     script.type = "text/javascript";
//     script.src = "//api.map.baidu.com/api?v=3.0&ak=67jMQ5DmYTe1TLMBKFUTcZAR&callback=init";
//     document.body.appendChild(script);
// }

function loadScript(callback) {
    var script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0];
    script.type = 'text/javascript';
    script.charset = 'UTF-8';
    script.src = '//api.map.baidu.com/api?v=3.0&ak=67jMQ5DmYTe1TLMBKFUTcZAR&callback=init';
    if (script.addEventListener) {
        script.addEventListener('load', function () {
            callback();
        }, false);
    } else if (script.attachEvent) {
        script.attachEvent('onreadystatechange', function () {
            var target = window.event.srcElement;
            if (target.readyState == 'loaded') {
                callback();
            }
        });
    }
    head.appendChild(script);
}


function initMap() {
    createMap(); //创建地图
    setMapEvent(); //设置地图事件
    addMapControl(); //向地图添加控件
    addMarker(); //向地图中添加marker
}

var markerArr = [{
    title: "蓝天科利欧蓝洗车机",
    content: "地址：长沙市经济技术开发区楠竹园路58号",
    point: "113.157389|28.219565",
    isOpen: 1,
    icon: {
        w: 23,
        h: 25,
        l: 46,
        t: 21,
        x: 9,
        lb: 12
    }
}];

//创建地图函数：
function createMap() {
    var map = new BMap.Map("map"); //在百度地图容器中创建一个地图
    var point = new BMap.Point(113.161389, 28.219865); //定义一个中心点坐标
    map.centerAndZoom(point, 17); //设定地图的中心点和坐标并将地图显示在地图容器中
    window.map = map; //将map变量存储在全局
}

//地图事件设置函数：
function setMapEvent() {
    //map.disableDragging();//禁用地图拖拽事件
    map.disableScrollWheelZoom(); //禁用地图滚轮放大缩小，默认禁用(可不写)
    map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
    map.disableKeyboard(); //禁用键盘上下左右键移动地图，默认禁用(可不写)
    map.setMapStyleV2({styleJson: mapStyle})
}

//地图控件添加函数：
function addMapControl() {
}

//创建marker
function addMarker() {
    for (var i = 0; i < markerArr.length; i++) {
        var json = markerArr[i];
        var p0 = json.point.split("|")[0];
        var p1 = json.point.split("|")[1];
        var point = new BMap.Point(p0, p1);
        var iconImg = createIcon(json.icon);
        var marker = new BMap.Marker(point, {
            icon: iconImg
        });
        var iw = createInfoWindow(i);
        var label = new BMap.Label(json.title, {
            "offset": new BMap.Size(json.icon.lb - json.icon.x + 10, -20)
        });
        marker.setLabel(label);
        map.addOverlay(marker);
        label.setStyle({
            borderColor: "#808080",
            color: "#333",
            cursor: "pointer"
        });

        (function () {
            var index = i;
            var _iw = createInfoWindow(i);
            var _marker = marker;
            _marker.addEventListener("click", function () {
                this.openInfoWindow(_iw);
            });
            _iw.addEventListener("open", function () {
                _marker.getLabel().hide();
            })
            _iw.addEventListener("close", function () {
                _marker.getLabel().show();
            })
            label.addEventListener("click", function () {
                _marker.openInfoWindow(_iw);
            })
            if (!!json.isOpen) {
                label.hide();
                _marker.openInfoWindow(_iw);
            }
        })()
    }
}

//创建InfoWindow
function createInfoWindow(i) {
    var json = markerArr[i];
    var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title +
        "</b><div class='iw_poi_content'>" + json.content + "</div>");
    return iw;
}

//创建一个Icon
function createIcon(json) {
    var icon = new BMap.Icon("http://api.map.baidu.com/lbsapi/creatmap/images/us_mk_icon.png", new BMap.Size(json.w,
        json.h), {
        imageOffset: new BMap.Size(-json.l, -json.t),
        infoWindowOffset: new BMap.Size(json.lb + 5, 1),
        offset: new BMap.Size(json.x, json.h)
    })
    return icon;
}

