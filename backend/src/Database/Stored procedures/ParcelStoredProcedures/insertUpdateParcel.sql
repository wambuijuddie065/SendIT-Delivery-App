-- CREATE PROCEDURE InsertUpdateParcel(
-- @parcel_id VARCHAR(200),
-- @sender_details VARCHAR(200),
-- @receiver_details VARCHAR(200),
-- @pick_up VARCHAR (200),
-- @destination VARCHAR (200),
-- @description VARCHAR (200),
-- @weight INT,
-- @price INT ,
-- @status VARCHAR (200))
-- AS
-- BEGIN
-- IF EXISTS (SELECT * FROM [ParcelsTable]
-- WHERE parcel_id=@parcel_id
-- )
-- BEGIN
-- UPDATE [ParcelsTable]
-- SET
-- status=@status

-- WHERE parcel_id=@parcel_id
-- PRINT ' Parcel updated successfully'
-- END
-- ELSE
-- BEGIN
-- INSERT INTO ParcelsTable(sender_details,receiver_details,pick_up,destination,description,weight,price,status)
-- VALUES(@sender_details,@receiver_details,@pick_up,@destination,@description,@weight,@price,@status)
-- PRINT ' Parcel added successfully'
-- END
-- END

 ALTER PROCEDURE insertUpdateParcel(
@parcel_id VARCHAR(200),
@sender_details VARCHAR(200),
@receiver_details VARCHAR(200),
@pick_up VARCHAR (200),
@destination VARCHAR (200),
@description VARCHAR (200),
@weight INT,
@price INT ,
@status VARCHAR (200),
@is_delivered VARCHAR(10)='0')
AS
BEGIN
DECLARE @variableId BIT

SELECT @variableId =COUNT(parcel_id) FROM ParcelsTable WHERE parcel_id=@parcel_id

IF @variableId=0
BEGIN

INSERT INTO ParcelsTable(parcel_id,sender_details,receiver_details,pick_up,destination,description,weight,price,status)
VALUES(@parcel_id,@sender_details,@receiver_details,@pick_up,@destination,@description,@weight,@price,@status)
END
ELSE 
BEGIN
UPDATE [ParcelsTable]
SET
status=@status,
is_delivered=@is_delivered
END

END
