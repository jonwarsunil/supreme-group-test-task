# supreme-group-test-task

This is a frontend application for Supreme Group, built using React, Vite, TailwindCSS, and other modern libraries. The project includes responsive design, performance optimizations, and accessibility considerations.

## Project Setup

To set up the project locally, follow the steps below:

1. Clone this repository:

   git clone https://github.com/jonwarsunil/sonchi-frontend.git
   cd supreme-group-frontend

2. Install dependencies:

npm install

3. Run the development server:

npm run dev

Implementation Details:

Component Architecture Overview :

The app is built with React and uses React Router for client-side routing.
The form components are managed using React Hook Form and validation is done with Yup.
TailwindCSS is used for styling, ensuring a mobile-first, responsive design.

Folder Structure :

src/components: Contains components/reusable UI components include home, header, footer section.
src/componetts/typography: I created a common typography component for all heading types and paragraphs."
src/componetts/input-field: Created for common reusabel inputtype
src/componetts/button: Created for common reusabel buttons all over the website
scr/404: A 404 page is created to handle broken or non-existent URLs, improving user experience, navigation

Responsive Design Strategy :

The application is designed to be fully responsive. We use TailwindCSS for responsive utilities and breakpoints to ensure the app works seamlessly on all screen sizes.
Mobile-first design approach is followed, ensuring optimal performance on mobile devices first, then scaling up to tablets and desktops.

Performance Optimization Techniques :

Code splitting: Utilized by default in Vite for faster loading.
Lazy loading of components and routes using React.lazy and Suspense.
Efficient bundling with Vite for smaller production builds.
Image optimization is done using Vite’s built-in optimizations.

Accessibility Considerations :
Semantic HTML is used where possible.
Form elements are properly labeled and validation messages are clear for screen readers.
ARIA roles are used for additional context and navigation.

Third-Party Libraries Used :

React Router Dom: For managing client-side routing.
React Hook Form: For form handling and validation.
Yup: For schema-based validation of form data.
TailwindCSS: For utility-first styling.

Assumptions Made & Decisions Taken :

The project assumes that the user has a modern browser and that JavaScript is enabled.
Chose Vite over Webpack for faster development builds and optimized production output.
Used React Hook Form for handling forms, as it provides minimal re-renders and better performance.
Chose TailwindCSS for styling, allowing faster development and flexible design scaling.

Challenges Faced & Potential Solutions :

Challenge: Applying precise animations to the UI.
Solution: Utilized Framer Motion for smooth and controlled animations, ensuring consistency across components. Fine-tuned easing functions and delays to enhance user experience.

Suggested Upcoming Features & Improvements :

Add user authentication and role-based access control.
Integrate a backend API for dynamic data fetching and storage.

Additional Remarks
This project is designed for rapid development and is scalable to include more features as needed.
The code is clean, modular, and adheres to modern best practices in frontend development.

Dependencies:

@hookform/resolvers: "^4.1.0"

@tailwindcss/vite: "^4.0.6"

react: "^19.0.0"

react-dom: "^19.0.0"

react-hook-form: "^7.54.2"

react-router-dom: "^7.1.5"

tailwindcss: "^4.0.6"

yup: "^1.6.1"

Dev Dependencies:

@eslint/js: "^9.19.0"

@types/react: "^19.0.8"

@types/react-dom: "^19.0.3"

@vitejs/plugin-react: "^4.3.4"

eslint: "^9.19.0"

eslint-plugin-react-hooks: "^5.0.0"

eslint-plugin-react-refresh: "^0.4.18"

globals: "^15.14.0"

typescript: "~5.7.2"

typescript-eslint: "^8.22.0"

vite: "^6.1.0"
arduino
Copy
Edit
