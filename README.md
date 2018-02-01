Lambda function ready for deploy on AWS.

Every invocation responds with a random comic in JSON format from iconic Cyanide and Happiness

Test lambda in local dev env
`nodejs test.js`

Create Zip lambda
`zip --exclude \*dist\* -r dist/${PWD##*/}.zip .`
