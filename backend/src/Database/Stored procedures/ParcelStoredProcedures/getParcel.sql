CREATE OR ALTER PROCEDURE getParcel(@parcel_id VARCHAR (200))
AS
BEGIN
SELECT * FROM ParcelsTable
WHERE parcel_id=@parcel_id AND is_cancelled='0'
END