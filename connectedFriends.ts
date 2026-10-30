function countConnectedFriends(friendships: string[][], startPerson: string): number {
    const graph = new Map<string, string[]>();

    for (const [person1, person2] of friendships) {
        if (!graph.has(person1)) {
            graph.set(person1, []);
        }

        if (!graph.has(person2)) {
            graph.set(person2, []);
        }

        graph.get(person1)!.push(person2);
        graph.get(person2)!.push(person1);
    }

    const visited = new Set<string>();
    const queue: string[] = [startPerson];

    visited.add(startPerson);

    let front = 0;

    while (front < queue.length) {
        const currentPerson = queue[front++];

        for (const friend of graph.get(currentPerson) || []) {
            if (!visited.has(friend)) {
                visited.add(friend);
                queue.push(friend);
            }
        }
    }

    return visited.size;
}