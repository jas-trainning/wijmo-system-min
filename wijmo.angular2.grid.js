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
System.register(['wijmo/wijmo.grid', 'wijmo/wijmo', '@angular/core', '@angular/common', 'wijmo/wijmo.angular2.directiveBase'], function(exports_1, context_1)
{
"use strict";
function tryGetModuleWijmoInput()
{
var m1;
return (m1 = window.wijmo) && m1.input
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
wjcGrid,
wjcCore,
core_1,
core_2,
core_3,
common_1,
wijmo_angular2_directiveBase_1,
WjFlexGrid,
WjFlexGridColumn,
CellTemplateType,
WjFlexGridCellTemplate,
DirectiveCellFactory,
moduleExports,
WjGridModule;
return {
setters: [function(wjcGrid_1)
{
wjcGrid = wjcGrid_1
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
WjFlexGrid = function(_super)
{
function WjFlexGrid(elRef, injector)
{
var _this=this;
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
new DirectiveCellFactory(this);
wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector);
this.deferUpdate(function()
{
if (_this.rows.defaultSize < 10)
{
var e=_this.hostElement,
csh=getComputedStyle(e),
csb=getComputedStyle(document.body),
defRowHei=parseInt(csh.fontSize && wjcCore.contains(document.body, e) ? csh.fontSize : csb.fontSize) * 2;
_this.rows.defaultSize = defRowHei;
_this.columns.defaultSize = defRowHei * 4;
_this.columnHeaders.rows.defaultSize = defRowHei;
_this.rowHeaders.columns.defaultSize = Math.round(defRowHei * 1.25)
}
})
}
return __extends(WjFlexGrid, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-flex-grid', template: "<div><ng-content></ng-content></div>"
}), __param(0, core_3.Inject(core_2.ElementRef)), __param(1, core_3.Inject(core_3.Injector))], WjFlexGrid)
}(wjcGrid.FlexGrid);
exports_1("WjFlexGrid", WjFlexGrid);
WjFlexGridColumn = function(_super)
{
function WjFlexGridColumn(elRef, injector)
{
_super.call(this);
var behavior=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector),
gridCmp=behavior.parentBehavior.directive;
gridCmp.autoGenerateColumns && (gridCmp.autoGenerateColumns = !1, gridCmp.columns.clear())
}
return __extends(WjFlexGridColumn, _super), __decorate([wijmo_angular2_directiveBase_1.WjComponent({
selector: 'wj-flex-grid-column', wjParentDirectives: [WjFlexGrid], template: "<div><ng-content></ng-content></div>"
}), __param(0, core_3.Inject(core_2.ElementRef)), __param(1, core_3.Inject(core_3.Injector))], WjFlexGridColumn)
}(wjcGrid.Column);
exports_1("WjFlexGridColumn", WjFlexGridColumn),
function(CellTemplateType)
{
CellTemplateType[CellTemplateType.Cell = 0] = "Cell";
CellTemplateType[CellTemplateType.CellEdit = 1] = "CellEdit";
CellTemplateType[CellTemplateType.ColumnHeader = 2] = "ColumnHeader";
CellTemplateType[CellTemplateType.RowHeader = 3] = "RowHeader";
CellTemplateType[CellTemplateType.RowHeaderEdit = 4] = "RowHeaderEdit";
CellTemplateType[CellTemplateType.TopLeft = 5] = "TopLeft";
CellTemplateType[CellTemplateType.GroupHeader = 6] = "GroupHeader";
CellTemplateType[CellTemplateType.Group = 7] = "Group";
CellTemplateType[CellTemplateType.NewCellTemplate = 8] = "NewCellTemplate";
CellTemplateType[CellTemplateType.ColumnFooter = 9] = "ColumnFooter";
CellTemplateType[CellTemplateType.BottomLeft = 10] = "BottomLeft"
}(CellTemplateType || (CellTemplateType = {}));
exports_1("CellTemplateType", CellTemplateType);
WjFlexGridCellTemplate = function()
{
function WjFlexGridCellTemplate(viewContainerRef, templateRef, elRef, domRenderer, injector, cdRef)
{
this.viewContainerRef = viewContainerRef;
this.templateRef = templateRef;
this.elRef = elRef;
this.domRenderer = domRenderer;
this.cdRef = cdRef;
this.autoSizeRows = !0;
var gridBehavior=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.findParentBehavior(injector, [WjFlexGrid]),
columnBehavior=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.findParentBehavior(injector, [WjFlexGridColumn], gridBehavior);
this.grid = gridBehavior.directive;
columnBehavior && (this.column = columnBehavior.directive)
}
return WjFlexGridCellTemplate._getTemplContextProp = function(templateType)
{
return '$__cellTempl' + CellTemplateType[templateType]
}, WjFlexGridCellTemplate.prototype.ngOnInit = function()
{
this.ownerControl = this.column && this.column.grid === this.grid ? this.column : this.grid;
this._attachToControl()
}, WjFlexGridCellTemplate.prototype.ngOnDestroy = function()
{
this.cellTypeStr && (this.viewContainerRef.clear(), this.ownerControl[WjFlexGridCellTemplate._getTemplContextProp(this.cellType)] = null, this.grid.invalidate())
}, WjFlexGridCellTemplate.prototype._instantiateTemplate = function(parent)
{
return wijmo_angular2_directiveBase_1.WjDirectiveBehavior.instantiateTemplate(parent, this.viewContainerRef, this.templateRef, this.domRenderer)
}, WjFlexGridCellTemplate.prototype._attachToControl = function()
{
this.cellTypeStr && (this.cellType = wjcCore.asEnum(this.cellTypeStr, CellTemplateType), this.ownerControl[WjFlexGridCellTemplate._getTemplContextProp(this.cellType)] = this, this.grid.invalidate())
}, WjFlexGridCellTemplate = __decorate([core_2.Directive({
selector: '[wjFlexGridCellTemplate]', inputs: ['wjFlexGridCellTemplate', 'cellTypeStr: cellType', 'cellOverflow', 'valuePaths', 'autoSizeRows'], exportAs: 'wjFlexGridCellTemplate'
}), __param(0, core_3.Inject(core_2.ViewContainerRef)), __param(1, core_3.Inject(core_2.TemplateRef)), __param(1, core_3.Optional()), __param(2, core_3.Inject(core_2.ElementRef)), __param(3, core_3.Inject(core_3.Renderer)), __param(4, core_3.Inject(core_3.Injector)), __param(5, core_3.Inject(core_1.ChangeDetectorRef))], WjFlexGridCellTemplate)
}();
exports_1("WjFlexGridCellTemplate", WjFlexGridCellTemplate);
DirectiveCellFactory = function(_super)
{
function DirectiveCellFactory(grid)
{
var templateType,
self;
if (_super.call(this), this._lastApplyTimeStamp = 0, this._noApplyLag = !1, this._startingEditing = !1, this._cellStampCounter = 0, this.grid = grid, !DirectiveCellFactory._templateTypes)
{
DirectiveCellFactory._templateTypes = [];
for (templateType in CellTemplateType)
isNaN(templateType) && DirectiveCellFactory._templateTypes.push(templateType)
}
self = this;
this._baseCf = grid.cellFactory;
grid.cellFactory = this;
this._evtInput = document.createEvent('HTMLEvents');
this._evtInput.initEvent('input', !0, !1);
this._evtBlur = document.createEvent('HTMLEvents');
this._evtBlur.initEvent('blur', !1, !1);
grid.prepareCellForEdit.addHandler(function()
{
self._noApplyLag = !0
});
grid.cellEditEnded.addHandler(function(s, e)
{
(e.range.col < 0 || e.range.col < grid.columns.length && !grid.columns[e.range.col][WjFlexGridCellTemplate._getTemplContextProp(CellTemplateType.CellEdit)]) && (self._editChar = null);
setTimeout(function()
{
self._noApplyLag = !1
}, 300)
});
grid.beginningEdit.addHandler(function()
{
self._startingEditing = !0
});
grid.hostElement.addEventListener('keydown', function()
{
self._startingEditing = !1
}, !0);
grid.hostElement.addEventListener('keypress', function(e)
{
var char=e.charCode > 32 ? String.fromCharCode(e.charCode) : null;
char && (!grid.activeEditor || self._startingEditing ? self._editChar = char : self._editChar && (self._editChar += char))
}, !0)
}
return __extends(DirectiveCellFactory, _super), DirectiveCellFactory.prototype.updateCell = function(panel, rowIndex, colIndex, cell, rng)
{
var cellStamp,
isHierNonGroup,
isUpdated,
col,
templContextProp,
templContext,
isTpl,
cellValue,
measureAttr,
isMeasuring,
cellContext,
isForeignCell,
rootEl,
templInstance,
cellInfo_1,
editEndingEH;
this._cellStampCounter = (this._cellStampCounter + 1) % 1e7;
cellStamp = cell[DirectiveCellFactory._cellStampProp] = this._cellStampCounter;
cell.style.overflow && (cell.style.overflow = '');
var self=this,
grid=panel.grid,
editRange=grid.editRange,
templateType,
row=panel.rows[rowIndex],
dataItem=row.dataItem,
isGridCtx=!1,
needCellValue=!1,
isEdit=!1,
isCvGroup=!1;
switch (panel.cellType)
{
case wjcGrid.CellType.Cell:
editRange && editRange.row === rowIndex && editRange.col === colIndex ? (templateType = CellTemplateType.CellEdit, needCellValue = isEdit = !0) : row instanceof wjcGrid.GroupRow ? (isCvGroup = dataItem instanceof wjcCore.CollectionViewGroup, isHierNonGroup = !(isCvGroup || row.hasChildren), colIndex == panel.columns.firstVisibleIndex ? templateType = isHierNonGroup ? CellTemplateType.Cell : CellTemplateType.GroupHeader : (templateType = isHierNonGroup ? CellTemplateType.Cell : CellTemplateType.Group, needCellValue = !0)) : row instanceof wjcGrid._NewRowTemplate ? templateType = CellTemplateType.NewCellTemplate : wjcGrid.detail && wjcGrid.detail.DetailRow && row instanceof wjcGrid.detail.DetailRow || (templateType = CellTemplateType.Cell);
break;
case wjcGrid.CellType.ColumnHeader:
templateType = CellTemplateType.ColumnHeader;
break;
case wjcGrid.CellType.RowHeader:
templateType = grid.collectionView && grid.collectionView.currentEditItem === dataItem ? CellTemplateType.RowHeaderEdit : CellTemplateType.RowHeader;
isGridCtx = !0;
break;
case wjcGrid.CellType.TopLeft:
templateType = CellTemplateType.TopLeft;
isGridCtx = !0;
break;
case wjcGrid.CellType.ColumnFooter:
templateType = CellTemplateType.ColumnFooter;
needCellValue = !0;
break;
case wjcGrid.CellType.BottomLeft:
templateType = CellTemplateType.BottomLeft;
isGridCtx = !0
}
isUpdated = !1;
templateType != null && (col = isCvGroup && templateType == CellTemplateType.GroupHeader ? grid.columns.getColumn(dataItem.groupDescription.propertyName) : colIndex >= 0 && colIndex < panel.columns.length ? panel.columns[colIndex] : null, col && (templContextProp = WjFlexGridCellTemplate._getTemplContextProp(templateType), templContext = (isGridCtx ? grid : col)[templContextProp], templContext || (templateType === CellTemplateType.RowHeaderEdit ? (templateType = CellTemplateType.RowHeader, templContextProp = WjFlexGridCellTemplate._getTemplContextProp(templateType), templContext = grid[templContextProp]) : (templateType === CellTemplateType.Group || templateType === CellTemplateType.GroupHeader) && (isCvGroup || (templateType = CellTemplateType.Cell, templContextProp = WjFlexGridCellTemplate._getTemplContextProp(templateType), templContext = col[templContextProp]))), templContext && (isTpl = !0, needCellValue && (cellValue = panel.getCellData(rowIndex, colIndex, !1)), isTpl && (isUpdated = !0, measureAttr = cell.getAttribute(wjcGrid.FlexGrid._WJS_MEASURE), isMeasuring = measureAttr && measureAttr.toLowerCase() === 'true', isEdit && this._baseCf.updateCell(panel, rowIndex, colIndex, cell, rng, !0), cellContext = cell[templContextProp] || {}, isForeignCell = cellContext.column !== col || !cellContext.viewRef || cellContext.templateContextProperty !== templContextProp || cell.firstChild != cellContext.rootElement, isForeignCell && (isEdit ? (rootEl = cell.firstElementChild, rootEl && (cell.focus(), rootEl.style.display = 'none')) : cell.textContent = '', this._doDisposeCell(cell), templInstance = templContext._instantiateTemplate(cell), cellContext.column = col, cellContext.viewRef = templInstance.viewRef, cellContext.rootElement = templInstance.rootElement, cellContext.templateContextProperty = templContextProp, cell[templContextProp] = cellContext), cellInfo_1 = this._setViewRefVars(cellContext.viewRef, row, col, dataItem, cellValue, templContext.valuePaths), templContext.cellOverflow && (cell.style.overflow = templContext.cellOverflow), isMeasuring ? templContext.cdRef.detectChanges() : templContext.autoSizeRows && setTimeout(function()
{
var inputs,
i,
input,
inpSt,
inpFocusEh;
if (cellStamp === cell[DirectiveCellFactory._cellStampProp])
{
var cellHeight=cell.scrollHeight,
panelRows=panel.rows,
rowSpan=rng && rng.rowSpan || 1;
if (rowIndex < panelRows.length && panelRows[rowIndex].renderHeight * rowSpan < cellHeight - 1)
{
if (panelRows.defaultSize = cellHeight / rowSpan, isEdit)
{
grid.refresh();
grid.startEditing();
return
}
}
else if (isEdit && (inputs = cellContext && cellContext.rootElement && cellContext.rootElement.querySelectorAll('input'), inputs))
for (i = 0; i < inputs.length; i++)
if (input = inputs[i], inpSt = window.getComputedStyle(input), inpSt.display !== 'none' && inpSt.visibility === 'visible')
{
inpFocusEh = function()
{
input.removeEventListener('focus', inpFocusEh);
setTimeout(function()
{
self._editChar && (input.value = self._editChar, self._editChar = null, wjcCore.setSelectionRange(input, input.value.length), input.dispatchEvent(self._evtInput))
}, 0)
};
input.addEventListener('focus', inpFocusEh);
input.focus();
break
}
}
}, 0), isEdit ? (self._cellEditorVars = cellInfo_1.localVars, editEndingEH = function(s, e)
{
var activeElement,
_i,
bindNames_1,
curName,
dropDowns;
if (grid.cellEditEnding.removeHandler(editEndingEH), e.stayInEditMode || (activeElement = wjcCore.getActiveElement(), activeElement && activeElement.dispatchEvent(self._evtBlur), cell.focus()), !(e.cancel || e.stayInEditMode))
{
e.cancel = !0;
var cellVar=cellInfo_1.localVars,
newVal=cellVar.value,
bindNames=Object.getOwnPropertyNames(cellInfo_1.bindings);
for (panel.grid.setCellData(rowIndex, colIndex, newVal), _i = 0, bindNames_1 = bindNames; _i < bindNames_1.length; _i++)
curName = bindNames_1[_i],
cellInfo_1.bindings[curName].setValue(cellVar, cellInfo_1.localVars.values[curName])
}
dropDowns = cell.querySelectorAll('.wj-dropdown');
[].forEach.call(dropDowns, function(el)
{
var ctrl=wjcCore.Control.getControl(el);
ctrl && tryGetModuleWijmoInput() && ctrl instanceof tryGetModuleWijmoInput().DropDown && (ctrl.isDroppedDown = !1)
})
}, grid.cellEditEnding.addHandler(editEndingEH), grid.cellEditEnded.addHandler(function()
{
self._cellEditorVars = null
})) : this._baseCf.updateCell(panel, rowIndex, colIndex, cell, rng, !1)))));
isUpdated || (this._doDisposeCell(cell), this._baseCf.updateCell(panel, rowIndex, colIndex, cell, rng))
}, DirectiveCellFactory.prototype.getEditorValue = function(g)
{
return this._cellEditorVars ? this._cellEditorVars.value : _super.prototype.getEditorValue.call(this, g)
}, DirectiveCellFactory.prototype.disposeCell = function(cell)
{
this._doDisposeCell(cell)
}, DirectiveCellFactory.prototype._doDisposeCell = function(cell)
{
for (var templContextProp, cellContext, templateOwner, templateContext, viewIdx, ttm=DirectiveCellFactory._templateTypes, i=0; i < ttm.length; i++)
templContextProp = WjFlexGridCellTemplate._getTemplContextProp(CellTemplateType[ttm[i]]),
cellContext = cell[templContextProp],
cellContext && cellContext.viewRef && (templateOwner = cellContext.column || this.grid, templateContext = templateOwner[templContextProp], templateContext && (viewIdx = templateContext.viewContainerRef.indexOf(cellContext.viewRef), viewIdx > -1 && templateContext.viewContainerRef.remove(viewIdx)), cellContext.viewRef = null, cellContext.rootElement = null, cellContext.column = null, cellContext.templateContextProperty = null, cell[templContextProp] = null)
}, DirectiveCellFactory.prototype._setViewRefVars = function(viewRef, row, col, dataItem, cellValue, valuePaths)
{
var pathNames,
_i,
pathNames_1,
pName,
binding;
viewRef.context.row = row;
viewRef.context.col = col;
viewRef.context.item = dataItem;
var values={},
cellCtx={
row: row, col: col, item: dataItem, value: cellValue, values: values
},
bindings={},
ret={
localVars: cellCtx, bindings: bindings
};
if (valuePaths)
for (pathNames = Object.getOwnPropertyNames(valuePaths), _i = 0, pathNames_1 = pathNames; _i < pathNames_1.length; _i++)
pName = pathNames_1[_i],
binding = new wjcCore.Binding(valuePaths[pName]),
bindings[pName] = binding,
values[pName] = binding.getValue(cellCtx);
return viewRef.context.cell = cellCtx, ret
}, DirectiveCellFactory._cellStampProp = '__wjCellStamp', DirectiveCellFactory
}(wjcGrid.CellFactory);
moduleExports = [WjFlexGrid, WjFlexGridColumn, WjFlexGridCellTemplate];
WjGridModule = function()
{
function WjGridModule(){}
return __decorate([core_1.NgModule({
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
})], WjGridModule)
}();
exports_1("WjGridModule", WjGridModule)
}
}
})