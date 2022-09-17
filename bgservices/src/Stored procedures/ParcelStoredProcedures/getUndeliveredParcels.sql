CREATE OR ALTER  PROCEDURE getUndeliveredParcels
 AS
 BEGIN
SELECT * FROM ParcelsTable  WHERE is_delivered='1' AND is_cancelled='0'
END