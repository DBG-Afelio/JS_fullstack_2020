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
                    console.log('OK deplacement autorisé '+ idFrom+ ' -> '+idTo);
                    towerTo.getListTokens().push(tokenFrom);// ajouter token1 sur tower2
                    towerFrom.getListTokens().pop(); //retirer token1 de tower1
                    ok = true;
                   let oToken = document.querySelector(`.token${tokenFrom.getSize()}`) as HTMLElement;
                   let oTowerTo = document.querySelector(`.tower${towerTo.getId()}`);
                   oToken.style.top = 0-50*(towerTo.getListTokens().length)+"px"; 
                   oTowerTo.append(oToken);
                } else {
                    console.log('KO deplacement non autorisé '+ idFrom+ ' -> '+idTo);
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
            let oButtons = document.querySelector('.buttons') as HTMLElement;
            oButtons.style.display = 'none';
            alert('Bravo !');
           
        }
    }
}
