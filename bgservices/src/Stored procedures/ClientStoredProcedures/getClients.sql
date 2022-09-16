CREATE PROCEDURE getClients
AS
BEGIN
SELECT * FROM ClientsTable
WHERE role='client'
END