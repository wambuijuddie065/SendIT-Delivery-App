
CREATE PROCEDURE getClient(@email VARCHAR (200))
AS
BEGIN
SELECT * FROM ClientsTable
WHERE email=@email
END