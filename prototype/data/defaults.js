var FR = {};

FR.users = [
    {
        "id": 1,
        "fullname": "Vladislav Romenko",
        "shortName": "Vlad",
        "login": "vladislav",
        "mobile": "+3725013456",
        "email": "vladislav@rogakopita.ee",
        "type": "user",
        "userDisabled": false
    },{
        "id": 3,
        "fullname": "Denis Mighty",
        "shortName": "Denis",
        "login": "denis",
        "mobile": "+3725123457",
        "email": "denis@rogakopita.ee",
        "type": "superuser",
        "userDisabled": false
    },{
        "id": 2,
        "fullname": "Michael Toomert",
        "shortName": "Michael",
        "login": "michael",
        "mobile": "+3725088620",
        "email": "michael@rogakopita.ee",
        "type": "user",
        "userDisabled": false
    }
];

FR.countries = [
    {
        "value": 1,
        "text": "Estonia"
    },{
        "value": 2,
        "text": "Latvia"
    },{
        "value": 3,
        "text": "Lithuania"
    },{
        "value": 4,
        "text": "Russia"
    },{
        "value": 5,
        "text": "Germany"
    }
];

FR.clientRoles = [
    {
        "value": 1,
        "text": "Buyer"
    }, {
        "value": 2,
        "text": "Receiver"
    }, {
        "value": 3,
        "text": "Transporter"
    }, {
        "value": 4,
        "text": "TIR provider"
    }
];

FR.clients = [
    {
        "ClientID": 1,
        "Name": "OOO Almazi",
        "RegistrationNumber": "1234567890",
        "KMKR": "RU0013232",
        "AgreementNumber": "34",
        "Address": {
            "Street": "Prospekt Lenina 13-7",
            "Zip": "11978",
            "State": "",
            "City": "Moscow",
            "CountryID": 4,
            "Country": "Russia" // TODO - fix me. Modify template to take ID and calculate country name from it
        },
        "RoleID": 1,
        "Role": "Buyer",
        "ContactPerson": {
            "Name": "Vladimir Metrov",
            "Email": "vmetrov@almazi.ru",
            "Phone": "8701190002"
        },
        "ContactFax": "",
        "Payment": {
            "Days": 30,
            "Bank": "VTB",
            "Account": "1803782290",
            "ReferenceNumber": "17720"
        },
        "Comments": "Very aggressive negotiator"
    }, {
        "ClientID": 2,
        "Name": "Kilka OU",
        "RegistrationNumber": "8821100987",
        "KMKR": "EE0089119",
        "AgreementNumber": "2",
        "Address": {
            "Street": "Liiavalaia 11-8",
            "Zip": "13089",
            "State": "Harjumaa",
            "City": "Tallinn",
            "CountryID": 1,
            "Country": "Estonia"
        },
        "RoleID": 2,
        "Role": "Receiver",
        "ContactPerson": {
            "Name": "Mihkel Pihkel",
            "Email": "mihkel@kilka.ee",
            "Phone": "3725012078"
        },
        "ContactFax": "",
        "Payment": {
            "Days": 14,
            "Bank": "Swedbank",
            "Account": "22109911889",
            "ReferenceNumber": "00911"
        },
        "Comments": "Like to delay payment"
    }
];

FR.deals = [
    {
        "dealId": 1,
        "date": "October 17, 2012",
        "clientName": FR.clients[0].Name,
        "merchandise": "Briljanti i almazi",
        "lastModified": "October 17, 2012 13:01:57"
    },
    {
        "dealId": 2,
        "date": "October 15, 2012",
        "clientName": FR.clients[0].Name,
        "merchandise": "Rashodnije materiali",
        "lastModified": "October 19, 2012 09:00:00"
    },
    {
        "dealId": 3,
        "date": "October 23, 2012",
        "clientName": FR.clients[1].Name,
        "merchandise": "Fish and chips",
        "lastModified": "October 19, 2012 19:55:46"
    }
];

FR.placesFrom = [
    {
        "id": 0,
        "name": "Tallinn, Estonia"
    },
    {
        "id": 1,
        "name": "Riga, Latvia"
    },
    {
        "id": 2,
        "name": "Moscow, Russia"
    }
];

FR.placesTo = [
    {
        "id": 0,
        "name": "Tallinn, Estonia"
    },
    {
        "id": 1,
        "name": "Riga, Latvia"
    },
    {
        "id": 2,
        "name": "Moscow, Russia"
    }
];

FR.dealGridRows = [
    {
        "id": 1,
        "type": "transport",
        "description": "List of bills for usage of transportation services",
        "currency": "EUR",
        "total": "800.00"
    },
    {
        "id": 2,
        "type": "bills",
        "description": "List of bills to receive from client for the deal",
        "currency": "EUR",
        "total": "2000.00"
    },
    {
        "id": 3,
        "type": "extra",
        "description": "Additional checks from transportation companies",
        "currency": "EUR",
        "total": "170.00"
    },
    {
        "id": 4,
        "type": "manual",
        "description": "Additional expenses",
        "currency": "EUR",
        "total": "200.00"
    }
];

FR.dealBillRows = [
    {
        "id": 1,
        "description": "Rahvusvaheline transport",
        "amount": 1,
        "currency": "EUR",
        "price": "800.00",
        "vat": "20.0",
        "total": "960.00",
        "comments": "-"
    }
];