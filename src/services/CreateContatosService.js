// /services/CreateContatosService.js
const db = require("../db");

class CreateContatoService {
  constructor(service) {
    this.service = service;
  }

  contatos = async () => {
    return await this.service("contatos").select();
  };

  createContato = async (data) => {
    return await (
      await this.service("contatos").insert(data).returning("*")
    )[0];
  };

  updateContato = async (id, data) => {
    return await (
      await this.service("contatos").update(data).where({ id }).returning("*")
    )[0];
  };

  deleteContato = async (id, email) => {
    if (id) {
      const contatoDeleteId = await this.service("contatos")
        .delete()
        .where({ id });
      return contatoDeleteId;
    }
    if (email) {
      const contatoDeleteEmail = await this.service("contatos")
        .delete()
        .where({ email });
      return contatoDeleteEmail;
    }

    return false;
  };
}

module.exports = new CreateContatoService(db);
