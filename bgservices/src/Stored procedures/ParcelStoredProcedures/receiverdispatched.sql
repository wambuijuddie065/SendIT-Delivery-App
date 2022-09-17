CREATE OR ALTER PROCEDURE receiverDispatched(@parcel_id VARCHAR(200))
AS
BEGIN
SELECT * FROM ParcelsTable WHERE parcel_id=@parcel_id
UPDATE ParcelsTable
SET
is_dispatched='1'
END