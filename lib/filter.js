"use strict";
var utils_1 = require("./utils");
function VueFilter(first, second) {
    //Bare decorator (no params)
    if (second)
        filterDecorator(null)(first, second);
    else
        return filterDecorator(first);
}
exports.VueFilter = VueFilter;
function filterDecorator(options) {
    return function (target, key) {
        utils_1.DeveloperUtils.decoratorStart();
        //create the temp filters holder if non existane
        if (!target.$$filters)
            target.$$filters = {};
        if (!options)
            options = null;
        target.$$filters[key] = target[key];
        //remove it from the instance so it is not added to data
        delete target[key];
        utils_1.DeveloperUtils.decoratorStop();
    };
}
//# sourceMappingURL=filter.js.map