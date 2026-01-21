//variable global 
const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];
let paires_order = [...emojis,...emojis]; //ordonné 
let paires = []; 

let timer = 0; 

let indexTab = []; //prends les deux elt à comparer 
let peutCliquer = true; 

let varPairesTrouvées = 0  ; 
let coup = 0; 
let infos = document.getElementById("information"); 
afficher();

function afficher(){
    melangerCarte(); 
    peutCliquer = true; 
    const gamebox = document.getElementById('gamebox'); 
    gamebox.innerHTML =""; 
    for(let i = 0 ; i < paires.length ; i++){
        
        gamebox.innerHTML += "<div class='card' id='card"+i+"' onclick='afficher_click("+i+")'> ? </div>";
    }
    setTimeout(function(){
                infos.innerHTML = " Choisissez deux cartes 🃏";
            }, 3000);
}


function afficher_click(i){
    //lancer au premier click 
    startTimer(); 

    //bloquer le l'affichage des emojis si 2 cartes déjà ouvert 
    if(!peutCliquer) return ; 

    
    //affiche les émojis suite au click 
    const carte = document.getElementById('card'+i);
    carte.classList.add('cardback'); 
    carte.innerHTML = paires[i]; 
    if (indexTab.length < 2) {
        indexTab.push(i); 
        console.log(indexTab); 
        if(indexTab.length === 2)  {
            peutCliquer = false; 
            
            //compter coup une fois les deux cartes cliquer  
            nombreDeCoup(); 
           
            setTimeout(function(){
                verifier_paire(); 
            }, 2000);
           
        }
    } 
   
    
    
}

function afficher_information(){
    
}

//verifier  les cartes sélectionner
function verifier_paire(){
    const elt1 = indexTab[0]; 
    const elt2 = indexTab[1];  

    //supprimer l'apparence du back afin de le remplacer par matched
    document.getElementById('card'+indexTab[0]).classList.remove('cardback'); 
    document.getElementById('card'+indexTab[1]).classList.remove('cardback'); 

    if(paires[elt1] === paires[elt2]) {
        
        
        //changer l'apparence des paires trouvées
        document.getElementById('card'+indexTab[0]).classList.add('matched'); 
        document.getElementById('card'+indexTab[1]).classList.add('matched'); 

        infos.innerHTML = " ✅ Paires trouvées "; 
       
        //remettre les cartes clickables 
        peutCliquer = true;
        
        pairesTrouvées(); 

        
    }else{
        retournerCarte(); 
        console.log("paire non identique"); 
        infos.innerHTML = " ❌ Paires non identiques ";
        setTimeout(function(){
                infos.innerHTML = " Choisissez deux cartes 🃏";
            }, 2000);
           
        
    }

    indexTab = []; 

    
    


}
function melangerCarte(){
    const paires_m = [] ; 
    
    console.log(paires_m.length); 

    while (paires_m.length != 16){
        
        rnd = Math.floor(Math.random()* paires_order.length); 
        
        if (paires_m.indexOf(rnd) === -1){ 
            //indexOf return 1 ou -1
            paires_m.push(rnd);
        }
        
    }
    //floor : arrondi 
    console.log(paires_m); 
    
    for(let i = 0; i < paires_m.length ; i++){
        paires.push(paires_order[paires_m[i]]); 
    }
    
}

function retournerCarte(){
        peutCliquer = true; 
        document.getElementById('card'+indexTab[0]).innerHTML = "?" ; 
        document.getElementById('card'+indexTab[1]).innerHTML = "?" ; 
}
function initGame(){
    infos.innerHTML = " 🌟 Nouveau jeu  ";
    afficher(); 
    let tab = []; 
    //Remettre les compteurs à Zero 
    let coupAffichage = document.getElementById('nbrDecoup'); 
    coupAffichage.innerHTML = 0; 

    let PairesTrouvées = document.getElementById('pairesTrouvées'); 
    PairesTrouvées.innerHTML= 0 ; 

    melangerCarte(); 

    
}
function nombreDeCoup(){
    coup = coup+1; 
    let coupAffichage = document.getElementById('nbrDecoup'); 
    coupAffichage.innerHTML = coup; 

    

}

function pairesTrouvées(){
    varPairesTrouvées = varPairesTrouvées +1; 
    let PairesTrouvées = document.getElementById('pairesTrouvées'); 
    PairesTrouvées.innerHTML= varPairesTrouvées ; 
    if(varPairesTrouvées == 8){
        infos.innerHTML = " 🏆 Félicitation 🔥 Vous avez gagner! "; 
    }
}


// Démarrer le timer
function startTimer() {
    timerInterval = setInterval(() => {
        timer++;
        document.getElementById('timer').textContent = timer + 's';
                }, 1000);

            }
    
