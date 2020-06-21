import { Disk } from "./Disk";
import { TourId } from "./TourEnum";
export declare class Tour {
    private id;
    private stack;
    constructor(id: TourId, stack: Disk[]);
    getId(): TourId;
    setId(idIn: TourId): void;
    getStack(): Disk[];
    showStack(): void;
    setFullStack(nbDisk?: number): void;
    setEmptyStack(): void;
    isStackEmpty(): boolean;
    isStackFull(): boolean;
    getNbDisk(): number;
    getDiskOnTop(): Disk | null;
    stackDisk(diskIn: Disk): boolean;
    unstackDisk(): Disk | undefined;
}
