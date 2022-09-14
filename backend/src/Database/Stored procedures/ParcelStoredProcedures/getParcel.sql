CREATE PROCEDURE getParcel(@parcel_id VARCHAR (200))
AS
BEGIN
SELECT * FROM ParcelsTable
WHERE parcel_id=@parcel_id
END