import { DeveloperUtils } from './utils'

export function VueFilter(options: vuejs.FilterOption) //With options
export function VueFilter(target:Object, key:string)
export function VueFilter(first:any, second?:string) {
    //Bare decorator (no params)
    if (second) filterDecorator(null)(first, second);
    //Decorator with params
    else return filterDecorator(first);
}

function filterDecorator(options?:any) {
    return function(target:any, key:string) {
        DeveloperUtils.decoratorStart();
        //create the temp filters holder if non existane
        if (!target.$$filters) target.$$filters = {};

        if(!options) options = null;

        target.$$filters[key] = target[key];
        //remove it from the instance so it is not added to data
        delete target[key];

        DeveloperUtils.decoratorStop();
    }
}
