# Server

## env guide
PORT=8899  
DATABASE_URL= ***  
JWT_SECRET= ***  
CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

## serice
|path |method |authen |params |query |body |
|:--  |:--  |:--  |:--  |:--  |:--  |
|api/auth/register |post | - | - | - |{identify, username, password, confirmPassword}
|api/auth/login |post |- |- |- |{identity, password}
|api/auth/getCurrentUser |get |y |- |- |-
|api/user/profile |put |y |- |- |{username, image(file)}
|api/user/challenge |post |y |- |- |{promt for create servey or plan to AI}
|api/user/challenge |get |y |- |- |
|api/user/challenge |get |y |:id |- |- |
|api/user/challenge |delete |y |:id |- |-|
|api/user/challenge |put |y |:id |- |{message, challenge_status}
|api/user/challenge |put |y |:id |- |{weightResult}


