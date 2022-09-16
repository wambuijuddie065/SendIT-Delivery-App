 CREATE OR ALTER PROCEDURE deleteParcel(@parcel_id VARCHAR (200))
AS
BEGIN
UPDATE ParcelsTable SET is_cancelled='1'
WHERE parcel_id=@parcel_id
END