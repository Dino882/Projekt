use master;
drop database if exists Belablok;
create database Belablok collate Croatian_CI_AS;
use Belablok
--drop database Belablok

--drop table igraci
create table igraci(
sifra int not null primary key identity (1,1),
ime varchar(50) not null,
prezime varchar(50) not null
);

--drop table parovi
create table parovi(
sifra int not null primary key identity (1,1),
igrac1 int not null,
igrac2 int not null,
NadimakIgrac1 varchar (50) not null,
NadimakIgrac2 varchar (50) not null
);

--drop table mijesanja
create table mijesanja (
sifra int not null primary key identity (1,1),
BodoviMi int not null,
BodoviVi int not null,
ZvanjeMi int not null, 
ZvanjeVi int not null,
stiglja int,
belot int
);

--drop table partija
create table partija (
sifra int not null primary key identity (1,1),
datum datetime,
mijesanje int not null,
par1 int not null,
par2 int not null,
);


alter table parovi add foreign key (igrac1) references igraci (sifra);
alter table parovi add foreign key (igrac2) references igraci (sifra);

alter table partija add foreign key (par1) references parovi (sifra);
alter table partija add foreign key (par2) references parovi (sifra);
alter table partija add foreign key (mijesanje) references mijesanja (sifra);

