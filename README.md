
# Full Stack Banking App

A full stack banking platform for everyone.


## Built With

Next.js, TypeScript, Tailwind CSS, shadcn/ui, Appwrite, Plaid, Dwolla, Sentry, Vercel


## Demo

Try it out for yourself ➡️  https://banking-eight-tau.vercel.app/

Either Sign Up with any made up data or Sign In with my test user:

```
UserName: test@user.com
Password: Password12
```

![Horizon App Demo](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnFndWJ1NnI3eXF6ODJlbGd3MW1sd3NoMWgzdXNlOG5vcXdnM2Z4bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TS2v0bNuksLYJALKiU/giphy.gif)
## Keep in minds

You can only add one new bank at a time. Even if you select more through the Plaid wizard selection. Right now Plaid Sandbox only gives access for Chase Bank with the accounts Checking and Savings.


## Features

- AppWrite for Database (Banks of user, Number of Users, etc)
- Uses Plaid Sandbox for fake bank account data
- Dwolla to move money between bank accounts
- Sentry for Error Tracking and Monitoring


## Cloning and Running the Project

You wouldn't be able to run the project locally on a new machine due to environment variables needed to run the project, the API "secrets" of Plaid and Dwolla etc. But if you were to get those variables. Then to run you would do:
```bash
  npm run dev
```
Then open in localhost
