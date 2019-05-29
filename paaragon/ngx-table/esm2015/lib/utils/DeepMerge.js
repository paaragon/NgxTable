/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export default class DeepMerge {
    /**
     * @private
     * @param {?} val
     * @return {?}
     */
    static isMergeableObject(val) {
        /** @type {?} */
        const nonNullObject = val && typeof val === 'object';
        return nonNullObject
            && Object.prototype.toString.call(val) !== '[object RegExp]'
            && Object.prototype.toString.call(val) !== '[object Date]';
    }
    /**
     * @private
     * @param {?} val
     * @return {?}
     */
    static emptyTarget(val) {
        return Array.isArray(val) ? [] : {};
    }
    /**
     * @private
     * @param {?} value
     * @param {?} optionsArgument
     * @return {?}
     */
    static cloneIfNecessary(value, optionsArgument) {
        /** @type {?} */
        const clone = optionsArgument && optionsArgument.clone === true;
        return (clone && DeepMerge.isMergeableObject(value)) ?
            DeepMerge.deepmerge(DeepMerge.emptyTarget(value), value, optionsArgument) :
            value;
    }
    /**
     * @private
     * @param {?} target
     * @param {?} source
     * @param {?} optionsArgument
     * @return {?}
     */
    static defaultArrayMerge(target, source, optionsArgument) {
        /** @type {?} */
        const destination = target.slice();
        source.forEach((/**
         * @param {?} e
         * @param {?} i
         * @return {?}
         */
        (e, i) => {
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
    }
    /**
     * @private
     * @param {?} target
     * @param {?} source
     * @param {?} optionsArgument
     * @return {?}
     */
    static mergeObject(target, source, optionsArgument) {
        /** @type {?} */
        const destination = {};
        if (DeepMerge.isMergeableObject(target)) {
            Object.keys(target).forEach((/**
             * @param {?} key
             * @return {?}
             */
            (key) => {
                destination[key] = DeepMerge.cloneIfNecessary(target[key], optionsArgument);
            }));
        }
        Object.keys(source).forEach((/**
         * @param {?} key
         * @return {?}
         */
        (key) => {
            if (!DeepMerge.isMergeableObject(source[key]) || !target[key]) {
                destination[key] = DeepMerge.cloneIfNecessary(source[key], optionsArgument);
            }
            else {
                destination[key] = DeepMerge.deepmerge(target[key], source[key], optionsArgument);
            }
        }));
        return destination;
    }
    /**
     * @param {?} target
     * @param {?} source
     * @param {?=} optionsArgument
     * @return {?}
     */
    static deepmerge(target, source, optionsArgument) {
        /** @type {?} */
        const array = Array.isArray(source);
        /** @type {?} */
        const options = optionsArgument || { arrayMerge: DeepMerge.defaultArrayMerge };
        /** @type {?} */
        const arrayMerge = options.arrayMerge || DeepMerge.defaultArrayMerge;
        if (array) {
            return Array.isArray(target) ?
                arrayMerge(target, source, optionsArgument) :
                DeepMerge.cloneIfNecessary(source, optionsArgument);
        }
        else {
            return DeepMerge.mergeObject(target, source, optionsArgument);
        }
    }
    /**
     * @param {?} array
     * @param {?} optionsArgument
     * @return {?}
     */
    static deepmergeAll(array, optionsArgument) {
        if (!Array.isArray(array) || array.length < 2) {
            throw new Error('first argument should be an array with at least two elements');
        }
        // we are sure there are at least 2 values, so it is safe to have no initial value
        return array.reduce((/**
         * @param {?} prev
         * @param {?} next
         * @return {?}
         */
        (prev, next) => {
            return DeepMerge.deepmerge(prev, next, optionsArgument);
        }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVlcE1lcmdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBhYXJhZ29uL25neC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9EZWVwTWVyZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU0sQ0FBQyxPQUFPLE9BQU8sU0FBUzs7Ozs7O0lBQ2xCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHOztjQUMxQixhQUFhLEdBQUcsR0FBRyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVE7UUFFcEQsT0FBTyxhQUFhO2VBQ2IsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLGlCQUFpQjtlQUN6RCxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssZUFBZSxDQUFDO0lBQ25FLENBQUM7Ozs7OztJQUVPLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRztRQUMxQixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7Ozs7SUFFTyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGVBQWU7O2NBQzVDLEtBQUssR0FBRyxlQUFlLElBQUksZUFBZSxDQUFDLEtBQUssS0FBSyxJQUFJO1FBQy9ELE9BQU8sQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRCxTQUFTLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDM0UsS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7Ozs7Ozs7SUFFTyxNQUFNLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxlQUFl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QUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxlQUFlLENBQUMsQ0FBQztTQUNqRTtJQUNMLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLGVBQWU7UUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDM0MsTUFBTSxJQUFJLEtBQUssQ0FBQyw4REFBOEQsQ0FBQyxDQUFDO1NBQ25GO1FBRUQsa0ZBQWtGO1FBQ2xGLE9BQU8sS0FBSyxDQUFDLE1BQU07Ozs7O1FBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDL0IsT0FBTyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDNUQsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBEZWVwTWVyZ2Uge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaXNNZXJnZWFibGVPYmplY3QodmFsKSB7XHJcbiAgICAgICAgY29uc3Qgbm9uTnVsbE9iamVjdCA9IHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JztcclxuXHJcbiAgICAgICAgcmV0dXJuIG5vbk51bGxPYmplY3RcclxuICAgICAgICAgICAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgIT09ICdbb2JqZWN0IFJlZ0V4cF0nXHJcbiAgICAgICAgICAgICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpICE9PSAnW29iamVjdCBEYXRlXSc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZW1wdHlUYXJnZXQodmFsKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKSA/IFtdIDoge307XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgY2xvbmVJZk5lY2Vzc2FyeSh2YWx1ZSwgb3B0aW9uc0FyZ3VtZW50KSB7XHJcbiAgICAgICAgY29uc3QgY2xvbmUgPSBvcHRpb25zQXJndW1lbnQgJiYgb3B0aW9uc0FyZ3VtZW50LmNsb25lID09PSB0cnVlO1xyXG4gICAgICAgIHJldHVybiAoY2xvbmUgJiYgRGVlcE1lcmdlLmlzTWVyZ2VhYmxlT2JqZWN0KHZhbHVlKSkgP1xyXG4gICAgICAgICAgICBEZWVwTWVyZ2UuZGVlcG1lcmdlKERlZXBNZXJnZS5lbXB0eVRhcmdldCh2YWx1ZSksIHZhbHVlLCBvcHRpb25zQXJndW1lbnQpIDpcclxuICAgICAgICAgICAgdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZGVmYXVsdEFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xyXG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gdGFyZ2V0LnNsaWNlKCk7XHJcbiAgICAgICAgc291cmNlLmZvckVhY2goKGUsIGkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbltpXSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uW2ldID0gRGVlcE1lcmdlLmNsb25lSWZOZWNlc3NhcnkoZSwgb3B0aW9uc0FyZ3VtZW50KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChEZWVwTWVyZ2UuaXNNZXJnZWFibGVPYmplY3QoZSkpIHtcclxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uW2ldID0gRGVlcE1lcmdlLmRlZXBtZXJnZSh0YXJnZXRbaV0sIGUsIG9wdGlvbnNBcmd1bWVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmluZGV4T2YoZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbi5wdXNoKERlZXBNZXJnZS5jbG9uZUlmTmVjZXNzYXJ5KGUsIG9wdGlvbnNBcmd1bWVudCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGRlc3RpbmF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpIHtcclxuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHt9O1xyXG4gICAgICAgIGlmIChEZWVwTWVyZ2UuaXNNZXJnZWFibGVPYmplY3QodGFyZ2V0KSkge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0YXJnZXQpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IERlZXBNZXJnZS5jbG9uZUlmTmVjZXNzYXJ5KHRhcmdldFtrZXldLCBvcHRpb25zQXJndW1lbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFEZWVwTWVyZ2UuaXNNZXJnZWFibGVPYmplY3Qoc291cmNlW2tleV0pIHx8ICF0YXJnZXRba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IERlZXBNZXJnZS5jbG9uZUlmTmVjZXNzYXJ5KHNvdXJjZVtrZXldLCBvcHRpb25zQXJndW1lbnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IERlZXBNZXJnZS5kZWVwbWVyZ2UodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldLCBvcHRpb25zQXJndW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGRlc3RpbmF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZWVwbWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudD8pIHtcclxuICAgICAgICBjb25zdCBhcnJheSA9IEFycmF5LmlzQXJyYXkoc291cmNlKTtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0gb3B0aW9uc0FyZ3VtZW50IHx8IHsgYXJyYXlNZXJnZTogRGVlcE1lcmdlLmRlZmF1bHRBcnJheU1lcmdlIH07XHJcbiAgICAgICAgY29uc3QgYXJyYXlNZXJnZSA9IG9wdGlvbnMuYXJyYXlNZXJnZSB8fCBEZWVwTWVyZ2UuZGVmYXVsdEFycmF5TWVyZ2U7XHJcblxyXG4gICAgICAgIGlmIChhcnJheSkge1xyXG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0YXJnZXQpID9cclxuICAgICAgICAgICAgICAgIGFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkgOlxyXG4gICAgICAgICAgICAgICAgRGVlcE1lcmdlLmNsb25lSWZOZWNlc3Nhcnkoc291cmNlLCBvcHRpb25zQXJndW1lbnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBEZWVwTWVyZ2UubWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZWVwbWVyZ2VBbGwoYXJyYXksIG9wdGlvbnNBcmd1bWVudCkge1xyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkgfHwgYXJyYXkubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpcnN0IGFyZ3VtZW50IHNob3VsZCBiZSBhbiBhcnJheSB3aXRoIGF0IGxlYXN0IHR3byBlbGVtZW50cycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gd2UgYXJlIHN1cmUgdGhlcmUgYXJlIGF0IGxlYXN0IDIgdmFsdWVzLCBzbyBpdCBpcyBzYWZlIHRvIGhhdmUgbm8gaW5pdGlhbCB2YWx1ZVxyXG4gICAgICAgIHJldHVybiBhcnJheS5yZWR1Y2UoKHByZXYsIG5leHQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIERlZXBNZXJnZS5kZWVwbWVyZ2UocHJldiwgbmV4dCwgb3B0aW9uc0FyZ3VtZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=