//CAMADA INTERMEDIÁRIA
<<<<<<< HEAD
const dataSource = require('../models');
=======
const dataSource = require('../database/models');
>>>>>>> 062d51beb5b9ce0548c2f5c9a0f8cbdc1f77475d

class Services {
	constructor(nomeDoModel) {
		this.model = nomeDoModel;
	}

	async pegaTodosOsRegistros() {
		return dataSource[this.model].findAll();
	}

	async pegaRegistrosPorEscopo(escopo) {
		return dataSource[this.model].scope(escopo).findAll();
	}

	async pegaUmRegistroPorId(id) {
		return dataSource[this.model].findByPk(id);
	}

	async criaRegistro(dadosDoRegistro) {
		return dataSource[this.model].create(dadosDoRegistro);
	}

	async atualizaRegistro(dadosAtualizados, id) {
		const listaDeRegistrosAtualizados = dataSource[this.model].update(dadosAtualizados, {
			where: {
				id: id,
			},
		});

		if (listaDeRegistrosAtualizados[0] === 0) {
			return false;
		}

		return true;
	}

	async excluiRegistro(id) {
		return dataSource[this.model].destroy({ where: { id: id } });
	}
}

module.exports = Services;
