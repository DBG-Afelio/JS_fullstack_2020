import { Disk } from "./Disk";
import { TourId } from "./TourEnum";

export class Tour {
  
    constructor(private id: TourId, private stack: Disk[]) {
        this.id = id;
        this.stack = stack;
    }

    public getId(): TourId {
        return this.id;
    }

    public setId(idIn: TourId): void {
        this.id = idIn;
    }
    

    public showStack(): void {
        console.log(this.id);
        this.stack.forEach(disk => console.log(disk.getId()));
    }

    public setFullStack(nbDisk: number = 8): void {
        for (let d: number = 0; d < nbDisk; d++) {
            const disk = new Disk(d);
            this.stack.push(disk);
        }
    }

    public setEmptyStack(): void{
        this.stack = [];
    }

    public isStackEmpty(): boolean{
        return this.stack === [];
    }

    public isStackFull(): boolean{
        return this.stack.every((disk, index) => disk.getId() === index);
    }

    public getNbDisk(): number {
        return this.stack.length;
    }

    private getDiskOnTop(): Disk | null {
        if (this.getNbDisk() !== 0) {
            return this.stack[0];
        } else {
            return null;
        }
    }
    public stackDisk(diskIn: Disk): boolean {
        let ajoutOk: boolean = false;
        const diskOnTop: Disk | null = this.getDiskOnTop();
        if (diskOnTop === null || diskOnTop.getId() > diskIn.getId()) {
            this.stack.splice(0, 0, diskIn); //0 <=> ajoute diskIn a l'index 0, 0 <=> sans supprimer le reste
            ajoutOk = true;
        }
        return ajoutOk;
    }

    public unstackDisk(): Disk | undefined {
        return this.stack.shift();
    }

}