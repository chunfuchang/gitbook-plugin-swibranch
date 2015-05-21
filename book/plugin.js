require(["gitbook"], function(gitbook) {
	var changeBranch = function() {
		var path = window.location.pathname;
		var host = window.location.protocol + '//' + window.location.host;
		var current_branch = $('#current-branch').text().trim();
		$('button.zk-branch-plugin').click(function() {
			var select_branch = $(this).text().trim();
			if (current_branch != select_branch) {
				var link = path.replace('/' + current_branch + '/', '/' + select_branch + '/');
				$.ajax({
				    url: host + link,
				    success: function(){
				    	window.location.href = host + link;
				    },
				    error: function() {
				    	var index = link.indexOf('/' + select_branch + '/');
				    	window.location.href = host + link.substring(0, index) + '/' + select_branch;
				    }
				});
			}
		});
	}
	
	gitbook.events.bind("page.change", changeBranch);
	gitbook.events.bind("page.change", function () {
		$('#zk-swibranch-btn').insertAfter('#font-settings-wrapper');
	});

	gitbook.events.bind("start", changeBranch);
});
