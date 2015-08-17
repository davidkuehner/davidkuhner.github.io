/* Add here all your JS customizations */

/* On appear animations
 * see : http://daneden.github.io/animate.css/
 *       https://github.com/bas2k/jquery.appear
 */
jQuery(document).ready(function() {
    $('.onAppearFadeIn').appear(function() {
	  	$(this).addClass("animated fadeIn");
	});
	$('.onAppearFadeInRight').appear(function() {
	  	$(this).addClass("animated fadeInRight");
	});
	/* Add more animation here : */
	/* $('.onAppear<AnimateClassHere>').appear(function() {
	 *  	$(this).addClass("animated <animateClassHere>");
	 * 	});
	 */
});