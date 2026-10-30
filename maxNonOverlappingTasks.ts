function maxTasks(tasks: number[][]): number {
    const sortedTasks = [...tasks].sort((a, b) => a[1] - b[1]);

    let count = 0;
    let lastFinish = -Infinity;

    for (const [start, finish] of sortedTasks) {
        if (start >= lastFinish) {
            count++;
            lastFinish = finish;
        }
    }

    return count;
}