-- Test 5: SQL (3/20)
-- Write pseudo-SQL statements to create database tables to store the products of a basic webshop. Each product has a name, a price, a creation date and may belong to several categories. Categories have a name and a flag to indicate whether the category is private or public.
-- Write a SQL query to find the list of products that belong to more than 5 public categories.

USE master
GO
IF NOT EXISTS (
    SELECT name
        FROM sys.databases
        WHERE name = N'TestOdoo'
)
CREATE DATABASE TestOdoo
GO

IF OBJECT_ID('products', 'U') IS NOT NULL
DROP TABLE products
GO
CREATE TABLE products
(
    productsId INT NOT NULL PRIMARY KEY IDENTITY,
    name [NVARCHAR](50) NOT NULL,
    price [FLOAT] NOT NULL,
    creationDate [DATE] NOT NULL
);
GO

IF OBJECT_ID('categories', 'U') IS NOT NULL
DROP TABLE categories
GO
CREATE TABLE categories
(
    categoriesId INT NOT NULL PRIMARY KEY IDENTITY,
    name [NVARCHAR](50) NOT NULL,
    flag [NVARCHAR](50) NOT NULL
);
GO

IF OBJECT_ID('products_categories', 'U') IS NOT NULL
DROP TABLE products_categories
GO
CREATE TABLE products_categories
(
    products_categoriesId INT NOT NULL PRIMARY KEY IDENTITY,
    productsId INT NOT NULL,
    categoriesId INT NOT NULL,
    CONSTRAINT FK_ProductsProducts_Categories FOREIGN KEY (productsId)
    REFERENCES products(productsId),
    CONSTRAINT FK_CategoriesProducts_Categories FOREIGN KEY (categoriesId)
    REFERENCES categories(categoriesId)
    
);
GO

SELECT P.productsId, P.name, P.price, P.creationDate
FROM products_categories PC
JOIN products P on PC.productsId = P.productsId
JOIN categories C on PC.categoriesId = C.categoriesId
WHERE C.flag = 'public'
GROUP BY P.productsId, P.name, P.price, P.creationDate
HAVING COUNT(*) > 5
GO

-- USE master
-- GO

-- IF EXISTS (
--   SELECT name
--    FROM sys.databases
--    WHERE name = N'TestOdoo'
-- )
-- DROP DATABASE TestOdoo
-- GO