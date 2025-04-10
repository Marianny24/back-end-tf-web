//bd.js
import pkg from "pg";
const { Pool } = pkg;

async function connect() {
  const pool = new Pool({
    connectionString: process.env.URL_BD,
  });
  return pool.connect();
}


async function autenticarUsuario(email, senha) {
  const client = await connect();
  const query = "SELECT * FROM usuarios WHERE email = $1 AND senha = $2";
  const usuario = [email, senha];
  const res = await client.query(query, usuario);
  return res.rows[0];
}

async function selectUsuarios() {
  const client = await connect();
  const res = await client.query("SELECT * FROM usuarios");
  return res.rows;
}
async function selectUsuario(id) {
  const client = await connect();
  const query = "SELECT * FROM usuarios WHERE id = $1";
  const usuario = [id];
  const res = await client.query(query, usuario);
  client.release();
  return res.rows;
}

async function insertUsuario(data) {
  const client = await connect();
  const query = "INSERT INTO usuarios (nome,senha,email) VALUES ($1,$2,$3) ";
  const usuario = [data.nome, data.senha, data.email];
  await client.query(query, usuario);
  client.release();
}

async function deleteUsuario(id) {
  const client = await connect();
  const query = "DELETE FROM usuarios WHERE id = $1";
  await client.query(query, [id]);
  client.release();
}

async function updateUsuario(id, data) {
  const client = await connect();
  const query = "UPDATE usuarios SET nome = $1, email = $2, senha = $3 WHERE id = $4";
  const usuario = [data.nome, data.email, data.senha, id];
  await client.query(query, usuario);
  client.release();
}

export { selectUsuarios, selectUsuario, insertUsuario, deleteUsuario, updateUsuario, autenticarUsuario };