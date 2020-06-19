import { DiskEnum } from "./DiskEnum";
import { EtageEnum } from "./EtageEnum";

export class Disk {
    private id: DiskEnum;
    private etage: EtageEnum;

    constructor(id: DiskEnum, etage:number) {
        this.id = id;
        this.etage = etage;
    }

    public setId(idIn: DiskEnum):void {
        this.id = idIn;
    }

    public getId(): DiskEnum{
        return this.id;
    }

    public setEtage(etageIn: EtageEnum): void{
        this.etage = etageIn;
    }

    public getEtage(): EtageEnum {
        return this.etage;
    }
}