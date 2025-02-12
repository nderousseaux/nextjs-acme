<p align="center">
	<img src="https://skillicons.dev/icons?i=js,next,vercel" height="30" />
</p>

<p align="center">
	<img src="docs/logo.png" alt="Icon of the project" height="150"/>
</p>

# <div align="center">Next.js Acme</div>
<div align="center">
	<samp>Training project for learning Next.js App Router, through the official tutorial.</samp>
</div>

<hr>

## ℹ️ About
This project is a training project for learning Next.js App Router, through the [official tutorial](https://nextjs.org/learn/dashboard-app). It is a simple dashboard app, that has a list of invoices, and a list of customers. The user can navigate between the two lists, and see the details of each invoice or customer.

## 🛠️ Getting started

### Installation
```bash
$ pnpm install
$ cp .env.example .env
```

And fill the `.env` file with the appropriate values. (fill the `AUTH_SECRET` with the output of `openssl rand -base64 32`)

Then, you can go to `localhost:3000/seed` to seed the database with some dummy data.

### Development
```bash
$ pnpm run dev 
#or, with vercel
$ vercel dev
```

### Deployment
```bash
$ vercel --prod
```

Or simply push to the main branch, if you have the vercel integration enabled.
