CREATE PROCEDURE getClientById(@client_id VARCHAR(200))
AS
BEGIN
SELECT * FROM ClientsTable
WHERE client_id=@client_id
END