let texte = ";"
for (let i=0;i<17;i++)
//let i = 0;
//while (i<=16)
{
    texte = texte+(Math.pow(2,i));
//  texte += `2^${i}=${Math.pow(2,i)}`;
    let separateur = " - "
    texte = texte+separateur
}
console.log(texte);