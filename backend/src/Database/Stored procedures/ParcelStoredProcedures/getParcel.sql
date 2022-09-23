-- CREATE OR ALTER PROCEDURE getParcel(@parcel_id VARCHAR (200))
-- AS
-- BEGIN
-- SELECT * FROM ParcelsTable
-- WHERE parcel_id=@parcel_id AND is_cancelled='0'
-- END

CREATE OR ALTER PROCEDURE getParcel(@parcel_id VARCHAR (200))
AS
BEGIN
SELECT 
    p.parcel_id, 
    p.pick_up,
    p.destination,
    p.description,
    p.weight,
    p.price,
    p.status,
	p.receiver_details,
	p.sender_details,
	r.name receiver_name,
	r.contact receiver_contact,
    s.name sender_name,
    s.contact sender_contact
    FROM 
	ParcelsTable p inner join ClientsTable s 
	on p.sender_details = s.email  
    inner join ClientsTable r
	on p.receiver_details=r.email
	WHERE parcel_id=@parcel_id AND is_cancelled='0'
END