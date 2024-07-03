const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
	class Pessoa extends Model {
		static associate(models) {}
	}
	Pessoa.init(
		{
			nome: DataTypes.STRING,
			email: DataTypes.STRING,
			cpf: DataTypes.STRING,
			ativo: DataTypes.BOOLEAN,
			role: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Pessoa',
			tableName: 'pessoas',
		},
	);
	return Pessoa;
};
