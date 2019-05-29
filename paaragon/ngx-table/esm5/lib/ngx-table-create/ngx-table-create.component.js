/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
var NgxTableCreateComponent = /** @class */ (function () {
    function NgxTableCreateComponent() {
        this.faPlus = faPlus;
        this.errors = {};
        this.newObj = {};
        this.buttonEnable = true;
        this.create = new EventEmitter();
    }
    Object.defineProperty(NgxTableCreateComponent.prototype, "config", {
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
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxTableCreateComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    NgxTableCreateComponent.prototype.validate = /**
     * @return {?}
     */
    function () {
        this.errors = {};
        this.buttonEnable = true;
        if (!this.config.create.validations) {
            return true;
        }
        for (var attr in this.newObj) {
            if (!this.newObj[attr]) {
                continue;
            }
            /** @type {?} */
            var validation = this.config.create.validations[attr];
            if (!validation) {
                continue;
            }
            /** @type {?} */
            var reg = new RegExp(validation.regex);
            if (!reg.test(this.newObj[attr])) {
                this.errors[attr] = {
                    error: true,
                    errorMsg: validation.errorMsg
                };
                this.buttonEnable = false;
                return false;
            }
        }
        return true;
    };
    /**
     * @param {?} header
     * @return {?}
     */
    NgxTableCreateComponent.prototype.hasValidationError = /**
     * @param {?} header
     * @return {?}
     */
    function (header) {
        return this.errors && this.errors[header] && this.errors[header].error;
    };
    /**
     * @return {?}
     */
    NgxTableCreateComponent.prototype.onCreate = /**
     * @return {?}
     */
    function () {
        if (!this.validate()) {
            return;
        }
        this.create.emit(this.newObj);
        this.newObj = {};
    };
    /**
     * @private
     * @return {?}
     */
    NgxTableCreateComponent.prototype.buildPlaceholders = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.config.placeholders) {
            this.placeholders = this.config.placeholders.map((/**
             * @param {?} p
             * @return {?}
             */
            function (p) { return "New " + p; }));
        }
        else {
            this.placeholders = this.headers.map((/**
             * @param {?} h
             * @return {?}
             */
            function (h) { return "New " + h; }));
        }
    };
    NgxTableCreateComponent.decorators = [
        { type: Component, args: [{
                    selector: '[ngx-table-create]',
                    template: "<th class=\"first-cell\">\n    <fa-icon [icon]=\"faPlus\"></fa-icon>\n</th>\n<th *ngFor=\"let placeholder of placeholders;let i = index\">\n  <input class=\"form-control\" [ngClass]=\"{'is-invalid': hasValidationError(headers[i])}\" placeholder=\"{{placeholder}}\"\n    (keyup)=\"validate()\" [(ngModel)]=\"newObj[headers[i]]\">\n    <p class=\"validation-error text-danger\" *ngIf=\"hasValidationError(headers[i])\">{{errors[headers[i]]?.errorMsg}}</p>\n</th>\n<th><button type=\"button\" class=\"btn btn-success\" (click)=\"onCreate()\" [disabled]=\"!buttonEnable\">Create</button></th>",
                    styles: ["th{vertical-align:top!important}th .validation-error{margin-top:.75rem;margin-bottom:0;font-size:.75rem}th button{font-size:.75rem;width:100%}.first-cell{font-size:.75rem}.first-cell fa-icon{margin-top:.75rem}input{font-size:.75rem}"]
                }] }
    ];
    /** @nocollapse */
    NgxTableCreateComponent.ctorParameters = function () { return []; };
    NgxTableCreateComponent.propDecorators = {
        headers: [{ type: Input }],
        config: [{ type: Input }],
        create: [{ type: Output }]
    };
    return NgxTableCreateComponent;
}());
export { NgxTableCreateComponent };
if (false) {
    /** @type {?} */
    NgxTableCreateComponent.prototype.faPlus;
    /** @type {?} */
    NgxTableCreateComponent.prototype.errors;
    /** @type {?} */
    NgxTableCreateComponent.prototype.newObj;
    /** @type {?} */
    NgxTableCreateComponent.prototype.buttonEnable;
    /** @type {?} */
    NgxTableCreateComponent.prototype.headers;
    /** @type {?} */
    NgxTableCreateComponent.prototype.placeholders;
    /** @type {?} */
    NgxTableCreateComponent.prototype.configBK;
    /** @type {?} */
    NgxTableCreateComponent.prototype.create;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRhYmxlLWNyZWF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGFhcmFnb24vbmd4LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL25neC10YWJsZS1jcmVhdGUvbmd4LXRhYmxlLWNyZWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0UsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRTNEO0lBZ0NFO1FBekJBLFdBQU0sR0FBRyxNQUFNLENBQUM7UUFFaEIsV0FBTSxHQUE0RCxFQUFFLENBQUM7UUFDckUsV0FBTSxHQUFnQixFQUFFLENBQUM7UUFFekIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFrQnBCLFdBQU0sR0FBOEIsSUFBSSxZQUFZLEVBQWUsQ0FBQztJQUVwRCxDQUFDO0lBYmpCLHNCQUNJLDJDQUFNOzs7O1FBS1Y7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7Ozs7UUFSRCxVQUNXLE1BQXNCO1lBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzNCLENBQUM7OztPQUFBOzs7O0lBV0QsMENBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7OztJQUVELDBDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7WUFDbkMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELEtBQUssSUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdEIsU0FBUzthQUNWOztnQkFDSyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUN2RCxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNmLFNBQVM7YUFDVjs7Z0JBQ0ssR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHO29CQUNsQixLQUFLLEVBQUUsSUFBSTtvQkFDWCxRQUFRLEVBQUUsVUFBVSxDQUFDLFFBQVE7aUJBQzlCLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7Z0JBQzFCLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFRCxvREFBa0I7Ozs7SUFBbEIsVUFBbUIsTUFBYztRQUMvQixPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUN6RSxDQUFDOzs7O0lBRUQsMENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNwQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFTyxtREFBaUI7Ozs7SUFBekI7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFO1lBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsU0FBTyxDQUFHLEVBQVYsQ0FBVSxFQUFDLENBQUM7U0FDbkU7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxTQUFPLENBQUcsRUFBVixDQUFVLEVBQUMsQ0FBQztTQUN2RDtJQUNILENBQUM7O2dCQW5GRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsd2xCQUFnRDs7aUJBRWpEOzs7OzswQkFVRSxLQUFLO3lCQUtMLEtBQUs7eUJBVUwsTUFBTTs7SUF3RFQsOEJBQUM7Q0FBQSxBQXJGRCxJQXFGQztTQWhGWSx1QkFBdUI7OztJQUVsQyx5Q0FBZ0I7O0lBRWhCLHlDQUFxRTs7SUFDckUseUNBQXlCOztJQUV6QiwrQ0FBb0I7O0lBRXBCLDBDQUFrQzs7SUFFbEMsK0NBQW1DOztJQUVuQywyQ0FBeUI7O0lBV3pCLHlDQUNvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neFRhYmxlQ29uZmlnLCBOZ3hUYWJsZVBsYWNlaG9sZGVycywgTmd4VGFibGVIZWFkZXJzLCBOZ3hUYWJsZU5ldyB9IGZyb20gJy4uL25neC10YWJsZS50eXBlcyc7XG5pbXBvcnQgeyBmYVBsdXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbmd4LXRhYmxlLWNyZWF0ZV0nLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4LXRhYmxlLWNyZWF0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25neC10YWJsZS1jcmVhdGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hUYWJsZUNyZWF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgZmFQbHVzID0gZmFQbHVzO1xuXG4gIGVycm9yczogeyBba2V5OiBzdHJpbmddOiB7IGVycm9yOiBib29sZWFuLCBlcnJvck1zZzogc3RyaW5nIH0gfSA9IHt9O1xuICBuZXdPYmo6IE5neFRhYmxlTmV3ID0ge307XG5cbiAgYnV0dG9uRW5hYmxlID0gdHJ1ZTtcblxuICBASW5wdXQoKSBoZWFkZXJzOiBOZ3hUYWJsZUhlYWRlcnM7XG5cbiAgcGxhY2Vob2xkZXJzOiBOZ3hUYWJsZVBsYWNlaG9sZGVycztcblxuICBjb25maWdCSzogTmd4VGFibGVDb25maWc7XG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcoY29uZmlnOiBOZ3hUYWJsZUNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnQksgPSBjb25maWc7XG4gICAgdGhpcy5idWlsZFBsYWNlaG9sZGVycygpO1xuICB9XG5cbiAgZ2V0IGNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWdCSztcbiAgfVxuXG4gIEBPdXRwdXQoKVxuICBjcmVhdGU6IEV2ZW50RW1pdHRlcjxOZ3hUYWJsZU5ldz4gPSBuZXcgRXZlbnRFbWl0dGVyPE5neFRhYmxlTmV3PigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICB2YWxpZGF0ZSgpIHtcbiAgICB0aGlzLmVycm9ycyA9IHt9O1xuICAgIHRoaXMuYnV0dG9uRW5hYmxlID0gdHJ1ZTtcbiAgICBpZiAoIXRoaXMuY29uZmlnLmNyZWF0ZS52YWxpZGF0aW9ucykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGZvciAoY29uc3QgYXR0ciBpbiB0aGlzLm5ld09iaikge1xuICAgICAgaWYgKCF0aGlzLm5ld09ialthdHRyXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZhbGlkYXRpb24gPSB0aGlzLmNvbmZpZy5jcmVhdGUudmFsaWRhdGlvbnNbYXR0cl07XG4gICAgICBpZiAoIXZhbGlkYXRpb24pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBjb25zdCByZWcgPSBuZXcgUmVnRXhwKHZhbGlkYXRpb24ucmVnZXgpO1xuICAgICAgaWYgKCFyZWcudGVzdCh0aGlzLm5ld09ialthdHRyXSkpIHtcbiAgICAgICAgdGhpcy5lcnJvcnNbYXR0cl0gPSB7XG4gICAgICAgICAgZXJyb3I6IHRydWUsXG4gICAgICAgICAgZXJyb3JNc2c6IHZhbGlkYXRpb24uZXJyb3JNc2dcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5idXR0b25FbmFibGUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGhhc1ZhbGlkYXRpb25FcnJvcihoZWFkZXI6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmVycm9ycyAmJiB0aGlzLmVycm9yc1toZWFkZXJdICYmIHRoaXMuZXJyb3JzW2hlYWRlcl0uZXJyb3I7XG4gIH1cblxuICBvbkNyZWF0ZSgpIHtcbiAgICBpZiAoIXRoaXMudmFsaWRhdGUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY3JlYXRlLmVtaXQodGhpcy5uZXdPYmopO1xuICAgIHRoaXMubmV3T2JqID0ge307XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkUGxhY2Vob2xkZXJzKCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5wbGFjZWhvbGRlcnMpIHtcbiAgICAgIHRoaXMucGxhY2Vob2xkZXJzID0gdGhpcy5jb25maWcucGxhY2Vob2xkZXJzLm1hcChwID0+IGBOZXcgJHtwfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBsYWNlaG9sZGVycyA9IHRoaXMuaGVhZGVycy5tYXAoaCA9PiBgTmV3ICR7aH1gKTtcbiAgICB9XG4gIH1cblxufVxuIl19