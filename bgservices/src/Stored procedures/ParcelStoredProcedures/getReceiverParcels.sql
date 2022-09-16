CREATE OR ALTER PROCEDURE getReceiverParcels(@receiver_details VARCHAR(200))
AS
BEGIN
SELECT * FROM ParcelsTable
WHERE receiver_details=@receiver_details
END