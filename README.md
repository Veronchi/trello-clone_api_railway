# trello-clone-api

Api for Rolling Scopes School task "Rs-Clone".

## Setup and Running

- Use `node 14.x` or higher.
- Clone this repo: `$ git clone https://github.com/Veronchi/trello-clone-api/tree/develop`.
- Go to downloaded folder: `$ cd trello-clone-api`.
- Install dependencies: `$ npm install`.
- Start server: `$ npm run start`.
- Now you can send requests to the address: `http://localhost:3001/api`.

(or use deploy link: https://http-nodejs-production-a856.up.railway.app/api)

## Usage

## **Register User**

Returns a token if the request is successful.

<details>

- **URL**

  user/registration

- **Method:**

  `POST`

- **Headers:**

  None

- **URL Params**

  None

- **Query Params**

  None

- **Data Params**

  ```typescript
  {
      "login": "yourLogin",
      "email": "yourEmail@email.com",
      "password": "password"
  }
  ```

- **Success Response:**

  - **Code:** 200 OK <br />
    **Content:**
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiJhZGFjYWQ3MC05MWQ4LTQ2MzMtODI5Zi0yMDE5ZGNhMTFhODEiLCJlbWFpbCI6InZlcm9uQGVtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjc3NTI2NTk4LCJleHAiOjE2Nzc1Njk3OTh9.Zem1tODCmya0_cyaUK-W82DcnXLhi9bIBqN6yF0qtD1"
    }
    ```
    **Headers:**
    ```
      "Content-Type": "application/json"
    ```

- **Error Response:**

* **Code:** 400 Bad Request <br />
  **Content:**
  ```json
  { "error": "login, email or password not entered" }
  { "error": "user with such login or email address already exists" }
  ```

- **Notes:**

  You can get two types of errors:

  - If your data params don't have some params
  - user already exists

</details>
