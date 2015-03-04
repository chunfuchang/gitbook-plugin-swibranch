var git = require('gift');
var repo = git('.');
repo.branches(function(err, heads) {
    console.log(heads);
})

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
        }
    }
};
