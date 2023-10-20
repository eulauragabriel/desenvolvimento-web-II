create database musicas;

use musicas;

create table artistas (
    id_artista int auto_increment primary key,
    nome_artista varchar(255) not null
);

create table albuns (
    id_album int auto_increment primary key,
    titulo_album varchar(255) not null,
    ano_lancamento int,
    id_artista int,
    foreign key (id_artista) references artistas(id_artista)
);

create table musicas (
    id_musica int auto_increment primary key,
    titulo_musica varchar(255) not null,
    ano_lancamento int,
    id_artista int,
    id_album int,
    foreign key (id_artista) references artistas(id_artista),
    foreign key (id_album) references albuns(id_album)
);

create view minhas_musicas as select
a.nome_artista as nome_artista,
al.titulo_album as nome_album,
m.titulo_musica as nome_musica,
al.ano_lancamento as ano_lancamento_album,
m.ano_lancamento as ano_lancamento_musica
from artistas a
join albuns al on a.id_artista = al.id_artista
join musicas m on al.id_album = m.id_album;

select * from minhas_musicas;
