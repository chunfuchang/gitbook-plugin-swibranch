require(["gitbook"], function(gitbook) {
    gitbook.events.bind("page.change", function() {
        // do something
    });

    gitbook.events.bind("start", function() {
    	var select = $("<select></select>", {
            "id": "branches",
            change: function () {
            	alert($(this).val());
            }
        });
        //$("<option>hi</option>").appendTo(select);
        $(new Option("label" , "val")).appendTo(select);
        $(new Option("label2" , "val2")).appendTo(select);
        $(".book-body .page-inner").append(select);
    });
});