require(["gitbook"], function(gitbook) {
	var changeBranch = function() {
		var paths = window.location.pathname.split('/');
		var host = window.location.host;
		$('button.zk-branch-plugin').click(function() {
			paths[2] = $(this).text(); //designate branch
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
