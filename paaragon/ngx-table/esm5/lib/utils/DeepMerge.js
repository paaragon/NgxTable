/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DeepMerge = /** @class */ (function () {
    function DeepMerge() {
    }
    /**
     * @private
     * @param {?} val
     * @return {?}
     */
    DeepMerge.isMergeableObject = /**
     * @private
     * @param {?} val
     * @return {?}
     */
    function (val) {
        /** @type {?} */
        var nonNullObject = val && typeof val === 'object';
        return nonNullObject
            && Object.prototype.toString.call(val) !== '[object RegExp]'
            && Object.prototype.toString.call(val) !== '[object Date]';
    };
    /**
     * @private
     * @param {?} val
     * @return {?}
     */
    DeepMerge.emptyTarget = /**
     * @private
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return Array.isArray(val) ? [] : {};
    };
    /**
     * @private
     * @param {?} value
     * @param {?} optionsArgument
     * @return {?}
     */
    DeepMerge.cloneIfNecessary = /**
     * @private
     * @param {?} value
     * @param {?} optionsArgument
     * @return {?}
     */
    function (value, optionsArgument) {
        /** @type {?} */
        var clone = optionsArgument && optionsArgument.clone === true;
        return (clone && DeepMerge.isMergeableObject(value)) ?
            DeepMerge.deepmerge(DeepMerge.emptyTarget(value), value, optionsArgument) :
            value;
    };
    /**
     * @private
     * @param {?} target
     * @param {?} source
     * @param {?} optionsArgument
     * @return {?}
     */
    DeepMerge.defaultArrayMerge = /**
     * @private
     * @param {?} target
     * @param {?} source
     * @param {?} optionsArgument
     * @return {?}
     */
    function (target, source, optionsArgument) {
        /** @type {?} */
        var destination = target.slice();
        source.forEach((/**
         * @param {?} e
         * @param {?} i
         * @return {?}
         */
        function (e, i) {
            if (typeof destination[i] === 'undefined') {
                destination[i] = DeepMerge.cloneIfNecessary(e, optionsArgument);
            }
            else if (DeepMerge.isMergeableObject(e)) {
                destination[i] = DeepMerge.deepmerge(target[i], e, optionsArgument);
            }
            else if (target.indexOf(e) === -1) {
                destination.push(DeepMerge.cloneIfNecessary(e, optionsArgument));
            }
        }));
        return destination;
    };
    /**
     * @private
     * @param {?} target
     * @param {?} source
     * @param {?} optionsArgument
     * @return {?}
     */
    DeepMerge.mergeObject = /**
     * @private
     * @param {?} target
     * @param {?} source
     * @param {?} optionsArgument
     * @return {?}
     */
    function (target, source, optionsArgument) {
        /** @type {?} */
        var destination = {};
        if (DeepMerge.isMergeableObject(target)) {
            Object.keys(target).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                destination[key] = DeepMerge.cloneIfNecessary(target[key], optionsArgument);
            }));
        }
        Object.keys(source).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            if (!DeepMerge.isMergeableObject(source[key]) || !target[key]) {
                destination[key] = DeepMerge.cloneIfNecessary(source[key], optionsArgument);
            }
            else {
                destination[key] = DeepMerge.deepmerge(target[key], source[key], optionsArgument);
            }
        }));
        return destination;
    };
    /**
     * @param {?} target
     * @param {?} source
     * @param {?=} optionsArgument
     * @return {?}
     */
    DeepMerge.deepmerge = /**
     * @param {?} target
     * @param {?} source
     * @param {?=} optionsArgument
     * @return {?}
     */
    function (target, source, optionsArgument) {
        /** @type {?} */
        var array = Array.isArray(source);
        /** @type {?} */
        var options = optionsArgument || { arrayMerge: DeepMerge.defaultArrayMerge };
        /** @type {?} */
        var arrayMerge = options.arrayMerge || DeepMerge.defaultArrayMerge;
        if (array) {
            return Array.isArray(target) ?
                arrayMerge(target, source, optionsArgument) :
                DeepMerge.cloneIfNecessary(source, optionsArgument);
        }
        else {
            return DeepMerge.mergeObject(target, source, optionsArgument);
        }
    };
    /**
     * @param {?} array
     * @param {?} optionsArgument
     * @return {?}
     */
    DeepMerge.deepmergeAll = /**
     * @param {?} array
     * @param {?} optionsArgument
     * @return {?}
     */
    function (array, optionsArgument) {
        if (!Array.isArray(array) || array.length < 2) {
            throw new Error('first argument should be an array with at least two elements');
        }
        // we are sure there are at least 2 values, so it is safe to have no initial value
        return array.reduce((/**
         * @param {?} prev
         * @param {?} next
         * @return {?}
         */
        function (prev, next) {
            return DeepMerge.deepmerge(prev, next, optionsArgument);
        }));
    };
    return DeepMerge;
}());
export default DeepMerge;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVlcE1lcmdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBhYXJhZ29uL25neC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9EZWVwTWVyZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0lBQUE7SUEyRUEsQ0FBQzs7Ozs7O0lBMUVrQiwyQkFBaUI7Ozs7O0lBQWhDLFVBQWlDLEdBQUc7O1lBQzFCLGFBQWEsR0FBRyxHQUFHLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUTtRQUVwRCxPQUFPLGFBQWE7ZUFDYixNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssaUJBQWlCO2VBQ3pELE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxlQUFlLENBQUM7SUFDbkUsQ0FBQzs7Ozs7O0lBRWMscUJBQVc7Ozs7O0lBQTFCLFVBQTJCLEdBQUc7UUFDMUIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs7Ozs7O0lBRWMsMEJBQWdCOzs7Ozs7SUFBL0IsVUFBZ0MsS0FBSyxFQUFFLGVBQWU7O1lBQzVDLEtBQUssR0FBRyxlQUFlLElBQUksZUFBZSxDQUFDLEtBQUssS0FBSyxJQUFJO1FBQy9ELE9BQU8sQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRCxTQUFTLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDM0UsS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7Ozs7Ozs7SUFFYywyQkFBaUI7Ozs7Ozs7SUFBaEMsVUFBaUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxlQUFl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ZUFBZSxDQUFDLENBQUM7U0FDakU7SUFDTCxDQUFDOzs7Ozs7SUFFTSxzQkFBWTs7Ozs7SUFBbkIsVUFBb0IsS0FBSyxFQUFFLGVBQWU7UUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDM0MsTUFBTSxJQUFJLEtBQUssQ0FBQyw4REFBOEQsQ0FBQyxDQUFDO1NBQ25GO1FBRUQsa0ZBQWtGO1FBQ2xGLE9BQU8sS0FBSyxDQUFDLE1BQU07Ozs7O1FBQUMsVUFBQyxJQUFJLEVBQUUsSUFBSTtZQUMzQixPQUFPLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQztRQUM1RCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUMsQUEzRUQsSUEyRUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBEZWVwTWVyZ2Uge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaXNNZXJnZWFibGVPYmplY3QodmFsKSB7XHJcbiAgICAgICAgY29uc3Qgbm9uTnVsbE9iamVjdCA9IHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JztcclxuXHJcbiAgICAgICAgcmV0dXJuIG5vbk51bGxPYmplY3RcclxuICAgICAgICAgICAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgIT09ICdbb2JqZWN0IFJlZ0V4cF0nXHJcbiAgICAgICAgICAgICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpICE9PSAnW29iamVjdCBEYXRlXSc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZW1wdHlUYXJnZXQodmFsKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKSA/IFtdIDoge307XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgY2xvbmVJZk5lY2Vzc2FyeSh2YWx1ZSwgb3B0aW9uc0FyZ3VtZW50KSB7XHJcbiAgICAgICAgY29uc3QgY2xvbmUgPSBvcHRpb25zQXJndW1lbnQgJiYgb3B0aW9uc0FyZ3VtZW50LmNsb25lID09PSB0cnVlO1xyXG4gICAgICAgIHJldHVybiAoY2xvbmUgJiYgRGVlcE1lcmdlLmlzTWVyZ2VhYmxlT2JqZWN0KHZhbHVlKSkgP1xyXG4gICAgICAgICAgICBEZWVwTWVyZ2UuZGVlcG1lcmdlKERlZXBNZXJnZS5lbXB0eVRhcmdldCh2YWx1ZSksIHZhbHVlLCBvcHRpb25zQXJndW1lbnQpIDpcclxuICAgICAgICAgICAgdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZGVmYXVsdEFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xyXG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gdGFyZ2V0LnNsaWNlKCk7XHJcbiAgICAgICAgc291cmNlLmZvckVhY2goKGUsIGkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbltpXSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uW2ldID0gRGVlcE1lcmdlLmNsb25lSWZOZWNlc3NhcnkoZSwgb3B0aW9uc0FyZ3VtZW50KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChEZWVwTWVyZ2UuaXNNZXJnZWFibGVPYmplY3QoZSkpIHtcclxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uW2ldID0gRGVlcE1lcmdlLmRlZXBtZXJnZSh0YXJnZXRbaV0sIGUsIG9wdGlvbnNBcmd1bWVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmluZGV4T2YoZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbi5wdXNoKERlZXBNZXJnZS5jbG9uZUlmTmVjZXNzYXJ5KGUsIG9wdGlvbnNBcmd1bWVudCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGRlc3RpbmF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpIHtcclxuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHt9O1xyXG4gICAgICAgIGlmIChEZWVwTWVyZ2UuaXNNZXJnZWFibGVPYmplY3QodGFyZ2V0KSkge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0YXJnZXQpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IERlZXBNZXJnZS5jbG9uZUlmTmVjZXNzYXJ5KHRhcmdldFtrZXldLCBvcHRpb25zQXJndW1lbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFEZWVwTWVyZ2UuaXNNZXJnZWFibGVPYmplY3Qoc291cmNlW2tleV0pIHx8ICF0YXJnZXRba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IERlZXBNZXJnZS5jbG9uZUlmTmVjZXNzYXJ5KHNvdXJjZVtrZXldLCBvcHRpb25zQXJndW1lbnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IERlZXBNZXJnZS5kZWVwbWVyZ2UodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldLCBvcHRpb25zQXJndW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGRlc3RpbmF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZWVwbWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudD8pIHtcclxuICAgICAgICBjb25zdCBhcnJheSA9IEFycmF5LmlzQXJyYXkoc291cmNlKTtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0gb3B0aW9uc0FyZ3VtZW50IHx8IHsgYXJyYXlNZXJnZTogRGVlcE1lcmdlLmRlZmF1bHRBcnJheU1lcmdlIH07XHJcbiAgICAgICAgY29uc3QgYXJyYXlNZXJnZSA9IG9wdGlvbnMuYXJyYXlNZXJnZSB8fCBEZWVwTWVyZ2UuZGVmYXVsdEFycmF5TWVyZ2U7XHJcblxyXG4gICAgICAgIGlmIChhcnJheSkge1xyXG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0YXJnZXQpID9cclxuICAgICAgICAgICAgICAgIGFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkgOlxyXG4gICAgICAgICAgICAgICAgRGVlcE1lcmdlLmNsb25lSWZOZWNlc3Nhcnkoc291cmNlLCBvcHRpb25zQXJndW1lbnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBEZWVwTWVyZ2UubWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZWVwbWVyZ2VBbGwoYXJyYXksIG9wdGlvbnNBcmd1bWVudCkge1xyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkgfHwgYXJyYXkubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpcnN0IGFyZ3VtZW50IHNob3VsZCBiZSBhbiBhcnJheSB3aXRoIGF0IGxlYXN0IHR3byBlbGVtZW50cycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gd2UgYXJlIHN1cmUgdGhlcmUgYXJlIGF0IGxlYXN0IDIgdmFsdWVzLCBzbyBpdCBpcyBzYWZlIHRvIGhhdmUgbm8gaW5pdGlhbCB2YWx1ZVxyXG4gICAgICAgIHJldHVybiBhcnJheS5yZWR1Y2UoKHByZXYsIG5leHQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIERlZXBNZXJnZS5kZWVwbWVyZ2UocHJldiwgbmV4dCwgb3B0aW9uc0FyZ3VtZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=