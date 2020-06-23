import { Tower } from "./Tower";

export class Board {
    private listTowers: Tower[];

    constructor() {
        this.listTowers = [
            new Tower(1),
            new Tower(2),
            new Tower(3),
        ];
        let tower1 = this.getTowerById(1);
        if (tower1) {
            tower1.init();
        }
    }

    public move(idFrom: number, idTo: number): Boolean{
        let ok = false;
        let towerFrom = this.getTowerById(idFrom);
        let towerTo = this.getTowerById(idTo);
        if (towerFrom && towerTo) {
            let tokenFrom = towerFrom.getLastToken();
            let tokenTo = towerTo.getLastToken();

            if (tokenFrom) {
                if (!tokenTo || tokenFrom.getSize() < tokenTo.getSize()) {
                    // deplacement autorisé
                    towerTo.getListTokens().push(tokenFrom);// ajouter token1 sur tower2
                    towerFrom.getListTokens().pop(); //retirer token1 de tower1
                    ok = true;
                } else {
                    console.log('deplacement non autorisé');
                }
            }
        }
        this.checkWin();
        return ok;
    }
    
    public getTowerById(id: number) : Tower|undefined {
        return this.listTowers.find(tower => tower.getId() === id);
    }

    public showTowersContent():void {
        
        this.listTowers.forEach(tower => {
            console.log(tower.getId(), ' => ' ,tower.getListTokens());
        });
    }

    public checkWin() {
        let listTokens = this.getTowerById(3)?.getListTokens();
        if (listTokens && listTokens.length === 8) {
            console.log('Bravo !');
        }
    }
}
