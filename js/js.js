var menu = document.getElementById('products-menu')
var footer = document.getElementById('footer');
var menuPos = menu.offsetTop,
menuHeight = menu.offsetHeight,
menuBotPos = menuPos + menuHeight;

window.addEventListener("resize", function() {
	menuPos = menu.offsetTop,
	menuHeight = menu.offsetHeight,
	menuBotPos = menuPos + menuHeight;
}, false);
$(document).scroll(function () {
	if (window.pageYOffset === 0 || document.getElementsByClassName('content-menu show').length)
		$('body').removeClass('scrolled');
	else
		$('body').addClass('scrolled');


	var footerPos = footer.offsetTop - window.pageYOffset;
	if(menuBotPos >= footerPos) {
		menu.style.transform = "translate(0, -"+(menuBotPos - footerPos)+"px)";
	} else {
		menu.style.transform = 'translate(0px)';
	}
});

$(document).click(function (e) {
	var opened = $(".navbar-collapse").hasClass("in");
	var container = $(".in");
	if (opened === true) {
		if (!container.is(e.target) && container.has(e.target).length === 0) {
			$('.navbar-collapse').collapse('hide');
			$('.navbar-header').removeClass('no-opacity');
		}
	}
});

//непрозрачность при открытии
// $('.collapse').on('hide.bs.collapse', function () {
// 	$('.navbar-header').removeClass('no-opacity');
// });
// $('.collapse').on('shown.bs.collapse', function () {
// 	$('.navbar-header').addClass('no-opacity');
// });


(function () {
	var openedMenu = null;
	$("[data-open-menu]").click(function (e) { // клик по кнопке
		e.preventDefault();
		e.stopPropagation();

		if (openedMenu == $(this).data("open-menu")) { //повторное нажатие на кнопку
			console.log('old');
			$('#' + openedMenu).removeClass('show');
			openedMenu = null;
		} else { // показываем меню
			$('.show').removeClass('show');
			openedMenu = $(this).data("open-menu");
			$('#' + openedMenu).addClass('show');
			$('body').removeClass('scrolled');
		}
	});
	$(document).click(function (e) {
		var container = $(".show");
		if (!container.is(e.target) && container.has(e.target).length === 0) {
			openedMenu = null;
			container.removeClass('show');
		}
	});
})();

// console.log($('.product-slider.cfm-slider').length);
// if(!$('.product-slider').hasClass('cfm-slider'))
$('.product-slider').owlCarousel({
	margin: 0,
	dots: false,
	loop: false,
	navText: [
		'<svg class="prev-svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="../img/svg.svg#arrow"></use></svg>',
		'<svg class="next-svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="../img/svg.svg#arrow"></use></svg>'
	],
	responsive:{
		0 :{
			items:1,
			nav:true
		},
		768 :{
			items: ($('.product-slider').hasClass('cfm-slider')) ? 1 : 3,
			nav:false,
			margin: 30,
			width: 220
		}
	},
	onInitialized: rs
});
function rs () {
	window.dispatchEvent(new Event('resize'));
}
$('.single-product-slider').owlCarousel({
	items: 1,
	margin: 0,
	dots: false,
	nav: ($('.slide-item').length > 1) ? true : false,
	navText: [
		'<svg class="prev-svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="../img/svg.svg#arrow"></use></svg>',
		'<svg class="next-svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="../img/svg.svg#arrow"></use></svg>'
	]
});


$('.cerificats-slider').owlCarousel({
	margin: 0,
	dots: false,
	loop: false,
	navText: [
		'<svg class="prev-svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="../img/svg.svg#arrow"></use></svg>',
		'<svg class="next-svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="../img/svg.svg#arrow"></use></svg>'
	],
	responsive:{
		0 :{
			items:1,
			nav:true
		},
		480 :{
			items:2,
			nav:true
		},
		768 :{
			items:4,
			nav:false,
			margin: 100
		}
	}
});

var modal_carousel = $('.cerificats-modal-slider');
modal_carousel.owlCarousel({
	margin: 0,
	dots: false,
	loop: false,
	nav:true,
	navText: [
		'<svg class="prev-svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="../img/svg.svg#arrow"></use></svg>',
		'<svg class="next-svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="../img/svg.svg#arrow"></use></svg>'
	],
	items: 1
});

$('.certificate-wrap').click(function() {
	$('.certificate-modal').modal('show');
});

$('.certificate-modal').on('shown.bs.modal', function () {
	console.log('shown');
	window.dispatchEvent(new Event('resize'));
});