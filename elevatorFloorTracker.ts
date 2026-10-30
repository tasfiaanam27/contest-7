function trackElevator(startFloor: number, minFloor: number, maxFloor: number, commands: string[]): number {
    let currentFloor = startFloor;

    for (const command of commands) {
        if (command === "UP") {
            currentFloor = Math.min(currentFloor + 1, maxFloor);
        } else if (command === "DOWN") {
            currentFloor = Math.max(currentFloor - 1, minFloor);
        }
    }

    return currentFloor;
}