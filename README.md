# Betwork

This is the front-end and solidity repository for our final project. There are additional repos in the GitHub for our microservices which were deployed and hosted on azure.

### Team Members 
1. Jordi Adoumie (jja2163)
2. Zhouxuan Li (zl2890)
3. Prabhpreet Singh Sodhi (pss2161)

## Back-End Services

### Leveraging Microservice Architecture and Azure Cloud Services

Our project's back-end infrastructure is architected on the foundational principles of a **sophisticated microservice architecture**, ensuring a modular, scalable, and resilient service deployment. Each microservice is intricately designed to serve specific areas of our application, with a primary focus on two crucial domains: **User Data Management** and **NBA Betting Data Aggregation**.

Originally, the goal was to maintain two separate microservices, but for more practical purposes, the nba + user microservices can be found in the ['User Microservices'](https://github.com/Betwork2-0/users-microservice.git) respository in this project. 

#### User Data Management
This microservice acts as a cornerstone, handling intricate aspects of user authentication, profile management, and personalized user experiences.

#### NBA Betting Data Aggregation
Tailored for the enthusiasts of NBA betting, this microservice is dedicated to aggregating and processing data related to NBA games available for betting.

These microservices are integrated and deployed on **Microsoft Azure**, reflecting our commitment to reliability and continuous service availability. Utilizing Azure's advanced cloud capabilities, like **Azure Kubernetes Service (AKS)** and **Azure Functions**, we have implemented auto-scaling and load balancing features to maintain optimal performance, regardless of traffic fluctuations.

### FastAPI for Advanced API Documentation

Our back-end's efficiency is further enhanced by **FastAPI**, which we use for creating cutting-edge API documentation. FastAPI's swagger UI not only offers a user-friendly interface but also ensures thorough documentation of our API endpoints. This framework has significantly improved our developer experience by offering features like:

- **Auto-generated, interactive API documentation**: Our APIs are self-documenting, with the documentation dynamically updating as endpoints evolve, thanks to Swagger UI.
- **Schema validation and serialization**: Employing Pydantic, FastAPI ensures rigorous schema validation, bolstering data integrity and security.
- **Asynchronous request handling**: FastAPI's support for asynchronous operations allows for efficient, non-blocking request handling, a key factor in maintaining high performance under heavy loads.

Incorporating FastAPI highlights our dedication to adopting best practices in API development and exemplifies our approach to building scalable, efficient, and maintainable back-end services.

![image](https://github.com/Betwork2-0/betworkapp/assets/98557455/725f44ae-7eff-463e-9ff4-712cdaa25cbf)

---

### How to Get the Back-End Running Locally
The cost of azure services was too expensive to justify paying for indefinitely, so in order to test out these features, you'll currently need to clone the Users Microservice [repository](https://github.com/Betwork2-0/users-microservice.git). 

#### Requirements
To install all the project's dependencies, run: `pip3 install -r requirements.txt` 
- See requirements.txt file.
  
#### Running and building the app
Run the app: `python3 main.py`  \
Open [http://localhost:5011](http://localhost:5011) to view it in your browser.
To see all endpoints available by Swagger, go to [http://localhost:5011/docs](http://localhost:5011/docs)
New endpoints will be automatically added to Swagger.

## Front-End

### How to Get the Front-End Running Locally
- Run 'npm install'
- Run 'npm run dev'
- Open http://localhost:5173 to view it in your browser. 

#### Login page
<img width="1440" alt="Screen Shot 2023-12-17 at 22 02 56" src="https://github.com/Betwork2-0/betworkapp/assets/50009045/4d261d39-d54f-47cc-99c5-fdc3319b8959">

#### Sign up page
<img width="1440" alt="Screen Shot 2023-12-17 at 22 03 03" src="https://github.com/Betwork2-0/betworkapp/assets/50009045/4e6f3d46-ed04-4db1-a590-b112aca4ee79">

#### Home page
<img width="1440" alt="Screen Shot 2023-12-17 at 21 53 36" src="https://github.com/Betwork2-0/betworkapp/assets/50009045/754d2771-af7d-4a3f-ae86-43cc94ca6c56">

#### My bets page
<img width="1436" alt="Screen Shot 2023-12-17 at 21 54 57" src="https://github.com/Betwork2-0/betworkapp/assets/50009045/4b60e74b-8ed6-4457-a4e9-e39745b165e3">

#### My wallet page
<img width="1440" alt="Screen Shot 2023-12-17 at 21 57 12" src="https://github.com/Betwork2-0/betworkapp/assets/50009045/35e40786-f438-45db-aac8-b474a3325a82">

#### My friends page
<img width="1440" alt="Screen Shot 2023-12-17 at 21 57 56" src="https://github.com/Betwork2-0/betworkapp/assets/50009045/cde9cff5-54e9-4bf2-b0ba-8456a4733a99">

#### Add friend page
<img width="1440" alt="Screen Shot 2023-12-17 at 21 58 39" src="https://github.com/Betwork2-0/betworkapp/assets/50009045/e6c3133a-7f23-4c74-97fe-729122a2dba2">

#### Propose bet page
<img width="1440" alt="Screen Shot 2023-12-17 at 22 01 13" src="https://github.com/Betwork2-0/betworkapp/assets/50009045/8018e761-19a8-4c06-a949-e0ac26d764a6">
<img width="1440" alt="Screen Shot 2023-12-17 at 22 01 25" src="https://github.com/Betwork2-0/betworkapp/assets/50009045/53130409-2995-42c7-bb9d-81abc5c40bca">
<img width="1440" alt="Screen Shot 2023-12-17 at 22 01 36" src="https://github.com/Betwork2-0/betworkapp/assets/50009045/6fc2792a-cbfe-4158-8895-404071606c18">



## Solidity Contract
The Solidity Contract is described in "mycontract.sol" at: [Betwork Contract](src/web3/)
Once deployed on Ganache locally, the Contract Hash and ABI can be updated in "testing.js" within the same directory.

The testscript also includes a "setUpAndRun()" function, which can be used to exhaustively test the functionality of the contract.

A snapshot of the testing is included below:

![image](https://github.com/Betwork2-0/betworkapp/assets/32813957/54a9f794-35cf-4fa2-b2b1-79306d2f8535)

