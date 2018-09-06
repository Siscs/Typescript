
function Teste(nome) {
	this.Nome = nome;
};

Teste.prototype.MostrarNome = function() {
	return 'Ola ' + this.Nome + ' !!!!';
};

var executar = function(nome) {
    return new Teste(nome);
}

var invocar = executar('Cesar e ryan');

console.log(invocar.MostrarNome());
