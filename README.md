# Initialization

Makesure you already instal latest nodejs
Linux: https://www.geeksforgeeks.org/installation-of-node-js-on-linux/
Mac or Windows: https://nodejs.org/en/download/
<br> <br>

# Node
```
cd switching-vendor
npm install
cp .env.example .env
npm start
```
<br>

# Docker
```
docker build . -t username/vendor-api
docker run -p 8080:8080 -d username/vendor-api
```

# Postman
Import `postman-collection.json` inside this repository into your postman

<br>

# How to use
1. Get token header from api `http://localhost:8080/login`
2. Put token to header `http://localhost:8080/send-sms-notification?phone=+62379832749834` with key authorization and value Bearer (your-token)
3. ready to hit
4. optional `npm run test` to see coverage test

test using another vendor
1. change `VENDOR_ACTIVATE` in .env range 0-2 (pick one)
2. restart the service using `npm start`

<br>

# Coverage test and Result
Coverage test<br>
![Test](https://github.com/joexce/switching-vendor/blob/main/test.png)
<br>

Result
![Result](https://github.com/joexce/switching-vendor/blob/main/result_service.png)
