const connection = require('../database/conection');

module.exports = {
    async create(request, response) {

        const { id } = request.body;

        console.log(id);

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

        if (!ong) {
            return response.status(400).json({ error: 'Ong não encontrada com este id' });
        }

        return response.json(ong);
    }
}