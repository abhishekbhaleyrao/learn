<div id="top"></div><br />

- [Basics](#basics)
  - [MySQL](#mysql)
  - [Common MySQL commands](#common-mysql-commands)
  - [Few Important commands](#few-important-commands)
  - [Numeric Data Types](#numeric-data-types)
  - [String Data Types](#string-data-types)
  - [Temporal Data Types](#temporal-data-types)
  - [BLOB](#blob)
- [Intermediate](#intermediate)
  - [Views](#views)
  - [Triggers](#triggers)
  - [MySQL clients and utilities](#mysql-clients-and-utilities)
  - [Types of relationships](#types-of-relationships)
  - [Architecture of MySQL](#architecture-of-mysql)
  - [Scaling](#scaling)
  - [Sharding](#sharding)
  - [Transaction Storage Engines](#transaction-storage-engines)
- [Code](#code)
  - [Code: Write query to gender conversion.](#code-write-query-to-gender-conversion)


<br />

# Basics

## MySQL
  - Structured Query Language (SQL)
  - MySQL is a database management system for web servers.
  - A database is a structured collection of data stored in a computer system and organized in a way to be quickly searched. 
  - With databases, information can be rapidly retrieved.
  - **Advantages**
      - **Flexibility**: MySQL runs on all operating systems
      - **Power**: MySQL focuses on performance
      - **Enterprise-Level SQL Features**: MySQL had for some time been lacking in advanced features such as subqueries, views, and stored procedures.
      - **Full-Text Indexing and Searching**
      - **Query Caching**: This helps enhance the speed of MySQL greatly
      - **Replication**: One MySQL server can be duplicated on another, providing numerous advantages
      - **Configuration and Security**
  
<br />
<br />

## Common MySQL commands
|Command|Action|
|:----|:----|
|SHOW|List details about an object|
|CREATE|To create a database|
|UPDATE|Update an existing record|
|RENAME|Rename a Table|
|INSERT|Insert data|
|ALTER|To alter a database or table|
|TRUNCATE|Empty a table|
|DELETE|To delete a row from a table|
|BACKUP|To back-up a table|
|DESCRIBE|To describe a table's columns|
|DROP|To delete a database or table|
|GRANT|To change user privileges|
|LOCK|Lock table(s)|
|SOURCE|Execute a file|
|UNLOCK|Unlock table(s)|
|USE|Use a database|
|EXIT(ctrl+c)|To exit|
|STATUS (\s)|Display the current status|
|HELP (\h, \?)|Display help|
|QUIT(\q)|Same as EXIT|
|\c|To cancel Input|

<br />
<br />

## Few Important commands
```js
// View Database
SHOW DATABASES;

// Create a database
CREATE DATABASE books; 

// Create Table
CREATE TABLE history (
    author VARCHAR(128),
    title VARCHAR(128),
    type VARCHAR(16),
    year CHAR(4)) ENGINE InnoDB;

// Insert data into table
INSERT INTO table_name (column1, column2, column3,...)
    VALUES (value1, value2, value3,...)

// Remove a column by drop command
ALTER TABLE classics DROP pages;    

// Create an Index
ALTER TABLE history ADD INDEX(author(10));
ALTER TABLE history ADD INDEX(title(10));
ALTER TABLE history ADD INDEX(category(5));
ALTER TABLE history ADD INDEX(year);
DESCRIBE history;

// Delete data from table
DELETE FROM table_name WHERE column_name = value_name
```

<br />
<br />

## Numeric Data Types
|Type Name|Meaning|
|:----|:----|
|TINYINT|Very Small Integer|
|SMALLINT|Small Integer|
|MEDIUMINT|Medium-sized Integer|
|INT|Standard Integer|
|BIGINT|Large Integer|
|DECIMAL|Fixed-point number|
|FLOAT|Single-precision floating-point number|
|DOUBLE|Double-precision floating-point number|
|BIT|Bit-field|

<br />
<br />

## String Data Types
|Type Name|Meaning|
|:----|:----|
|CHAR|fixed-length nonbinary(character) string|
|VARCHAR|variable-length nonbinary string|
|BINARY|fixed-length binary string|
|VARBINARY|variable-length binary string|
|TINYBLOB|Very small BLOB(binary large object)|
|BLOB|Small BLOB|
|MEDIUMBLOB|Medium-sized BLOB|
|LONGBLOB|Large BLOB|
|TINYTEXT|A very small nonbinary string|
|TEXT|Small nonbinary string|
|MEDIUMTEXT|Medium-sized nonbinary string|
|LONGTEXT|Large nonbinary string|
|ENUM|An enumeration; each column value is assigned, one enumeration member|
|SET|A set; each column value is assigned zero or more set members|
|NULL|NULL in SQL is the term used to represent a missing value.|

<br />
<br />

## Temporal Data Types
|Type Name|Meaning|
|:----|:----|
|DATE|A date value, in 'CCYY-MM-DD' Format|
|TIME|A Time value, in 'hh : mm :ss' format|
|DATETIME|Date and time value, in 'CCYY-MM-DD hh : mm :ss' format|
|TIMESTAMP|A timestamp value, in 'CCYY-MM-DD hh : mm :ss' format|
|YEAR|A year value, in CCYY or YY format|

<br />
<br />

## BLOB
- BLOB is an acronym that stands for a binary large object. It is used to hold a variable amount of data.
- A BLOB can hold a very large amount of data. 
- Ex: documents, images, and even videos.

<br />
<br />

# Intermediate 

## Views
- A view consists of a set of rows that is returned if a particular query is executed.
- Known as a `virtual table`
  ```js
  CREATE
   [OR REPLACE]
   [ALGORITHM = {MERGE | TEMPTABLE | UNDEFINED }]
   [DEFINER = { user | CURRENT_USER }]
   [SQL SECURITY { DEFINER | INVOKER }]
   VIEW view_name [(column_list)]
   AS select_statement
   [WITH [CASCADED | LOCAL] CHECK OPTION]
  ```
<br />
<br />

## Triggers
- A trigger is a task that executes in response to some predefined database event, such as after a new row is added to a particular table.
- This event involves inserting, modifying, or deleting table data, and the task can occur either prior to or immediately following any such event.
- **Six triggers are possible**
  - Before Insert
  - After Insert
  - Before Update
  - After Update
  - Before Delete
  - After Delete

<br />
<br />

## MySQL clients and utilities
- **mysql**
  - An interactive program that enables you to send SQL statements to the server and to view the results.

- **mysqladmin**
  - An administrative program for performing tasks such as shutting down the server, checking its configuration, or monitoring its status.
  
- **mysqldump**
  - A tool for backing up your databases

- **mysqlcheck and myisamchk**
  - Programs that help you perform table checking, analysis, and optimization, as well as repairs if tables become damaged.

<br />
<br />

## Types of relationships
- **One-to-One**: 
  - Usually, when two items have a one-to-one relationship, you just include them as columns in the same table.
- **One-to-Many**: 
  - One-to-many (or many-to-one) relationships occur when one row in one table is linked to many rows in another table.
- **Many-to-Many**: 
  - In a many-to-many relationship, many rows in one table are linked to many rows in another table. To create this relationship, add a third table containing the same key column from each of the other tables
<br />
<br />

## Architecture of MySQL
1. **Services**: Top layer contains the services most network-based client/server tools or servers need such as connection handling, authentication and security.
2. **MySQL’s brains**: This has the code for query parsing, analysis, optimization, caching, and all the built-in functions.
3. **Storage Engine**: Responsible for storing and retrieving the data
<br />
<br />

## Scaling
- Scaling capacity is actually the ability to handle the load

<br />
<br />

## Sharding 
- The process of breaking up large tables into smaller chunks (called shards) that are spread across multiple servers is called Sharding.
- The advantage of Sharding is that since the sharded database is generally much smaller than the original; queries, maintenance, and all other tasks are much faster.
<br />
<br />

## Transaction Storage Engines
- To be able to use MySQL’s transaction facility, you have to be using MySQL’s `InnoDB storage engine`.
<br />
<br />

# Code

## Code: Write query to gender conversion.
- DB create for user_profile, id, gender tables. 
```js
CREATE TABLE user_profile(id int, gender varchar);
INSERT INTO user_profile (id, gender) VALUES (1, 'Male');
SELECT * FROM user_profile; // {id:1, gender:'Male'}
UPDATE user_profile SET Gender = CASE  
    WHEN Gender='Male' THEN 'Female'  
    ELSE 'Male'  
    END
SELECT * FROM user_profile; // {id:1, gender:'Female'}
```
<br />
<br />
