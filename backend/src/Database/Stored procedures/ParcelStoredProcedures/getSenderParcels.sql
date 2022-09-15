CREATE OR ALTER PROCEDURE getSenderParcels(@sender_details VARCHAR(200))
AS
BEGIN
SELECT * FROM ParcelsTable
WHERE sender_details=@sender_details
END