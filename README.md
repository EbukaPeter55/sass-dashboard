# Lawpavillion Dashboard

This is a Sass dashboard [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It uses the **App Router** and integrates a modern tech stack for a responsive and maintainable frontend.

## Deployed Live URL:
**https://sass-dashboard-cg24lkzz2-ebuka-peters-projects.vercel.app

**---
## 🚀 Features
- Authentication (Login and Signup)
- Modern Dashboard
- Settings page for Theme selection and Profile update
- Server Side Rendering for data fetching


## 🚀 Tech Stack

- **Node.js** v22  
- **React** v19  
- **Next.js** v15.3.5 (App Router)  
- **TypeScript**  
- **Tailwind CSS**  
- **ShadCN UI**  
- **Jest** (Unit Testing)  
- **React Testing Library**
- **Context API**

  I made use of the context API for state management as against using zustand or redux, cause the app does not really require a complex state change and management which zustand and redux are more suitable for. Moreover, Context API has less boiler plate code when compared to redux.

---

## Environment Variables

This project requires certain environment variables to function correctly, especially for data fetching.

1.  **Create a `.env.local` file** in the root of your project.
2.  **Copy the contents of `.env.example`** into your new `.env.local` file.

## 📦 Installation

Install dependencies using [pnpm](https://pnpm.io):

```bash
pnpm install

To start the development server, run:
```bash
pnpm dev

Then open your browser at: http://localhost:3000

🧪 Running Unit Tests
Prerequisite
Create a .watchmanconfig file in the root of your project and add an empty object:
{}

## **Run tests**
Use this command: pnpm test


