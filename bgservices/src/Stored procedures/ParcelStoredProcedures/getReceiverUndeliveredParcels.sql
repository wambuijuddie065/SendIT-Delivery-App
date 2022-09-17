--  CREATE PROCEDURE getUndeliveredParcels
--  AS
--  BEGIN
-- SELECT c.name,c.email FROM ClientsTable c
-- INNER JOIN ParcelsTable p ON p.sender_details=c.email AND 
-- p.receiver_details=c.email WHERE is_delivered='0' AND is_cancelled='0'
-- END



CREATE OR ALTER  PROCEDURE getReceiverUndeliveredParcels
 AS
 BEGIN
SELECT c.client_id, c.name,c.email,c.contact FROM ClientsTable c
INNER JOIN ParcelsTable p ON p.receiver_details=c.email  WHERE is_delivered='0' AND is_cancelled='0'
END