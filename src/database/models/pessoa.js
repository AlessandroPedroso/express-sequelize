const { Model } = require('sequelize');
const isCpfValido = require('../../utils/validaCpfHelper.js');

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
			nome: {
				type: DataTypes.STRING,
				validate: {
					len: {
						args: [3, 30],
						msg: 'o campo nome deve ter no mínimo 3 caracteres',
					},
				},
			},
			email: {
				type: DataTypes.STRING,
				validate: {
					isEmail: {
						args: true,
						msg: 'formato do email inválido',
					},
				},
			},
			cpf: {
				type: DataTypes.STRING,
				validate: {
					cpfEhValido: (cpf) => {
						if (!isCpfValido(cpf)) throw new Error('numero de CPF inválido');
					},
				},
			},
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
