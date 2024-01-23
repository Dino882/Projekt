use master;
drop database if exists Belablok;
create database Belablok collate Croatian_CI_AS;
use Belablok
--drop database Belablok

--drop table igraci1
create table igraci1(
sifra int not null primary key identity (1,1),
ime varchar(50) not null,
prezime varchar(50) not null
);

--drop table igraci2
create table igraci2(
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
prolaz bit,
belot int
);

--drop table partija
create table partija (
sifra int not null primary key identity (1,1),
datum datetime,
mijesanje int not null,
par int not null,
UkupniBodoviIgrac1 int not null,
UkupniBodoviIgrac2 int not null,
BrojStiglji int
);


alter table parovi add foreign key (igrac1) references igraci1 (sifra);
alter table parovi add foreign key (igrac2) references igraci2 (sifra);

alter table partija add foreign key (par) references parovi (sifra);
alter table partija add foreign key (mijesanje) references mijesanja (sifra);


select * from igraci1;
insert into igraci1 (ime,prezime) values ('Dino Sabljic', 'Petar Peric');



select * from igraci2;
insert into igraci2 (ime,prezime) values ('Ivan Ivic', 'Luka Lukic');

select * from parovi;


