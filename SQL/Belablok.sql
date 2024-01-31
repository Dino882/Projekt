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


select * from igraci;

insert into igraci (ime,prezime) values
('Dino', 'Sabljiæ'), --1
('Pero', 'Periæ'), --2
('Marko', 'Markiæ'), --3
('Ivan', 'Ivaniæ'); --4

select * from parovi;


insert into parovi (igrac1,igrac2,NadimakIgrac1,NadimakIgrac2) values
(1,2,'MI','MI'); --7
insert into parovi (igrac1,igrac2,NadimakIgrac1,NadimakIgrac2) values
(3,4,'VI','VI'); --8


select * from mijesanja
insert into mijesanja (BodoviMi,BodoviVi,ZvanjeMi,ZvanjeVi,stiglja,belot)
values (85,77,20,0,null,null); --4

insert into mijesanja (BodoviMi,BodoviVi,ZvanjeMi,ZvanjeVi,stiglja,belot)
values (100,62,0,0,null,null); --5


select* from partija 
insert into partija (datum,mijesanje,par1,par2)
values ('2024-01-31 19:00:00',4,7,8)

insert into partija (datum,mijesanje,par1,par2)
values ('2024-01-31 20:00:00',5,7,8)





