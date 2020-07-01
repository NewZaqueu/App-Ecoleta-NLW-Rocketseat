import {Request, Response} from 'express';
import knex from '../database/connection'

class ItensController {
    async index(req:Request, res: Response){
        const itens = await knex('itens').select('*'); //apenas nome do arquivo de imagens
        const serializeItens = itens.map(item => {
        return { // editando os dados (serialize) adicionando endereço das imagens
            id: item.id,
            title: item.title,
            image_url: `http://127.0.0.1:3333/uploads/${item.image}`
            }
        })

        return res.json(serializeItens);
    }   
}


export default ItensController;