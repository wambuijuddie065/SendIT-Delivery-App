CREATE OR ALTER PROCEDURE getNotWelcome
AS
BEGIN
SELECT * FROM ClientsTable
WHERE is_welcome='0'
END