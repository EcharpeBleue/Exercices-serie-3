let texte = ";"
for (let i=0;i<17;i++)
{
    texte = texte+(Math.pow(2,i));
    let separateur = " - "
    texte = texte+separateur
}
console.log(texte);