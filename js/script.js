//Esse é um trecho de código em JavaScript que resolve um exercício que envolve cálculo da média, moda, mediana e variância de uma sequência de números fornecida pelo usuário em um campo de entrada em uma página HTML. O código utiliza várias funções para realizar os cálculos necessários, incluindo a função "somar" para ser usada no método "reduce", a função "encontrarModa" para encontrar a moda da sequência, a função "encontrarMediana" para encontrar a mediana da sequência, e assim por diante. O código também inclui algumas validações para garantir que o usuário insira valores válidos e que haja pelo menos dois valores na sequência para que seja possível calcular a mediana. No final, os resultados são exibidos em uma caixa de texto na página HTML.

function somar(anterior, atual){
    return anterior + atual;
}

function Resolução(){
    var res = window.document.getElementsByClassName('res')[0]
    var numeros = window.document.getElementById('Numeros').value
    if(numeros == 0){
        window.alert('Adicione valores válidos')        //Validação para verificar se há valor
    }
    var regex = /-?\d+(\.\d+)?/g;
    var numerosArray = numeros.match(regex).map(numero => parseFloat(numero));
    if(numerosArray.length == 1){
        window.alert('Adicione 2 valores ou mais')      //Validação de quantidade de numeros
    }

    var soma = numerosArray.reduce(somar);  //Soma dos valores
    var i = numerosArray.length             //Quantidade dos valores
    var media = soma/i                      //Média da sequencia
    var crescente = numerosArray.sort(function(a, b) {  //Ordem crescente
        return a - b;
    });
    
    let SomaDosQuadrados = 0                            //Cálculo da variancia
    let quadrado 
    for(let i = 0; i < numerosArray.length; i++){
        if(numerosArray[i] >= media){
            quadrado = numerosArray[i] - media
        }else{
            quadrado = media - numerosArray[i]
        };
        let f = quadrado * quadrado
        SomaDosQuadrados = SomaDosQuadrados + f
    }
    var V = SomaDosQuadrados / numerosArray.length

function encontrarModa(crescente) {              //cálculo da moda
        let frequencias = {};
        let moda;
        let maxFrequencia = 0;
      
        // Contar a frequência de cada elemento
        for (let i = 0; i < crescente.length; i++) {
          let elemento = crescente[i];
          if (!frequencias[elemento]) {
            frequencias[elemento] = 0;
          }
          frequencias[elemento]++;
        }
      
        // Encontrar o elemento mais frequente
        for (let elemento in frequencias) {
          if (frequencias[elemento] > maxFrequencia) {
            moda = elemento;
            maxFrequencia = frequencias[elemento];
          }
        }
      
        // Verificar se há moda definida
        let modaDefinida = true;
        for (let elemento in frequencias) {
          if (frequencias[elemento] == maxFrequencia && elemento != moda) {
            modaDefinida = false;
            break;
          }
        }
      
        if (!modaDefinida) {
          return "Não há moda definida";
        }
      
        return moda;
    }
    var moda = encontrarModa(crescente);

    function encontrarMediana(numerosArray) {
        var sortedArray = numerosArray.slice().sort(function(a, b) {
          return a - b;
        });
        var len = sortedArray.length;
        var mid = Math.floor(len / 2);
      
        if (len % 2 === 0) {
          return (sortedArray[mid - 1] + sortedArray[mid]) / 2;
        } else {
          return sortedArray[mid];
        }
      }
      var mediana = encontrarMediana(numerosArray);


    res.style.boxShadow = '3px 3px 10px 3px'
    res.style.width = '500px'
    res.style.height = '200px'
    res.style.lineHeight = '30px';
    res.style.borderRadius = '20px'
    res.innerHTML = (`A variancia é <strong>${V}</strong>`)
    res.innerHTML += (`<br>A sequência crescente é <strong>${crescente}</strong>`)
    res.innerHTML += (`<br>A Média é <strong>${media}</strong>`)
    res.innerHTML += (`<br>A Moda é <strong>${moda}</strong>`)
    res.innerHTML += (`<br>A Mediana é <strong>${mediana}</strong>`)
}



