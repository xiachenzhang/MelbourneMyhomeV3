﻿BULK
INSERT dbo.[Table]
FROM 'C:\csvtest'
WITH
(
FIELDTERMINATOR = ',',
ROWTERMINATOR = '\n'
)
