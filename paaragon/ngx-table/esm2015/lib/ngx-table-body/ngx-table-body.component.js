/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class NgxTableBodyComponent {
    constructor() {
        this.data = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    showLastColumn() {
        return this.config.create.enable || this.config.filter.enable;
    }
}
NgxTableBodyComponent.decorators = [
    { type: Component, args: [{
                selector: '[ngx-table-body]',
                template: "<tr *ngFor=\"let row of data; let i = index\">\n  <td class=\"first-cell\">{{i + 1}}</td>\n  <td *ngFor=\"let header of headers\">{{row[header]}}</td>\n  <td *ngIf=\"showLastColumn()\"></td>\n</tr>\n",
                styles: ["td{vertical-align:middle!important}.first-cell{font-size:.75rem}"]
            }] }
];
/** @nocollapse */
NgxTableBodyComponent.ctorParameters = () => [];
NgxTableBodyComponent.propDecorators = {
    config: [{ type: Input }],
    data: [{ type: Input }],
    headers: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NgxTableBodyComponent.prototype.config;
    /** @type {?} */
    NgxTableBodyComponent.prototype.data;
    /** @type {?} */
    NgxTableBodyComponent.prototype.headers;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRhYmxlLWJvZHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBhYXJhZ29uL25neC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtdGFibGUtYm9keS9uZ3gtdGFibGUtYm9keS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXpELE1BQU0sT0FBTyxxQkFBcUI7SUFXaEM7UUFMQSxTQUFJLEdBQVUsRUFBRSxDQUFDO0lBS0QsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDaEUsQ0FBQzs7O1lBdkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixtTkFBOEM7O2FBRS9DOzs7OztxQkFHRSxLQUFLO21CQUdMLEtBQUs7c0JBR0wsS0FBSzs7OztJQU5OLHVDQUN1Qjs7SUFFdkIscUNBQ2lCOztJQUVqQix3Q0FDeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neFRhYmxlSGVhZGVycywgTmd4VGFibGVDb25maWcgfSBmcm9tICcuLi9uZ3gtdGFibGUudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbmd4LXRhYmxlLWJvZHldJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25neC10YWJsZS1ib2R5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4LXRhYmxlLWJvZHkuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hUYWJsZUJvZHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpXG4gIGNvbmZpZzogTmd4VGFibGVDb25maWc7XG5cbiAgQElucHV0KClcbiAgZGF0YTogYW55W10gPSBbXTtcblxuICBASW5wdXQoKVxuICBoZWFkZXJzOiBOZ3hUYWJsZUhlYWRlcnM7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHNob3dMYXN0Q29sdW1uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5jcmVhdGUuZW5hYmxlIHx8IHRoaXMuY29uZmlnLmZpbHRlci5lbmFibGU7XG4gIH1cbn1cbiJdfQ==