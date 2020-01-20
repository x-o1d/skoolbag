# SchoolList

Code test submission for SkoolBag.

Live demo of this project can be found [here](http://167.99.67.1:4200/)

## Running on local file system

Requirements:

* Node V10
* MongoDB

To install dependencies and run development server: 

```
npm install
npm run deploy

```

## Caveats

1. There is no interface for modifying existing documents. (can be implemented)
2. Name based filtering checks to see if the name **starts with** the provided value and is case insensitive. 
3. Address based filtering checks to see if the address **contains** the provided value and is case insensitive. 
4. Filtering is done on the frontend after receiving all the school documents and would not scale well for extremely large datasets.


## Testing

```
npm run test
```

![Test Output](https://i.postimg.cc/yxmqScV9/Screenshot-from-2020-01-21-00-32-39.png)

## Architecture

### Frontend

Components: 

1. **add-school** component provides the ui for adding new schools. (src/app/components/add-school/)
2. **list-schools** component provides the ui for viewing and filtering schools. (src/app/components/list-schools/)
3. **text-input** component is a utility component used to maximize code reuse for user input handling (src/app/components/text-input/)

Services: 

1. **schools** service is used as the interface with the backend for both fetching, adding and deleting school documents (src/app/services/schools.service.ts)

### Backend

1. Backend is implemented as a simple **express** server. (server.js)
2. CRUD api is implemented as a RESTful api. (src_api/endpoints.js)
3. Database schema is defined using **mongoose** using mongoose as the driver (src_api/db/schools.js)
