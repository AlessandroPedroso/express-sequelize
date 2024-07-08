class Controller {
	constructor(entidadeService) {
		this.entidadeService = entidadeService;
	}

	async pegaTodos(req, res) {
		try {
			const listaDeRegistros = await this.entidadeService.pegaTodosOsRegistros();
			return res.status(200).json(listaDeRegistros);
		} catch (error) {
			//erro
		}
	}
}

module.exports = Controller;
