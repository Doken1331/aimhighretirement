jQuery(document).ready(function() {

    "use strict";

    // Fixed Menu
    var nav = jQuery(".fixed-navigation");
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 500) {
            nav.addClass("fixed-navigation-show");
        } else {
            nav.removeClass("fixed-navigation-show");
        }
    });

    // Mobile Navigation
    jQuery(window).resize(function() {
        if (jQuery(window).width() > 1005) {
            jQuery(".mobile-navigation-wrapper").css("display", "none");
        }
    });

    // Mobile Navigation Button
    jQuery("#mobile-navigation-btn").click(function() {
        jQuery(".mobile-navigation-wrapper").slideToggle("slow", function() {
            // Animation complete.
        });
    });

    // Main Navigation
    jQuery("#navigation li").on("mouseenter mouseleave", function(e) {

        var elm = jQuery("ul:first", this);
        var off = elm.offset();
        var l = off.left;
        var w = elm.width();
        var docH = jQuery(".outer-wrapper").height();
        var docW = jQuery(".outer-wrapper").width();

        var isEntirelyVisible = (l + w <= docW);

        if (!isEntirelyVisible) {
            jQuery(this).addClass("edge");
        } else {
            jQuery(this).removeClass("edge");
        }
    });

    // Accordion
    // jQuery( ".accordion" ).accordion( { autoHeight: true } );

    // Toggle	
    jQuery(".toggle > .inner").hide();
    jQuery(".toggle .title").on("click", function() {
        jQuery(this).toggleClass("active");
        if (jQuery(this).hasClass("active")) {
            jQuery(this).closest(".toggle").find(".inner").slideDown(200, "easeOutCirc");
        } else {
            jQuery(this).closest(".toggle").find(".inner").slideUp(200, "easeOutCirc");
        }
    });

    // Tabs
    // jQuery(function() {
    //     jQuery("#tabs").tabs();
    // });

    // Latest News
    // jQuery('.owl-carousel1').owlCarousel({
    //     loop: false,
    //     margin: 10,
    //     nav: true,
    //     navText: "",
    //     responsive: {
    //         100: {
    //             items: 1
    //         }
    //     }
    // })

    // Accommodation Available
    // jQuery('.owl-carousel2').owlCarousel({
    //     loop: true,
    //     margin: 30,
    //     nav: true,
    //     navText: "",
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         490: {
    //             items: 2
    //         },
    //         720: {
    //             items: 3
    //         },
    //     }
    // })

    // Testimonials
    // jQuery('.owl-carousel3').owlCarousel({
    //     loop: true,
    //     margin: 10,
    //     nav: true,
    //     navText: "",
    //     responsive: {
    //         100: {
    //             items: 1
    //         }
    //     }
    // })

    // // Partners
    // jQuery('.owl-carousel4').owlCarousel({
    //     loop: true,
    //     margin: 55,
    //     nav: true,
    //     navText: "",
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         390: {
    //             items: 2
    //         },
    //         490: {
    //             items: 3
    //         },
    //         790: {
    //             items: 4
    //         },
    //         1020: {
    //             items: 6
    //         }
    //     }
    // })

    // PrettyPhoto
    // jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({
    //     hook: 'data-gal',
    //     animation_speed: 'fast',
    //     /* fast/slow/normal */
    //     slideshow: 5000,
    //     /* false OR interval time in ms */
    //     autoplay_slideshow: false,
    //     /* true/false */
    //     opacity: 0.80,
    //     /* Value between 0 and 1 */
    //     show_title: true,
    //     /* true/false */
    //     allow_resize: true,
    //     /* Resize the photos bigger than viewport. true/false */
    //     default_width: 500,
    //     default_height: 344,
    //     counter_separator_label: '/',
    //     /* The separator for the gallery counter 1 "of" 2 */
    //     theme: 'pp_default',
    //     /* light_rounded / dark_rounded / light_square / dark_square / facebook */
    //     horizontal_padding: 20,
    //     /* The padding on each side of the picture */
    //     hideflash: false,
    //     /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
    //     wmode: 'opaque',
    //     /* Set the flash wmode attribute */
    //     autoplay: true,
    //     /* Automatically start videos: True/False */
    //     modal: false,
    //     /* If set to true, only the close button will close the window */
    //     deeplinking: true,
    //     /* Allow prettyPhoto to update the url to enable deeplinking. */
    //     overlay_gallery: true,
    //     /* If set to true, a gallery will overlay the fullscreen image on mouse over */
    //     keyboard_shortcuts: true,
    //     /* Set to false if you open forms inside prettyPhoto */
    //     changepicturecallback: function() {},
    //     /* Called everytime an item is shown/changed */
    //     callback: function() {},
    //     /* Called when prettyPhoto is closed */
    //     ie6_fallback: true,
    //     markup: '<div class="pp_pic_holder"> \
    // 				<div class="ppt">&nbsp;</div> \
    // 				<div class="pp_top"> \
    // 					<div class="pp_left"></div> \
    // 					<div class="pp_middle"></div> \
    // 					<div class="pp_right"></div> \
    // 				</div> \
    // 				<div class="pp_content_container"> \
    // 					<div class="pp_left"> \
    // 						<div class="pp_right"> \
    // 							<div class="pp_content"> \
    // 								<div class="pp_loaderIcon"></div> \
    // 								<div class="pp_fade"> \
    // 									<a href="#" class="pp_expand" title="Expand the image">Expand</a> \
    // 									<div class="pp_hoverContainer"> \
    // 										<a class="pp_next" href="#">next</a> \
    // 										<a class="pp_previous" href="#">previous</a> \
    // 									</div> \
    // 									<div id="pp_full_res"></div> \
    // 									<div class="pp_details"> \
    // 										<div class="pp_nav"> \
    // 											<a href="#" class="pp_arrow_previous">Previous</a> \
    // 											<p class="currentTextHolder">0/0</p> \
    // 											<a href="#" class="pp_arrow_next">Next</a> \
    // 										</div> \
    // 										<p class="pp_description"></p> \
    // 										{pp_social} \
    // 										<a class="pp_close" href="#"><i class="fa fa-close"></i></a> \
    // 									</div> \
    // 								</div> \
    // 							</div> \
    // 						</div> \
    // 						</div> \
    // 					</div> \
    // 					<div class="pp_bottom"> \
    // 						<div class="pp_left"></div> \
    // 						<div class="pp_middle"></div> \
    // 						<div class="pp_right"></div> \
    // 					</div> \
    // 				</div> \
    // 				<div class="pp_overlay"></div>',
    //     gallery_markup: '<div class="pp_gallery"> \
    // 							<a href="#" class="pp_arrow_previous">Previous</a> \
    // 							<div> \
    // 								<ul> \
    // 									{gallery} \
    // 								</ul> \
    // 							</div> \
    // 							<a href="#" class="pp_arrow_next">Next</a> \
    // 						</div>',
    //     image_markup: '<img id="fullResImage" src="{path}" />',
    //     flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
    //     quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
    //     iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
    //     inline_markup: '<div class="pp_inline">{content}</div>',
    //     custom_markup: '',
    //     social_tools: '<div class="pp_social"><div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="http://www.facebook.com/plugins/like.php?locale=en_US&href=' + location.href + '&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div></div>' /* html or false to disable */
    // });

});