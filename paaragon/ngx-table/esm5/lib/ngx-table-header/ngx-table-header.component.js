/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faHashtag, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
var NgxTableHeaderComponent = /** @class */ (function () {
    function NgxTableHeaderComponent() {
        this.faHashtag = faHashtag;
        this.faCaretDown = faCaretDown;
        this.faCaretUp = faCaretUp;
        this.headers = [];
        this.order = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NgxTableHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.config) {
        }
    };
    /**
     * @param {?} header
     * @return {?}
     */
    NgxTableHeaderComponent.prototype.onOrder = /**
     * @param {?} header
     * @return {?}
     */
    function (header) {
        if (!header || !this.config.order.enable) {
            return;
        }
        if (this.order && this.orderObj.field === header && this.orderObj.direction === 1) {
            this.orderObj = {
                field: header,
                direction: -1
            };
        }
        else if (this.order && this.orderObj.field === header && this.orderObj.direction === -1) {
            this.order = null;
        }
        else {
            this.orderObj = {
                field: header,
                direction: 1
            };
        }
        this.order.emit(this.orderObj);
    };
    /**
     * @param {?} header
     * @return {?}
     */
    NgxTableHeaderComponent.prototype.isAsc = /**
     * @param {?} header
     * @return {?}
     */
    function (header) {
        return this.order && this.orderObj.field === header && this.orderObj.direction === 1;
    };
    /**
     * @param {?} header
     * @return {?}
     */
    NgxTableHeaderComponent.prototype.isDesc = /**
     * @param {?} header
     * @return {?}
     */
    function (header) {
        return this.order && this.orderObj.field === header && this.orderObj.direction === -1;
    };
    /**
     * @return {?}
     */
    NgxTableHeaderComponent.prototype.showLastColumn = /**
     * @return {?}
     */
    function () {
        return this.config.create.enable || this.config.filter.enable;
    };
    NgxTableHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: '[ngx-table-header]',
                    template: "<th class=\"first-cell\">\n    <fa-icon [icon]=\"faHashtag\"></fa-icon>\n</th>\n<ng-container *ngIf=\"!config.order.enable\">\n  <th *ngFor=\"let header of humanHeaders\">\n    {{header}}\n  </th>\n</ng-container>\n<ng-container *ngIf=\"config.order.enable\">\n  <th #orderableHeader *ngFor=\"let header of humanHeaders; let i = index\" (click)=\"onOrder(headers[i])\" class=\"orderable\">\n    {{humanHeaders[i]}}\n    <fa-icon [icon]=\"faCaretUp\" *ngIf=\"isAsc(headers[i])\"></fa-icon>\n    <fa-icon [icon]=\"faCaretDown\" *ngIf=\"isDesc(headers[i])\"></fa-icon>\n  </th>\n</ng-container>\n<th *ngIf=\"showLastColumn()\"></th>\n",
                    styles: ["th{vertical-align:middle!important}th.orderable{cursor:pointer}th fa-icon{font-size:.7rem}"]
                }] }
    ];
    /** @nocollapse */
    NgxTableHeaderComponent.ctorParameters = function () { return []; };
    NgxTableHeaderComponent.propDecorators = {
        headers: [{ type: Input }],
        humanHeaders: [{ type: Input }],
        config: [{ type: Input }],
        order: [{ type: Output }]
    };
    return NgxTableHeaderComponent;
}());
export { NgxTableHeaderComponent };
if (false) {
    /** @type {?} */
    NgxTableHeaderComponent.prototype.orderObj;
    /** @type {?} */
    NgxTableHeaderComponent.prototype.faHashtag;
    /** @type {?} */
    NgxTableHeaderComponent.prototype.faCaretDown;
    /** @type {?} */
    NgxTableHeaderComponent.prototype.faCaretUp;
    /** @type {?} */
    NgxTableHeaderComponent.prototype.headers;
    /** @type {?} */
    NgxTableHeaderComponent.prototype.humanHeaders;
    /** @type {?} */
    NgxTableHeaderComponent.prototype.config;
    /** @type {?} */
    NgxTableHeaderComponent.prototype.order;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRhYmxlLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGFhcmFnb24vbmd4LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL25neC10YWJsZS1oZWFkZXIvbmd4LXRhYmxlLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFdEY7SUFxQkU7UUFaQSxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLGdCQUFXLEdBQUcsV0FBVyxDQUFDO1FBQzFCLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFFYixZQUFPLEdBQW9CLEVBQUUsQ0FBQztRQU03QixVQUFLLEdBQWdDLElBQUksWUFBWSxFQUFpQixDQUFDO0lBRWpFLENBQUM7Ozs7SUFFakIsMENBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1NBRWhCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCx5Q0FBTzs7OztJQUFQLFVBQVEsTUFBYztRQUNwQixJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ3hDLE9BQU87U0FDUjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEtBQUssQ0FBQyxFQUFFO1lBQ2pGLElBQUksQ0FBQyxRQUFRLEdBQUc7Z0JBQ2QsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsU0FBUyxFQUFFLENBQUMsQ0FBQzthQUNkLENBQUM7U0FDSDthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDekYsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDbkI7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLEdBQUc7Z0JBQ2QsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsU0FBUyxFQUFFLENBQUM7YUFDYixDQUFDO1NBQ0g7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCx1Q0FBSzs7OztJQUFMLFVBQU0sTUFBYztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxLQUFLLENBQUMsQ0FBQztJQUN2RixDQUFDOzs7OztJQUVELHdDQUFNOzs7O0lBQU4sVUFBTyxNQUFjO1FBQ25CLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDeEYsQ0FBQzs7OztJQUVELGdEQUFjOzs7SUFBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNoRSxDQUFDOztnQkE1REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLG1vQkFBZ0Q7O2lCQUVqRDs7Ozs7MEJBU0UsS0FBSzsrQkFFTCxLQUFLO3lCQUVMLEtBQUs7d0JBRUwsTUFBTTs7SUEwQ1QsOEJBQUM7Q0FBQSxBQTdERCxJQTZEQztTQXhEWSx1QkFBdUI7OztJQUVsQywyQ0FBd0I7O0lBRXhCLDRDQUFzQjs7SUFDdEIsOENBQTBCOztJQUMxQiw0Q0FBc0I7O0lBRXRCLDBDQUF1Qzs7SUFFdkMsK0NBQXVDOztJQUV2Qyx5Q0FBZ0M7O0lBRWhDLHdDQUFpRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neFRhYmxlSGVhZGVycywgTmd4VGFibGVPcmRlciwgTmd4VGFibGVDb25maWcgfSBmcm9tICcuLi9uZ3gtdGFibGUudHlwZXMnO1xuaW1wb3J0IHsgZmFIYXNodGFnLCBmYUNhcmV0RG93biwgZmFDYXJldFVwIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW25neC10YWJsZS1oZWFkZXJdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25neC10YWJsZS1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZ3gtdGFibGUtaGVhZGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmd4VGFibGVIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIG9yZGVyT2JqOiBOZ3hUYWJsZU9yZGVyO1xuXG4gIGZhSGFzaHRhZyA9IGZhSGFzaHRhZztcbiAgZmFDYXJldERvd24gPSBmYUNhcmV0RG93bjtcbiAgZmFDYXJldFVwID0gZmFDYXJldFVwO1xuXG4gIEBJbnB1dCgpIGhlYWRlcnM6IE5neFRhYmxlSGVhZGVycyA9IFtdO1xuXG4gIEBJbnB1dCgpIGh1bWFuSGVhZGVyczogTmd4VGFibGVIZWFkZXJzO1xuXG4gIEBJbnB1dCgpIGNvbmZpZzogTmd4VGFibGVDb25maWc7XG5cbiAgQE91dHB1dCgpIG9yZGVyOiBFdmVudEVtaXR0ZXI8Tmd4VGFibGVPcmRlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPE5neFRhYmxlT3JkZXI+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5jb25maWcpIHtcblxuICAgIH1cbiAgfVxuXG4gIG9uT3JkZXIoaGVhZGVyOiBzdHJpbmcpIHtcbiAgICBpZiAoIWhlYWRlciB8fCAhdGhpcy5jb25maWcub3JkZXIuZW5hYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLm9yZGVyICYmIHRoaXMub3JkZXJPYmouZmllbGQgPT09IGhlYWRlciAmJiB0aGlzLm9yZGVyT2JqLmRpcmVjdGlvbiA9PT0gMSkge1xuICAgICAgdGhpcy5vcmRlck9iaiA9IHtcbiAgICAgICAgZmllbGQ6IGhlYWRlcixcbiAgICAgICAgZGlyZWN0aW9uOiAtMVxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3JkZXIgJiYgdGhpcy5vcmRlck9iai5maWVsZCA9PT0gaGVhZGVyICYmIHRoaXMub3JkZXJPYmouZGlyZWN0aW9uID09PSAtMSkge1xuICAgICAgdGhpcy5vcmRlciA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3JkZXJPYmogPSB7XG4gICAgICAgIGZpZWxkOiBoZWFkZXIsXG4gICAgICAgIGRpcmVjdGlvbjogMVxuICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLm9yZGVyLmVtaXQodGhpcy5vcmRlck9iaik7XG4gIH1cblxuICBpc0FzYyhoZWFkZXI6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLm9yZGVyICYmIHRoaXMub3JkZXJPYmouZmllbGQgPT09IGhlYWRlciAmJiB0aGlzLm9yZGVyT2JqLmRpcmVjdGlvbiA9PT0gMTtcbiAgfVxuXG4gIGlzRGVzYyhoZWFkZXI6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLm9yZGVyICYmIHRoaXMub3JkZXJPYmouZmllbGQgPT09IGhlYWRlciAmJiB0aGlzLm9yZGVyT2JqLmRpcmVjdGlvbiA9PT0gLTE7XG4gIH1cblxuICBzaG93TGFzdENvbHVtbigpIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuY3JlYXRlLmVuYWJsZSB8fCB0aGlzLmNvbmZpZy5maWx0ZXIuZW5hYmxlO1xuICB9XG59XG4iXX0=