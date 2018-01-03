$(document).ready(function() {

    const activeClass = 'active-link';
    const menuVisibleClass = 'menu-visible';

    function smoothScroll(target) {
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 'linear');
    };

    function toggleMenu() {
        $('body').toggleClass(menuVisibleClass);
    };

    function updateActive(position) {
        $('#nav a').each(function() {
            let link = $(this);
            let reference = $(link.attr("href"));

            let top = reference.position().top - 1;
            let bottom = top + reference.outerHeight();

            if (top <= position && bottom > position) {
                $('#nav').find('a').removeClass(activeClass);
                link.addClass(activeClass);
            } else {
                link.removeClass(activeClass);
            }
        });
    };

    $('#menu header').on('click', 'a', function(event) {
        event.preventDefault();

        const reference = $(this).attr('href');
        if (reference !== '#') smoothScroll(reference);
    });

    $('#menu-icon').click(toggleMenu);

    $(document).on("scroll", function() {
        let position = $(this).scrollTop() + 1;
        updateActive(position);
    });

    //TODO move menu scroll when scrolling down
});