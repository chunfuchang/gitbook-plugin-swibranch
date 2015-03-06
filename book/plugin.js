require(["gitbook"], function(gitbook) {
	var changeBranch = function() {
		var paths = window.location.pathname.split('/');
		var host = window.location.host;
		var select = $('#branches');
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
	gitbook.events.bind("page.change", changeBranch);

	gitbook.events.bind("start", changeBranch);
});
