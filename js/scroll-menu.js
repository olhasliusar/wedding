;(function($) {

  var $menu = $("#ws-menu"),
    hClass = "ws-menu__section_fixed",
    pos = parseFloat( $(".ws-header").height() ) - 103;

  $(document).scroll(function() {
    if($(this).scrollTop() > pos) {
        if (!$menu.hasClass(hClass)) {
            $menu
                .addClass("ws-menu__section_fixed");
            $(".welcom-to-site__section")
                .addClass("welcom-to-site__section_fixed");
        }
    } else {
        if ($menu.hasClass(hClass)) {
            $menu
                .removeClass("ws-menu__section_fixed");
            $(".welcom-to-site__section")
                .removeClass("welcom-to-site__section_fixed");
        }
    }
  });

})(jQuery);
