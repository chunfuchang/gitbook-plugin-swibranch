var git = require('gift');
var select;
var exec = require('child_process').execSync;

module.exports = {
    // Extend ebook resources and html
    book: {
        assets: "./book",
        js: [
            "plugin.js"
        ],
        css: [
            "test.css"
        ],
        html: {
            "html:start": function() {
                return "<!-- Start book "+this.options.title+" -->"
            },
            "html:end": function() {
                return "<!-- End of book "+this.options.title+" -->"
            },

            "head:start": "<!-- head:start -->",
            "head:end": "<!-- head:end -->",

            "body:start": "<!-- body:start -->",
            "body:end": "<!-- body:end -->"
        }
    },

    // Hook process during build
    hooks: {
        // For all the hooks, this represent the current generator

        // This is called before the book is generated
        "init": function() {
            console.log("gogo init!");
        },

        // This is called after the book generation
        "finish": function() {
            console.log("gogo finish!");
        },

        page: function (page) {
            return page;
        },

        "page:after": function (page) {
            /** system must be Unix-like and install git  **/
            select = '<select id="branches"><option disabled selected> -- select a git branch -- </option>';
            //get all branch from remote
            var command = "git ls-remote | awk '{print $2}' | awk 'BEGIN {FS=\"/\"} $2==\"heads\" {print $3}'"
            var result = exec(command).toString();
            var branches = result.split('\n');
            for (var i in branches) {
                var branch = branches[i];
                if (branch.length > 0) {
                    branch = branch.replace('*', '').trim();
                    select += '<option value="' + branch + '">' + branch + '</option>';
                }
            }
            select += '</select>';
            console.log(select);
            page.content = page.content.replace(
                '<!-- Actions Right -->',
                select + '<!-- Actions Right -->'
            )
            return page;
        }
    }
};
