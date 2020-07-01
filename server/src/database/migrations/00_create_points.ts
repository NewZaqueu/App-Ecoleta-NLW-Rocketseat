import Knex from 'knex';

export async function up(knex:Knex){ //variavel knex chamada na funcao é do tipo Knex que foi importa na linha acima
    return knex.schema.createTable('points', table => {
        table.increments('id').primary(); // criando uma coluna id com valores icrementados que serão únicos (chave primária)
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string('uf',2).notNullable();
    })
}

export async function down(knex:Knex){
    return knex.schema.dropTable('points')
}