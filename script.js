function converter(){
    let valor = parseFloat(document.getElementById("reais").value);
    let tela = document.getElementById("content");
    let url = "https://economia.awesomeapi.com.br/json/last/USD-BRL";
   $.ajax({
    url: url,
    data: "",
    type: "GET",
    success: function(resp){
        let resultado = resp.USDBRL.high * valor;
       tela.innerHTML=`<h2>Valor Convertido em Reais<br><br>R$${resultado.toFixed(2)}</h2> <button onClick="recarregar()" >Converter Novamente</button>`
       
    }
   });


}
function recarregar (){
    let tela = document.getElementById("content");
    tela.innerHTML=`<h2>Conversor de Moeda</h2>
        <p>Que tal converter esse valor?</p>
        <input type="number" id="reais" placeholder="R$"><br><br>
        <button onclick="converter()">Bora converter!</button>`
}