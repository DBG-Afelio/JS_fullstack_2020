import { Disk } from "./Disk";
import { TourEnum } from "./TourEnum";

export class Tour {
    private id: TourEnum;
    private disklist: Disk[];

    constructor(id: TourEnum, disklist: Disk[]) {
        this.id = id;
        this.disklist = disklist;
    }

    public getId(): TourEnum {
        return this.id;
    }

    public setId(idIn: TourEnum): void {
        this.id = idIn;
    }

    public getDiskList(): Disk[] {
        return this.disklist;
    }

    public setDiskList(listIn: Disk[]): void {
        this.disklist = listIn;
    }

    public getNombresDisk(): number {
        return this.disklist.length;
    }

    public getDiskOnTop(): Disk | null {
        if (this.getNombresDisk() !== 0) {
            return this.disklist[0];
        } else {
            return null;
        }
    }
    public ajouteDisk(diskIn: Disk): boolean {
        let ajoutOk: boolean = false;
        const diskOnTop: Disk | null = this.getDiskOnTop();
        if (diskOnTop === null || diskOnTop.getId() > diskIn.getId()) {
            this.disklist.push(diskIn);
            ajoutOk = true;
        }
        return ajoutOk;
    }

    public retireDisk(diskOut: Disk): boolean {
        let retraitOk: boolean = false;
        const diskOnTop: Disk | null = this.getDiskOnTop();
        if (diskOnTop !== null && diskOnTop.getId() === diskOut.getId()) {
            this.disklist.splice(0, 1);
            retraitOk = true;
        }
        return retraitOk;
    }

}