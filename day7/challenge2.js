const  etudiant={
    nom : 'ahmed',
    prenom : 'sedki',
    note : [12,18,9,16 ]
}
let m = 0 ;
for (let i = 0; i < etudiant.note.length; i++) {
    m +=etudiant.note[i];
    
}
console.log('bonjour ' + etudiant.nom +' '+ etudiant.prenom + ' votre notes est ' + etudiant.note + ' et votre moyenne est '+ m/etudiant.note.length  )