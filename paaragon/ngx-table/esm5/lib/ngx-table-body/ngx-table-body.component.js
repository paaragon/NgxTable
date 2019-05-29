/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var NgxTableBodyComponent = /** @class */ (function () {
    function NgxTableBodyComponent() {
        this.data = [];
    }
    /**
     * @return {?}
     */
    NgxTableBodyComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    NgxTableBodyComponent.prototype.showLastColumn = /**
     * @return {?}
     */
    function () {
        return this.config.create.enable || this.config.filter.enable;
    };
    NgxTableBodyComponent.decorators = [
        { type: Component, args: [{
                    selector: '[ngx-table-body]',
                    template: "<tr *ngFor=\"let row of data; let i = index\">\n  <td class=\"first-cell\">{{i + 1}}</td>\n  <td *ngFor=\"let header of headers\">{{row[header]}}</td>\n  <td *ngIf=\"showLastColumn()\"></td>\n</tr>\n",
                    styles: ["td{vertical-align:middle!important}.first-cell{font-size:.75rem}"]
                }] }
    ];
    /** @nocollapse */
    NgxTableBodyComponent.ctorParameters = function () { return []; };
    NgxTableBodyComponent.propDecorators = {
        config: [{ type: Input }],
        data: [{ type: Input }],
        headers: [{ type: Input }]
    };
    return NgxTableBodyComponent;
}());
export { NgxTableBodyComponent };
if (false) {
    /** @type {?} */
    NgxTableBodyComponent.prototype.config;
    /** @type {?} */
    NgxTableBodyComponent.prototype.data;
    /** @type {?} */
    NgxTableBodyComponent.prototype.headers;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRhYmxlLWJvZHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBhYXJhZ29uL25neC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtdGFibGUtYm9keS9uZ3gtdGFibGUtYm9keS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3pEO0lBZ0JFO1FBTEEsU0FBSSxHQUFVLEVBQUUsQ0FBQztJQUtELENBQUM7Ozs7SUFFakIsd0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7OztJQUVELDhDQUFjOzs7SUFBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNoRSxDQUFDOztnQkF2QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLG1OQUE4Qzs7aUJBRS9DOzs7Ozt5QkFHRSxLQUFLO3VCQUdMLEtBQUs7MEJBR0wsS0FBSzs7SUFXUiw0QkFBQztDQUFBLEFBeEJELElBd0JDO1NBbkJZLHFCQUFxQjs7O0lBRWhDLHVDQUN1Qjs7SUFFdkIscUNBQ2lCOztJQUVqQix3Q0FDeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neFRhYmxlSGVhZGVycywgTmd4VGFibGVDb25maWcgfSBmcm9tICcuLi9uZ3gtdGFibGUudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbmd4LXRhYmxlLWJvZHldJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25neC10YWJsZS1ib2R5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4LXRhYmxlLWJvZHkuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hUYWJsZUJvZHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpXG4gIGNvbmZpZzogTmd4VGFibGVDb25maWc7XG5cbiAgQElucHV0KClcbiAgZGF0YTogYW55W10gPSBbXTtcblxuICBASW5wdXQoKVxuICBoZWFkZXJzOiBOZ3hUYWJsZUhlYWRlcnM7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHNob3dMYXN0Q29sdW1uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5jcmVhdGUuZW5hYmxlIHx8IHRoaXMuY29uZmlnLmZpbHRlci5lbmFibGU7XG4gIH1cbn1cbiJdfQ==