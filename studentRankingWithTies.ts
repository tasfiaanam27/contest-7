interface Student {
    name: string;
    score: number;
}

interface RankedStudent extends Student {
    rank: number;
}

function rankStudents(students: Student[]): RankedStudent[] {
    const sortedStudents = students
        .map((student, index) => ({ ...student, originalIndex: index }))
        .sort((a, b) => {
            if (b.score !== a.score) {
                return b.score - a.score;
            }
            return a.originalIndex - b.originalIndex;
        });

    let currentRank = 1;

    return sortedStudents.map((student, index) => {
        if (index > 0 && student.score < sortedStudents[index - 1].score) {
            currentRank = index + 1;
        }

        return {
            name: student.name,
            score: student.score,
            rank: currentRank
        };
    });
}