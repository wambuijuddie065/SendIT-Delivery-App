-- CREATE  TABLE ParcelsTable(
-- parcel_id VARCHAR (200) NOT NULL,
-- sender_details VARCHAR(200) ,
-- receiver_details VARCHAR(200),
-- pick_up VARCHAR (200),
-- destination VARCHAR (200),
-- description VARCHAR (200),
-- weight INT,
-- price INT ,
-- status VARCHAR (200),
-- is_dispatched VARCHAR(50) DEFAULT '0',
-- is_delivered VARCHAR(50) DEFAULT '0',
-- is_cancelled VARCHAR (50) DEFAULT '0',


-- )

CREATE TABLE ParcelsTable(
parcel_id VARCHAR (200) NOT NULL,
sender_details VARCHAR(200) NOT NULL,
FOREIGN KEY(sender_details) REFERENCES ClientsTable(email) ,
receiver_details VARCHAR(200) NOT NULL,
FOREIGN KEY(receiver_details) REFERENCES ClientsTable(email),
pick_up VARCHAR (200),
destination VARCHAR (200),
description VARCHAR (200),
weight INT,
price INT ,
status VARCHAR (200),
is_dispatched VARCHAR(50) DEFAULT '0',
is_delivered VARCHAR(50) DEFAULT '0',
is_cancelled VARCHAR (50) DEFAULT '0'
)


-- SELECT ClientsTable.name,ClientsTable.email FROM ClientsTable
-- INNER JOIN ParcelsTable ON ParcelsTable.sender_details=ClientsTable.email AND 
-- ParcelsTable.receiver_details=ClientsTable.email 