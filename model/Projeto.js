var conexao = require("../config/database");

var ProjetoSchema = conexao.Schema({
  nome: { type: "String" },
  descricao: { type: "String" },
  foto: { type: "String" },
  dataInicio: { type: "Date" },
  previsaoTermino: { type: "Date" },
  desenvolvedores: { type: conexao.Schema.Types.ObjectId },
});

module.exports = conexao.model("Projeto", ProjetoSchema);
