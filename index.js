var git = require('gift');
var select;
var repo = git('.');
var sync = require('sync');

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
            /*var section;
            for (var i in page.sections) {
                section = page.sections[i];
                if (section.type == "normal") {
                    $ = cheerio.load(section.content);
                    console.log($);
                }
            }*/
            return page;
        },

        "page:after": function (page) {
            /*sync(function () {
                repo.branches.sync(null, function(err, heads) {
                    select = '<select id="branches">';
                    for (var i in heads) {
                        var branch = heads[i].name;
                        select += '<option value="' + branch + '">' + branch + '</option>';
                        // console.log(select + '\n' + branch);
                    }
                    select += '</select>';
                });
                console.log(select);
                page.content = page.content.replace(
                    '<!-- Actions Right -->',
                    select + '<!-- Actions Right -->'
                )
                return page;
            });*/
            return page;
            /*repo.branches(function(err, heads) {
                select = '<select id="branches">';
                for (var i in heads) {
                    var branch = heads[i].name;
                    select += '<option value="' + branch + '">' + branch + '</option>';
                    // console.log(select + '\n' + branch);
                }
                select += '</select>';
            });
            page.content = page.content.replace(
                '<!-- Actions Right -->',
                select + '<!-- Actions Right -->'
            )
            return page;*/
        }
    }
};
