Handlebars.registerHelper("inc",function(t,e){return parseInt(t)+1}),Handlebars.registerHelper("time",function(t,e){var a=t.split("T")[1],s=parseInt(a.split(":")[0]),r=parseInt(a.split(":")[1]),n=(parseInt(a.split(":")[2]),moment().hours(s).minutes(r));return n=n.format("h:mma")}),Handlebars.registerHelper("datetime",function(t,e){var a=t.split("T")[0],s=parseInt(a.split("-")[0]),r=parseInt(a.split("-")[1])-1,n=parseInt(a.split("-")[2]),m=t.split("T")[1],p=parseInt(m.split(":")[0]),l=parseInt(m.split(":")[1]),i=(parseInt(m.split(":")[2]),moment().year(s).month(r).date(n).hours(p).minutes(l));return i=i.calendar(null,{sameDay:"[Today at] h:mma",nextDay:"[Tomorrow at] h:mma",nextWeek:"[Next] dddd [at] h:mma",lastDay:"[Yesterday at] h:mma",lastWeek:"[Last] dddd [at] h:mma",sameElse:"[on] dddd Do MMMM [at] h:mma"})});