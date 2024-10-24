function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}let campoIdade;
let campoAção;
let campoEsportes ;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de jogos");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoAção = createCheckbox("Gosta de Ação?");
  campoEsportes  = createCheckbox("Gosta de Esportes ?");
}

function draw() {
  background("#1889E4");
  let idade = campoIdade.value();
  let gostaDeAção = campoAção.checked();
  let gostaDeEsportes  = campoEsportes .checked();
  let recomendacao = geraRecomendacao(idade, gostaDeAção, gostaDeEsportes );

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeAção, gostaDeEsportes ) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "GTA5";
    } else {
      if (idade >= 12) {
        if(gostaDeEsportes || gostaDeAção) {
          return "call of duty";          
        } else{
         return RedDead;
        }
      } else {
        if (gostaDeEsportes ) {
          return "conter strike";
        } else {
          return "fortnite";
        }
      }
    }
  } else {
    if (gostaDeAção) {
      return "FIFA";
    } else {
      return "need for speed";
    }
  }
}
