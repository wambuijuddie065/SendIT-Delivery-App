CREATE PROCEDURE insertParcel(
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
INSERT INTO ParcelsTable(parcel_id,sender_details,receiver_details,pick_up,destination,description,weight,price,status)
VALUES(@parcel_id,@sender_details,@receiver_details,@pick_up,@destination,@description,@weight,@price,@status)
END
