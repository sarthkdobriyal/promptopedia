# Promptopedia

## Introduction
Promptopedia is a one-stop solution for AI prompts, built using Next.js, Tailwind CSS, and MongoDB. It allows users to create an account using Google authentication handled by NextAuth. Once logged in, users can add their own AI prompts, view prompts created by others, copy prompts, and manage their own prompts. Additionally, users have access to a personal profile page where they can edit or delete their prompts.

## Features
- User authentication with Google using NextAuth.
- Add AI prompts to the platform.
- View prompts created by other users.
- Copy prompts for personal use.
- Edit or delete their own prompts.
- Personal profile page for managing prompts.

## Technologies Used
- Next.js
- Tailwind CSS
- MongoDB

## Prerequisites
Before running the project locally, ensure you have the following installed:
- Node.js (v14 or above)
- MongoDB (running locally or a remote connection)

## Getting Started
1. Clone the repository:

```bash
git clone https://github.com/your-username/prompt-hub.git
```

2. Navigate to the project directory:

```bash
cd prompt-hub
```

3. Install the dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory of the project and provide the following environment variables:

```
MONGODB_URI=your_mongodb_uri
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

5. Start the development server:

```bash
npm run dev
```

6. Open your browser and visit [http://localhost:3000](http://localhost:3000).



## Contributing
Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

When contributing to this repository, please follow the existing code style and commit message conventions.

## License
This project is licensed under the [MIT License](LICENSE).

## Acknowledgements
- Next.js - [https://nextjs.org](https://nextjs.org)
- Tailwind CSS - [https://tailwindcss.com](https://tailwindcss.com)
- MongoDB - [https://www.mongodb.com](https://www.mongodb.com)
- NextAuth - [https://next-auth.js.org](https://next-auth.js.org)


Thank you for using PromptHub! We hope you find it useful for your AI prompts.
