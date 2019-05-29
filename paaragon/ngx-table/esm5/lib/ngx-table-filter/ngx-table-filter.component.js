/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
var NgxTableFilterComponent = /** @class */ (function () {
    function NgxTableFilterComponent() {
        this.faFilter = faFilter;
        this.sub = null;
        this.filters = {};
        this.errors = {};
        this.filter = new EventEmitter();
        this.debouncer = new Subject();
    }
    Object.defineProperty(NgxTableFilterComponent.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this.configBK;
        },
        set: /**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            this.configBK = config;
            this.buildPlaceholders();
            this.subscribeDebounce();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxTableFilterComponent.prototype, "headers", {
        get: /**
         * @return {?}
         */
        function () {
            return this.headersBK;
        },
        set: /**
         * @param {?} headers
         * @return {?}
         */
        function (headers) {
            this.headersBK = headers;
            this.initFilters();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxTableFilterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    NgxTableFilterComponent.prototype.onFilter = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var f = {};
        for (var attr in this.filters) {
            if (this.filters[attr].value) {
                f[attr] = this.filters[attr];
            }
        }
        if (!this.validateFilters(f)) {
            return;
        }
        this.debouncer.next(f);
    };
    /**
     * @param {?} header
     * @return {?}
     */
    NgxTableFilterComponent.prototype.hasValidationError = /**
     * @param {?} header
     * @return {?}
     */
    function (header) {
        return this.errors && this.errors[header] && this.errors[header].error;
    };
    /**
     * @return {?}
     */
    NgxTableFilterComponent.prototype.cleanFilters = /**
     * @return {?}
     */
    function () {
        for (var attr in this.filters) {
            if (this.filters[attr]) {
                this.filters[attr].value = null;
            }
        }
        this.onFilter();
    };
    /**
     * @private
     * @param {?} f
     * @return {?}
     */
    NgxTableFilterComponent.prototype.validateFilters = /**
     * @private
     * @param {?} f
     * @return {?}
     */
    function (f) {
        this.errors = {};
        /** @type {?} */
        var validations = this.config.filter.validations;
        if (Object.keys(validations).length === 0) {
            return true;
        }
        for (var attr in f) {
            if (!validations[attr]) {
                continue;
            }
            /** @type {?} */
            var text = f[attr].value;
            /** @type {?} */
            var regex = new RegExp(validations[attr].regex);
            if (!regex.test(text)) {
                this.errors[attr] = {
                    error: true,
                    errorMsg: validations[attr].errorMsg
                };
                return false;
            }
        }
        return true;
    };
    /**
     * @private
     * @return {?}
     */
    NgxTableFilterComponent.prototype.initFilters = /**
     * @private
     * @return {?}
     */
    function () {
        var e_1, _a;
        if (this.filters && Object.keys(this.filters).length > 0) {
            return;
        }
        try {
            for (var _b = tslib_1.__values(this.headers), _c = _b.next(); !_c.done; _c = _b.next()) {
                var header = _c.value;
                this.filters[header] = {
                    operator: null,
                    value: null
                };
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgxTableFilterComponent.prototype.subscribeDebounce = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.sub) {
            this.sub.unsubscribe();
        }
        this.sub = this.debouncer
            .pipe(debounceTime(this.config.filter.debounceTime))
            .subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            console.log(val);
            _this.filter.emit(val);
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NgxTableFilterComponent.prototype.buildPlaceholders = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.config.placeholders) {
            this.placeholders = this.config.placeholders;
        }
        else {
            this.placeholders = this.headers;
        }
    };
    NgxTableFilterComponent.decorators = [
        { type: Component, args: [{
                    selector: '[ngx-table-filter]',
                    template: "<th class=\"first-cell\">\n    <fa-icon [icon]=\"faFilter\"></fa-icon>\n</th>\n<th *ngFor=\"let header of headers; let i = index\">\n  <input class=\"form-control\" [ngClass]=\"{'is-invalid': hasValidationError(header)}\" placeholder=\"{{placeholders[i]}}\"\n    (keyup)=\"onFilter()\" [(ngModel)]=\"filters[header].value\">\n    <p class=\"validation-error text-danger\" *ngIf=\"errors[header]?.error\">{{errors[header]?.errorMsg}}</p>\n</th>\n<th><button type=\"button\" class=\"btn btn-warning\" (click)=\"cleanFilters()\">Clean filters</button></th>\n",
                    styles: ["th{vertical-align:top!important}th .validation-error{margin-top:.75rem;margin-bottom:0;font-size:.75rem}th button{font-size:.75rem;width:100%}.first-cell{font-size:.75rem}.first-cell fa-icon{margin-top:.75rem}input{font-size:.75rem}"]
                }] }
    ];
    /** @nocollapse */
    NgxTableFilterComponent.ctorParameters = function () { return []; };
    NgxTableFilterComponent.propDecorators = {
        config: [{ type: Input }],
        headers: [{ type: Input }],
        filter: [{ type: Output }]
    };
    return NgxTableFilterComponent;
}());
export { NgxTableFilterComponent };
if (false) {
    /** @type {?} */
    NgxTableFilterComponent.prototype.faFilter;
    /** @type {?} */
    NgxTableFilterComponent.prototype.sub;
    /** @type {?} */
    NgxTableFilterComponent.prototype.filters;
    /** @type {?} */
    NgxTableFilterComponent.prototype.errors;
    /** @type {?} */
    NgxTableFilterComponent.prototype.configBK;
    /** @type {?} */
    NgxTableFilterComponent.prototype.placeholders;
    /**
     * @type {?}
     * @private
     */
    NgxTableFilterComponent.prototype.headersBK;
    /** @type {?} */
    NgxTableFilterComponent.prototype.filter;
    /** @type {?} */
    NgxTableFilterComponent.prototype.debouncer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRhYmxlLWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGFhcmFnb24vbmd4LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL25neC10YWJsZS1maWx0ZXIvbmd4LXRhYmxlLWZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUU3RDtJQTBDRTtRQW5DQSxhQUFRLEdBQUcsUUFBUSxDQUFDO1FBRXBCLFFBQUcsR0FBRyxJQUFJLENBQUM7UUFFWCxZQUFPLEdBQW1CLEVBQUUsQ0FBQztRQUM3QixXQUFNLEdBQTRELEVBQUUsQ0FBQztRQTJCM0QsV0FBTSxHQUFpQyxJQUFJLFlBQVksRUFBa0IsQ0FBQztRQUNwRixjQUFTLEdBQTRCLElBQUksT0FBTyxFQUFrQixDQUFDO0lBR25FLENBQUM7SUEzQkQsc0JBQ0ksMkNBQU07Ozs7UUFNVjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7OztRQVRELFVBQ1csTUFBc0I7WUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7WUFDdkIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFRRCxzQkFDSSw0Q0FBTzs7OztRQUtYO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7Ozs7O1FBUkQsVUFDWSxPQUF3QjtZQUNsQyxJQUFJLENBQUMsU0FB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ZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTmd4VGFibGVIZWFkZXJzLCBOZ3hUYWJsZUZpbHRlciwgTmd4VGFibGVDb25maWcsIE5neFRhYmxlUGxhY2Vob2xkZXJzIH0gZnJvbSAnLi4vbmd4LXRhYmxlLnR5cGVzJztcbmltcG9ydCB7IGZhRmlsdGVyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW25neC10YWJsZS1maWx0ZXJdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25neC10YWJsZS1maWx0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZ3gtdGFibGUtZmlsdGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmd4VGFibGVGaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGZhRmlsdGVyID0gZmFGaWx0ZXI7XG5cbiAgc3ViID0gbnVsbDtcblxuICBmaWx0ZXJzOiBOZ3hUYWJsZUZpbHRlciA9IHt9O1xuICBlcnJvcnM6IHsgW2tleTogc3RyaW5nXTogeyBlcnJvcjogYm9vbGVhbiwgZXJyb3JNc2c6IHN0cmluZyB9IH0gPSB7fTtcblxuICBjb25maWdCSzogTmd4VGFibGVDb25maWc7XG4gIHBsYWNlaG9sZGVyczogTmd4VGFibGVQbGFjZWhvbGRlcnM7XG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcoY29uZmlnOiBOZ3hUYWJsZUNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnQksgPSBjb25maWc7XG4gICAgdGhpcy5idWlsZFBsYWNlaG9sZGVycygpO1xuICAgIHRoaXMuc3Vic2NyaWJlRGVib3VuY2UoKTtcbiAgfVxuXG4gIGdldCBjb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnQks7XG4gIH1cblxuICBwcml2YXRlIGhlYWRlcnNCSztcblxuICBASW5wdXQoKVxuICBzZXQgaGVhZGVycyhoZWFkZXJzOiBOZ3hUYWJsZUhlYWRlcnMpIHtcbiAgICB0aGlzLmhlYWRlcnNCSyA9IGhlYWRlcnM7XG4gICAgdGhpcy5pbml0RmlsdGVycygpO1xuICB9XG5cbiAgZ2V0IGhlYWRlcnMoKTogTmd4VGFibGVIZWFkZXJzIHtcbiAgICByZXR1cm4gdGhpcy5oZWFkZXJzQks7XG4gIH1cblxuICBAT3V0cHV0KCkgZmlsdGVyOiBFdmVudEVtaXR0ZXI8Tmd4VGFibGVGaWx0ZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ3hUYWJsZUZpbHRlcj4oKTtcbiAgZGVib3VuY2VyOiBTdWJqZWN0PE5neFRhYmxlRmlsdGVyPiA9IG5ldyBTdWJqZWN0PE5neFRhYmxlRmlsdGVyPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvbkZpbHRlcigpIHtcbiAgICBjb25zdCBmOiBOZ3hUYWJsZUZpbHRlciA9IHt9O1xuICAgIGZvciAoY29uc3QgYXR0ciBpbiB0aGlzLmZpbHRlcnMpIHtcbiAgICAgIGlmICh0aGlzLmZpbHRlcnNbYXR0cl0udmFsdWUpIHtcbiAgICAgICAgZlthdHRyXSA9IHRoaXMuZmlsdGVyc1thdHRyXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aGlzLnZhbGlkYXRlRmlsdGVycyhmKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRlYm91bmNlci5uZXh0KGYpO1xuICB9XG5cbiAgaGFzVmFsaWRhdGlvbkVycm9yKGhlYWRlcjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJyb3JzICYmIHRoaXMuZXJyb3JzW2hlYWRlcl0gJiYgdGhpcy5lcnJvcnNbaGVhZGVyXS5lcnJvcjtcbiAgfVxuXG4gIGNsZWFuRmlsdGVycygpIHtcbiAgICBmb3IgKGNvbnN0IGF0dHIgaW4gdGhpcy5maWx0ZXJzKSB7XG4gICAgICBpZiAodGhpcy5maWx0ZXJzW2F0dHJdKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyc1thdHRyXS52YWx1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMub25GaWx0ZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgdmFsaWRhdGVGaWx0ZXJzKGY6IE5neFRhYmxlRmlsdGVyKTogYm9vbGVhbiB7XG5cbiAgICB0aGlzLmVycm9ycyA9IHt9O1xuICAgIGNvbnN0IHZhbGlkYXRpb25zID0gdGhpcy5jb25maWcuZmlsdGVyLnZhbGlkYXRpb25zO1xuXG4gICAgaWYgKE9iamVjdC5rZXlzKHZhbGlkYXRpb25zKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgYXR0ciBpbiBmKSB7XG4gICAgICBpZiAoIXZhbGlkYXRpb25zW2F0dHJdKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgdGV4dCA9IGZbYXR0cl0udmFsdWU7XG5cbiAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCh2YWxpZGF0aW9uc1thdHRyXS5yZWdleCk7XG5cbiAgICAgIGlmICghcmVnZXgudGVzdCh0ZXh0KSkge1xuICAgICAgICB0aGlzLmVycm9yc1thdHRyXSA9IHtcbiAgICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgICBlcnJvck1zZzogdmFsaWRhdGlvbnNbYXR0cl0uZXJyb3JNc2dcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdEZpbHRlcnMoKSB7XG4gICAgaWYgKHRoaXMuZmlsdGVycyAmJiBPYmplY3Qua2V5cyh0aGlzLmZpbHRlcnMpLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBoZWFkZXIgb2YgdGhpcy5oZWFkZXJzKSB7XG4gICAgICB0aGlzLmZpbHRlcnNbaGVhZGVyXSA9IHtcbiAgICAgICAgb3BlcmF0b3I6IG51bGwsXG4gICAgICAgIHZhbHVlOiBudWxsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlRGVib3VuY2UoKSB7XG4gICAgaWYgKHRoaXMuc3ViKSB7XG4gICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICB0aGlzLnN1YiA9IHRoaXMuZGVib3VuY2VyXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUodGhpcy5jb25maWcuZmlsdGVyLmRlYm91bmNlVGltZSkpXG4gICAgICAuc3Vic2NyaWJlKCh2YWwpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codmFsKTtcbiAgICAgICAgdGhpcy5maWx0ZXIuZW1pdCh2YWwpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkUGxhY2Vob2xkZXJzKCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5wbGFjZWhvbGRlcnMpIHtcbiAgICAgIHRoaXMucGxhY2Vob2xkZXJzID0gdGhpcy5jb25maWcucGxhY2Vob2xkZXJzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBsYWNlaG9sZGVycyA9IHRoaXMuaGVhZGVycztcbiAgICB9XG4gIH1cblxufVxuIl19