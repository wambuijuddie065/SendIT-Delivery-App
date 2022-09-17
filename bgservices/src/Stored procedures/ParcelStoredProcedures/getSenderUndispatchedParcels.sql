CREATE OR ALTER  PROCEDURE getSenderUndispatchedParcels
 AS
 BEGIN
SELECT c.client_id, c.name,c.email,c.contact FROM ClientsTable c
INNER JOIN ParcelsTable p ON p.sender_details=c.email  WHERE is_dispatched='0' AND is_cancelled='0'
END