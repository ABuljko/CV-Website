# CV-Website

This is a personal portfolio website showcasing my skills, projects, and contact information. The website is responsive, modern, and built with HTML, CSS, and JavaScript. It features various sections like an introduction, skills showcase, portfolio, contact form, and more.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Features Explained](#features-explained)
- [Usage](#usage)
- [Customization](#customization)
  
## Technologies Used

- **HTML**: Structure of the website.
- **CSS**: Styling and layout with responsive media queries.
- **JavaScript**: For dynamic functionality such as menu toggling, active link highlighting, dark mode, color changing, etc.
- **Swiper**: For sliders or carousels (optional feature).
- **Boxicons**: For using vector icons across the website.
- **ScrollReveal.js**: For smooth scroll-based animations.

## Features

- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Menu Toggle**: Mobile-friendly navigation with a hamburger menu that toggles visibility.
- **Active Section Highlighting**: Automatically highlights the active section link in the navigation bar as you scroll through the page.
- **Sticky Header**: The navigation header becomes sticky when scrolling down the page.
- **Dark Mode**: Toggle between dark and light modes for better visual comfort.
- **Dynamic Color Palette**: Change the main theme color of the website with a button.
- **Smooth Animations**: Scroll animations powered by ScrollReveal.js.
- **Popup Support**: Open and close popup windows for additional content.
- **Download CV**: Allows users to download a PDF version of the resume directly from the website.
- **Skills Section**: Highlights proficiency in HTML, CSS, JavaScript, Python, Flutter, and more.
- **Portfolio Section**: Showcases various projects with links to GitHub repositories.
- **Social Media Links**: Direct links to my GitHub and LinkedIn profiles.

## Features Explained

### 1. **Header and Home Section**
   - The **Header** and **Home Section** provide an engaging introduction to the website. Here's how it works:

   **Header**:
   - **Logo**: The logo links to the homepage (`#`), providing easy navigation back to the top.
   - **Navigation Bar**: The navbar includes links to different sections of the page (`#home`, `#about`, `#skills`, `#portfolio`, `#contact`). These links are used to navigate smoothly between sections using anchor links.
   - **Hamburger Menu**: On mobile screens, the hamburger menu icon (`<div class="bx bx-menu">`) is displayed. It toggles the visibility of the navbar links for a responsive, mobile-friendly experience.
   - **Dark Mode Toggle**: The moon icon (`bx bx-moon`) serves as a button to toggle between dark and light modes, changing the website's theme for user comfort.
   - **Color Palette Change**: The paint icon (`bx bx-paint`) allows users to dynamically change the theme color of the website by cycling through predefined color options.
   
   **Home Section**:
   - **Introduction**: This section introduces you with a personal greeting (`Hello, I am` and `Ajdin Buljko`). A placeholder text can be replaced with a brief description or an introduction.
   - **Social Media Links**: The section includes social media icons with links to your GitHub and LinkedIn profiles. Clicking on these icons opens the respective profiles in a new tab.
   - **Download CV**: A button labeled "Download CV" is provided, allowing visitors to download a PDF version of your resume directly from the website.
   
   **Profession Container**:
   - This container displays a set of professions with their respective icons. These include "Web Developer", "Software Design", "Animal Lover", and "Room Kisser". You can customize these titles and icons based on your personal expertise or fun elements you want to include.
   - **Styling**: The professions are given a unique style using inline `style="--i:n;"` to manage their placement and appearance.
   - **Decorative Elements**: The `.circle` and `.overlay` provide visual effects to make the section more appealing.

   **Responsive Design**:
   - The layout is designed to be responsive, adjusting the display according to the screen size, with the menu toggling on smaller devices for easy navigation.

### 2. **About Section**
   - The **About Section** provides an overview of who you are and highlights your skills and motivations. Here's how it works:

   **Content**:
   - **Heading**: The heading "About Me" introduces the section, and the `<span>` tag highlights the word "Me" for emphasis.
   - **Subheading**: The subheading (`<h3>`) currently contains a placeholder text, which can be replaced with a more formal or personalized greeting.
   - **Description**: The paragraph (`<p>`) offers a brief introduction of yourself. The current placeholder text can be customized to reflect your personal introduction, goals, and aspirations.
   - **Read More Link**: The "Read More" button (`<a href="#">`) serves as a link for users to find more information about you. You can link this to another page or scroll to a different part of the website with more detailed information about your background and skills.

   **Customization**:
   - You can replace the placeholder text in the heading, subheading, and description with your actual introduction and career goals.
   - The "Read More" button can be linked to another section or a more detailed about page to provide visitors with further details.

### 3. **Skills Section**
   - The **Skills Section** showcases your proficiency in various technologies and programming languages using skill bars. Here's how it works:

   **Content**:
   - **Heading**: The heading "My Skills" introduces the section, with the word "Skills" emphasized using the `<span>` tag.
   - **Skill Boxes**: Each skill is displayed in a **skill box** (`<div class="skill-box">`), with the following components:
     - **Skill Title**: The name of the skill (e.g., HTML, CSS, JavaScript) is displayed using a `<span class="title">`.
     - **Skill Bar**: Each skill has a progress bar (`<div class="skill-bar">`) that visually represents your proficiency in that particular skill. The **skill-per** span inside each bar is styled to represent the percentage of proficiency. For example:
       - HTML has 90% proficiency.
       - CSS has 83% proficiency.
       - JavaScript has 45% proficiency.
       - Flutter has 70% proficiency.
       - Python has 75% proficiency.
     - **Tooltip**: Each skill bar displays a **tooltip** (`<span class="tooltip">`) showing the exact percentage when the user hovers over the skill bar.

   **Customization**:
   - You can update the skill names and proficiency percentages to reflect your actual skills and expertise.
   - The skill bars' width can be adjusted by changing the value in the CSS class (e.g., `.html`, `.css`, etc.) to match the percentage of your proficiency.

### 4. **Portfolio Section**
   - The **Portfolio Section** displays a selection of your latest projects. Each project is presented as a **portfolio box** with an image, title, description, and a link to the project on GitHub (or any relevant URL). Here's how it works:

   **Content**:
   - **Heading**: The section is introduced with the heading "Latest Projects", where the word "Projects" is emphasized using the `<span>` tag.
   - **Portfolio Boxes**: Each project is contained in a **portfolio box** (`<div class="portfolio-box">`) and consists of the following components:
     - **Project Image**: An image representing the project (e.g., a screenshot) is displayed using the `<img>` tag.
     - **Portfolio Layer**: A **portfolio layer** (`<div class="portfolio-layer">`) is added over the image to provide the following details:
       - **Title**: The name or type of the project (e.g., "Sudoku-App") is displayed using the `<h4>` tag.
       - **Description**: A brief description of the project (e.g., "CSV NY") is shown with the `<p>` tag. This text can be updated with the actual project details.
       - **Link to Project**: Each project has a clickable link icon (`<a>` tag with external link icon) that redirects to the GitHub repository (or another project link). The link opens in a new tab (`target="_blank"`).

   **Customization**:
   - You can update the **project images** and **descriptions** to reflect your own portfolio items.
   - The **links** (`<a href="...">`) should point to the actual URLs of your projects, such as GitHub repositories or live demo pages.

   **Example**:
   - One project box is dedicated to a web design project called "CSV NY" with a link to the corresponding GitHub repository.
   - Other projects can be added in the same manner by replicating the **portfolio-box** structure and updating the content (image, title, description, and link).

   **Layout**:
   - The projects are displayed in a **grid layout**, with multiple project boxes stacked in rows. This section will adapt to different screen sizes, ensuring a responsive design.


### 5. **Contact Form Integration**
   - The contact form is integrated with [Formspree](https://formspree.io/), a service that allows users to submit their messages without needing a backend server.
   
   **How it works**:
   - **Form Fields**: The form includes input fields for the user's name, email address, phone number, subject, and a message.
   - **Form Action**: The form's `action` attribute is set to `https://formspree.io/f/myzypape`, which is the endpoint that handles the submission of the form data to Formspree.
   - **Form Submission**: Upon clicking the “Send Message” button, the form data is sent to Formspree. Formspree then forwards the message to the email address you’ve registered with Formspree.
   - **Customization**: You can replace the Formspree URL (`https://formspree.io/f/myzypape`) with your own Formspree endpoint. You can also modify the form fields (name, email, phone, subject, and message) as needed.

## Usage

1. Open index.html in your browser to see the website in action.
2. You can customize the sections such as the "About" section, "Skills" section, and "Portfolio" by editing the HTML files.

### Dark Mode
You can toggle dark mode by clicking the dark mode icon in the header. This will change the theme of the website to a dark background with lighter text.

### Responsive Design
The layout adjusts automatically for different screen sizes, from large desktop screens to mobile devices.

### Customization

**Colors:** to change the primary color theme, modify the --main-color in the :root selector in the CSS file. You can also adjust other color variables like --background-color, --text-color, etc., to fit your desired theme.

**Fonts:** this website uses the "Poppins" font from Google Fonts. To change the font, update the @import URL in the CSS file or replace it with another font.

**Logo and Text:** update the logo and textual content in the HTML files to reflect your own branding.

**Portfolio Section:** to update the portfolio, modify the images and descriptions within the .portfolio-container in the index.html.

