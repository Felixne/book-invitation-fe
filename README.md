# TECHUP BASE

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 1. Guide

To run the project locally for development, on **Windows**, you can run the following command on **PowerShell** with **Administrator** permission:

```bash
powershell -ExecutionPolicy Bypass -File .\scripts\setup.windows.dev.ps1
```

On another OS, please follow some steps below:

### 1.1. Local DNS

To run the project locally, you need to add the following line to your hosts file:

```txt
127.0.0.1 dev.chat.sendgpt.techupzone.com www.dev.chat.sendgpt.techupzone.com
127.0.0.1 stg.dev.chat.sendgpt.techupzone.com www.dev.chat.sendgpt.techupzone.com
127.0.0.1 stg-local.dev.chat.sendgpt.techupzone.com www.dev.chat.sendgpt.techupzone.com
```

### 1.2. Environment Variables

To run the project locally, you need to create a `.env` file in the root directory of the project. Please clone the `.env.example` file and rename it to `.env.development`

### 1.3. SSL Certificate

This project uses SSL certificate. To generate the certificate, you can use `mkcert` tool. To install `mkcert`, you can follow the instruction [here](https://www.npmjs.com/package/mkcert).

After installing `mkcert`, you can run the following command to generate the certificate:

```bash
mkcert -install
mkcert --key-file ./.certs/techupzone.com.pem --cert-file ./.certs/techupzone.com.crt "dev.chat.sendgpt.techupzone.com" "*.dev.chat.sendgpt.techupzone.com"
```

`--key-file`, `--cert-file` and `dev.chat.sendgpt.techupzone.com` are the parameters for the certificate, and it must be the same as the `APP_SSL_KEY`, `APP_SSL_CERT`, `APP_HOST` parameters in `.env` file.

(**Note:** These parameters were set correctly in `.env.example` file, if you clone it, you don't need to change anything)

### Install Dependencies

To install the dependencies, you can run the following command:

```bash
yarn install
```

### Start the Project

To start the project, you can run the following command:

```bash
yarn start
```

## 2. Git

### Branch Name

For easy to track the issue, please follow the pattern below:

```bash
{issue_type}/{issue_number}
```

For example:

```bash
feature/DEMO-1
or
bug/DEMO-1
```

### Commit Message

This project uses some tools to help you write a good commit message. Please follow the pattern below:

```bash
DEMO-{issue_number}: {commit_message}
```

For example:

```bash
DEMO-1: Add README.md file
```

If you don't follow this pattern, the commit message will be rejected automatically.

## 3. Tools

### ESLint & Prettier

This project uses `ESLint` and `Prettier` to help you write a good code. They are configured in `.eslintrc.js` and `.prettierrc.js` files. But you don't need to worry about it. Please install the `ESLint` and `Prettier` extensions in your IDE, and they will help you to format the code automatically.

If you don't want to use the extensions, you can run the following command to format the code:

```bash
yarn lint
```

**Note:** To make sure our code will be formatted correctly before it is pushed to the remote repository, we use some tools to check your code when you commit it. If your code is not formatted correctly, the commit will be rejected automatically.
