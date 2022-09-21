-- CREATE OR ALTER PROCEDURE getParcels
-- AS
-- BEGIN
-- SELECT * FROM ParcelsTable WHERE is_cancelled='0'
-- END




CREATE OR ALTER PROCEDURE getParcels
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
	d.receiver_name,
	d.receiver_contact,
    c.name sender_name,
    c.contact sender_contact
    FROM 
	ParcelsTable p inner join ClientsTable c 
	on p.sender_details = c.email  
	inner join (
		select 
			c1.name receiver_name,c1.contact receiver_contact, 
			c1.email receiver_email from ParcelsTable p1 
		inner join 
		ClientsTable c1 on p1.receiver_details = c1.email
	) as d on d.receiver_email = p.receiver_details 
	WHERE is_cancelled='0'
END

--exec getParcels