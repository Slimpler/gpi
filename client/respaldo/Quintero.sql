create database convenios;
use convenios;

-- Directiva --
create table directiva(
id_cargo int(5) not null, 
nombre_dir varchar(45) not null,
rut_dir varchar(10) not null,
tipo_directiva enum('Presidente','Tesorero','Secretario') not null,
constraint pk_cargo primary key (id_cargo)
);

-- Tabla Funcionarios --
create table funcionarios(
rut_func varchar(10) not null,
nombre_func varchar(45) not null,
edad_func int(3) not null,
sueldo_func int(10) not null,
direccion_func varchar(50) not null,
constraint pk_func primary key (rut_func)
);

-- Afiliado --
create table afiliado(
rut_afiliado varchar(10) not null,
nombre_afiliado VARCHAR(50) NOT NULL,
direccion_afiliado VARCHAR(45) NOT NULL,
telefono_afiliado varchar(12) NOT NULL,
celular_afiliado varchar(12) NOT NULL,
edad_afiliado int(5) NOT NULL,
sueldo_afiliado int(5) not null,
antiguedad_afiliado date not null,
constraint pk_afiliado primary key (rut_afiliado)
);

-- Tabla Datos --
create table datos(
id_pass int(5) not null, 
pass_id_dir int(5) not null,
pass_rut_afi varchar(10) not null,
constraint pk_id primary key (id_pass)
);

-- Tabla Prestador de Convenios --
create table pres_convenio(
rut_pres_convenio varchar(10) not null,
nombre_pres_convenio varchar(45) not null,
direccion_pres_convenio varchar(80) not null,
telf_pres_convenio varchar(12) not null,
constraint pk_pres_convenio primary key (rut_pres_convenio)
);

-- Tabla Convenios --
create table convenio(
id_convenio int(5) not null, 
nombre_convenio varchar(45) not null,
fecha_inicio_convenio date not null,
fecha_termino_convenio date not null,
cupo_convenio int(1),
tipo_convenio enum('salud','deportes','estetica','creditos','hogar','tecnologia','otros') not null,
precio_convenio int(5) not null,
constraint pk_convenio primary key (id_convenio)
);

-- Tabla Subvenciones --
create table subvenciones(
id_subv int(5) not null,
monto_subv int(12) not null,
fecha_subv datetime not null,
constraint pk_subv primary key (id_subv)
);

-- Tabla Prestamos --
create table prestamos(
id_prest int(5) not null,
monto_prest int(12) not null,
fecha_prest datetime not null,
constraint pk_prest primary key (id_prest)
);

-- Tabla Pagos-Afiliados --
create table pagos_afiliado(
id_pago int(5) not null,
rut_afiliado varchar(10) not null
);

-- Tabla Pagos-Cuotas --
create table pagos_cuotas(
id_pago int(5) not null,
id_cuota int(5) not null
);

-- Tabla Prestamos-Afiliados (voucher) --
create table pres_afi(
id_prest int(5) not null,
rut_afiliado varchar(10) not null,
estado_pres_afi enum('Pendiente','Revision','Aprobado','Rechazado') not null
);

-- Tabla Prestador-Convenio --
create table pres_conv(
rut_pres_convenio varchar(10) not null, 
id_convenio int(5) not null
);

-- Tabla Afiliado-Convenios --
create table afiliado_convenio(
rut_afiliado varchar(10) not null, 
id_convenio int(5) not null

);

-- Tabla Asociacion --
create table asociacion(
id_aso int(5) not null,
fondos_aso int(12) not null,
nombre_aso varchar(45) not null,
direccion_aso varchar(45) not null,
telefono_aso varchar(12) not null,
id_convenio int(5) not null,
rut_afiliado varchar(10) not null,
constraint pk_aso primary key (id_aso)
);

-- Tabla Pagos --
create table pagos(
id_pago int(5) not null,
monto_pago int(12) not null,
fecha_pago datetime not null,
estado_pago enum('Pendiente','Aceptado','Rechazado') not null,
rut_afiliado varchar(10) not null,
constraint pk_pagos primary key (id_pago)
);

-- Tabla bonos --
create table bonos(
id_bono int(5) not null,
monto_bono int(12) not null,
fecha_bono datetime not null,
tipo_bono enum('Fiestas Patrias','Navidad','Bono Invierno'),
rut_afiliado varchar(10) not null,
constraint pk_bono primary key (id_bono)
);

-- Tabla Cuotas --
create table cuotas(
id_cuota int(5) not null,
monto_cuota int(12) not null,
fecha_cuota datetime not null,
num_cuota enum('1','2','3'),
tipo_cuota enum('Incorporación','Pago_convenio','Pago_prestamo'),
rut_afiliado varchar(10) not null,
constraint pk_cuota primary key (id_cuota)
);

-- Tabla Multas --
create table multas(
id_multa int(5) not null,
monto_multa int(12) not null,
fecha_multa datetime not null,
tipo_multa enum('reu_ordinaria','reu_extraord'),
penalizacion_multa varchar(45),
rut_afiliado varchar(10) not null,
constraint pk_multa primary key (id_multa)
);

-- Tabla Solicitudes --
create table solicitudes(
id_sol int(5) not null,
tipo_sol enum('tipo 1','tipo 2','tipo 3') not null, 
estado_sol enum('Pendiente','Revision','Aprobado','Rechazado') not null,
rut_afiliado varchar(10) not null,
rut_func varchar(10) not null,
constraint pk_sol primary key (id_sol)
);

-- Claves Foraneas
alter table pagos_afiliado
add constraint fk_pag_afi_1 foreign key (id_pago) references pagos (id_pago),
add constraint fk_pag_afi_2 foreign key (rut_afiliado) references afiliado (rut_afiliado);

alter table pagos_cuotas
add constraint fk_pag_cuo_1 foreign key (id_pago) references pagos (id_pago),
add constraint fk_pag_cuo_2 foreign key (id_cuota) references cuotas (id_cuota);

alter table pres_afi 
add constraint fk_pres_afi_1 foreign key (id_prest) references prestamos (id_prest),
add constraint fk_pres_afi_2 foreign key (rut_afiliado) references afiliado (rut_afiliado);

alter table pres_conv
add constraint fk_pres_conv1 foreign key (rut_pres_convenio) references pres_convenio (rut_pres_convenio),
add constraint fk_pres_conv2 foreign key (id_convenio) references convenio (id_convenio);

alter table afiliado_convenio
add constraint fk_af_conv1 foreign key (rut_afiliado) references afiliado (rut_afiliado),
add constraint fk_af_conv2 foreign key (id_convenio) references convenio (id_convenio);

alter table asociacion
add constraint fk_aso_1 foreign key (id_convenio) references convenio (id_convenio),
add constraint fk_aso_2 foreign key (rut_afiliado) references afiliado (rut_afiliado);

alter table pagos
add constraint fk_pagos_1 foreign key (rut_afiliado) references afiliado (rut_afiliado);

alter table bonos
add constraint fk_bonos_1 foreign key (rut_afiliado) references afiliado (rut_afiliado);

alter table cuotas
add constraint fk_cuotas_1 foreign key (rut_afiliado) references afiliado (rut_afiliado);

alter table multas
add constraint fk_multas_1 foreign key (rut_afiliado) references afiliado (rut_afiliado);

alter table solicitudes
add constraint fk_sol_1 foreign key (rut_afiliado) references afiliado (rut_afiliado),
add constraint fk_sol_2 foreign key (rut_func) references funcionarios (rut_func);

alter table datos
add constraint fk_id_1 foreign key (pass_id_dir) references directiva (id_cargo),
add constraint fk_id_2 foreign key (pass_rut_afi) references afiliado (rut_afiliado);


-- Poblado de la base de datos
INSERT INTO pres_convenio (rut_pres_convenio, nombre_pres_convenio, direccion_pres_convenio, telf_pres_convenio)
VALUES 
("82878900-7", "Coopeuch", "Villanelo 166, Viña del Mar, Valparaiso", "6002001200"),
("00000000-0", "Bahia Salud", "Arturo Prat 1836, Quintero, Valparaiso", "+56978932551"),
("82010400-5", "Optica Viña del Mar", "Calle Valparíso 436, Viña del Mar, Valpariso", "32-2713543"),
("00000000-1", "Capual", "Av. Libertad 111, Viña del Mar, Valpariso", "+56963720947"),
("89807200-2", "Cruz Verde", "Ortiz, Quintero, Valparaiso", "800802800");
select * from pres_convenio;

INSERT INTO convenio (id_convenio, nombre_convenio, fecha_inicio_convenio, fecha_termino_convenio, cupo_convenio, tipo_convenio, precio_convenio)
VALUES 
("00001", "Coopeuch", "2020-08-29", "2020-08-29", 20, 'creditos', "800000");

select * from convenio;