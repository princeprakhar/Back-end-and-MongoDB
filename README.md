
# HTTP Server with Express

This repository contains code for creating an HTTP server using Express, a popular web application framework for Node.js.


## Description
The code in this repository sets up a basic HTTP server using Express. It includes endpoints for handling GET, POST, PUT, and DELETE requests.
## Endpoints
`GET '/'`: Retrieves information about the kidneys of a user named John. It returns the total number of kidneys, the number of healthy kidneys, and the number of unhealthy kidneys.

`POST '/'`: Adds a new kidney to John's kidney list. The health status of the kidney is specified in the request body.

`PUT '/'`: Marks all of John's kidneys as healthy.

`DELETE '/'`: Removes unhealthy kidneys from John's kidney list.


## Installation

Clone the repository:

```bash
    git clone https://github.com/princeprakhar/Back-end-and-MongoDB.git

```
Install dependencies:
```bash
    npm install express

```

## Usage/Examples
To start the server, run the following command:
```bash
    node index.js
```

The server will start listening on port 3000 by default. You can change the port in the code if needed.
## Dependencies
`Express`: Fast, unopinionated, minimalist web framework for Node.js.
## Contributing
Contributions are welcome. Feel free to open an issue or submit a pull request.
## License
This project is licensed under the MIT License - see the `LICENSE` file for details.
