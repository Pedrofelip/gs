const btn = document.getElementById("botao_cad");
const input1 = document.getElementById("input_1");
const input2 = document.getElementById("input_2");
const input3 = document.getElementById("input_3");
const input4 = document.getElementById("input_4");
const input5 = document.getElementById("input_5");
const input6 = document.getElementById("input_6");
const input7 = document.getElementById("input_7");
const input8 = document.getElementById("input_8");
const input9 = document.getElementById("input_9");
const input10 = document.getElementById("input_10");
const label1 = document.getElementById("label_1");
const label2 = document.getElementById("label_2");
const label3 = document.getElementById("label_3");
const label4 = document.getElementById("label_4");
const label5 = document.getElementById("label_5");
const label6 = document.getElementById("label_6");
const label7 = document.getElementById("label_7");
const label8 = document.getElementById("label_8");
const label9 = document.getElementById("label_9");
const label10 = document.getElementById("label_10");
const alerta1 = document.getElementById("alerta_1");
const alerta2 = document.getElementById("alerta_2");
const alerta3 = document.getElementById("alerta_3");
const alerta4 = document.getElementById("alerta_4");
const alerta5 = document.getElementById("alerta_5");
const alerta6 = document.getElementById("alerta_6");
const alerta7 = document.getElementById("alerta_7");
const alerta8 = document.getElementById("alerta_8");
const alerta9 = document.getElementById("alerta_9");
const alerta10 = document.getElementById("alerta_10");
const re = /\S+@\S+\.\S+/;


input1.oninput = function () {
    this.style.border = this.value.length < 5 || this.value == null ? "2px solid red" : "2px solid #48744C";
    label1.style.color = this.value.length < 5 || this.value == null ? "red" : "#48744C";
    alerta1.innerHTML = this.value.length < 5 || this.value == null ? "Nome invalido!!!" : "";
}

input2.oninput = function () {
    this.style.border = this.value.length < 5 || this.value == null ? "2px solid red" : "2px solid #48744C";
    label2.style.color = this.value.length < 5 || this.value == null ? "red" : "#48744C";
    alerta2.innerHTML = this.value.length < 5 || this.value == null ? "Sobrenome invalido!!!" : "";
}

input3.oninput = function (email) {


    this.style.border = re.test(this.value) != true || this.value == null ? "2px solid red" : "2px solid #48744C";
    label2.style.color = re.test(this.value) != true || this.value == null ? "red" : "#48744C";
    alerta3.innerHTML = re.test(this.value) != true || this.value == null ? "Email invalido!!!" : "";
}

input4.oninput = function () {
    this.style.border = this.value.length != 9 || this.value == null ? "2px solid red" : "2px solid #48744C";
    label4.style.color = this.value.length != 9 || this.value == null ? "red" : "#48744C";
    alerta4.innerHTML = this.value.length != 9 || this.value == null ? "Telefone invalida!!!" : "";

}

input5.oninput = function () {
    this.style.border = this.value.length != 9 || this.value == null ? "2px solid red" : "2px solid #48744C";
    label5.style.color = this.value.length != 9 || this.value == null ? "red" : "#48744C";
    alerta5.innerHTML = this.value.length != 9 || this.value == null ? "Telefone invalida!!!" : "";
}

input6.oninput = function () {
    this.style.border = this.value == "" ? "2px solid red" : "2px solid #48744C";
    label6.style.color = this.value == "" ? "red" : "#48744C";
    alerta6.innerHTML = this.value == "" ? "Campo vazio!!!" : "";
}

input7.oninput = function () {
    this.style.border = this.value == "" ? "2px solid red" : "2px solid #48744C";
    label7.style.color = this.value == "" ? "red" : "#48744C";
    alerta7.innerHTML = this.value == "" ? "Campo vazio!!!" : "";
}

input8.oninput = function () {
    this.style.border = this.value == "" ? "2px solid red" : "2px solid #48744C";
    label8.style.color = this.value == "" ? "red" : "#48744C";
    alerta8.innerHTML = this.value == "" ? "Campo vazio!!!" : "";
}

input9.oninput = function () {
    this.style.border = this.value == "" ? "2px solid red" : "2px solid #48744C";
    label9.style.color = this.value == "" ? "red" : "#48744C";
    alerta9.innerHTML = this.value == "" ? "Campo vazio!!!" : "";
}

input10.oninput = function () {
    this.style.border = this.value == "" ? "2px solid red" : "2px solid #48744C";
    label10.style.color = this.value == "" ? "red" : "#48744C";
    alerta10.innerHTML = this.value == "" ? "Campo vazio!!!" : "";
}

btn.addEventListener("click", function () {
    if (input1.value.length >= 5 && input2.value.length >= 5 && re.test(input3.value) == true && input4.value.length >= 6 && input4.value.length <= 8 && input5.value == input4.value && input6.value != "" && input7.value != "" && input8.value != "" && input9.value != "" && input10.value != "") {
        alert("contato cadastrado!!!");
    } else {
        alert("formulario preenchido errado, tente novamente")
    }
});