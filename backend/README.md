APIs

1 . GET http://localhost:8080 => Home

2 . POST http://localhost:8080/api/user/valid_sponcer_id => validate Sponcer Id

    body payload : {
    "refer_sponcer_id":"AD123",
    }

    response : {
    "error": false,
    "message": "success",
    "result": "AD123",
    }

3 . POST http://localhost:8080/api/user/get_varifaction_code => get Varifaction Code

    body payload : {
    "phone":"6387713231",
    }

    response : {
    "error": false,
    "message": "success",
    "result": "Your varifaction code send to 6387713231",
    "varifaction_code" : 3456,
    "varifaction_code_id" : "3476345ctrcb346cgfbe46"
    }

4 . POST http://localhost:8080/api/user/verify_varifaction_code => verify Varifaction Code

    body payload : {
    "varifaction_code" : 3456,
    "varifaction_code_id" : "3476345ctrcb346cgfbe46"
    }

    response : {
    "error": false,
    "message": "success",
    "result": null
    }

2 . POST http://localhost:8080/api/user/register => Register

    body payload : {
    "refer_sponcer_id":"AD123",
    "position":"left",
    "name":"sonu verma",
    "father_name":"Rajitrem verma",
    "phone":"6387713231",
    "email":"sonu@gmail.com",
    "gender":"MALE",
    "country":"india",
    "state":"up",
    "city":"gonda",
    "pincode":"271604",
    "address":"",
    "date_of_birth":"03-07-2000",
    "password":"AD123"
    }

    response : {
    "error": false,
    "message": "success",
    "result": {
    "name": "sonu verma",
    "sponcer_id": "GV081",
    "password": "FLK438"
    }
    }

3 . POST http://localhost:8080/api/user/login => Login

body payload : {
"my_sponcer_id":"GV081",
"password":"FLK438"
}

response : {
"error": false,
"message": "success",
"result": {
"\_id": "6429a9a4310cb2948f43d88e",
"my_sponcer_id": "GV081",
"refer_sponcer_id": "AD123",
"position": "LEFT",
"name": "sonu verma",
"phone": "6387713231",
"email": "sonu@gmail.com",
"gender": "MALE",
"country": "india",
"state": "up",
"city": "gonda",
"pincode": "271604",
"date_of_birth": "03-07-2000",
"password": "FLK438",
"is_deleted": false,
"createdAt": "2023-04-02T16:13:24.728Z",
"updatedAt": "2023-04-02T16:13:24.728Z"
}
}
