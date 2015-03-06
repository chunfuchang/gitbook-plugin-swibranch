require(["gitbook"], function(gitbook) {
    gitbook.events.bind("page.change", function() {
        // do something
    });

    gitbook.events.bind("start", function() {
        var select = $('#branches');
        //select.prop('selectedIndex', -1);
        select.change(function () {
            var paths = window.location.pathname.split('/');
            paths[2] = $(this).val(); //designate branch
            var link = '';
            paths.forEach(function(path) {
                if (path.length > 0)
                    link += '/' + path;
            });
            window.location.href = window.location.protocol + '//' + window.location.host + link;
            alert(s);
        });
    });
});