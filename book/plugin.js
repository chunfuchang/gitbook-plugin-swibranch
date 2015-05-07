require(["gitbook"], function(gitbook) {
	var changeBranch = function() {
		var path = window.location.pathname;
		var host = window.location.host;
		var current_branch = $('#current-branch').text().trim();
		$('button.zk-branch-plugin').click(function() {
			link = path.replace('/' + current_branch + '/', '/' + $(this).text() + '/');
			window.location.href = window.location.protocol + '//' + host + link;
		});
	}
	gitbook.events.bind("page.change", changeBranch);

	gitbook.events.bind("start", changeBranch);
});
