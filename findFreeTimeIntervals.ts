function findFreeTime(bookedIntervals: number[][], workingHours: [number, number]): number[][] {
    const [workStart, workEnd] = workingHours;

    const bookings = bookedIntervals
        .map(([start, end]) => [
            Math.max(start, workStart),
            Math.min(end, workEnd)
        ])
        .filter(([start, end]) => start < end)
        .sort((a, b) => a[0] - b[0]);

    const freeTime: number[][] = [];
    let currentTime = workStart;

    for (const [start, end] of bookings) {
        if (start > currentTime) {
            freeTime.push([currentTime, start]);
        }

        currentTime = Math.max(currentTime, end);
    }

    if (currentTime < workEnd) {
        freeTime.push([currentTime, workEnd]);
    }

    return freeTime;
}