const database = require('../models');

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
class PessoaController {
	static async pegaTodas(_req, _res) {
		try {
			const listaDePessoas = await database.Pessoa.findAll();
			return _res.status(200).json(listaDePessoas);
		} catch (erro) {}
	}
}

module.exports = PessoaController;
