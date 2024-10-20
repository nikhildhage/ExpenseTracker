<div>
  <br />
  <img src="./src/assets/expenseTracker.jpeg" alt="Project Banner">
  <br/>
  <br>
  <div>
    <img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=47A248" alt="mongodb"/>
    <img src="https://img.shields.io/badge/-Express-black?style=for-the-badge&logoColor=white&logo=express&color=4B8BBE" alt="express"/>
    <img src="https://img.shields.io/badge/-React-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB " alt="react">
    <img src="https://img.shields.io/badge/-Node.js-black?style=for-the-badge&logoColor=white&logo=node.js&color=8CC84B" alt="node.js"/>
    <img src="https://img.shields.io/badge/-NestJS-black?style=for-the-badge&logoColor=white&logo=nestjs&color=E0234E" alt="NestJS" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript"/>
    <img src="https://img.shields.io/badge/-Materiaal_UI-black?style=for-the-badge&logoColor=white&logo=mui&color=007FFF" alt="mui"/>
    <img src="https://img.shields.io/badge/-Stripe-black?style=for-the-badge&logoColor=white&logo=stripe&color=008CDD" alt="stripe"/>
  </div>
</div>
<br>

<h1>Expense Tracker<h1>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. 🤸 [Visit](#visit)
3. ⚙️ [Tech Stack](#tech-stack)
4. 🔋 [Features](#features)
5. 🤸 [Quick Start](#quick-start)
6. 🔗 [Links](links)

## <a name="introduction">🤖 Introduction</a>

Welcome to Expense Tracker, a modern voice activated personal finance management app built using the MERN stack with TypeScript and Material-UI for a sleek and efficient user experience.<br> This app
empowers you to stay on top of your financial goals by tracking income, expenses, and budgets in a seamless, user-friendly way.<br> Designed to deliver performance, scalability, and flexibility,
Finance Tracker integrates multiple technologies to offer a powerful solution:

- MongoDb for a robust, cloud-ready database.
- Express.js and NestJS for building a secure and scalable backend API.
- React with TypeScript for building a responsive and interactive frontend.
- Node.js for smooth server-side operations.
- Material-UI to ensure a polished and modern user interface.

## <a name="visit">🤖 Visit</a>

## <a name="tech-stack">⚙️ Tech Stack</a>

- MongoDB
- Express.js
- React
- Node.js
- Nest.js
- TypeScript
- Material UI
- Clerk
- Speechly
- Stripe

## <a name="features">🔋 Features</a>

👉 **Authentication and Authorization**: Secure user access with registration, login, and route protection with clerk .

👉 **Category based Transactions**: Select transaction category

👉 **Transaction Type**: Select prefered trasaction type from Income or Expense

👉 **Amount**: Specify and input desired montary amount fro transaction

👉 **Bank account connection**: Connect to your prefered bank account securely with plaid

👉 **Saas Payment**: Securely pay for pro version via Stripe

👉 **Responsive UI/UX**: A seamless experience across devices with a user-friendly interface

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

### **Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### **Cloning the Repository**

```bash
git clone https://github.com/nikhildhage/ExpenseTracker.git
cd ExpenseTracker
```

### **Installation**

Install the project dependencies using npm:

```bash
npm i
```

### **Build**

This project is built on node.js, esbuild and vite to bundle all dependencies. <br> Make sure your node version is compatible with project.<br> After installing all dependencies for the project<br>
Vite will build the project to the dist folder as an out dir. You can change this in vite config file build project using npm:

```bash
npm run build
```

### **Vite Config**

You can configure Vite setting by editing the vite-config.ts

- [Vite](<https://vite.dev/config/-%20[Docker%20Desktop](https://www.docker.com/products/docker-desktop/)%20(Docker%20Desktop)>) (vite build tool )

Warning make sure to turn off vite -open command for automatic opening in browser when building a docker container as the docker container does not have a gui

### **Containerization**

ExpenseTracker uses docker top container this build<br> If you would like to build a docker container make sure you have docker desktop or another service to build a docker container<br> To configure
the docker image building process edit the dockerfile.<br> This docker container is using node as a build target and alpine os as a lightweight os

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Docker Desktop)

### **Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
#MONGODB
MONGODB_URL="your_api_key"

#CLERK
CLERK_URL="your_api_key"

#Stripe
Stripe_URL="your_api_key"
```

Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on the [Clerk](https://clerk.com/), [MongoDB](https://www.mongodb.com/)

### **Running the Project**

If building for a docker container remember to map the container port to host port in docker desktop

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="links">🔗 Links</a>

Public Assets used in the project can be found in the

```
./src/assets folder
```
