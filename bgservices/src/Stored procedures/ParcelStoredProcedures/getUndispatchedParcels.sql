CREATE OR ALTER PROCEDURE getUndispatchedParcels
AS
BEGIN
SELECT * FROM ParcelsTable WHERE status='Dispatched' AND is_dispatched='0'
END
