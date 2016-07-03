this["MyApp"] = this["MyApp"] || {};
this["MyApp"]["templates"] = this["MyApp"]["templates"] || {};
this["MyApp"]["templates"]["journeys"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return "<section class=\"journey\">\n	<h4 class=\"journey__title\">\n		<span>Option "
    + alias2((helpers.inc || (depth0 && depth0.inc) || alias1).call(depth0,(data && data.index),{"name":"inc","hash":{},"data":data}))
    + "</span>\n		<span>"
    + alias2(((helper = (helper = helpers.duration || (depth0 != null ? depth0.duration : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"duration","hash":{},"data":data}) : helper)))
    + " Minutes</span>\n	</h4>\n	<div class=\"journey__card\">\n		<div class=\"journey__overview\">\n			\n			<div class=\"overview__times\">\n				<div class=\"overview__times__start\">"
    + alias2((helpers.time || (depth0 && depth0.time) || alias1).call(depth0,(depth0 != null ? depth0.startDateTime : depth0),{"name":"time","hash":{},"data":data}))
    + "</div>\n				<div class=\"overview__times__end\">"
    + alias2((helpers.time || (depth0 && depth0.time) || alias1).call(depth0,(depth0 != null ? depth0.arrivalDateTime : depth0),{"name":"time","hash":{},"data":data}))
    + "</div>\n			</div>\n			<div class=\"overview__stops\">\n				<div class=\"overview__stops__start\"></div>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.points : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "				<div class=\"overview__stops__end\"></div>\n				<span class=\"line\"></span>\n			</div>\n			<div class=\"overview__locations\">\n				<div class=\"overview__locations__start\">"
    + alias2(((helper = (helper = helpers.departure_location || (depth0 != null ? depth0.departure_location : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"departure_location","hash":{},"data":data}) : helper)))
    + "</div>\n				<div class=\"overview__locations__end\">"
    + alias2(((helper = (helper = helpers.arrival_location || (depth0 != null ? depth0.arrival_location : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"arrival_location","hash":{},"data":data}) : helper)))
    + "</div>\n			</div>\n\n		</div>\n		<ul class=\"journey__steps\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.legs : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		</ul>\n	</div>\n</section>\n";
},"2":function(depth0,helpers,partials,data) {
    return "				<div class=\"overview__stops__middle\"></div>\n";
},"4":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "			<li>\n				<span class=\"step__time\">"
    + alias2((helpers.time || (depth0 && depth0.time) || alias1).call(depth0,(depth0 != null ? depth0.departureTime : depth0),{"name":"time","hash":{},"data":data}))
    + " - "
    + alias2((helpers.time || (depth0 && depth0.time) || alias1).call(depth0,(depth0 != null ? depth0.arrivalTime : depth0),{"name":"time","hash":{},"data":data}))
    + "</span>\n				<p>"
    + alias2(this.lambda(((stack1 = (depth0 != null ? depth0.instruction : depth0)) != null ? stack1.summary : stack1), depth0))
    + "</p>\n			</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<h3>\n	"
    + alias3(((helper = (helper = helpers.departure_location || (depth0 != null ? depth0.departure_location : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"departure_location","hash":{},"data":data}) : helper)))
    + " to "
    + alias3(((helper = (helper = helpers.arrival_location || (depth0 != null ? depth0.arrival_location : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"arrival_location","hash":{},"data":data}) : helper)))
    + "<br>\n	Leaving at "
    + alias3((helpers.time || (depth0 && depth0.time) || alias1).call(depth0,(depth0 != null ? depth0.departure_time : depth0),{"name":"time","hash":{},"data":data}))
    + "\n</h3>\n\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.journeys : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});