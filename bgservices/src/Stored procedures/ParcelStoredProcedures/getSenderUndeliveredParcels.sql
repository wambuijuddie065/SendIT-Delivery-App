-- CREATE PROCEDURE getNotDelivered
-- AS
-- BEGIN
-- SELECT * FROM ParcelsTable WHERE is_delivered='0'
-- END
CREATE OR ALTER  PROCEDURE getSenderUndeliveredParcels
 AS
 BEGIN
SELECT c.client_id, c.name,c.email,c.contact FROM ClientsTable c
INNER JOIN ParcelsTable p ON p.sender_details=c.email  WHERE is_delivered='0' AND is_cancelled='0'
END