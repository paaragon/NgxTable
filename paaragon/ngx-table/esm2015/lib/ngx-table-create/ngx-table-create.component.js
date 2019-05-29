/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
export class NgxTableCreateComponent {
    constructor() {
        this.faPlus = faPlus;
        this.errors = {};
        this.newObj = {};
        this.buttonEnable = true;
        this.create = new EventEmitter();
    }
    /**
     * @param {?} config
     * @return {?}
     */
    set config(config) {
        this.configBK = config;
        this.buildPlaceholders();
    }
    /**
     * @return {?}
     */
    get config() {
        return this.configBK;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    validate() {
        this.errors = {};
        this.buttonEnable = true;
        if (!this.config.create.validations) {
            return true;
        }
        for (const attr in this.newObj) {
            if (!this.newObj[attr]) {
                continue;
            }
            /** @type {?} */
            const validation = this.config.create.validations[attr];
            if (!validation) {
                continue;
            }
            /** @type {?} */
            const reg = new RegExp(validation.regex);
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
    }
    /**
     * @param {?} header
     * @return {?}
     */
    hasValidationError(header) {
        return this.errors && this.errors[header] && this.errors[header].error;
    }
    /**
     * @return {?}
     */
    onCreate() {
        if (!this.validate()) {
            return;
        }
        this.create.emit(this.newObj);
        this.newObj = {};
    }
    /**
     * @private
     * @return {?}
     */
    buildPlaceholders() {
        if (this.config.placeholders) {
            this.placeholders = this.config.placeholders.map((/**
             * @param {?} p
             * @return {?}
             */
            p => `New ${p}`));
        }
        else {
            this.placeholders = this.headers.map((/**
             * @param {?} h
             * @return {?}
             */
            h => `New ${h}`));
        }
    }
}
NgxTableCreateComponent.decorators = [
    { type: Component, args: [{
                selector: '[ngx-table-create]',
                template: "<th class=\"first-cell\">\n    <fa-icon [icon]=\"faPlus\"></fa-icon>\n</th>\n<th *ngFor=\"let placeholder of placeholders;let i = index\">\n  <input class=\"form-control\" [ngClass]=\"{'is-invalid': hasValidationError(headers[i])}\" placeholder=\"{{placeholder}}\"\n    (keyup)=\"validate()\" [(ngModel)]=\"newObj[headers[i]]\">\n    <p class=\"validation-error text-danger\" *ngIf=\"hasValidationError(headers[i])\">{{errors[headers[i]]?.errorMsg}}</p>\n</th>\n<th><button type=\"button\" class=\"btn btn-success\" (click)=\"onCreate()\" [disabled]=\"!buttonEnable\">Create</button></th>",
                styles: ["th{vertical-align:top!important}th .validation-error{margin-top:.75rem;margin-bottom:0;font-size:.75rem}th button{font-size:.75rem;width:100%}.first-cell{font-size:.75rem}.first-cell fa-icon{margin-top:.75rem}input{font-size:.75rem}"]
            }] }
];
/** @nocollapse */
NgxTableCreateComponent.ctorParameters = () => [];
NgxTableCreateComponent.propDecorators = {
    headers: [{ type: Input }],
    config: [{ type: Input }],
    create: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRhYmxlLWNyZWF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGFhcmFnb24vbmd4LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL25neC10YWJsZS1jcmVhdGUvbmd4LXRhYmxlLWNyZWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0UsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBTzNELE1BQU0sT0FBTyx1QkFBdUI7SUEyQmxDO1FBekJBLFdBQU0sR0FBRyxNQUFNLENBQUM7UUFFaEIsV0FBTSxHQUE0RCxFQUFFLENBQUM7UUFDckUsV0FBTSxHQUFnQixFQUFFLENBQUM7UUFFekIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFrQnBCLFdBQU0sR0FBOEIsSUFBSSxZQUFZLEVBQWUsQ0FBQztJQUVwRCxDQUFDOzs7OztJQWJqQixJQUNJLE1BQU0sQ0FBQyxNQUFzQjtRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUN2QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFPRCxRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO1lBQ25DLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3RCLFNBQVM7YUFDVjs7a0JBQ0ssVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDdkQsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDZixTQUFTO2FBQ1Y7O2tCQUNLLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRztvQkFDbEIsS0FBSyxFQUFFLElBQUk7b0JBQ1gsUUFBUSxFQUFFLFVBQVUsQ0FBQyxRQUFRO2lCQUM5QixDQUFDO2dCQUNGLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2dCQUMxQixPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUMsTUFBYztRQUMvQixPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUN6RSxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDcEIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRU8saUJBQWlCO1FBQ3ZCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFDLENBQUM7U0FDbkU7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFDLENBQUM7U0FDdkQ7SUFDSCxDQUFDOzs7WUFuRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLHdsQkFBZ0Q7O2FBRWpEOzs7OztzQkFVRSxLQUFLO3FCQUtMLEtBQUs7cUJBVUwsTUFBTTs7OztJQXRCUCx5Q0FBZ0I7O0lBRWhCLHlDQUFxRTs7SUFDckUseUNBQXlCOztJQUV6QiwrQ0FBb0I7O0lBRXBCLDBDQUFrQzs7SUFFbEMsK0NBQW1DOztJQUVuQywyQ0FBeUI7O0lBV3pCLHlDQUNvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neFRhYmxlQ29uZmlnLCBOZ3hUYWJsZVBsYWNlaG9sZGVycywgTmd4VGFibGVIZWFkZXJzLCBOZ3hUYWJsZU5ldyB9IGZyb20gJy4uL25neC10YWJsZS50eXBlcyc7XG5pbXBvcnQgeyBmYVBsdXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbmd4LXRhYmxlLWNyZWF0ZV0nLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4LXRhYmxlLWNyZWF0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25neC10YWJsZS1jcmVhdGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hUYWJsZUNyZWF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgZmFQbHVzID0gZmFQbHVzO1xuXG4gIGVycm9yczogeyBba2V5OiBzdHJpbmddOiB7IGVycm9yOiBib29sZWFuLCBlcnJvck1zZzogc3RyaW5nIH0gfSA9IHt9O1xuICBuZXdPYmo6IE5neFRhYmxlTmV3ID0ge307XG5cbiAgYnV0dG9uRW5hYmxlID0gdHJ1ZTtcblxuICBASW5wdXQoKSBoZWFkZXJzOiBOZ3hUYWJsZUhlYWRlcnM7XG5cbiAgcGxhY2Vob2xkZXJzOiBOZ3hUYWJsZVBsYWNlaG9sZGVycztcblxuICBjb25maWdCSzogTmd4VGFibGVDb25maWc7XG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcoY29uZmlnOiBOZ3hUYWJsZUNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnQksgPSBjb25maWc7XG4gICAgdGhpcy5idWlsZFBsYWNlaG9sZGVycygpO1xuICB9XG5cbiAgZ2V0IGNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWdCSztcbiAgfVxuXG4gIEBPdXRwdXQoKVxuICBjcmVhdGU6IEV2ZW50RW1pdHRlcjxOZ3hUYWJsZU5ldz4gPSBuZXcgRXZlbnRFbWl0dGVyPE5neFRhYmxlTmV3PigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICB2YWxpZGF0ZSgpIHtcbiAgICB0aGlzLmVycm9ycyA9IHt9O1xuICAgIHRoaXMuYnV0dG9uRW5hYmxlID0gdHJ1ZTtcbiAgICBpZiAoIXRoaXMuY29uZmlnLmNyZWF0ZS52YWxpZGF0aW9ucykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGZvciAoY29uc3QgYXR0ciBpbiB0aGlzLm5ld09iaikge1xuICAgICAgaWYgKCF0aGlzLm5ld09ialthdHRyXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZhbGlkYXRpb24gPSB0aGlzLmNvbmZpZy5jcmVhdGUudmFsaWRhdGlvbnNbYXR0cl07XG4gICAgICBpZiAoIXZhbGlkYXRpb24pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBjb25zdCByZWcgPSBuZXcgUmVnRXhwKHZhbGlkYXRpb24ucmVnZXgpO1xuICAgICAgaWYgKCFyZWcudGVzdCh0aGlzLm5ld09ialthdHRyXSkpIHtcbiAgICAgICAgdGhpcy5lcnJvcnNbYXR0cl0gPSB7XG4gICAgICAgICAgZXJyb3I6IHRydWUsXG4gICAgICAgICAgZXJyb3JNc2c6IHZhbGlkYXRpb24uZXJyb3JNc2dcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5idXR0b25FbmFibGUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGhhc1ZhbGlkYXRpb25FcnJvcihoZWFkZXI6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmVycm9ycyAmJiB0aGlzLmVycm9yc1toZWFkZXJdICYmIHRoaXMuZXJyb3JzW2hlYWRlcl0uZXJyb3I7XG4gIH1cblxuICBvbkNyZWF0ZSgpIHtcbiAgICBpZiAoIXRoaXMudmFsaWRhdGUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY3JlYXRlLmVtaXQodGhpcy5uZXdPYmopO1xuICAgIHRoaXMubmV3T2JqID0ge307XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkUGxhY2Vob2xkZXJzKCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5wbGFjZWhvbGRlcnMpIHtcbiAgICAgIHRoaXMucGxhY2Vob2xkZXJzID0gdGhpcy5jb25maWcucGxhY2Vob2xkZXJzLm1hcChwID0+IGBOZXcgJHtwfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBsYWNlaG9sZGVycyA9IHRoaXMuaGVhZGVycy5tYXAoaCA9PiBgTmV3ICR7aH1gKTtcbiAgICB9XG4gIH1cblxufVxuIl19