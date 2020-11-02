// @flow

export const measureTiming = (name: string) => {
    type TimeTakenInMilliseconds = number | null;
    if (window.performance && window.performance.now) {
        const perf = window.performance;
        const startKey = `${name}-start`;
        const endKey = `${name}-end`;

        const start = () => {
            perf.mark(startKey);
        };

        const end = (): TimeTakenInMilliseconds => {
            perf.mark(endKey);
            perf.measure(name, startKey, endKey);

            const measureEntries = perf.getEntriesByName(name, "measure");
            const timeTakenFloat = measureEntries[0].duration;
            const timeTakenInt = Math.round(timeTakenFloat);

            return timeTakenInt;
        };

        return {
            start,
            end,
        };
    }
    return { start: () => null, end: (): TimeTakenInMilliseconds => null }
};
