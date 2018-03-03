# aws-lambda-rds-db

Set up a cloudwatch event to stop and restart.

Start DB
Schedule expression: cron(45 11 ? * MON-SUN *)Description: 6:45AM

Stop DB
Schedule expression: cron(0 4 ? * MON-SUN *)Description: 11:PM
