Lambda function ready for deploy on AWS.

Every invocation responds with a random comic from iconic Cyanide and Happiness.

Test lambda in local dev env
`nodejs test.js`

Create Zip lambda
`zip --exclude \*dist\* -r dist/${PWD##*/}.zip .`


TODO:
- Support both JSON and HTML requests
- Suport latest and random endpoints (code ready)

Invocation:

https://jww843zdn1.execute-api.eu-west-1.amazonaws.com/prod/cyanide-and-hapiness
