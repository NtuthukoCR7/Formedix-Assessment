# Formedix-Assessment
Full Name: Ntuthuko Cyril Ntshakala

**Project Background**
This is an automation project that navigates user to: https://ryze-staging.formedix.com/sign-in

- The project is written in javascript code using tescafe runner
- Firstly it launches the URL mentioned above.
- It's then navigates through pages to update description text and save changes then do verification checks
- Then logs the user out

### Requirements

1. Testcafe
2. GIT
3. Visual Studio Code

### Guides

1. Tescafe (https://testcafe.io/documentation/402634/guides)
2. GIT (https://github.com/git-guides/)

#### Installation

Clone Repo
git clone git@github.com:NtuthukoCR7/Formedix-Assessment.git

#### Testcafe Installation

1. open up terminal
2. install git (https://github.com/git-guides/install-git)
3. install npm (https://nodejs.org/en/download/)
4. npm install -g testcafe
5. install faker npm package (npm install faker)

**Functionality**
The project is structured in the following folders
1. **Components**
in this folder there are two files contained:
 - loin.js - it consist of a method responsole for loging into the site
 - logout.js - it consist of a method responsole for logout of the sie

2. **elements** - it consist of multiple classes that are responsile for getting all the browser elements
3. **helpers** - contains a constructor that generates random text data
4. **tests** - contains all excecutble tests

**How to run the tests**
 To run the tests, you just need to run the following command.
<test path> testcafe chrome tests/

e.g
  ![image](https://user-images.githubusercontent.com/47598711/165712934-0c8718bd-d95c-4e5b-98f6-118fe5f844bd.png)

