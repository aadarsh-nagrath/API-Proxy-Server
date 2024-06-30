# API Proxy Server

This project implements an API proxy server using Node.js and Express, designed to fetch and display posts from the [dev.to](https://dev.to/aadarsh-nagrath) API endpoint as a demonstration. The core functionality revolves around proxying requests to external APIs while adding additional features like rate limiting, caching, and request throttling.

![image](https://github.com/aadarsh-nagrath/API-Proxy-Server/assets/92307537/457b4bbd-7ac9-400f-ba0a-15b4e1ba3097)

## Features

- **Proxy Server**: Routes requests from clients to the dev.to API endpoint.
- **Rate Limiting**: Limits the number of requests a client can make in a given time period.
- **Caching**: Stores responses from the dev.to API to reduce response time and API usage.
- **Throttling**: Slows down requests to the dev.to API to prevent overwhelming the server.

## Installation

To install and run the project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/aadarsh-nagrath/API-Proxy-Server.git
   cd API-Proxy-Server
   ```

2. Install dependencies:
   ```
   npm install
   
   ```

3. Configure:
   Since it's not really an important API, and just display JSON data, we don't need .env, create one if you fancy.
   So directly go to config.js and change the target url, that the url from where the proxy server is externally fetching data.
   ```
   targetBaseUrl: 'https://dev.to/api/articles?username=',
   
   ```
   add your username after the "="
   https://github.com/aadarsh-nagrath/API-Proxy-Server/blob/ce81a548728884209ae40ca9fa5552ca0dee614f/src/config.js#L3

5. Start the server:
   ```
   npm start
   
   ```

6. Access the server:
   Open your browser and go to `http://localhost:3000` to see the API proxy server in action.

7. To see the UI simply run html file on the live server.

## Usage

- **Fetching Posts**: Send GET requests to `/api/article` to fetch posts from dev.to through api proxy server.

## Contributing

Contributions are welcome! Here's how you can contribute:
- Fork the repository
- Create a new branch (`git checkout -b feature`)
- Make modifications and commit (`git commit -am 'Add feature'`)
- Push to the branch (`git push origin feature`)
- Create a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
