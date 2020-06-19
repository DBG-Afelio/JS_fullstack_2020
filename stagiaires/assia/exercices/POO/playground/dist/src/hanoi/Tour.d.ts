import { Disk } from "./Disk";
import { TourEnum } from "./TourEnum";
export declare class Tour {
    private id;
    private disklist;
    constructor(id: TourEnum, disklist: Disk[]);
    getId(): TourEnum;
    setId(idIn: TourEnum): void;
    getDiskList(): Disk[];
    setDiskList(listIn: Disk[]): void;
    getNombresDisk(): number;
    getDiskOnTop(): Disk | null;
    ajouteDisk(diskIn: Disk): boolean;
    retireDisk(diskOut: Disk): boolean;
}
