Handlebars.registerHelper("inc",function(e,t){return parseInt(e)+1}),Handlebars.registerHelper("time",function(e,t){var a=e.split("T")[1],r=parseInt(a.split(":")[0]),s=parseInt(a.split(":")[1]),n=(parseInt(a.split(":")[2]),moment().hours(r).minutes(s));return n=n.format("h:mma")}),Handlebars.registerHelper("datetime",function(e,t){var a=e.split("T")[0],r=parseInt(a.split("-")[0]),s=parseInt(a.split("-")[1])-1,n=parseInt(a.split("-")[2]),m=e.split("T")[1],l=parseInt(m.split(":")[0]),p=parseInt(m.split(":")[1]),i=(parseInt(m.split(":")[2]),moment().year(r).month(s).date(n).hours(l).minutes(p));return i=i.calendar(null,{sameDay:"[Today at] h:mma",nextDay:"[Tomorrow at] h:mma",nextWeek:"[Next] dddd [at] h:mma",lastDay:"[Yesterday at] h:mma",lastWeek:"[Last] dddd [at] h:mma",sameElse:"[on] dddd Do MMMM [at] h:mma"})}),Handlebars.registerHelper("escape_html",function(e,t){return e});