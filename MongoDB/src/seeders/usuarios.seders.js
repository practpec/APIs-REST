require('dotenv').config();
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');

const { MONGO_URI, SALTOS_BCRYPT } = process.env;

const usuarios = [
    { nombre: "nombre1", email: "email1@gmail.com", password: bcrypt.hashSync('1234', Number(SALTOS_BCRYPT)), createdAt: new Date(),
    updatedAt: null,deleted: false, deletedAt: null},
    { nombre: "nombre2", email: "email1@gmail.com", password: bcrypt.hashSync('1234', Number(SALTOS_BCRYPT)), createdAt: new Date(),
    updatedAt: null,deleted: false, deletedAt: null},
    { nombre: "nombre3", email: "email1@gmail.com", password: bcrypt.hashSync('1234', Number(SALTOS_BCRYPT)), createdAt: new Date(),
    updatedAt: null,deleted: false, deletedAt: null},
    { nombre: "nombre4", email: "email1@gmail.com", password: bcrypt.hashSync('1234', Number(SALTOS_BCRYPT)), createdAt: new Date(),
    updatedAt: null,deleted: false, deletedAt: null},
    { nombre: "nombre5", email: "email1@gmail.com", password: bcrypt.hashSync('1234', Number(SALTOS_BCRYPT)), createdAt: new Date(),
    updatedAt: null,deleted: false, deletedAt: null},
    
];

const insertData = async () => {
    try {
        const collectionName = 'Usuarios';
        const MONGO_DB ='tacosCopiaseg'
        const client = new MongoClient(MONGO_URI);
        await client.connect();

        const db = client.db(MONGO_DB);
        const collection = db.collection(collectionName);

        await collection.insertMany(usuarios);
        client.close();
        console.log("Usuarios creados exitosamente!");
    } catch (error) {
        console.error("No se pudieron crear los usuarios", error);
    }
};

insertData();

