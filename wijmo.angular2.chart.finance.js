﻿/*
    *
    * Wijmo Library 5.20163.234
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the Wijmo Commercial License.
    * sales@wijmo.com
    * http://wijmo.com/products/wijmo-5/license/
    *
    */
System.register(['wijmo/wijmo.chart.finance', '@angular/core', '@angular/common', 'wijmo/wijmo.angular2.directiveBase', 'wijmo/wijmo.angular2.chart'], function(exports_1, context_1)
{
"use strict";
var __moduleName=context_1 && context_1.id,
__extends=this && this.__extends || function(d, b)
{
function __()
{
this.constructor = d
}
for (var p in b)
b.hasOwnProperty(p) && (d[p] = b[p]);
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __)
},
__decorate=this && this.__decorate || function(decorators, target, key, desc)
{
var c=arguments.length,
r=c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
d,
i;
if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
r = Reflect.decorate(decorators, target, key, desc);
else
for (i = decorators.length - 1; i >= 0; i--)
(d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
return c > 3 && r && Object.defineProperty(target, key, r), r
},
__param=this && this.__param || function(paramIndex, decorator)
{
return function(target, key)
{
decorator(target, key, paramIndex)
}
},
wjcChartFinance,
core_1,
common_1,
wijmo_angular2_directiveBase_1,
wijmo_angular2_chart_1,
WjFinancialChart,
WjFinancialChartSeries,
moduleExports,
WjChartFinanceModule;
return {
setters: [function(wjcChartFinance_1)
{
wjcChartFinance = wjcChartFinance_1
}, function(core_1_1)
{
core_1 = core_1_1
}, function(common_1_1)
{
common_1 = common_1_1
}, function(wijmo_angular2_directiveBase_1_1)
{
wijmo_angular2_directiveBase_1 = wijmo_angular2_directiveBase_1_1
}, function(wijmo_angular2_chart_1_1)
{
wijmo_angular2_chart_1 = wijmo_angular2_chart_1_1
}], execute: function()
{
WjFinancialChart = function(_super)
{
function WjFinancialChart(elRef, injector)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjFinancialChart, _super), Object.defineProperty(WjFinancialChart.prototype, "tooltipContent", {
get: function()
{
return this.tooltip.content
}, set: function(value)
{
this.tooltip.content = value
}, enumerable: !0, configurable: !0
}), Object.defineProperty(WjFinancialChart.prototype, "labelContent", {
get: function()
{
return this.dataLabel.content
}, set: function(value)
{
this.dataLabel.content = value
}, enumerable: !0, configurable: !0
}), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-financial-chart', template: ""
}), __param(0, core_1.Inject(core_1.ElementRef)), __param(1, core_1.Inject(core_1.Injector))], WjFinancialChart)
}(wjcChartFinance.FinancialChart);
exports_1("WjFinancialChart", WjFinancialChart);
WjFinancialChartSeries = function(_super)
{
function WjFinancialChartSeries(elRef, injector)
{
_super.call(this);
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjFinancialChartSeries, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-financial-chart-series', wjParentDirectives: [WjFinancialChart], template: "<div><ng-content></ng-content></div>", wjSiblingDirectiveId: wijmo_angular2_chart_1.WjFlexChartSeries.SiblingId
}), __param(0, core_1.Inject(core_1.ElementRef)), __param(1, core_1.Inject(core_1.Injector))], WjFinancialChartSeries)
}(wjcChartFinance.FinancialSeries);
exports_1("WjFinancialChartSeries", WjFinancialChartSeries);
moduleExports = [WjFinancialChart, WjFinancialChartSeries, ];
WjChartFinanceModule = function()
{
function WjChartFinanceModule(){}
return __decorate([core_1.NgModule({
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
})], WjChartFinanceModule)
}();
exports_1("WjChartFinanceModule", WjChartFinanceModule)
}
}
})