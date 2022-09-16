CREATE PROCEDURE updateWelcome(@email VARCHAR(200))
AS
BEGIN
UPDATE ClientsTable
SET 

is_welcome='1'

WHERE 
email=@email
END