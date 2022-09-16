CREATE PROCEDURE insertClient(
@client_id VARCHAR(100),
@name VARCHAR(200),
@email VARCHAR(200),
@contact VARCHAR(100),
@password VARCHAR(200)
)
AS
BEGIN
INSERT INTO ClientsTable(client_id,name,email,contact,password)
VALUES(@client_id,@name,@email,@contact,@password)
END