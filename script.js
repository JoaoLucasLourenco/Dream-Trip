var pacotes

function Destino(nome,passagem,hospedagem){
    this.nome = nome;
    this.passagem =  passagem;
    this.hospedagem =  hospedagem;
}

const slz = new Destino("São Luís", [0, 450.0, 850.0, 950.0],[80.0,150.0,200.0]);
const fort = new Destino("Fortaleza", [450.0, 0, 850.0, 920.0],[100.0,180.0,250.0]);
const bcn = new Destino("Balneário Camburiú", [850.0, 1100.0, 0, 350.0],[110.0,160.0,350.0]);
const rj = new Destino("Rio de Janeiro", [900.0,1000.0,350.0, 0],[110.0,160.0,220.0]);
const destinos = [slz,fort,bcn,rj];

function CalculaDiaria(){
  var dest = document.getElementById("dest").value;
  var cat = document.getElementById("cat").value;
  var dias = document.getElementById("diarias").value;
  var quartos = document.getElementById("quartos").value;
  var totalhosp = (quartos * dias * destinos[dest].hospedagem[cat]);
  document.getElementById("total").style.display = 'block';
  document.getElementById("subtotal").innerHTML = totalhosp.toFixed(2);
  return totalhosp;  
}

function CalculaPass(){
  var or = document.getElementById("origem").value;
  var dest = document.getElementById("dest").value;
  var passageiros = document.getElementById("pass").value;
  var totalpass = (passageiros * destinos[dest].passagem[or]);
  document.getElementById("total").style.display = 'block';
  document.getElementById("subtotal").innerHTML = totalpass.toFixed(2);
  return totalpass;
}

function TotalPacote(){
  var totalhosp = CalculaDiaria();
  var totalpass = CalculaPass();
  var totalpac = (totalhosp + totalpass);
  document.getElementById("total").style.display = 'block';
  document.getElementById("subtotal").innerHTML = totalpac.toFixed(2);
  return totalpac;
}


function AVista(){
  document.getElementById("avista").style.display = 'block';
  document.getElementById("parcelado").style.display = 'none';
  var subtotal = document.getElementById("subtotal").textContent;
  document.getElementById("subtotalformatado").style = 'text-decoration: line-through';
  var totalavista = 0.95 * parseFloat(subtotal);
  document.getElementById("totalavista").innerHTML = totalavista.toFixed(2);


}

function Parcelar(){
  document.getElementById("avista").style.display = 'none';
  document.getElementById("parcelado").style.display = 'block';
}

function CalculaParc(){
  var parcelas = document.getElementById("parcelas").value;
  
  if (parcelas>1){
    document.getElementById("nparcbox").style.display = 'block';
    var subtotal = document.getElementById("subtotal").textContent;
    document.getElementById("subtotalformatado").style = 'text-decoration: line-through';
  var juros;
  if (parcelas<11){
    var totalparc =  parseFloat(subtotal) / parcelas;
    juros = ' sem juros';
  }
  else {
    var totalparc =  1.03 * (parseFloat(subtotal) / parcelas) ;
    juros = ' com juros';
  } 
    
  document.getElementById("totalparc").innerHTML = totalparc.toFixed(2);
  document.getElementById("nparc").innerHTML = parcelas;
  document.getElementById("juros").innerHTML = juros;
  }
  else{
    document.getElementById("nparcbox").style.display = 'none';
  }
  

}

function Check(x){
  var x;
  
  if (x=="pass"){
    var or = document.getElementById("origem").value;
    var dest = document.getElementById("dest").value;
    if (isNaN (or) || isNaN(dest)){
          window.alert("Selecione todos os campos.");
    }
    else if(or == dest){
    window.alert("A origem e o destino são iguais!");
    }
    else{
      CalculaPass();
    }
  }
    
  else if (x=="hosp"){
    var cat = document.getElementById("cat").value;
    var dias = document.getElementById("diarias").value;
    var quartos = document.getElementById("quartos").value;
    var dest = document.getElementById("dest").value;

   if (isNaN (dest) || isNaN(cat) || isNaN(dias) || isNaN(quartos)){
    window.alert("Selecione todos os campos.");
    }
    else{ 
      CalculaDiaria();
    }
  }
    
  else if (x=="pac"){
    var cat = document.getElementById("cat").value;
    var dias = document.getElementById("diarias").value;
    var quartos = document.getElementById("quartos").value;
    var or = document.getElementById("origem").value;
    var dest = document.getElementById("dest").value;
    if (isNaN (or) || isNaN (dest) || isNaN(cat) || isNaN(dias) || isNaN(quartos)){
    window.alert("Selecione todos os campos.");
    }
    else if(or == dest){
    window.alert("A origem e o destino são iguais!");
    }
    else{ 
      TotalPacote();
    }
  }
}
