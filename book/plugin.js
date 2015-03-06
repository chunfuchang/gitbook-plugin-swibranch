var paths = window.location.pathname.split('/');
var host = window.location.host;
var select = $('#branches');

var changeBranch = function() {
	select.val(paths[2]);
	select.change(function () {
		paths[2] = $(this).val(); //designate branch
		var link = '';
		paths.forEach(function(path) {
			if (path.length > 0)
				link += '/' + path;
		});
		window.location.href = window.location.protocol + '//' + host + link;
	});
}
require(["gitbook"], function(gitbook) {
	gitbook.events.bind("page.change", changeBranch);

	gitbook.events.bind("start", changeBranch);
});
