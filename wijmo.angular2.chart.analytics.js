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
System.register(['wijmo/wijmo.chart.analytics', '@angular/core', '@angular/common', 'wijmo/wijmo.angular2.directiveBase', 'wijmo/wijmo.angular2.chart'], function(exports_1, context_1)
{
"use strict";
function tryGetModuleWijmoChartFinance()
{
var m1,
m2;
return (m1 = window.wijmo) && (m2 = m1.chart) && m2.finance
}
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
wjcChartAnalytics,
core_1,
common_1,
wijmo_angular2_directiveBase_1,
wijmo_angular2_chart_1,
WjFlexChartTrendLine,
WjFlexChartMovingAverage,
WjFlexChartYFunctionSeries,
WjFlexChartParametricFunctionSeries,
WjFlexChartWaterfall,
moduleExports,
WjChartAnalyticsModule;
return {
setters: [function(wjcChartAnalytics_1)
{
wjcChartAnalytics = wjcChartAnalytics_1
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
WjFlexChartTrendLine = function(_super)
{
function WjFlexChartTrendLine(elRef, injector)
{
_super.call(this);
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjFlexChartTrendLine, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-flex-chart-trend-line', wjParentDirectives: [wijmo_angular2_chart_1.WjFlexChart, core_1.forwardRef(function()
{
return tryGetModuleWijmoChartFinance() && tryGetModuleWijmoChartFinance().FinancialChart
}), ], template: "<div><ng-content></ng-content></div>", wjSiblingDirectiveId: wijmo_angular2_chart_1.WjFlexChartSeries.SiblingId
}), __param(0, core_1.Inject(core_1.ElementRef)), __param(1, core_1.Inject(core_1.Injector))], WjFlexChartTrendLine)
}(wjcChartAnalytics.TrendLine);
exports_1("WjFlexChartTrendLine", WjFlexChartTrendLine);
WjFlexChartMovingAverage = function(_super)
{
function WjFlexChartMovingAverage(elRef, injector)
{
_super.call(this);
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjFlexChartMovingAverage, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-flex-chart-moving-average', wjParentDirectives: [wijmo_angular2_chart_1.WjFlexChart, core_1.forwardRef(function()
{
return tryGetModuleWijmoChartFinance() && tryGetModuleWijmoChartFinance().FinancialChart
}), ], template: "<div><ng-content></ng-content></div>", wjSiblingDirectiveId: wijmo_angular2_chart_1.WjFlexChartSeries.SiblingId
}), __param(0, core_1.Inject(core_1.ElementRef)), __param(1, core_1.Inject(core_1.Injector))], WjFlexChartMovingAverage)
}(wjcChartAnalytics.MovingAverage);
exports_1("WjFlexChartMovingAverage", WjFlexChartMovingAverage);
WjFlexChartYFunctionSeries = function(_super)
{
function WjFlexChartYFunctionSeries(elRef, injector)
{
_super.call(this);
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjFlexChartYFunctionSeries, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-flex-chart-y-function-series', wjParentDirectives: [wijmo_angular2_chart_1.WjFlexChart, core_1.forwardRef(function()
{
return tryGetModuleWijmoChartFinance() && tryGetModuleWijmoChartFinance().FinancialChart
}), ], template: "<div><ng-content></ng-content></div>", wjSiblingDirectiveId: wijmo_angular2_chart_1.WjFlexChartSeries.SiblingId
}), __param(0, core_1.Inject(core_1.ElementRef)), __param(1, core_1.Inject(core_1.Injector))], WjFlexChartYFunctionSeries)
}(wjcChartAnalytics.YFunctionSeries);
exports_1("WjFlexChartYFunctionSeries", WjFlexChartYFunctionSeries);
WjFlexChartParametricFunctionSeries = function(_super)
{
function WjFlexChartParametricFunctionSeries(elRef, injector)
{
_super.call(this);
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjFlexChartParametricFunctionSeries, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-flex-chart-parametric-function-series', wjParentDirectives: [wijmo_angular2_chart_1.WjFlexChart, core_1.forwardRef(function()
{
return tryGetModuleWijmoChartFinance() && tryGetModuleWijmoChartFinance().FinancialChart
}), ], template: "<div><ng-content></ng-content></div>", wjSiblingDirectiveId: wijmo_angular2_chart_1.WjFlexChartSeries.SiblingId
}), __param(0, core_1.Inject(core_1.ElementRef)), __param(1, core_1.Inject(core_1.Injector))], WjFlexChartParametricFunctionSeries)
}(wjcChartAnalytics.ParametricFunctionSeries);
exports_1("WjFlexChartParametricFunctionSeries", WjFlexChartParametricFunctionSeries);
WjFlexChartWaterfall = function(_super)
{
function WjFlexChartWaterfall(elRef, injector)
{
_super.call(this);
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjFlexChartWaterfall, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-flex-chart-waterfall', wjParentDirectives: [wijmo_angular2_chart_1.WjFlexChart, core_1.forwardRef(function()
{
return tryGetModuleWijmoChartFinance() && tryGetModuleWijmoChartFinance().FinancialChart
}), ], template: "<div><ng-content></ng-content></div>", wjSiblingDirectiveId: wijmo_angular2_chart_1.WjFlexChartSeries.SiblingId
}), __param(0, core_1.Inject(core_1.ElementRef)), __param(1, core_1.Inject(core_1.Injector))], WjFlexChartWaterfall)
}(wjcChartAnalytics.Waterfall);
exports_1("WjFlexChartWaterfall", WjFlexChartWaterfall);
moduleExports = [WjFlexChartTrendLine, WjFlexChartMovingAverage, WjFlexChartYFunctionSeries, WjFlexChartParametricFunctionSeries, WjFlexChartWaterfall, ];
WjChartAnalyticsModule = function()
{
function WjChartAnalyticsModule(){}
return __decorate([core_1.NgModule({
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
})], WjChartAnalyticsModule)
}();
exports_1("WjChartAnalyticsModule", WjChartAnalyticsModule)
}
}
})