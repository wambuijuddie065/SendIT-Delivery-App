CREATE OR ALTER PROCEDURE Deliver(@parcel_id VARCHAR(200))
AS
BEGIN
UPDATE ParcelsTable
SET is_delivered='2' WHERE  parcel_id=@parcel_id
END