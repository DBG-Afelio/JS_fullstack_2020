import { DiskEnum } from "./DiskEnum";
import { EtageEnum } from "./EtageEnum";
export declare class Disk {
    private id;
    private etage;
    constructor(id: DiskEnum, etage: number);
    setId(idIn: DiskEnum): void;
    getId(): DiskEnum;
    setEtage(etageIn: EtageEnum): void;
    getEtage(): EtageEnum;
}
