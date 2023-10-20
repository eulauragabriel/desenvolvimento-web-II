const { connect } = require('./db');

async function selectMusicas() {
    const conn = await connect()
    const [rows] = await conn.query('SELECT * FROM musicas;');
    return rows;
}

async function selectArtistas() {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM artistas;');
    return rows;
}

async function selectAlbuns() {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM albuns;');
    return rows;
}

async function insertMusicas(musicas) {
    const conn = await connect();
    const sql = 'INSERT INTO musicas(titulo_musica, ano_lancamento, id_artista, id_album) VALUES (?,?,?,?);';
    const values = [musicas.titulo, musicas.ano, musicas.artista, musicas.album];
    return await conn.query(sql, values);
}

async function insertArtistas(artistas) {
    const conn = await connect();
    const sql = 'INSERT INTO artistas(nome_artista) VALUES (?);';
    const values = [artistas.nome];
    return await conn.query(sql, values);
}

async function insertAlbuns(albuns) {
    const conn = await connect();
    const sql = 'INSERT INTO albuns(titulo_album, ano_lancamento, id_artista) VALUES (?,?,?);';
    const values = [albuns.titulo, albuns.ano, albuns.id_artista];
    return await conn.query(sql, values);
}

async function updateMusicas(id_musica, titulo_musica, ano_lancamento, id_artista, id_album) {
    const conn = await connect();
    const sql = 'UPDATE musicas SET titulo_musica = ?, ano_lancamento = ?, id_artista = ?, id_album = ? WHERE id_musica = ?;';
    const values = [titulo_musica, ano_lancamento, id_artista, id_album, id_musica];
    return await conn.query(sql, values);
}

async function updateArtistas(id_artista, nome_artista) {
    const conn = await connect();
    const sql = 'UPDATE artistas SET nome_artista = ? WHERE id_artista = ?;';
    const values = [nome_artista, id_artista];
    return await conn.query(sql, values);
}

async function updateAlbuns(id_album, titulo_album, ano_lancamento, id_artista) {
    const conn = await connect();
    const sql = 'UPDATE albuns SET titulo_album = ?, ano_lancamento = ?, id_artista = ? WHERE id_album = ?;';
    const values = [titulo_album, ano_lancamento, id_artista, id_album];
    return await conn.query(sql, values);
}

async function deleteMusicas(id_musica) {
    const conn = await connect();
    const sql = 'DELETE FROM musicas WHERE id_musica = ?;';
    return await conn.query(sql, [id_musica]);
}

async function deleteArtistas(id_artista) {
    const conn = await connect();
    const sql = 'DELETE FROM artistas WHERE id_artista = ?;';
    return await conn.query(sql, [id_artista]);
}

async function deleteAlbuns(id_album) {
    const conn = await connect();
    const sql = 'DELETE FROM albuns WHERE id_album = ?;';
    return await conn.query(sql, [id_album]);
}

async function selectMusicaPorId(id) {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM musicas WHERE id_musica = ?', [id]);
    if (rows.length > 0) {
        return rows[0];
    }
    return null;
}

async function updateMusica(id_musica, titulo_musica, ano_lancamento, id_artista, id_album) {
    const conn = await connect();
    const sql = 'UPDATE musicas SET titulo_musica = ?, ano_lancamento = ?, id_artista = ?, id_album = ? WHERE id_musica = ?';
    const values = [titulo_musica, ano_lancamento, id_artista, id_album, id_musica];
    return await conn.query(sql, values);
}



module.exports = {
    selectMusicas,
    selectArtistas,
    selectAlbuns,
    insertMusicas,
    insertArtistas,
    insertAlbuns,
    updateMusicas,
    updateArtistas,
    updateAlbuns,
    deleteMusicas,
    deleteArtistas,
    deleteAlbuns,
    selectMusicaPorId,
    updateMusica
};
