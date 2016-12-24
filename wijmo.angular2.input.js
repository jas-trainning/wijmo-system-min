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
System.register(['wijmo/wijmo.input', 'wijmo/wijmo', '@angular/core', '@angular/common', 'wijmo/wijmo.angular2.directiveBase'], function(exports_1, context_1)
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
wjcInput,
wjcCore,
core_1,
core_2,
core_3,
common_1,
wijmo_angular2_directiveBase_1,
WjComboBox,
WjAutoComplete,
WjCalendar,
WjColorPicker,
WjInputMask,
WjInputColor,
WjMultiSelect,
WjInputNumber,
WjInputDate,
WjInputTime,
WjInputDateTime,
WjListBox,
WjMenu,
WjMenuItem,
WjMenuSeparator,
WjMenuItemTemplateDir,
WjItemTemplate,
WjPopup,
WjContextMenu,
WjCollectionViewNavigator,
WjCollectionViewPager,
moduleExports,
WjInputModule;
return {
setters: [function(wjcInput_1)
{
wjcInput = wjcInput_1
}, function(wjcCore_1)
{
wjcCore = wjcCore_1
}, function(core_1_1)
{
core_1 = core_1_1;
core_2 = core_1_1;
core_3 = core_1_1
}, function(common_1_1)
{
common_1 = common_1_1
}, function(wijmo_angular2_directiveBase_1_1)
{
wijmo_angular2_directiveBase_1 = wijmo_angular2_directiveBase_1_1
}], execute: function()
{
WjComboBox = function(_super)
{
function WjComboBox(elRef, injector)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjComboBox, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-combo-box', template: ""
}), __param(0, core_3.Inject(core_2.ElementRef)), __param(1, core_3.Inject(core_2.Injector))], WjComboBox)
}(wjcInput.ComboBox);
exports_1("WjComboBox", WjComboBox);
WjAutoComplete = function(_super)
{
function WjAutoComplete(elRef, injector)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjAutoComplete, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-auto-complete', template: ""
}), __param(0, core_3.Inject(core_2.ElementRef)), __param(1, core_3.Inject(core_2.Injector))], WjAutoComplete)
}(wjcInput.AutoComplete);
exports_1("WjAutoComplete", WjAutoComplete);
WjCalendar = function(_super)
{
function WjCalendar(elRef, injector)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjCalendar, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-calendar', template: ""
}), __param(0, core_3.Inject(core_2.ElementRef)), __param(1, core_3.Inject(core_2.Injector))], WjCalendar)
}(wjcInput.Calendar);
exports_1("WjCalendar", WjCalendar);
WjColorPicker = function(_super)
{
function WjColorPicker(elRef, injector)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjColorPicker, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-color-picker', template: ""
}), __param(0, core_3.Inject(core_2.ElementRef)), __param(1, core_3.Inject(core_2.Injector))], WjColorPicker)
}(wjcInput.ColorPicker);
exports_1("WjColorPicker", WjColorPicker);
WjInputMask = function(_super)
{
function WjInputMask(elRef, injector)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjInputMask, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-input-mask', template: ""
}), __param(0, core_3.Inject(core_2.ElementRef)), __param(1, core_3.Inject(core_2.Injector))], WjInputMask)
}(wjcInput.InputMask);
exports_1("WjInputMask", WjInputMask);
WjInputColor = function(_super)
{
function WjInputColor(elRef, injector)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjInputColor, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-input-color', template: ""
}), __param(0, core_3.Inject(core_2.ElementRef)), __param(1, core_3.Inject(core_2.Injector))], WjInputColor)
}(wjcInput.InputColor);
exports_1("WjInputColor", WjInputColor);
WjMultiSelect = function(_super)
{
function WjMultiSelect(elRef, injector)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjMultiSelect, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-multi-select', template: ""
}), __param(0, core_3.Inject(core_2.ElementRef)), __param(1, core_3.Inject(core_2.Injector))], WjMultiSelect)
}(wjcInput.MultiSelect);
exports_1("WjMultiSelect", WjMultiSelect);
WjInputNumber = function(_super)
{
function WjInputNumber(elRef, injector)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjInputNumber, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-input-number', template: ""
}), __param(0, core_3.Inject(core_2.ElementRef)), __param(1, core_3.Inject(core_2.Injector))], WjInputNumber)
}(wjcInput.InputNumber);
exports_1("WjInputNumber", WjInputNumber);
WjInputDate = function(_super)
{
function WjInputDate(elRef, injector)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjInputDate, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-input-date', template: ""
}), __param(0, core_3.Inject(core_2.ElementRef)), __param(1, core_3.Inject(core_2.Injector))], WjInputDate)
}(wjcInput.InputDate);
exports_1("WjInputDate", WjInputDate);
WjInputTime = function(_super)
{
function WjInputTime(elRef, injector)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjInputTime, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-input-time', template: ""
}), __param(0, core_3.Inject(core_2.ElementRef)), __param(1, core_3.Inject(core_2.Injector))], WjInputTime)
}(wjcInput.InputTime);
exports_1("WjInputTime", WjInputTime);
WjInputDateTime = function(_super)
{
function WjInputDateTime(elRef, injector)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjInputDateTime, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-input-date-time', template: ""
}), __param(0, core_3.Inject(core_2.ElementRef)), __param(1, core_3.Inject(core_2.Injector))], WjInputDateTime)
}(wjcInput.InputDateTime);
exports_1("WjInputDateTime", WjInputDateTime);
WjListBox = function(_super)
{
function WjListBox(elRef, injector)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjListBox, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-list-box', template: "<div><ng-content></ng-content></div>"
}), __param(0, core_3.Inject(core_2.ElementRef)), __param(1, core_3.Inject(core_2.Injector))], WjListBox)
}(wjcInput.ListBox);
exports_1("WjListBox", WjListBox);
WjMenu = function(_super)
{
function WjMenu(elRef, injector)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector);
this.itemsSource = new wjcCore.ObservableArray;
this.selectedIndex = 0
}
return __extends(WjMenu, _super), Object.defineProperty(WjMenu.prototype, "value", {
get: function()
{
return this._value
}, set: function(value)
{
this._value = value;
value != null && (this.selectedValue = value, this._updateHeader())
}, enumerable: !0, configurable: !0
}), WjMenu.prototype.ngOnInit = function()
{
this._attachToControl();
this._updateHeader()
}, WjMenu.prototype.ngOnDestroy = function()
{
this.listBox.formatItem.removeHandler(this._fmtItem, this);
this.listBox.loadingItems.removeHandler(this._loadingItems, this)
}, WjMenu.prototype.ngOnChanges = function(changes)
{
var headerChange=changes.header;
headerChange && (this._definedHeader = headerChange.currentValue, this._updateHeader())
}, WjMenu.prototype.ngAfterContentInit = function()
{
this.value = this.value
}, WjMenu.prototype.onItemClicked = function(e)
{
this.value = this.selectedValue;
_super.prototype.onItemClicked.call(this, e)
}, WjMenu.prototype.refresh = function(fullUpdate)
{
fullUpdate === void 0 && (fullUpdate = !0);
_super.prototype.refresh.call(this, fullUpdate);
this._updateHeader()
}, WjMenu.prototype._attachToControl = function()
{
this.listBox.formatItem.addHandler(this._fmtItem, this);
this.listBox.loadingItems.addHandler(this._loadingItems, this);
this.invalidate()
}, WjMenu.prototype._loadingItems = function(s)
{
for (var itemEl, items=s.hostElement.getElementsByClassName('wj-listbox-item'), i=items.length - 1; i >= 0; i--)
itemEl = items[i],
itemEl.textContent = ''
}, WjMenu.prototype._fmtItem = function(s, e)
{
var itemEl,
contentRoot;
e.data instanceof WjMenuItem && (itemEl = e.item, itemEl.textContent = '', contentRoot = e.data.contentRoot, contentRoot && itemEl.appendChild(contentRoot))
}, WjMenu.prototype._updateHeader = function()
{
var selItem,
currentValue,
contentRoot;
this.header = this._definedHeader || '';
selItem = this.selectedItem;
this.value != null && selItem && this.displayMemberPath && (currentValue = null, selItem instanceof WjMenuItem && (contentRoot = selItem.contentRoot, currentValue = contentRoot ? contentRoot.innerHTML : selItem[this.displayMemberPath]), currentValue != null && (this.header += ': <b>' + currentValue + '</b>'))
}, __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-menu', template: "<div><ng-content></ng-content></div>", directives: [core_2.forwardRef(function()
{
return WjMenuItem
})]
}), __param(0, core_3.Inject(core_2.ElementRef)), __param(1, core_3.Inject(core_2.Injector))], WjMenu)
}(wjcInput.Menu);
exports_1("WjMenu", WjMenu);
WjMenuItem = function()
{
function WjMenuItem(elRef, injector, viewContainerRef, domRenderer)
{
this.elRef = elRef;
this.viewContainerRef = viewContainerRef;
this.domRenderer = domRenderer;
var behavior=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector);
this._ownerMenu = behavior.parentBehavior.directive
}
return WjMenuItem.prototype.ngOnInit = function(){}, WjMenuItem.prototype.wjAfterParentInit = function()
{
var ownerMenu=this._ownerMenu;
ownerMenu.itemsSource.length == 1 && ownerMenu.selectedIndex < 0 && (ownerMenu.selectedIndex = 0);
ownerMenu.displayMemberPath || (ownerMenu.displayMemberPath = 'header');
ownerMenu.selectedValuePath || (ownerMenu.selectedValuePath = 'value');
ownerMenu.commandPath || (ownerMenu.commandPath = 'cmd');
ownerMenu.commandParameterPath || (ownerMenu.commandParameterPath = 'cmdParam')
}, WjMenuItem.prototype.ngAfterContentInit = function(){}, __decorate([wijmo_angular2_directiveBase_1.WjComponent({
wjMetadataId: 'MenuItem', wjParentDirectives: [WjMenu], wjSiblingDirectiveId: 'menuItemDir', selector: 'wj-menu-item', template: "<template [wjMenuItemTemplateDir]><ng-content></ng-content></template>", directives: [core_2.forwardRef(function()
{
return WjMenuItemTemplateDir
})]
}), __param(0, core_3.Inject(core_2.ElementRef)), __param(1, core_3.Inject(core_2.Injector)), __param(2, core_3.Inject(core_2.ViewContainerRef)), __param(3, core_3.Inject(core_2.Renderer))], WjMenuItem)
}();
exports_1("WjMenuItem", WjMenuItem);
WjMenuSeparator = function(_super)
{
function WjMenuSeparator(elRef, injector, viewContainerRef, domRenderer)
{
_super.call(this, elRef, injector, viewContainerRef, domRenderer)
}
return __extends(WjMenuSeparator, _super), WjMenuSeparator.prototype.ngOnInit = function(){}, __decorate([wijmo_angular2_directiveBase_1.WjComponent({
wjMetadataId: 'MenuSeparator', wjParentDirectives: [WjMenu], wjSiblingDirectiveId: 'menuItemDir', selector: 'wj-menu-separator', template: "<template [wjMenuItemTemplateDir]><div class=\"wj-state-disabled\" style=\"width:100%;height:1px;background-color:lightgray\"></div></template>", directives: [core_2.forwardRef(function()
{
return WjMenuItemTemplateDir
})]
}), __param(0, core_3.Inject(core_2.ElementRef)), __param(1, core_3.Inject(core_2.Injector)), __param(2, core_3.Inject(core_2.ViewContainerRef)), __param(3, core_3.Inject(core_2.Renderer))], WjMenuSeparator)
}(WjMenuItem);
exports_1("WjMenuSeparator", WjMenuSeparator);
WjMenuItemTemplateDir = function()
{
function WjMenuItemTemplateDir(viewContainerRef, templateRef, elRef, injector, domRenderer, menuItem, menuSeparator)
{
this.viewContainerRef = viewContainerRef;
this.templateRef = templateRef;
this.elRef = elRef;
this.domRenderer = domRenderer;
this.ownerItem = menuItem || menuSeparator;
this.ownerItem.templateDir = this
}
return WjMenuItemTemplateDir.prototype.ngOnInit = function(){}, WjMenuItemTemplateDir.prototype.ngAfterContentInit = function()
{
var self=this;
setTimeout(function()
{
var rootEl=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.instantiateTemplate(null, self.viewContainerRef, self.templateRef, self.domRenderer).rootElement;
self.contentRoot = rootEl;
self.ownerItem.contentRoot = rootEl;
self.ownerItem._ownerMenu.listBox.invalidate();
self.ownerItem._ownerMenu.invalidate()
}, 0)
}, __decorate([core_2.Directive({
selector: '[wjMenuItemTemplateDir]', inputs: ['wjMenuItemTemplateDir']
}), __param(0, core_3.Inject(core_2.ViewContainerRef)), __param(1, core_3.Inject(core_2.TemplateRef)), __param(1, core_2.Optional()), __param(2, core_3.Inject(core_2.ElementRef)), __param(3, core_3.Inject(core_2.Injector)), __param(4, core_3.Inject(core_2.Renderer)), __param(5, core_3.Inject(WjMenuItem)), __param(5, core_2.Optional()), __param(6, core_3.Inject(WjMenuSeparator)), __param(6, core_2.Optional())], WjMenuItemTemplateDir)
}();
exports_1("WjMenuItemTemplateDir", WjMenuItemTemplateDir);
WjItemTemplate = function()
{
function WjItemTemplate(viewContainerRef, templateRef, elRef, injector, domRenderer)
{
this.viewContainerRef = viewContainerRef;
this.templateRef = templateRef;
this.elRef = elRef;
this.domRenderer = domRenderer;
var behavior=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector);
this.ownerControl = behavior.parentBehavior.directive;
this.listBox = WjItemTemplate._getListBox(this.ownerControl)
}
return WjItemTemplate.prototype.ngOnInit = function()
{
this._attachToControl()
}, WjItemTemplate.prototype.ngOnDestroy = function()
{
var ownerControl=this.ownerControl,
listBox=this.listBox;
listBox && (listBox.formatItem.removeHandler(this._fmtItem, this), listBox.loadingItems.removeHandler(this._loadingItems, this));
ownerControl && ownerControl.invalidate()
}, WjItemTemplate.prototype._attachToControl = function()
{
this.listBox.formatItem.addHandler(this._fmtItem, this);
this.listBox.loadingItems.addHandler(this._loadingItems, this);
this.ownerControl.invalidate()
}, WjItemTemplate.prototype._loadingItems = function()
{
this.viewContainerRef.clear()
}, WjItemTemplate.prototype._fmtItem = function(s, e)
{
var itemEl=e.item,
viewRef;
itemEl.textContent = '';
viewRef = this._instantiateTemplate(itemEl);
viewRef.context.control = s;
viewRef.context.item = e.data;
viewRef.context.itemIndex = e.index
}, WjItemTemplate.prototype._instantiateTemplate = function(parent)
{
return wijmo_angular2_directiveBase_1.WjDirectiveBehavior.instantiateTemplate(parent, this.viewContainerRef, this.templateRef, this.domRenderer).viewRef
}, WjItemTemplate._getListBox = function(ownerControl)
{
return ownerControl ? ownerControl instanceof wjcInput.ListBox ? ownerControl : ownerControl.listBox : null
}, WjItemTemplate = __decorate([wijmo_angular2_directiveBase_1.WjComponent({
wjIsDirective: !0, wjMetadataId: 'ItemTemplate', wjParentDirectives: [WjListBox, WjMenu, WjComboBox, WjMultiSelect], selector: '[wjItemTemplate]', inputs: ['wjItemTemplate'], exportAs: 'wjItemTemplate'
}), __param(0, core_3.Inject(core_2.ViewContainerRef)), __param(1, core_3.Inject(core_2.TemplateRef)), __param(1, core_2.Optional()), __param(2, core_3.Inject(core_2.ElementRef)), __param(3, core_3.Inject(core_2.Injector)), __param(4, core_3.Inject(core_2.Renderer))], WjItemTemplate)
}();
exports_1("WjItemTemplate", WjItemTemplate);
WjPopup = function(_super)
{
function WjPopup(elRef, injector)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
this._elRef = elRef;
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __extends(WjPopup, _super), WjPopup.prototype.ngOnChanges = function(changes)
{
var ownerChange=changes.owner;
ownerChange && this.modal == null && (this.modal = this.owner ? !1 : !0)
}, WjPopup.prototype.dispose = function()
{
this.isVisible && (this.hiding.removeAllHandlers(), this.fadeOut = !1, this.hide());
_super.prototype.dispose.call(this)
}, __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-popup', template: "<div><ng-content></ng-content></div>"
}), __param(0, core_3.Inject(core_2.ElementRef)), __param(1, core_3.Inject(core_2.Injector))], WjPopup)
}(wjcInput.Popup);
exports_1("WjPopup", WjPopup);
WjContextMenu = function()
{
function WjContextMenu(elRef)
{
this.elRef = elRef
}
return WjContextMenu.prototype.onContextMenu = function(e)
{
var menu=this.wjContextMenu,
dropDown=menu.dropDown;
menu && dropDown && !wjcCore.closest(e.target, '[disabled]') && (e.preventDefault(), menu.owner = this.elRef.nativeElement, menu.selectedIndex = -1, menu.onIsDroppedDownChanging(new wjcCore.CancelEventArgs) && (wjcCore.showPopup(dropDown, e), menu.onIsDroppedDownChanged(), dropDown.focus()))
}, __decorate([core_2.Directive({
selector: '[wjContextMenu]', inputs: ['wjContextMenu'], exportAs: 'wjContextMenu', host: {'(contextmenu)': 'onContextMenu($event)'}
}), __param(0, core_3.Inject(core_2.ElementRef))], WjContextMenu)
}();
exports_1("WjContextMenu", WjContextMenu);
WjCollectionViewNavigator = function()
{
function WjCollectionViewNavigator(elRef, injector)
{
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __decorate([wijmo_angular2_directiveBase_1.WjComponent({
wjMetadataId: 'CollectionViewNavigator', selector: 'wj-collection-view-navigator', template: "\n            <div class=\"wj-control wj-content wj-pager\">\n                <div class=\"wj-input-group\">\n                    <span class=\"wj-input-group-btn\" >\n                        <button class=\"wj-btn wj-btn-default\" type=\"button\"\n                           (click)=\"cv.moveCurrentToFirst()\"\n                           [disabled]=\"!cv || cv?.currentPosition <= 0\">\n                            <span class=\"wj-glyph-left\" style=\"margin-right: -4px;\"></span>\n                            <span class=\"wj-glyph-left\"></span>\n                         </button>\n                    </span>\n                    <span class=\"wj-input-group-btn\" >\n                       <button class=\"wj-btn wj-btn-default\" type=\"button\"\n                           (click)=\"cv.moveCurrentToPrevious()\"\n                           [disabled]=\"!cv || cv?.currentPosition <= 0\">\n                            <span class=\"wj-glyph-left\"></span>\n                       </button>\n                    </span>\n                    <input type=\"text\" class=\"wj-form-control\" value=\"\n                       {{cv?.currentPosition + 1 | number}} / {{cv?.itemCount | number}}\n                       \" disabled />\n                    <span class=\"wj-input-group-btn\" >\n                        <button class=\"wj-btn wj-btn-default\" type=\"button\"\n                           (click)=\"cv.moveCurrentToNext()\"\n                           [disabled]=\"!cv || cv?.currentPosition >= cv?.itemCount - 1\">\n                            <span class=\"wj-glyph-right\"></span>\n                        </button>\n                    </span>\n                    <span class=\"wj-input-group-btn\" >\n                        <button class=\"wj-btn wj-btn-default\" type=\"button\"\n                           (click)=\"cv.moveCurrentToLast()\"\n                           [disabled]=\"!cv || cv?.currentPosition >= cv?.itemCount - 1\">\n                            <span class=\"wj-glyph-right\"></span>\n                            <span class=\"wj-glyph-right\" style=\"margin-left: -4px;\"></span>\n                        </button>\n                    </span>\n                </div>\n            </div>\n"
}), __param(0, core_3.Inject(core_2.ElementRef)), __param(1, core_3.Inject(core_2.Injector))], WjCollectionViewNavigator)
}();
exports_1("WjCollectionViewNavigator", WjCollectionViewNavigator);
WjCollectionViewPager = function()
{
function WjCollectionViewPager(elRef, injector)
{
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector)
}
return __decorate([wijmo_angular2_directiveBase_1.WjComponent({
wjMetadataId: 'CollectionViewPager', selector: 'wj-collection-view-pager', template: "\n            <div class=\"wj-control wj-content wj-pager\" >\n                <div class=\"wj-input-group\">\n                    <span class=\"wj-input-group-btn\" >\n                        <button class=\"wj-btn wj-btn-default\" type=\"button\"\n                            (click)=\"cv.moveToFirstPage()\"\n                            [disabled]=\"!cv || cv?.pageIndex <= 0\">\n                            <span class=\"wj-glyph-left\" style=\"margin-right: -4px;\"></span>\n                            <span class=\"wj-glyph-left\"></span>\n                        </button>\n                    </span>\n                    <span class=\"wj-input-group-btn\" >\n                    <button class=\"wj-btn wj-btn-default\" type=\"button\"\n                            (click)=\"cv.moveToPreviousPage()\"\n                            [disabled]=\"!cv || cv?.pageIndex <= 0\">\n                            <span class=\"wj-glyph-left\"></span>\n                        </button>\n                    </span>\n                    <input type=\"text\" class=\"wj-form-control\" value=\"\n                        {{cv?.pageIndex + 1 | number}} / {{cv?.pageCount | number}}\n                    \" disabled />\n                    <span class=\"wj-input-group-btn\" >\n                        <button class=\"wj-btn wj-btn-default\" type=\"button\"\n                            (click)=\"cv.moveToNextPage()\"\n                            [disabled]=\"!cv || cv?.pageIndex >= cv?.pageCount - 1\">\n                            <span class=\"wj-glyph-right\"></span>\n                        </button>\n                    </span>\n                    <span class=\"wj-input-group-btn\" >\n                        <button class=\"wj-btn wj-btn-default\" type=\"button\"\n                            (click)=\"cv.moveToLastPage()\"\n                            [disabled]=\"!cv || cv?.pageIndex >= cv?.pageCount - 1\">\n                            <span class=\"wj-glyph-right\"></span>\n                            <span class=\"wj-glyph-right\" style=\"margin-left: -4px;\"></span>\n                        </button>\n                    </span>\n                </div>\n            </div>\n"
}), __param(0, core_3.Inject(core_2.ElementRef)), __param(1, core_3.Inject(core_2.Injector))], WjCollectionViewPager)
}();
exports_1("WjCollectionViewPager", WjCollectionViewPager);
moduleExports = [WjComboBox, WjAutoComplete, WjCalendar, WjColorPicker, WjInputMask, WjInputColor, WjMultiSelect, WjInputNumber, WjInputDate, WjInputTime, WjInputDateTime, WjListBox, WjMenu, WjMenuItem, WjMenuSeparator, WjItemTemplate, WjPopup, WjContextMenu, WjCollectionViewNavigator, WjCollectionViewPager];
WjInputModule = function()
{
function WjInputModule(){}
return __decorate([core_1.NgModule({
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.concat([WjMenuItemTemplateDir]), exports: moduleExports.slice()
})], WjInputModule)
}();
exports_1("WjInputModule", WjInputModule)
}
}
})