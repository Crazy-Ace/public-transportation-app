Handlebars.registerHelper("inc",function(e,r){return parseInt(e)+1}),Handlebars.registerHelper("time",function(e,r){"2016-07-03T18:51:00";var t=e.split("T")[1],n=parseInt(t.split(":")[0]),s=parseInt(t.split(":")[1]),a=(parseInt(t.split(":")[2]),moment().hours(n).minutes(s));return a=a.format("h:mma")});