export default class DeepMerge {
    private static isMergeableObject(val) {
        const nonNullObject = val && typeof val === 'object';

        return nonNullObject
            && Object.prototype.toString.call(val) !== '[object RegExp]'
            && Object.prototype.toString.call(val) !== '[object Date]';
    }

    private static emptyTarget(val) {
        return Array.isArray(val) ? [] : {};
    }

    private static cloneIfNecessary(value, optionsArgument) {
        const clone = optionsArgument && optionsArgument.clone === true;
        return (clone && DeepMerge.isMergeableObject(value)) ?
            DeepMerge.deepmerge(DeepMerge.emptyTarget(value), value, optionsArgument) :
            value;
    }

    private static defaultArrayMerge(target, source, optionsArgument) {
        const destination = target.slice();
        source.forEach((e, i) => {
            if (typeof destination[i] === 'undefined') {
                destination[i] = DeepMerge.cloneIfNecessary(e, optionsArgument);
            } else if (DeepMerge.isMergeableObject(e)) {
                destination[i] = DeepMerge.deepmerge(target[i], e, optionsArgument);
            } else if (target.indexOf(e) === -1) {
                destination.push(DeepMerge.cloneIfNecessary(e, optionsArgument));
            }
        });
        return destination;
    }

    private static mergeObject(target, source, optionsArgument) {
        const destination = {};
        if (DeepMerge.isMergeableObject(target)) {
            Object.keys(target).forEach((key) => {
                destination[key] = DeepMerge.cloneIfNecessary(target[key], optionsArgument);
            });
        }
        Object.keys(source).forEach((key) => {
            if (!DeepMerge.isMergeableObject(source[key]) || !target[key]) {
                destination[key] = DeepMerge.cloneIfNecessary(source[key], optionsArgument);
            } else {
                destination[key] = DeepMerge.deepmerge(target[key], source[key], optionsArgument);
            }
        });
        return destination;
    }

    static deepmerge(target, source, optionsArgument?) {
        const array = Array.isArray(source);
        const options = optionsArgument || { arrayMerge: DeepMerge.defaultArrayMerge };
        const arrayMerge = options.arrayMerge || DeepMerge.defaultArrayMerge;

        if (array) {
            return Array.isArray(target) ?
                arrayMerge(target, source, optionsArgument) :
                DeepMerge.cloneIfNecessary(source, optionsArgument);
        } else {
            return DeepMerge.mergeObject(target, source, optionsArgument);
        }
    }

    static deepmergeAll(array, optionsArgument) {
        if (!Array.isArray(array) || array.length < 2) {
            throw new Error('first argument should be an array with at least two elements');
        }

        // we are sure there are at least 2 values, so it is safe to have no initial value
        return array.reduce((prev, next) => {
            return DeepMerge.deepmerge(prev, next, optionsArgument);
        });
    }
}
