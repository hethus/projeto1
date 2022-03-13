//jogo simples sobre um aluno enfrentando uma prova!

//LEMBRANDO QUE É APENAS UM JOGO E TUDO QUE ESTA ESCRITO NÃO REFLETE O QUE ACREDITO, É SOMENTE A PERSONALIDADE DO APLICADOR DIGITAL DA PROVA!

//variaveis:
const prompt = require('prompt-sync')();

let nome;
let pontos = 0;

//começo

console.log(`ola aventureiro...

    Bem vindo a esse game de responsabilidade, infelizmente sei que não queria estar aqui, mas dever é dever...     ( ͡◉ ͜ʖ ͡◉)
    E o seu é derrotar um simples boss, mas lembre-se, se não conseguir irá ficar mais um ano nessa sala            ( ͡~ ͜ʖ ͡°) 
    mas não se preocupe, não é nada de mais                                                                         ( ͡☉ ͜ʖ ͡☉)
    enfim, acho que enrolei muito, afinal teve um ano inteiro para terminar sua magnifica aventura dos estudos      ( ͡° ͜ʖ ͡°)
    e ah, nem perguntei o seu nome, quem é você ó ser pensante?                                                     ( ͠° ͟ʖ ͡°)\n`);

//variavel nome:

    nome = prompt("digite seu nome: ");

//arrays:

const perguntas = ["\nestudou para a prova? ", "\nprestou atenção na aula? ", "\nsentava na frente? ", "\nfez os projetos? ", "\nera esforçado? ", "\nera bom com o professor? ", "\nsempre estava com o material que o professor pedia? ", "\najudava os outros alunos? ", "\nrespeitava as regras? ", "\nOLHE ISSO, UM PONTO GRATIS, DIGA 'NO' E GANHE UM PONTOOOOO: ", "\ndeixava de ir em festas para estudar? ", "\narte é uma materia? >-< ", "\ndeixaria de entregar um ponto seu para um amigo que não estudou? "];

const veri5 = [`\n5 "yes" em sequencias, musicas para os meus ouvidos eletronicos!!!!                           ᕦ(ò_óˇ)ᕤ
parabens, você passou com total aproveitamento, você é top!`, `\n5 "yes" em sequencias ${nome}!                                                                            ᕦ(ò_óˇ)ᕤ
você é bom mesmo no que faz, se continuar desse jeito, em mil anos você tem chance de chegar no meu nivel hohohoho!
passou com total aproveitamento!`, `\n5 "yes" em sequencias, caramba...                                                                 ᕦ(ò_óˇ)ᕤ
tem certeza que você,${nome} não é o Einsten não??? passou com total aproveitamento!`];

const veri4 = [`\n4 "yes", bom ${nome}, foi um otimo numero, mas poderia ter sido melhor...                                 ┬─┬ノ( º _ ºノ)
parabens, passou de ano!...`, `\n4 "yes", é... me surpreendeu bastante viu...
até que você é bom... quase foi perfeito, droga!       ┬─┬ノ( º _ ºノ)`];

const veri3 = [`\n3 "yes", não foi o melhor numero, mas ta tudo bem e você sabe o porquê... hehehe                                           ಠ‿↼ 
vai ficar de recuperação!!!!! ebaaaaa, vai estudar mais ${nome}!`, `\n3 "yes" não é tãooooo burro assim vai, achei que seria pior ${nome}, afinal, estamos falando de você, mas mesmo assim....          ಠ‿↼ 
mandou bem.... para ir direto para a recuperação! bwahahahaha`];

const veri2 = [`\n2 "yes" ou 1 "yes", caramba em, eu confiava em você, pensava que conseguiria chegar a 5.... 5 "no"....         ರ_ರ
nem isso tu consegue, enfim, VAI TER QUE ESTUDAR MUITO NA RECUPERAÇÃO EM!!!!`, `\n2 "yes" ou 1 "yes", parece eu indo no banheiro, essa prova ta igualzinha...          ರ_ರ
quem sabe ano que vem você não aumenta essa nota patetica, até la vai estudar muito, precisa!`, `\n2 "yes" ou 1 "yes", bom eu ja sabia que isso iria acontecer, não me surpreendeu em nada...
afinal, eu te conheço, estou nos seus dispositivos... sempre... te monitorando ${nome} <3                 ʘ‿ʘ`];

const veri0 = [`\nTa bom.... ai é de mais, ate para você.... 5 "no" em sequencia, tu é burro em...                                               (╯°□°）╯︵ ┻━┻
    nem precisa fazer a recuperação, ja repete direto, mais facil ${nome}...`, `\n${nome} ai é muita sacanagem comigo né? 5 "no" seguidos...
    qual foi o problema? não sabe responder 5 "yes seguidos??? ainda conferi para saber se estava facil para o seu nivel!          (╯°□°）╯︵ ┻━┻`];

console.log(`\nInteressante saber disso caro(a) ${nome}
    então, preparado para o que vem a seguir?...                                                                    (ง ͠° ͟ل͜ ͡°)ง\n`);

//aleatoriedade veri:

let verirN0 = Math.floor(Math.random() * veri0.length);
let verirN2 = Math.floor(Math.random() * veri2.length);
let verirN3 = Math.floor(Math.random() * veri3.length);
let verirN4 = Math.floor(Math.random() * veri4.length);
let verirN5 = Math.floor(Math.random() * veri5.length);


//começa:

let dado = prompt("yes or no? ").toLowerCase();

if(dado == "yes"){
    console.log(`\nSua resposta foi positiva!
    parabens, agora pode sofrer junto com os outros estudantes, então vamos lá...                                   ( ͡ᵔ ͜ʖ ͡ᵔ )`);
    
    //gera aleatorio/mostra/pergunta/apaga/soma se necessario

    let random1 = Math.floor(Math.random() * perguntas.length);
    console.log(perguntas[random1]);
    let resposta = prompt("yes or no? ").toLowerCase();
    perguntas.splice(random1, 1);
    if(resposta == "yes"){
        pontos++;
    }

    let random2 = Math.floor(Math.random() * perguntas.length);
    console.log(perguntas[random2]);
    resposta = prompt("yes or no? ").toLowerCase();
    perguntas.splice(random2, 1);
    if(resposta == "yes"){
        pontos++;
    }

    let random3 = Math.floor(Math.random() * perguntas.length);
    console.log(perguntas[random3]);
    resposta = prompt("yes or no? ").toLowerCase();
    perguntas.splice(random3, 1);
    if(resposta == "yes"){
        pontos++;
    }

    let random4 = Math.floor(Math.random() * perguntas.length);
    console.log(perguntas[random4]);
    resposta = prompt("yes or no? ").toLowerCase();
    perguntas.splice(random4, 1);
    if(resposta == "yes"){
        pontos++;
    }

    let random5 = Math.floor(Math.random() * perguntas.length);
    console.log(perguntas[random5]);
    resposta = prompt("yes or no? ").toLowerCase();
    perguntas.splice(random5, 1);
    if(resposta == "yes"){
        pontos++;
    }

    //calcular pontos:
    
    if(pontos == 5){
        console.log(veri5[verirN5]);

    }else if(pontos == 4){
        console.log(veri4[verirN4]);

    }else if(pontos == 3){
        console.log(veri3[verirN3]);

    }else if(pontos == 2 || pontos == 1){
        console.log(veri2[verirN2]);
        
    }else if(pontos == 0){
        console.log(veri0[verirN0]);

    }else{
        console.log(`erroooooooooooooooooooooooooooooo                                             ༼ ºل͟º ༼ ºل͟º ༼ ºل͟º ༽ ºل͟º ༽ ºل͟º ༽`);
    }

//desistencias:

}else if(dado == "no"){
    console.log(`\nSua resposta foi negativa!
    Então repita o ano sem ter o direito de fazer o teste ${nome}!                                                        ヾ(⌐■_■)ノ♪`);

}else{
    console.log(`\nSua resposta foi invalida, caro(a) ${nome}!
    Então repita o ano por ser burro de mais e não ter conseguido responder uma pergunta tão simples!               ಠ╭╮ಠ`);

}
