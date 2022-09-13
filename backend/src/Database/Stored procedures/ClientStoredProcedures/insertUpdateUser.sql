CREATE PROCEDURE InsertUpdateUser(
@name VARCHAR(200),
@email VARCHAR(200),
@contact VARCHAR(100),
@password VARCHAR(200)
)
AS
BEGIN
IF EXISTS (SELECT 1 FROM [UsersTable]
WHERE email=@email
)
BEGIN
UPDATE [UsersTable]
SET
name=@name,
email=@email,
contact=@contact,
password=@password

WHERE email=@email
PRINT ' user updated successfully'
END
ELSE
BEGIN
INSERT INTO UsersTable(name,email,contact,password)
VALUES(@name,@email,@contact,@password)
PRINT ' user added successfully'
END
END