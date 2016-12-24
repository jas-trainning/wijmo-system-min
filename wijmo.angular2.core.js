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
System.register(['wijmo/wijmo', '@angular/core', '@angular/common', 'wijmo/wijmo.angular2.directiveBase'], function(exports_1, context_1)
{
"use strict";
var __moduleName=context_1 && context_1.id,
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
wjcCore,
core_1,
ngCore,
common_1,
wijmo_angular2_directiveBase_1,
WjTooltip,
WjComponentLoader,
moduleExports,
WjCoreModule;
return {
setters: [function(wjcCore_1)
{
wjcCore = wjcCore_1
}, function(core_1_1)
{
core_1 = core_1_1;
ngCore = core_1_1
}, function(common_1_1)
{
common_1 = common_1_1
}, function(wijmo_angular2_directiveBase_1_1)
{
wijmo_angular2_directiveBase_1 = wijmo_angular2_directiveBase_1_1
}], execute: function()
{
WjTooltip = function()
{
function WjTooltip(elRef, injector)
{
this.elRef = elRef;
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector);
WjTooltip._toolTip || (WjTooltip._toolTip = new wjcCore.Tooltip)
}
return Object.defineProperty(WjTooltip.prototype, "wjTooltip", {
get: function()
{
return this._toolTipText
}, set: function(value)
{
this._toolTipText != value && (this._toolTipText != value, WjTooltip._toolTip.setTooltip(this.elRef.nativeElement, value))
}, enumerable: !0, configurable: !0
}), WjTooltip.prototype.ngOnDestroy = function()
{
this.wjTooltip = null
}, __decorate([core_1.Input()], WjTooltip.prototype, "wjTooltip", null), WjTooltip = __decorate([wijmo_angular2_directiveBase_1.WjComponent({
wjIsDirective: !0, wjMetadataId: wjcCore.Tooltip, selector: '[wjTooltip]', exportAs: 'wjTooltip'
}), __param(0, core_1.Inject(core_1.ElementRef)), __param(1, core_1.Inject(core_1.Injector))], WjTooltip)
}();
exports_1("WjTooltip", WjTooltip);
WjComponentLoader = function()
{
function WjComponentLoader(_cmpResolver, _elementRef)
{
this._cmpResolver = _cmpResolver;
this._elementRef = _elementRef;
this._isViewInit = !1;
this.propertiesChange = new ngCore.EventEmitter
}
return Object.defineProperty(WjComponentLoader.prototype, "component", {
get: function()
{
return this._component
}, set: function(value)
{
this._component !== value && (this._component = value, this._createComponent())
}, enumerable: !0, configurable: !0
}), Object.defineProperty(WjComponentLoader.prototype, "properties", {
get: function()
{
return this._properties
}, set: function(value)
{
this._properties = value;
this._updateProperties()
}, enumerable: !0, configurable: !0
}), WjComponentLoader.prototype.ngAfterViewInit = function()
{
this._isViewInit = !0;
this._createComponent()
}, WjComponentLoader.prototype._createComponent = function()
{
if (this._isViewInit)
{
this._cmpRef && (this._cmpRef.destroy(), this._cmpRef = null);
var value=this._component;
value && this._anchor && (this._cmpRef = this._anchor.createComponent(this._cmpResolver.resolveComponentFactory(value)), this._updateProperties())
}
}, WjComponentLoader.prototype._updateProperties = function()
{
var cmp=this._cmpRef && this._cmpRef.instance,
properties=this.properties,
propNames,
_i,
propNames_1,
pName,
propChange;
if (cmp && properties)
for (propNames = Object.getOwnPropertyNames(properties), _i = 0, propNames_1 = propNames; _i < propNames_1.length; _i++)
pName = propNames_1[_i],
cmp[pName] = properties[pName],
propChange = cmp[pName + 'Change'],
propChange instanceof core_1.EventEmitter && this._addPropListener(cmp, pName, propChange)
}, WjComponentLoader.prototype._addPropListener = function(component, propName, propChange)
{
var _this=this;
propChange.subscribe(function()
{
_this.properties[propName] = _this.properties[propName] = component[propName];
_this.propertiesChange.next(_this.properties)
})
}, __decorate([core_1.ViewChild('anchor', {read: core_1.ViewContainerRef})], WjComponentLoader.prototype, "_anchor", void 0), __decorate([core_1.Component({
selector: 'wj-component-loader', template: "<div #anchor></div>", inputs: ['component', 'properties'], outputs: ['propertiesChange']
}), __param(0, core_1.Inject(core_1.ComponentFactoryResolver)), __param(1, core_1.Inject(core_1.ElementRef))], WjComponentLoader)
}();
exports_1("WjComponentLoader", WjComponentLoader);
moduleExports = [WjTooltip, WjComponentLoader];
WjCoreModule = function()
{
function WjCoreModule(){}
return __decorate([core_1.NgModule({
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
})], WjCoreModule)
}();
exports_1("WjCoreModule", WjCoreModule)
}
}
})