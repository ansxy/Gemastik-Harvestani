# Setup

```
cp .env.example .env
npm install

# for production
npm build
npm start
# for Development
npm run dev
```

# API

## Error Response
```json
{
  "error": "error message"
}

```


## Register

```http
POST /api/v1/register
```

### Request

```json
{
  "email": "test@example.com",
  "password": "1234qwer"
}
```

### Response
token expire dalam 15 menit

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkNWNjY2M1Yy0wODVjLTRhYzItODk2Zi03NGYxNDZmMzkzM2EiLCJpYXQiOjE2ODg3NzE1MjR9.VfTwZbVjiI73Jt3hx3VZ_DKjt0LcqB4hunJuRdP9Nvs",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZWZyZXNoVG9rZW5JZCI6IjdmYjA2Yjk3LWE4MzMtNGU2Ni1iOTdjLTg1ZGQyOWMwODk3NiIsInVzZXJJZCI6ImQ1Y2NjYzVjLTA4NWMtNGFjMi04OTZmLTc0ZjE0NmYzOTMzYSIsImlhdCI6MTY4ODc3MTUyNCwiZXhwIjoxNjg5Mzc2MzI0fQ.7MdgNJ8g0BVL1ForbYN3ehzJ2AFysiHwuEfM1ewB4Dk"
}
```

## Login
```http
POST /api/v1/login
```

### Request
```json
{
  "email": "test@example.com",
  "password": "1234qwer"
}
```

### Response
token expire dalam 15 menit

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkNWNjY2M1Yy0wODVjLTRhYzItODk2Zi03NGYxNDZmMzkzM2EiLCJpYXQiOjE2ODg3NzE1MjR9.VfTwZbVjiI73Jt3hx3VZ_DKjt0LcqB4hunJuRdP9Nvs",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZWZyZXNoVG9rZW5JZCI6IjdmYjA2Yjk3LWE4MzMtNGU2Ni1iOTdjLTg1ZGQyOWMwODk3NiIsInVzZXJJZCI6ImQ1Y2NjYzVjLTA4NWMtNGFjMi04OTZmLTc0ZjE0NmYzOTMzYSIsImlhdCI6MTY4ODc3MTUyNCwiZXhwIjoxNjg5Mzc2MzI0fQ.7MdgNJ8g0BVL1ForbYN3ehzJ2AFysiHwuEfM1ewB4Dk"
}
```

## Refresh Token
```http
POST /api/v1/auth/refresh
```

### Request
```http
Cookie: refresh-token=${refreshToken}
```

### Response
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkNWNjY2M1Yy0wODVjLTRhYzItODk2Zi03NGYxNDZmMzkzM2EiLCJpYXQiOjE2ODg3NzE5MDMsImV4cCI6MTY4ODc3MjgwM30.eTnH7w9wd9xIQORTIG6OJbHzieR7TSuk3V7fwNjuXX0"
}
```

## Index Lahan

```http
GET /api/v1/lahan
```

### Response

```json
{
  "lahan": [
    {
      "id": "1429934a-6acc-4f09-b08a-43b049000c14",
      "user_id": "d5cccc5c-085c-4ac2-896f-74f146f3933a",
      "nama": "nama kamu",
      "luas": 123,
      "alamat": "alamat kamu",
      "lat": 1.023,
      "lon": 10,
      "created_at": "2023-07-07T22:30:31.861Z",
      "updated_at": "2023-07-07T22:30:31.861Z"
    }
  ]
}
```

## Show Lahan

```http
GET /api/v1/lahan/:id
```

### Response

```json
{
  "id": "1429934a-6acc-4f09-b08a-43b049000c14",
  "user_id": "d5cccc5c-085c-4ac2-896f-74f146f3933a",
  "nama": "nama kamu",
  "luas": 123,
  "alamat": "alamat kamu",
  "lat": 1.023,
  "lon": 10,
  "created_at": "2023-07-07T22:30:31.861Z",
  "updated_at": "2023-07-07T22:30:31.861Z",
  "image": [
    {
      "id": "b42cdee6-bb4d-4a32-826c-d31a39c13b4f",
      "lahan_id": "1429934a-6acc-4f09-b08a-43b049000c14",
      "path": "image/lahan/7cc7b58fc11721046e4d5d66f99a8d3d3a5e1573a2cf5c368727e8e394d0e44b_carbon.png",
      "created_at": "2023-07-07T22:30:31.861Z",
      "updated_at": "2023-07-07T22:30:31.861Z"
    },
    {
      "id": "cc75cec1-b35a-4e37-8bf5-9d7a0e891332",
      "lahan_id": "1429934a-6acc-4f09-b08a-43b049000c14",
      "path": "image/lahan/3d80a70b1fffdb26d23b28979b87690b8717f72868c5d064db2c368a0ecf17a0_01-69.jpg",
      "created_at": "2023-07-07T22:30:31.861Z",
      "updated_at": "2023-07-07T22:30:31.861Z"
    }
  ]
}
```

## Create lahan

```http
POST /api/v1/lahan
```

### Request

bisa pake multipart atau json
klo mau upload image harus pake multipart

```json
{
    "nama": "nama lahan",
    "luas": 123, //decimal
    "alamat": "alamat kamu",

    "lat": 123, // decimal latitude
    "lon": 0.1 // decimal longitude

    "photo": [] // photo harus pake mutlipart
}
```

### Response

```json
{
  "id": "1429934a-6acc-4f09-b08a-43b049000c14",
  "user_id": "d5cccc5c-085c-4ac2-896f-74f146f3933a",
  "nama": "nama kamu",
  "luas": 123,
  "alamat": "alamat kamu",
  "lat": 1.023,
  "lon": 10,
  "created_at": "2023-07-07T22:30:31.861Z",
  "updated_at": "2023-07-07T22:30:31.861Z",
  "image": [
    {
      "id": "b42cdee6-bb4d-4a32-826c-d31a39c13b4f",
      "lahan_id": "1429934a-6acc-4f09-b08a-43b049000c14",
      "path": "image/lahan/7cc7b58fc11721046e4d5d66f99a8d3d3a5e1573a2cf5c368727e8e394d0e44b_carbon.png",
      "created_at": "2023-07-07T22:30:31.861Z",
      "updated_at": "2023-07-07T22:30:31.861Z"
    },
    {
      "id": "cc75cec1-b35a-4e37-8bf5-9d7a0e891332",
      "lahan_id": "1429934a-6acc-4f09-b08a-43b049000c14",
      "path": "image/lahan/3d80a70b1fffdb26d23b28979b87690b8717f72868c5d064db2c368a0ecf17a0_01-69.jpg",
      "created_at": "2023-07-07T22:30:31.861Z",
      "updated_at": "2023-07-07T22:30:31.861Z"
    }
  ]
}
```