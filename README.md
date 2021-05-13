# Cudo Back-end Technical Test

Welcome to Cudo Ventures' back-end code test.

## Objective

Cudo needs a withdrawal processor written to process a queue of users' requested withdrawals.

## Brief

Our imaginary users have created a series of withdrawal requests which we need to process. The deployment written for this task should iterate over these requests, and send the transactions via an ethereum node to the requested addresses.

There is no need to actually broadcast the transactions - but please demonstrate how appropriate API calls against an ethereum provider would be made. There are a couple of transactions with a populated transaction ID and a status of 'complete' to represent a previously processed withdrawal.

To get started, `yarn seed` in this folder to spin up a docker container running MySQL and automatically populate it with the data from `data/withdrawal-requests.json`. `yarn dev` will run `index.js`. Feel free to expand on the scaffold provided in `index.js`, or restructure the repository as you wish. `yarn test` will run anything specified in the `test` folder, which is currently one failing skeleton test.

There is no time limit for this test, but please don't feel the need to spend more than 3-4 hours working on your solution. We encourage you to keep things simple, and if you feel the need to make a compromise based on time constraints, feel free to make a note of it and we will discuss it as a decision when going over your work.

## Tasks

- Implement assignment using **Node.js**
- The output should be a file that can be run as a kubernetes deployment in a cloud platform. Providing a deployment specification is optional, this is just the context in which the code will run.
- Iterate over entries in the database, using an appropriate API or library to broadcast transactions. Update the entries in the database accordingly based on the outcome of the API requests.
- Consider transactional boundaries - it is very important that we don't accidentally process a withdrawal twice.
- Use appropriate third-party libraries as neccessary.
- Provide tests for the deployment. Ideally, use a library which allows you to mock responses from the ethereum daemon/provider, so we can get as much test coverage as possible.
- Structure the repository as you see fit.
- Make a note of any key decisions or compromises you feel you needed to make, and write them in a seperate Markdown file so we can get an understanding of your decision-making.
- Feel free to show off, without adding unneccessary complexity.

## Deliverables

Please fork the repository and make changes to it. Push your changes and send us a link to your repository when you have completed the task.

## Evaluation Criteria

- We're looking for you to produce working code which is concise and understandable, while still addressing the requirements of the project.
- Simplicity: is the solution appropriate for the complexity of the problem?
- Completeness: were the instructions followed?
- Correctness: does the functionality act in sensible, thought-out ways?
- Testing: is the app adequately tested?
