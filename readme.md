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
|/auth/register |post | - | - | - |{identify, username, password, confirmPassword}
|auth/login |post |y |- |- |{identity, password}
|user/update |put |y |- |- |{username, image(file)}
|user/challenge |post |y |- |- |{promt for create servey or plan to AI}
|user/challenge |get |y |- |- |
|user/challenge |get |y |:id |- |- |
|user/challenge |delete |y |:id |- |-|
|user/challenge |put |y |:id |- |{message, challenge_status}
|user/detail |put |y |:id |- |{weightResult}


