export function oszthato5el(szam){
    let ottelOszthato = false

    if(Number.isInteger(szam)){
        if (szam <= Number.MAX_SAFE_INTEGER){
                if (szam % 5 === 0){
                    ottelOszthato = true
                }

            }else{
                ottelOszthato="Túl nagy szám"
        }
    }else{
        ottelOszthato="nem szám"
    }
    return ottelOszthato;
}
