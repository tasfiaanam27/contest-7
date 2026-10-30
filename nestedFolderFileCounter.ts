interface File {
    name: string;
    type: 'file';
}

interface Folder {
    name: string;
    type: 'folder';
    children: (File | Folder)[];
}

type FileSystemItem = File | Folder;

function countFilesInFolder(structure: FileSystemItem[]): number {
    let count = 0;

    for (const item of structure) {
        if (item.type === 'file') {
            count++;
        } else if (item.type === 'folder') {
            count += countFilesInFolder(item.children);
        }
    }

    return count;
}