
function microondas(opcao, tempo){
        switch(opcao){
            case 1:
                if(tempo<10){
                    console.log(`Tempo insuficiente para preparar pipoca`)
                } else if(tempo >20 && tempo <=30){
                    console.log(`Sua pipoca queimou!`)
                }   else if(tempo >30){
                        console.log(`Kaboom! Sua pipoca explodiu o microondas!`)
                }       else{
                        console.log(`Pipoca prontoa! Bom apetite!`)
                }
                break
            case 2:
                if(tempo<8){
                    console.log(`Tempo insuficiente para preparar macarrão`)
                } else if(tempo >16 && tempo <= 24 ){
                    console.log(`Seu macarrão queimou!`)
                }   else if(tempo >24){
                        console.log(`Kaboom! Seu macarrão explodiu o microondas!`)
                }       else{
                        console.log(`Macarrão pronto! Bom apetite!`)
                }
                break
            case 3:
                if(tempo<15){
                    console.log(`Tempo insuficiente para preparar carne`)
                } else if(tempo >30 && tempo <=45){
                    console.log(`Sua carne queimou!`)
                }   else if(tempo >45){
                        console.log(`Kaboom! Sua carne explodiu o microondas!`)
                }       else{
                        console.log(`Carne pronta! Bom apetite!`)
                }
                break
            case 4: 
            if(tempo<12){
                console.log(`Tempo insuficiente para preparar feijão`)
            } else if(tempo >24 && tempo <= 36){
                console.log(`Seu feijão queimou!`)
            }   else if(tempo >36){
                    console.log(`Kaboom! Seu feijão explodiu o microondas!`)
            }       else{
                    console.log(`Feijão pronto! Bom apetite!`)
            }
                break
            case 5:
                if(tempo<8){
                    console.log(`Tempo insuficiente para preparar brigadeiro`)
                } else if(tempo >16 && tempo <= 24){
                    console.log(`Seu brigadeiro queimou!`)
                }   else if(tempo >24){
                        console.log(`Kaboom! Seu brigadeiro explodiu o microondas!`)
                }       else{
                        console.log(`Brigadeiro pronto! Bom apetite!`)
                }
                break
            default:
                console.log(`Prato Inexistente`)
                break
        }
    
    
    }
    
    console.log(`--------Microondas iniciado--------`)
    console.log(`--------vooooooooooooooooom--------`)
    console.log(`--------PÍ!.....PÍ!.....PÍ!--------`)

    //local para chamada da função
    microondas(2,17)
    