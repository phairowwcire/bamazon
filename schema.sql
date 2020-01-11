drop database if exists bamazon;

create database bamazon;

use bamazon;

--product_name (Name of product)

--department_name

--price (cost to customer)

--stock_quantity (how much of the product is available in stores)
create table products(
    item_id integer(4) not null auto_increment,
    product_name  varchar(50) not null,
    department_name varchar(50) not null,
    price decimal(10,2) not null,
    stock_quantity integer(4) not null,
    primary key(item_id)
)

--values = static data
--database = collection of tables
--seeds data role

insert into products (product_name,department_name,price,stock_quantity)
values("Burt's Bees","Health & Beauty",4.50,100),   
      ("Vizio","Electronics",700,25),
       ("Levi's Jeans","Softlines",50,70),
        ("Crayola Markers","Stationary",4.50,100),
        ("Nerf","Toys",8,30),
        ("Spalding","Sports",30,25),
         ("Dumb bells","Sports",20,15),
        ("Oakley","Optical",100,60),
        ("Sony Earbuds","Electronics",20,35),
      ("Crest","Health & Beauty",3.25,300)



