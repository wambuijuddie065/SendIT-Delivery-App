CREATE OR ALTER PROCEDURE senderDeliveredParcel(@parcel_id VARCHAR(200))
AS
BEGIN
SELECT * FROM ParcelsTable WHERE parcel_id=@parcel_id
UPDATE ParcelsTable
SET is_delivered='2' WHERE is_delivered='1'
END