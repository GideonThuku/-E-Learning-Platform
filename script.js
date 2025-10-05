document.addEventListener('DOMContentLoaded', () => {

    // --- DATA ---
    const courses = [
        {
            id: 1,
            title: 'JavaScript for Beginners',
            description: 'A comprehensive introduction to JavaScript, the language of the web. No prior experience needed.',
            image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            lessons: ['Introduction to JavaScript', 'Variables and Data Types', 'Functions and Scope', 'DOM Manipulation', 'Final Project: To-Do App'],
            completed: false
        },
        {
            id: 2,
            title: 'AI for Software Engineering',
            description: 'Explore how AI is revolutionizing software development, from code generation to automated testing.',
            image: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            lessons: ['Intro to AI in Dev', 'AI-Powered Code Assistants', 'Machine Learning Models for Testing', 'Generative AI for Prototyping', 'Ethics of AI in SE'],
            completed: false
        },
        {
            id: 3,
            title: 'Modern React & Redux',
            description: 'Learn to build powerful single-page applications with React and manage state efficiently with Redux.',
            image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            lessons: ['React Fundamentals & JSX', 'Components, Props, and State', 'Handling Events and Forms', 'State Management with Redux', 'Fetching Data from APIs'],
            completed: false
        },
        {
            id: 4,
            title: 'UI/UX Design Principles',
            description: 'Discover the principles of creating beautiful, user-friendly interfaces. Learn about wireframing and user testing.',
            image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            lessons: ['Intro to User-Centered Design', 'Wireframing & Prototyping', 'Visual Design & Hierarchy', 'Usability Testing', 'Final Project: Design a Mobile App'],
            completed: false
        },
        {
            id: 5,
            title: 'Cloud Computing with AWS',
            description: 'Master the fundamentals of cloud computing and get hands-on experience with Amazon Web Services (AWS).',
            image: 'https://images.unsplash.com/photo-1590902264908-29a54999553c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            lessons: ['What is Cloud Computing?', 'Core AWS Services (EC2, S3)', 'Serverless with AWS Lambda', 'Databases on AWS', 'Deploying a Scalable App'],
            completed: false
        },
        {
            id: 6,
            title: 'Cybersecurity Essentials',
            description: 'Learn to protect systems, networks, and programs from digital attacks with these essential cybersecurity skills.',
            image: 'https://images.unsplash.com/photo-1544890225-2f3faec4446f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            lessons: ['Intro to Cybersecurity Threats', 'Network Security Fundamentals', 'Cryptography Basics', 'Ethical Hacking Concepts', 'Incident Response'],
            completed: false
        }
    ];

    // --- DOM ELEMENTS ---
    const courseList = document.getElementById('course-list');
    
    // Course Modal Elements
    const courseModal = document.getElementById('course-modal');
    const courseModalBody = document.getElementById('modal-body');
    const courseCloseBtn = courseModal.querySelector('.close-button');

    // Auth Modal Elements
    const authModal = document.getElementById('auth-modal');
    const authCloseBtn = authModal.querySelector('.auth-close');
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const showSignupLink = document.getElementById('show-signup');
    const showLoginLink = document.getElementById('show-login');

    // Auth State Elements
    const authLinks = document.getElementById('auth-links');
    const userInfo = document.getElementById('user-info');
    const welcomeMsg = document.getElementById('welcome-msg');
    const logoutBtn = document.getElementById('logout-btn');


    // --- FUNCTIONS ---

    /**
     * Renders all courses to the main page.
     */
    function renderCourses() {
        courseList.innerHTML = ''; // Clear existing content
        courses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.className = 'course-card';
            courseCard.dataset.courseId = course.id;

            courseCard.innerHTML = `
                <img src="${course.image}" alt="${course.title}">
                <div class="course-info">
                    <h3>${course.title}</h3>
                    <p>${course.description}</p>
                </div>
                ${course.completed ? '<div class="status-badge">Completed</div>' : ''}
            `;
            
            courseCard.addEventListener('click', () => openCourseModal(course.id));
            courseList.appendChild(courseCard);
        });
    }

    /**
     * Opens the modal with details for a specific course.
     */
    function openCourseModal(courseId) {
        const course = courses.find(c => c.id === courseId);
        if (!course) return;

        courseModalBody.innerHTML = `
            <h2>${course.title}</h2>
            <p>${course.description}</p>
            <h3>Lessons:</h3>
            <ul>
                ${course.lessons.map(lesson => `<li>${lesson}</li>`).join('')}
            </ul>
            <button id="complete-course-btn" class="complete-btn ${course.completed ? 'completed' : ''}" data-course-id="${course.id}">
                ${course.completed ? 'Completed' : 'Mark as Complete'}
            </button>
        `;

        courseModal.style.display = 'block';

        const completeBtn = document.getElementById('complete-course-btn');
        if (!course.completed) {
            completeBtn.addEventListener('click', () => markCourseComplete(course.id));
        }
    }

    /**
     * Marks a course as complete and updates the UI.
     */
    function markCourseComplete(courseId) {
        const course = courses.find(c => c.id === courseId);
        if (course) {
            course.completed = true;
            closeModal(courseModal);
            renderCourses(); // Re-render to show the "Completed" badge
        }
    }

    /**
     * Generic function to close any modal.
     */
    function closeModal(modalElement) {
        modalElement.style.display = 'none';
    }
    
    /**
     * Updates the UI based on login status.
     */
    function checkLoginStatus() {
        const user = localStorage.getItem('loggedInUser');
        if (user) {
            authLinks.classList.add('hidden');
            userInfo.classList.remove('hidden');
            welcomeMsg.textContent = `Welcome, ${user}!`;
        } else {
            authLinks.classList.remove('hidden');
            userInfo.classList.add('hidden');
        }
    }

    // --- EVENT LISTENERS ---
    
    // Course Modal Listeners
    courseCloseBtn.addEventListener('click', () => closeModal(courseModal));

    // Auth Modal & Form Listeners
    loginBtn.addEventListener('click', () => { authModal.style.display = 'block'; });
    signupBtn.addEventListener('click', () => { authModal.style.display = 'block'; });
    authCloseBtn.addEventListener('click', () => closeModal(authModal));
    
    showSignupLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
    });

    showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        signupForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });
    
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Prototype: just use the email part as the name
        const name = e.target.querySelector('input[type="email"]').value.split('@')[0];
        localStorage.setItem('loggedInUser', name);
        closeModal(authModal);
        checkLoginStatus();
        loginForm.reset();
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Prototype: just simulate success and show login form
        alert('Account created successfully! Please log in.');
        showLoginLink.click();
        signupForm.reset();
    });
    
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('loggedInUser');
        checkLoginStatus();
    });

    // Window listener to close modals when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === courseModal) closeModal(courseModal);
        if (event.target === authModal) closeModal(authModal);
    });

    // --- INITIALIZATION ---
    renderCourses();
    checkLoginStatus();

});