window.addEventListener("DOMContentLoaded", () => {

    // INTERFACE 
    const submit = document.querySelector(".submit-number");
    const restart = document.querySelector(".restart");
    const entries = document.querySelector(".entries");
    const results = entries.querySelectorAll(".result");
    const totalEntriesResult = document.querySelector(".total-entries-result");
    const sumEntriesResult = document.querySelector(".sum-entries-result");
    const maxEntriesResult = document.querySelector(".max-entries-result");
    const minEntriesResult = document.querySelector(".min-entries-result");
    const averageEntriesResult = document.querySelector(".average-entries-result");
    const listOfEntriesResult = document.querySelector(".list-of-entries-result");
    const sequenceEntriesResult = document.querySelector(".sequence-entries-result");
    let entry;
    let total;
    let tableauResult = [];

    // MISE A ZERO
    Array.from(results).forEach((result) => result.innerHTML = 0);

    // LONGEST INCREASING SEQUENCE 
    const longestSequence = arr => {

        let i = 0;
        let longest = [];
        let tempArr = [];
        let lastSequence = [];

        if(tableauResult.length === 1) {
            return tableauResult;
        } else {

           while (i <= arr.length) {   
                if(arr[i] < arr[i+1]) {
                        tempArr.push(arr[i]);
                    } else {
                        // Vérification de la dernière valeur du tableau
                        if(arr[i + 1] === undefined && arr[i] > tempArr[tempArr.length - 1]) {
                                tempArr.push(arr[i]);
                                lastSequence = [...tempArr]; 
                        }

                        // Si le prochain nombre devient décroissant mais que l'actuel est plus grand 
                        if(arr[i] > tempArr[tempArr.length - 1]) {
                            tempArr.push(arr[i]);
                        }

                        // On sauvegarde la sequence en cours
                        lastSequence = [...tempArr];
                        tempArr.length = 0; 

                        // Si la sequence actuelle est plus grande  
                        if(lastSequence.length > longest.length) {
                            longest = [...lastSequence]
                        }
                    }
                    i++;
            }
        }

        return longest.join(", ")
      };
    
    // CLICK ON 'SOUMETTRE'
    submit.addEventListener("click", () => {

        entry = Number(document.querySelector(".user-input").value);

        if(!isNaN(entry)) {
            tableauResult.push(entry); 
            totalEntriesResult.innerHTML = tableauResult.length;
            total = tableauResult.reduce((total, entree) => total + entree, 0);
            sumEntriesResult.innerHTML = total;
            maxEntriesResult.innerHTML = Math.max(...tableauResult);
            minEntriesResult.innerHTML = Math.min(...tableauResult);
            averageEntriesResult.innerHTML = Number((total / tableauResult.length).toFixed(2));
            listOfEntriesResult.innerHTML = tableauResult.join(", ");
            sequenceEntriesResult.innerHTML = longestSequence(tableauResult);
        } else {
            alert("Erreur : Inserer un nombre entier");
        }

    }); 


    // RESET
    restart.addEventListener("click", () => {
        tableauResult.length = 0; 
        Array.from(results).forEach((result) => result.innerHTML = '0');
    });

});