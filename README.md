# Abdan Hafidz Personal Website
![Screen Recording 2025-03-11 101145](https://github.com/user-attachments/assets/f856871b-7d7e-4801-aee3-3c5e629b031f)

Welcome to my personal website repository! This website serves as my digital portfolio, showcasing my expertise in AI/ML engineering, software development, and educational projects.

## 🌐 Live Website
[Visit My Website](https://abdanhafidz.com)

## 📌 About This Project
This project is built using **Next.js** with **TypeScript**, and follows modern web development best practices. The website provides insights into my skills, projects, experiences, and ways to connect with me.

## 🛠️ Tech Stack
- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **Backend**: Fetching static JSON from `public/metadata`
- **Animations**: AOS (Animate on Scroll)
- **Images**: Optimized using `next/image`

## 🚀 Features
- Interactive project showcase
- Animated experience timeline
- Dynamic category selection for projects
- Responsive and mobile-friendly UI
- Social media integration

## 📂 Project Structure
```
📦 my-personal-website
├── 📁 public
│   ├── 📁 metadata (Static JSON files for projects and experiences)
│   └── 📁 images (Profile and project images)
├── 📁 components (Reusable UI components)
├── 📁 pages (Next.js route pages)
├── 📁 styles (Global styles and Tailwind configurations)
└── 📄 README.md
```

## 📥 Installation & Setup
To run this project locally, follow these steps:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/abdanhafidz/my-personal-website.git
cd my-personal-website
```

### 2️⃣ Install Dependencies
```bash
npm install
# or
yarn install
```

### 3️⃣ Run the Development Server
```bash
npm run dev
# or
yarn dev
```
Visit `http://localhost:3000` in your browser to view the website.

## 🛠️ How It Works
### 🔹 Fetching Static Data
Project and experience data are stored in the `public/metadata` folder as JSON files. Instead of using API requests, data is fetched directly from these static JSON files using `fetch()`.

Example:
```tsx
useEffect(() => {
  fetch('/metadata/projects.json')
    .then((res) => res.json())
    .then((data) => setProjects(data));
}, []);
```

### 🔹 Optimized Image Handling
All images are loaded using Next.js `next/image` for better performance and lazy loading:
```tsx
<Image src="/images/profile.jpg" alt="Profile" width={200} height={200} />
```

## 📧 Contact Me
Feel free to reach out via:
- 📩 Email: [abdan.hafidz@gmail.com](mailto:abdan.hafidz@gmail.com)
- 🔗 [LinkedIn](https://www.linkedin.com/in/abdan-hafidz-909113163/)
- 🐱 [GitHub](https://github.com/abdanhafidz)

---

⭐ **If you like this project, don't forget to give it a star on GitHub!** ⭐
