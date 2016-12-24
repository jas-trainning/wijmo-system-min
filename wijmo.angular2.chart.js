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
System.register(['wijmo/wijmo.chart', '@angular/core', '@angular/common', 'wijmo/wijmo.angular2.directiveBase'], function(exports_1, context_1)
{
"use strict";
function tryGetModuleWijmoChartFinance()
{
var m1,
m2;
return (m1 = window.wijmo) && (m2 = m1.chart) && m2.finance
}
function tryGetModuleWijmoChartRadar()
{
var m1,
m2;
return (m1 = window.wijmo) && (m2 = m1.chart) && m2.radar
}
function tryGetModuleWijmoChartHierarchical()
{
var m1,
m2;
return (m1 = window.wijmo) && (m2 = m1.chart) && m2.hierarchical
}
function tryGetModuleWijmoChartAnnotation()
{
var m1,
m2;
return (m1 = window.wijmo) && (m2 = m1.chart) && m2.annotation
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
wjcChart,
core_1,
core_2,
common_1,
wijmo_angular2_directiveBase_1,
WjFlexChart,
WjFlexPie,
WjFlexChartAxis,
WjFlexChartLegend,
WjFlexChartDataLabel,
WjFlexPieDataLabel,
WjFlexChartSeries,
WjFlexChartLineMarker,
WjFlexChartDataPoint,
WjFlexChartPlotArea,
moduleExports,
WjChartModule;
return {
setters: [function(wjcChart_1)
{
wjcChart = wjcChart_1
}, function(core_1_1)
{
core_1 = core_1_1;
core_2 = core_1_1
}, function(common_1_1)
{
common_1 = common_1_1
}, function(wijmo_angular2_directiveBase_1_1)
{
wijmo_angular2_directiveBase_1 = wijmo_angular2_directiveBase_1_1
}], execute: function()
{
WjFlexChart = function(_super)
{
function WjFlexChart(elRef, injector)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjFlexChart, _super), Object.defineProperty(WjFlexChart.prototype, "tooltipContent", {
get: function()
{
return this.tooltip.content
}, set: function(value)
{
this.tooltip.content = value
}, enumerable: !0, configurable: !0
}), Object.defineProperty(WjFlexChart.prototype, "labelContent", {
get: function()
{
return this.dataLabel.content
}, set: function(value)
{
this.dataLabel.content = value
}, enumerable: !0, configurable: !0
}), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-flex-chart', template: ""
}), __param(0, core_1.Inject(core_2.ElementRef)), __param(1, core_1.Inject(core_2.Injector))], WjFlexChart)
}(wjcChart.FlexChart);
exports_1("WjFlexChart", WjFlexChart);
WjFlexPie = function(_super)
{
function WjFlexPie(elRef, injector)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjFlexPie, _super), Object.defineProperty(WjFlexPie.prototype, "tooltipContent", {
get: function()
{
return this.tooltip.content
}, set: function(value)
{
this.tooltip.content = value
}, enumerable: !0, configurable: !0
}), Object.defineProperty(WjFlexPie.prototype, "labelContent", {
get: function()
{
return this.dataLabel.content
}, set: function(value)
{
this.dataLabel.content = value
}, enumerable: !0, configurable: !0
}), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-flex-pie', template: ""
}), __param(0, core_1.Inject(core_2.ElementRef)), __param(1, core_1.Inject(core_2.Injector))], WjFlexPie)
}(wjcChart.FlexPie);
exports_1("WjFlexPie", WjFlexPie);
WjFlexChartAxis = function(_super)
{
function WjFlexChartAxis(elRef, injector)
{
_super.call(this);
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjFlexChartAxis, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-flex-chart-axis', wjParentDirectives: [WjFlexChart, core_2.forwardRef(function()
{
return WjFlexChartSeries
}), core_2.forwardRef(function()
{
return tryGetModuleWijmoChartFinance() && tryGetModuleWijmoChartFinance().FinancialChart
}), core_2.forwardRef(function()
{
return tryGetModuleWijmoChartFinance() && tryGetModuleWijmoChartFinance().FinancialSeries
}), ], template: ""
}), __param(0, core_1.Inject(core_2.ElementRef)), __param(1, core_1.Inject(core_2.Injector))], WjFlexChartAxis)
}(wjcChart.Axis);
exports_1("WjFlexChartAxis", WjFlexChartAxis);
WjFlexChartLegend = function(_super)
{
function WjFlexChartLegend(elRef, injector)
{
var parentCmp=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.findTypeParentBehavior(injector, WjFlexChartLegend).directive;
_super.call(this, parentCmp);
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjFlexChartLegend, _super), WjFlexChartLegend = __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-flex-chart-legend', wjParentDirectives: [WjFlexChart, WjFlexPie, core_2.forwardRef(function()
{
return tryGetModuleWijmoChartFinance() && tryGetModuleWijmoChartFinance().FinancialChart
}), core_2.forwardRef(function()
{
return tryGetModuleWijmoChartRadar() && tryGetModuleWijmoChartRadar().FlexRadar
}), core_2.forwardRef(function()
{
return tryGetModuleWijmoChartHierarchical() && tryGetModuleWijmoChartHierarchical().Sunburst
}), ], template: ""
}), __param(0, core_1.Inject(core_2.ElementRef)), __param(1, core_1.Inject(core_2.Injector))], WjFlexChartLegend)
}(wjcChart.Legend);
exports_1("WjFlexChartLegend", WjFlexChartLegend);
WjFlexChartDataLabel = function(_super)
{
function WjFlexChartDataLabel(elRef, injector)
{
_super.call(this);
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjFlexChartDataLabel, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-flex-chart-data-label', wjParentDirectives: [WjFlexChart], template: ""
}), __param(0, core_1.Inject(core_2.ElementRef)), __param(1, core_1.Inject(core_2.Injector))], WjFlexChartDataLabel)
}(wjcChart.DataLabel);
exports_1("WjFlexChartDataLabel", WjFlexChartDataLabel);
WjFlexPieDataLabel = function(_super)
{
function WjFlexPieDataLabel(elRef, injector)
{
_super.call(this);
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjFlexPieDataLabel, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-flex-pie-data-label', wjParentDirectives: [WjFlexPie, core_2.forwardRef(function()
{
return tryGetModuleWijmoChartHierarchical() && tryGetModuleWijmoChartHierarchical().Sunburst
}), ], template: ""
}), __param(0, core_1.Inject(core_2.ElementRef)), __param(1, core_1.Inject(core_2.Injector))], WjFlexPieDataLabel)
}(wjcChart.PieDataLabel);
exports_1("WjFlexPieDataLabel", WjFlexPieDataLabel);
WjFlexChartSeries = function(_super)
{
function WjFlexChartSeries(elRef, injector)
{
_super.call(this);
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjFlexChartSeries, _super), WjFlexChartSeries.SiblingId = 'series', __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-flex-chart-series', wjParentDirectives: [WjFlexChart, ], wjSiblingDirectiveId: 'series', template: ""
}), __param(0, core_1.Inject(core_2.ElementRef)), __param(1, core_1.Inject(core_2.Injector))], WjFlexChartSeries)
}(wjcChart.Series);
exports_1("WjFlexChartSeries", WjFlexChartSeries);
WjFlexChartLineMarker = function(_super)
{
function WjFlexChartLineMarker(elRef, injector)
{
var parentCmp=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.findTypeParentBehavior(injector, WjFlexChartLineMarker).directive;
_super.call(this, parentCmp);
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjFlexChartLineMarker, _super), WjFlexChartLineMarker = __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-flex-line-marker', wjParentDirectives: [WjFlexChart, core_2.forwardRef(function()
{
return tryGetModuleWijmoChartFinance() && tryGetModuleWijmoChartFinance().FinancialChart
}), ], template: ""
}), __param(0, core_1.Inject(core_2.ElementRef)), __param(1, core_1.Inject(core_2.Injector))], WjFlexChartLineMarker)
}(wjcChart.LineMarker);
exports_1("WjFlexChartLineMarker", WjFlexChartLineMarker);
WjFlexChartDataPoint = function(_super)
{
function WjFlexChartDataPoint(elRef, injector)
{
_super.call(this);
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjFlexChartDataPoint, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-flex-chart-data-point', wjParentDirectives: [core_2.forwardRef(function()
{
return tryGetModuleWijmoChartAnnotation() && tryGetModuleWijmoChartAnnotation().AnnotationBase
}), ], template: ""
}), __param(0, core_1.Inject(core_2.ElementRef)), __param(1, core_1.Inject(core_2.Injector))], WjFlexChartDataPoint)
}(wjcChart.DataPoint);
exports_1("WjFlexChartDataPoint", WjFlexChartDataPoint);
WjFlexChartPlotArea = function(_super)
{
function WjFlexChartPlotArea(elRef, injector)
{
_super.call(this);
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjFlexChartPlotArea, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-flex-chart-plot-area', wjParentDirectives: [WjFlexChart, core_2.forwardRef(function()
{
return tryGetModuleWijmoChartFinance() && tryGetModuleWijmoChartFinance().FinancialChart
}), ], template: ""
}), __param(0, core_1.Inject(core_2.ElementRef)), __param(1, core_1.Inject(core_2.Injector))], WjFlexChartPlotArea)
}(wjcChart.PlotArea);
exports_1("WjFlexChartPlotArea", WjFlexChartPlotArea);
moduleExports = [WjFlexChart, WjFlexPie, WjFlexChartAxis, WjFlexChartLegend, WjFlexChartDataLabel, WjFlexPieDataLabel, WjFlexChartSeries, WjFlexChartLineMarker, WjFlexChartDataPoint, WjFlexChartPlotArea];
WjChartModule = function()
{
function WjChartModule(){}
return __decorate([core_1.NgModule({
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
})], WjChartModule)
}();
exports_1("WjChartModule", WjChartModule)
}
}
})