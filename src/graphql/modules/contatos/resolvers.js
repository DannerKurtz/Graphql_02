// /modules/someModule/resolvers.js
module.exports = {
  Query: {
    contatos: async (_, args, { CreateContatoService }) =>
      await CreateContatoService.contatos(),
  },
  Mutation: {
    createContato: async (_, { data }, { CreateContatoService }) =>
      await CreateContatoService.createContato(data),
    updateContato: async (_, { id, data }, { CreateContatoService }) =>
      await CreateContatoService.updateContato(id, data),
    deleteContato: async (_, { id, email }, { CreateContatoService }) =>
      await CreateContatoService.deleteContato(id, email),
  },
};
