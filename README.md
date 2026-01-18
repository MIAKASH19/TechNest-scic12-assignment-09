# TechNest

This is a Demo Electronic product selling website where people can sell and buy.

---

## ✨ Features

* ⚡ Built with **Next.js App Router (15/16 ready)**
* 🎨 **Tailwind CSS** for modern, responsive UI
* 🔐 **Mock Authentication** using cookies
* 🧠 **Middleware-based route protection**
* 🔄 Dynamic **Login / Logout button state** (no reload required)
* 📦 Public & Protected pages
* ❓ Smooth animated **FAQ Accordion**
* 📱 Fully responsive (mobile-first)



## 🔐 Authentication Logic

This project uses **cookie-based mock authentication**:

* On login → a cookie named `auth=true` is set
* Middleware checks this cookie
* If not logged in → user is redirected to `/login`


---

## 🎯 UI & State Handling

* Login / Logout button updates **instantly** using React state
* No page reload required
* Auth state synced using `useEffect` + cookies

This avoids the common issue where:

> "Login works but Logout button appears only after reload"

---

## ❓ FAQ Section

* Smooth expand/collapse animation
* Arrow rotates on open
* Height animation using CSS transitions
* Fully accessible and responsive

---

## 🛠️ Tech Stack

* **Next.js** (App Router)
* **React**
* **Tailwind CSS**
* **JavaScript (ES6+)**

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Development Server

```bash
npm run dev
```

Open 👉 `http://localhost:3000`

---

## 📁 Folder Structure (Simplified)

```
app/
 ├─ login/
 ├─ add-item/
 ├─ items/
 ├─ layout.js
 ├─ page.js
middleware.js
components/
```

---

## 📌 Notes

* This project is for **learning & demo purposes**
* Auth system is **mock**, not production-ready
* Easily extendable to real authentication (JWT / NextAuth / Firebase)

---


**Built with ❤️ using Next.js & Tailwind CSS**
