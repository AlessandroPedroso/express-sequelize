const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
	class Pessoa extends Model {
		static associate(models) {
			Pessoa.hasMany(models.Curso, {
				foreignKey: 'docente_id',
			});

			Pessoa.hasMany(models.Matricula, {
				foreignKey: 'estudante_id',
				//escopo de associação
				// scope: { status: 'matriculado' },
				as: 'aulasMatriculadas',
			});
		}
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
			paranoid: true,
			//escopo somente para models
			defaultScope: {
				where: {
					ativo: true,
				},
			},
			scopes: {
				todosOsRegistros: {
					where: {},
				},
			},
		},
	);
	return Pessoa;
};
