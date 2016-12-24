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
System.register(['wijmo/wijmo', '@angular/core', '@angular/forms', 'wijmo/wijmo.angular2.metaFactory'], function(exports_1, context_1)
{
"use strict";
function WjValueAccessorFactory(injector)
{
return new WjValueAccessor(injector)
}
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
ng2,
core_1,
forms_1,
wjNg2Meta,
WjComponent,
DirectiveTypeData,
WjDirectiveBehavior,
_Walker,
Ng2Utils,
MethodProxy,
WjValueAccessor,
moduleExports,
WjDirectiveBaseModule;
return exports_1("WjValueAccessorFactory", WjValueAccessorFactory), {
setters: [function(wjcCore_1)
{
wjcCore = wjcCore_1
}, function(ng2_1)
{
ng2 = ng2_1;
core_1 = ng2_1
}, function(forms_1_1)
{
forms_1 = forms_1_1
}, function(wjNg2Meta_1)
{
wjNg2Meta = wjNg2Meta_1
}], execute: function()
{
exports_1("WjComponent", WjComponent = function(options)
{
return function(target, targetKey)
{
var metaId=options.wjMetadataId,
baseType=Object.getPrototypeOf(target.prototype).constructor,
baseDirMeta=Ng2Utils.getTypeAnnotation(baseType, ng2.Component),
mergedOptions={},
hasOwnMeta=metaId || !baseDirMeta,
filterProps,
metaData,
changeEventsMap,
inputs,
reqIdx,
retNg,
thisDirMeta,
ret;
return metaId || (options.wjMetadataId = metaId = baseDirMeta ? baseDirMeta.wjMetadataId : baseType), filterProps = function(name)
{
return ['properties', 'events', 'bindings', 'viewBindings'].indexOf(name) < 0
}, metaData = wjNg2Meta.MetaFactory.getMetaData(metaId), metaData.prepare(), target.prototype[WjDirectiveBehavior.wjModelPropAttr] = metaData.ngModelProperty, changeEventsMap = Ng2Utils.getChangeEventMap(metaData), baseDirMeta && Ng2Utils._copy(mergedOptions, baseDirMeta, !0, !1, filterProps), Ng2Utils._copy(mergedOptions, options), hasOwnMeta && (inputs = mergedOptions.inputs = (options.inputs || []).concat([WjDirectiveBehavior.parPropAttr, WjDirectiveBehavior.isInitializedPropAttr, WjDirectiveBehavior.wjModelPropAttr]).concat(metaData.props.map(function(propDesc)
{
return propDesc.propertyName
})), reqIdx = inputs.indexOf('required'), reqIdx > -1 && inputs.splice(reqIdx, 1), mergedOptions.outputs = (options.outputs || []).concat([WjDirectiveBehavior.initializedEventAttr]).concat(Ng2Utils.initEvents(target, changeEventsMap)), mergedOptions.wjIsDirective || (mergedOptions.providers = (options.providers || []).concat([{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: WjValueAccessorFactory, multi: !0, deps: [core_1.Injector]
}]))), Ng2Utils._copy(mergedOptions, options.wjOverride, !0), options.templateUrl ? delete mergedOptions.template : options.template && delete mergedOptions.templateUrl, options.styleUrls ? delete mergedOptions.styles : options.styleUrls && delete mergedOptions.styles, target[Ng2Utils.directiveTypeDataProp] = new DirectiveTypeData(metaData, changeEventsMap, mergedOptions.wjParentDirectives, mergedOptions.wjSiblingDirectiveId), retNg = mergedOptions.wjIsDirective ? ng2.Directive(mergedOptions) : ng2.Component(mergedOptions), thisDirMeta = Ng2Utils.getAnnotation(retNg.annotations, ng2.Directive), thisDirMeta && Ng2Utils._copy(thisDirMeta, mergedOptions, !0, !1, function(name)
{
return name.indexOf('wj') === 0
}), ret = retNg(target, targetKey), new MethodProxy(target, 'ngOnInit', WjDirectiveBehavior.prototype.dirOnInit), new MethodProxy(target, 'ngOnDestroy', WjDirectiveBehavior.prototype.dirOnDestroy), new MethodProxy(target, 'ngOnChanges', WjDirectiveBehavior.prototype.dirOnChanges), new MethodProxy(target, 'ngAfterViewInit', WjDirectiveBehavior.prototype.dirAfterViewInit), ret
}
});
DirectiveTypeData = function()
{
function DirectiveTypeData(metaData, changeEventMap, parentDirectives, siblingId)
{
this._fwdResolved = !1;
this.metaData = metaData;
this.changeEventMap = changeEventMap;
parentDirectives && (this._parentDirectives = [].concat(parentDirectives));
this.siblingId = siblingId || (++DirectiveTypeData._siblingIdCounter).toString()
}
return Object.defineProperty(DirectiveTypeData.prototype, "parentDirectives", {
get: function()
{
return this._resolveForwardDeclarations(), this._parentDirectives
}, enumerable: !0, configurable: !0
}), DirectiveTypeData.prototype._resolveForwardDeclarations = function()
{
this._fwdResolved || (this._fwdResolved = !0, WjDirectiveBehavior.resolveForwardDecl(this._parentDirectives))
}, DirectiveTypeData._siblingIdCounter = 0, DirectiveTypeData
}();
exports_1("DirectiveTypeData", DirectiveTypeData);
WjDirectiveBehavior = function()
{
function WjDirectiveBehavior(directive, elementRef, injector)
{
this.isInitialized = !1;
this.isDestroyed = !1;
this.directive = directive;
this.elementRef = elementRef;
this.injector = injector;
var typeData=this.typeData = directive.constructor[Ng2Utils.directiveTypeDataProp];
directive[WjDirectiveBehavior.BehaviourRefProp] = this;
injector[WjDirectiveBehavior.BehaviourRefProp] = this;
directive[WjDirectiveBehavior.isInitializedPropAttr] = !1;
_Walker.associate(injector, this);
this.createEvents();
MethodProxy.attachInstance(directive, this);
this._setupAsChild();
this._isHostElement() && elementRef.nativeElement.setAttribute(WjDirectiveBehavior.siblingDirIdAttr, typeData.siblingId);
this.subscribeToEvents(!1)
}
return WjDirectiveBehavior.getHostElement = function(ngHostElRef)
{
return ngHostElRef.nativeElement
}, WjDirectiveBehavior.attach = function(directive, elementRef, injector)
{
return new WjDirectiveBehavior(directive, elementRef, injector)
}, WjDirectiveBehavior.prototype.dirOnInit = function(originalMethod)
{
this.isInitialized = !0;
originalMethod();
this._initParent();
this.subscribeToEvents(!0);
this.directive.wjAfterParentInit && this.directive.wjAfterParentInit()
}, WjDirectiveBehavior.prototype.dirAfterViewInit = function(originalMethod)
{
originalMethod();
this.directive[WjDirectiveBehavior.isInitializedPropAttr] = !0;
this.directive[WjDirectiveBehavior.initializedEventAttr].next(undefined)
}, WjDirectiveBehavior.prototype.dirOnDestroy = function(originalMethod)
{
var control,
parControl,
parProp,
parArr,
idx;
if (originalMethod(), !this.isDestroyed)
{
if (this.isDestroyed = !0, control = this.directive, this._siblingInsertedEH && this.elementRef.nativeElement.removeEventListener('DOMNodeInserted', this._siblingInsertedEH), this._isParentArray() && !this.parentBehavior.isDestroyed && (parControl = this.parentBehavior.directive, parProp = this._getParentProp(), parControl && parProp && control && (parArr = parControl[parProp], parArr && (idx = parArr.indexOf(control), idx >= 0 && parArr.splice(idx, 1)))), control instanceof wjcCore.Control && control.hostElement)
{
var host=this.elementRef.nativeElement,
hostParent=host && host.parentNode,
hostIdx=hostParent ? Array.prototype.indexOf.call(hostParent.childNodes, host) : -1;
control.dispose();
hostIdx > -1 && Array.prototype.indexOf.call(hostParent.childNodes, host) < 0 && (host.textContent = '', hostIdx < hostParent.childNodes.length && hostParent.replaceChild(host, hostParent.childNodes[hostIdx]))
}
this.injector[WjDirectiveBehavior.BehaviourRefProp] = null;
_Walker.disassociate(this.injector)
}
}, WjDirectiveBehavior.prototype.dirOnChanges = function(originalMethod, changes)
{
originalMethod(changes)
}, WjDirectiveBehavior.instantiateTemplate = function(parent, viewContainerRef, templateRef)
{
for (var curNode, viewRef=viewContainerRef.createEmbeddedView(templateRef, {}, viewContainerRef.length), nodes=viewRef.rootNodes, rootEl=document.createElement('div'), _i=0, nodes_1=nodes; _i < nodes_1.length; _i++)
curNode = nodes_1[_i],
rootEl.appendChild(curNode);
return parent && parent.appendChild(rootEl), {
viewRef: viewRef, rootElement: rootEl
}
}, WjDirectiveBehavior.prototype.createEvents = function()
{
for (var curEventMap, changeProps, _a, changeProps_1, curChangeProp, changeEvents=this.typeData.changeEventMap, directive=this.directive, _i=0, changeEvents_1=changeEvents; _i < changeEvents_1.length; _i++)
if (curEventMap = changeEvents_1[_i], changeProps = curEventMap.props, curEventMap.eventImpl && (directive[curEventMap.eventImpl] = new ng2.EventEmitter(!1)), changeProps && changeProps.length)
for (_a = 0, changeProps_1 = changeProps; _a < changeProps_1.length; _a++)
curChangeProp = changeProps_1[_a],
directive[curChangeProp.evImpl] = new ng2.EventEmitter(!1);
directive[WjDirectiveBehavior.initializedEventAttr] = new ng2.EventEmitter(!0)
}, WjDirectiveBehavior.prototype.subscribeToEvents = function(afterInit)
{
var changeEvents=this.typeData.changeEventMap,
_i,
changeEvents_2,
_a,
changeEvents_3,
curEventMap;
for (afterInit = !!afterInit, _i = 0, changeEvents_2 = changeEvents; _i < changeEvents_2.length; _i++)
curEventMap = changeEvents_2[_i],
afterInit !== curEventMap.event.indexOf(".") < 0 && this.addHandlers(curEventMap);
if (afterInit)
for (_a = 0, changeEvents_3 = changeEvents; _a < changeEvents_3.length; _a++)
curEventMap = changeEvents_3[_a],
this.triggerPropChangeEvents(curEventMap)
}, WjDirectiveBehavior.prototype.addHandlers = function(eventMap)
{
var _this=this,
directive=this.directive;
WjDirectiveBehavior.evaluatePath(directive, eventMap.event).addHandler(function(s, e)
{
_this.isInitialized && _this.triggerPropChangeEvents(eventMap);
eventMap.eventImpl && directive[eventMap.eventImpl].next(e)
})
}, WjDirectiveBehavior.prototype.triggerPropChangeEvents = function(eventMap)
{
var directive=this.directive,
_i,
_a,
curChangeProp;
if (eventMap.props && eventMap.props.length)
for (_i = 0, _a = eventMap.props; _i < _a.length; _i++)
curChangeProp = _a[_i],
directive[curChangeProp.evImpl].next(directive[curChangeProp.prop])
}, WjDirectiveBehavior.prototype._setupAsChild = function()
{
var parDirs,
metaData;
this._isChild() && (parDirs = this.typeData.parentDirectives) && parDirs.length > 0 && (this._isHostElement() && (this.elementRef.nativeElement.style.display = 'none'), this.parentBehavior = WjDirectiveBehavior.findParentBehavior(this.injector, parDirs), metaData = this.typeData.metaData, this._parentPropDesc = new wjNg2Meta.ComplexPropDesc(metaData.parentProperty, metaData.isParentPropertyArray, metaData.ownsObject))
}, WjDirectiveBehavior.prototype._isChild = function()
{
return this._isParentInitializer() || this._isParentReferencer()
}, WjDirectiveBehavior.prototype._isParentInitializer = function()
{
return this.typeData.metaData.parentProperty != undefined
}, WjDirectiveBehavior.prototype._isParentReferencer = function()
{
return this.typeData.metaData.parentReferenceProperty != undefined
}, WjDirectiveBehavior.prototype._getParentProp = function()
{
return this._isParentInitializer() ? this.directive[WjDirectiveBehavior.parPropAttr] || this.typeData.metaData.parentProperty : undefined
}, WjDirectiveBehavior.prototype._getParentReferenceProperty = function()
{
return this.typeData.metaData.parentReferenceProperty
}, WjDirectiveBehavior.prototype._useParentObj = function()
{
return !1
}, WjDirectiveBehavior.prototype._isParentArray = function()
{
return this._isParentInitializer() && this._parentPropDesc.isArray
}, WjDirectiveBehavior.prototype._parentInCtor = function()
{
return this._isParentReferencer() && this._getParentReferenceProperty() == ''
}, WjDirectiveBehavior.prototype._initParent = function()
{
var parProp,
parPropDescOverride;
if (this.parentBehavior && !this._useParentObj())
{
var parDir=this.parentBehavior.directive,
propName=this._getParentProp(),
control=this.directive;
if (this._isParentInitializer())
if (parProp = this._getParentProp(), parPropDescOverride = wjNg2Meta.MetaFactory.findComplexProp(parProp, this.parentBehavior.typeData.metaData.complexProps), parPropDescOverride ? this._parentPropDesc = parPropDescOverride : this._parentPropDesc.propertyName = parProp, this._isParentArray())
{
var parArr=parDir[propName],
isHostElement=this._isHostElement(),
linkIdx=isHostElement ? this._getSiblingIndex() : -1;
(linkIdx < 0 || linkIdx >= parArr.length) && (linkIdx = parArr.length);
parArr.splice(linkIdx, 0, control);
isHostElement && (this._siblingInsertedEH = this._siblingInserted.bind(this), this.elementRef.nativeElement.addEventListener('DOMNodeInserted', this._siblingInsertedEH))
}
else
parDir[propName] = control;
this._isParentReferencer() && !this._parentInCtor() && (control[this._getParentReferenceProperty()] = parDir)
}
}, WjDirectiveBehavior.prototype._getSiblingIndex = function()
{
var thisEl=this.elementRef.nativeElement,
parEl=thisEl.parentElement,
i,
curEl;
if (!parEl)
return -1;
var siblings=parEl.childNodes,
idx=-1,
dirId=this.typeData.siblingId;
for (i = 0; i < siblings.length; i++)
if (curEl = siblings[i], curEl.nodeType == 1 && curEl.getAttribute(WjDirectiveBehavior.siblingDirIdAttr) == dirId && (++idx, curEl === thisEl))
return idx;
return -1
}, WjDirectiveBehavior.prototype._siblingInserted = function(e)
{
if (e.target === this.elementRef.nativeElement)
{
var lIdx=this._getSiblingIndex(),
parArr=this.parentBehavior.directive[this._getParentProp()],
directive=this.directive,
arrIdx=parArr.indexOf(directive);
lIdx >= 0 && arrIdx >= 0 && lIdx !== arrIdx && (parArr.splice(arrIdx, 1), lIdx = Math.min(lIdx, parArr.length), parArr.splice(lIdx, 0, directive))
}
}, WjDirectiveBehavior.prototype._isHostElement = function()
{
return this.elementRef.nativeElement.nodeType === Node.ELEMENT_NODE
}, WjDirectiveBehavior.evaluatePath = function(obj, path)
{
return this._pathBinding.path = path, this._pathBinding.getValue(obj)
}, WjDirectiveBehavior.getBehavior = function(directive)
{
return directive ? directive[WjDirectiveBehavior.BehaviourRefProp] : null
}, WjDirectiveBehavior.resolveForwardDecl = function(array)
{
var i,
curDecl;
if (array)
for (i = 0; i < array.length; i++)
curDecl = array[i],
array[i] = array[i] ? ng2.resolveForwardRef(array[i]) : array[i]
}, WjDirectiveBehavior.findParentBehavior = function(injector, directiveTypes, upToBehavior)
{
return _Walker.findParentBehavior(injector, directiveTypes, upToBehavior)
}, WjDirectiveBehavior.findTypeParentBehavior = function(injector, type, upToBehavior)
{
var typeData=type && type[Ng2Utils.directiveTypeDataProp],
parentDirectives=typeData && typeData.parentDirectives;
return parentDirectives ? WjDirectiveBehavior.findParentBehavior(injector, parentDirectives, upToBehavior) : null
}, WjDirectiveBehavior.getInjectorBehavior = function(injector)
{
return _Walker.getInjectorBehavior(injector)
}, WjDirectiveBehavior.BehaviourRefProp = 'wjBehaviour', WjDirectiveBehavior.parPropAttr = 'wjProperty', WjDirectiveBehavior.wjModelPropAttr = 'wjModelProperty', WjDirectiveBehavior.initializedEventAttr = 'initialized', WjDirectiveBehavior.isInitializedPropAttr = 'isInitialized', WjDirectiveBehavior.siblingDirIdAttr = 'wj-directive-id', WjDirectiveBehavior._pathBinding = new wjcCore.Binding(''), WjDirectiveBehavior
}();
exports_1("WjDirectiveBehavior", WjDirectiveBehavior);
_Walker = function()
{
function _Walker(){}
return _Walker.associate = function(injector, behavior)
{
var indexArr=_Walker._getIndexArray(injector);
indexArr[injector._nodeIndex] = behavior
}, _Walker.disassociate = function(injector)
{
var indexArr=_Walker._getIndexArray(injector);
indexArr[injector._nodeIndex] = null
}, _Walker.findParentBehavior = function(injector, directiveTypes, upToBehavior)
{
var appElement,
curDir,
_i,
directiveTypes_1,
parType;
if (!directiveTypes)
return null;
for (appElement = _Walker._getAppElement(injector, injector._nodeIndex); appElement != null; )
{
var parInjector=appElement.parentInjector,
parIdx=parInjector._nodeIndex,
curBeh=_Walker._getBehaviorByIndex(parInjector, parIdx);
if (curBeh)
{
if (upToBehavior === curBeh)
return null;
if (curDir = curBeh.directive, curDir)
for (_i = 0, directiveTypes_1 = directiveTypes; _i < directiveTypes_1.length; _i++)
if (parType = directiveTypes_1[_i], parType && curDir instanceof parType)
return curBeh
}
appElement = _Walker._getAppElement(parInjector, parIdx)
}
}, _Walker.getInjectorBehavior = function(injector)
{
return this._getBehaviorByIndex(injector, injector._nodeIndex)
}, _Walker._getIndexArray = function(injector)
{
var appView=injector._view,
ret=appView[_Walker.indexArrProp];
return ret || (appView[_Walker.indexArrProp] = ret = []), ret
}, _Walker._getAppElement = function(injector, nodeIndex)
{
return injector._view[_Walker.appElPropPrefix + nodeIndex]
}, _Walker._getBehaviorByIndex = function(injector, nodeIndex)
{
var indexArr=_Walker._getIndexArray(injector),
ret;
return nodeIndex == null ? null : (ret = indexArr[nodeIndex], ret || nodeIndex !== 0 || (ret = WjDirectiveBehavior.getBehavior(injector._view.context)), ret)
}, _Walker.appElPropPrefix = '_appEl_', _Walker.indexArrProp = '__wj_Behaviors', _Walker
}();
Ng2Utils = function()
{
function Ng2Utils(){}
return Ng2Utils.initEvents = function(directiveType, changeEvents)
{
for (var curEventMap, changeProps, _a, changeProps_2, curChangeProp, ret=[], _i=0, changeEvents_4=changeEvents; _i < changeEvents_4.length; _i++)
if (curEventMap = changeEvents_4[_i], changeProps = curEventMap.props, curEventMap.event && curEventMap.eventImpl && ret.push(curEventMap.eventImpl + ':' + curEventMap.event), changeProps && changeProps.length)
for (_a = 0, changeProps_2 = changeProps; _a < changeProps_2.length; _a++)
curChangeProp = changeProps_2[_a],
ret.push(curChangeProp.evImpl + ':' + curChangeProp.evExposed);
return ret
}, Ng2Utils.getChangeEventNameImplemented = function(propertyName)
{
return Ng2Utils.getChangeEventNameExposed(propertyName) + 'Ng'
}, Ng2Utils.getChangeEventNameExposed = function(propertyName)
{
return propertyName + 'Change'
}, Ng2Utils.getWjEventNameImplemented = function(eventName)
{
return eventName + 'Wj'
}, Ng2Utils.getChangeEventMap = function(metaData)
{
var eventDescArr=metaData.events || [],
propDescArr=metaData.props || [];
return eventDescArr.map(function(ed)
{
return {
event: ed.eventName, eventImpl: Ng2Utils.getWjEventNameImplemented(ed.eventName), props: function(arr)
{
return arr && arr.length ? arr : null
}(metaData.props.filter(function(pd)
{
return pd.changeEvent === ed.eventName
}).map(function(pd)
{
return {
prop: pd.propertyName, evExposed: Ng2Utils.getChangeEventNameExposed(pd.propertyName), evImpl: Ng2Utils.getChangeEventNameImplemented(pd.propertyName)
}
}))
}
}).concat(propDescArr.filter(function(pd)
{
return pd.changeEvent && pd.changeEvent.indexOf('.') > -1
}).map(function(pd)
{
var evParts=pd.changeEvent.split('.'),
parentEvName=evParts[evParts.length - 1];
return {
event: pd.changeEvent, eventImpl: null, props: [{
prop: pd.propertyName, evExposed: Ng2Utils.getChangeEventNameExposed(pd.propertyName), evImpl: Ng2Utils.getChangeEventNameImplemented(pd.propertyName)
}]
}
}))
}, Ng2Utils.getBaseType = function(type)
{
var proto;
return type && (proto = Object.getPrototypeOf(type.prototype)) && proto.constructor
}, Ng2Utils.getAnnotations = function(type)
{
return Reflect.getMetadata('annotations', type)
}, Ng2Utils.getAnnotation = function(annotations, annotationType)
{
var _i,
annotations_1,
curAnno;
if (annotationType && annotations)
for (_i = 0, annotations_1 = annotations; _i < annotations_1.length; _i++)
if (curAnno = annotations_1[_i], curAnno instanceof annotationType)
return curAnno;
return null
}, Ng2Utils.getTypeAnnotation = function(type, annotationType, own)
{
for (var anno, curType=type; curType; curType = own ? null : Ng2Utils.getBaseType(curType))
if (anno = Ng2Utils.getAnnotation(Ng2Utils.getAnnotations(curType), annotationType), anno)
return anno;
return null
}, Ng2Utils._copy = function(dst, src, override, includePrivate, filter)
{
var prop,
val,
dstVal;
if (dst && src)
for (prop in src)
(includePrivate || prop[0] !== '_') && (val = src[prop], (!filter || filter(prop, val)) && (dstVal = dst[prop], wjcCore.isArray(val) ? dst[prop] = (!wjcCore.isArray(dstVal) || override ? [] : dstVal).concat(val) : val !== undefined && (dst[prop] = val)))
}, Ng2Utils.directiveTypeDataProp = 'wjDirTypeData', Ng2Utils
}();
exports_1("Ng2Utils", Ng2Utils);
MethodProxy = function()
{
function MethodProxy(targetType, methodName, proxyMethod)
{
this.proxyMethod = proxyMethod;
var targetProto=targetType.prototype;
this.originalMethod = targetProto[methodName];
targetProto[methodName] = this._getMethodStub()
}
return MethodProxy.attachInstance = function(target, proxy)
{
target[MethodProxy.ProxyRefProp] = proxy
}, MethodProxy.prototype._getMethodStub = function()
{
var methodProxy=this;
return function()
{
for (var params=[], _i=0; _i < arguments.length; _i++)
params[+_i] = arguments[_i];
var targetThis=this,
proxy=targetThis[MethodProxy.ProxyRefProp],
originalCall=function()
{
for (var params=[], _i=0; _i < arguments.length; _i++)
params[+_i] = arguments[_i];
methodProxy.originalMethod && methodProxy.originalMethod.apply(targetThis, params)
},
parArr=[originalCall];
params != null && params.length && (parArr = parArr.concat(params));
methodProxy.proxyMethod.apply(proxy, parArr)
}
}, MethodProxy.ProxyRefProp = 'wjProxyHostRef', MethodProxy
}();
WjValueAccessor = function()
{
function WjValueAccessor(injector)
{
this._isFirstChange = !0;
this._isSubscribed = !1;
this._onChange = function(){};
this._onTouched = function(){};
this._injector = injector
}
return WjValueAccessor.prototype.writeValue = function(value)
{
var _this=this,
initEvent;
this._ensureDirective();
this._modelValue = value;
this._directive.isInitialized ? (this._ensureInitEhUnsubscribed(), this._updateDirective(), this._isFirstChange = !1) : this._dirInitEh ? this._isFirstChange = !1 : (initEvent = this._directive.initialized, this._dirInitEh = initEvent.subscribe(function()
{
_this._updateDirective();
_this._ensureInitEhUnsubscribed()
}))
}, WjValueAccessor.prototype.registerOnChange = function(fn)
{
this._onChange = fn
}, WjValueAccessor.prototype.registerOnTouched = function(fn)
{
this._onTouched = fn
}, WjValueAccessor.prototype._updateDirective = function()
{
if (!this._isFirstChange || this._modelValue != null)
{
if (this._ensureNgModelProp(), this._directive && this._ngModelProp)
{
var normValue=this._modelValue;
normValue === '' && (normValue = null);
this._directive[this._ngModelProp] = normValue
}
this._ensureSubscribed()
}
}, WjValueAccessor.prototype._ensureDirective = function()
{
if (!this._directive)
{
var behavior=this._behavior = WjDirectiveBehavior.getInjectorBehavior(this._injector);
behavior && (this._directive = behavior.directive)
}
}, WjValueAccessor.prototype._ensureSubscribed = function()
{
var directive,
ngModelProp,
propDesc,
changeEvent;
this._isSubscribed || (directive = this._directive, directive && (this._ensureNgModelProp(), ngModelProp = this._ngModelProp = directive[WjDirectiveBehavior.wjModelPropAttr], ngModelProp && (propDesc = wjNg2Meta.MetaFactory.findProp(ngModelProp, this._behavior.typeData.metaData.props), propDesc && (changeEvent = propDesc.changeEvent, changeEvent && directive[changeEvent].addHandler(this._dirValChgEh, this))), directive instanceof wjcCore.Control && directive.lostFocus.addHandler(this._dirLostFocusEh, this), this._isSubscribed = !0))
}, WjValueAccessor.prototype._ensureNgModelProp = function()
{
!this._ngModelProp && this._directive && (this._ngModelProp = this._directive[WjDirectiveBehavior.wjModelPropAttr])
}, WjValueAccessor.prototype._ensureInitEhUnsubscribed = function()
{
this._dirInitEh && (this._dirInitEh.unsubscribe(), this._dirInitEh = null)
}, WjValueAccessor.prototype._dirValChgEh = function()
{
if (this._onChange && this._directive && this._ngModelProp)
{
var dirValue=this._directive[this._ngModelProp];
this._modelValue !== dirValue && (this._modelValue = dirValue, this._onChange(dirValue))
}
}, WjValueAccessor.prototype._dirLostFocusEh = function()
{
this._onTouched && this._onTouched()
}, __decorate([core_1.Injectable(), __param(0, core_1.Inject(core_1.Injector))], WjValueAccessor)
}();
exports_1("WjValueAccessor", WjValueAccessor);
moduleExports = [];
WjDirectiveBaseModule = function()
{
function WjDirectiveBaseModule(){}
return __decorate([core_1.NgModule({})], WjDirectiveBaseModule)
}();
exports_1("WjDirectiveBaseModule", WjDirectiveBaseModule)
}
}
})