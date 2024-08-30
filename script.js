document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const userId = document.getElementById('user-id').value;
            const password = document.getElementById('password').value;

            // Placeholder logic for role detection
            // In a real scenario, you would validate the userId and password against a database
            let role;
            if (userId === 'admin') {
                role = 'admin';
            } else if (userId.startsWith('s')) {  // Assuming student IDs start with 's'
                role = 'student';
            } else if (userId.startsWith('t')) {  // Assuming teacher IDs start with 't'
                role = 'teacher';
            }

            // Redirect based on role
            if (role === 'admin') {
                window.location.href = 'admin-dashboard.html';
            } else if (role === 'student') {
                window.location.href = 'student-dashboard.html';
            } else if (role === 'teacher') {
                window.location.href = 'teacher-dashboard.html';
            } else {
                alert('Invalid login credentials.');
            }
        });

        // Toggle button logic
        document.getElementById('student-toggle').addEventListener('click', function() {
            setActiveRole('student');
        });

        document.getElementById('teacher-toggle').addEventListener('click', function() {
            setActiveRole('teacher');
        });

        document.getElementById('admin-toggle').addEventListener('click', function() {
            setActiveRole('admin');
        });

        function setActiveRole(role) {
            document.querySelectorAll('.toggle-button').forEach(btn => btn.classList.remove('active'));
            document.getElementById(`${role}-toggle`).classList.add('active');
        }
    }

    // Sample data for dynamic content loading in dashboards
    const courses = [
        { title: "Course 1: HTML Basics" },
        { title: "Course 2: Advanced CSS" },
        { title: "Course 3: JavaScript Essentials" }
    ];

    const agenda = [
        { title: "HTML Basics - Session 1", date: "2024-09-01" },
        { title: "CSS Advanced - Session 2", date: "2024-09-02" },
        { title: "JavaScript Essentials - Session 3", date: "2024-09-03" }
    ];

    const assignments = [
        { title: "Assignment 1: HTML Structure", dueDate: "2024-09-05" },
        { title: "Assignment 2: CSS Layout", dueDate: "2024-09-10" },
        { title: "Assignment 3: JavaScript Functions", dueDate: "2024-09-15" }
    ];

    const grades = [
        { course: "HTML Basics", grade: "A" },
        { course: "Advanced CSS", grade: "B+" },
        { course: "JavaScript Essentials", grade: "A-" }
    ];

    const news = [
        { title: "New Course: React Basics", date: "2024-08-25" },
        { title: "System Maintenance", date: "2024-08-30" },
        { title: "Upcoming Exam Schedule", date: "2024-09-01" }
    ];

    const users = [
        { id: 1, name: "Alice", role: "Student" },
        { id: 2, name: "Bob", role: "Teacher" },
        { id: 3, name: "Charlie", role: "Student" }
    ];

    const contentItems = [
        { id: 1, title: "Course Material: HTML Basics", type: "Course Content" },
        { id: 2, title: "News Item: Upcoming Exam Schedule", type: "News" }
    ];

    const platformStats = [
        { title: "Total Users", value: 150 },
        { title: "Active Courses", value: 10 },
        { title: "Platform Uptime", value: "99.9%" }
    ];

    // Load dynamic content for student dashboard
    if (document.getElementById('course-list')) {
        const courseList = document.getElementById('course-list');
        courses.forEach(course => {
            const courseDiv = document.createElement('div');
            courseDiv.className = 'item';
            courseDiv.innerHTML = `<h3>${course.title}</h3>`;
            courseList.appendChild(courseDiv);
        });
    }

    if (document.getElementById('agenda-list')) {
        const agendaList = document.getElementById('agenda-list');
        agenda.forEach(session => {
            const sessionDiv = document.createElement('div');
            sessionDiv.className = 'item';
            sessionDiv.innerHTML = `<h3>${session.title}</h3><p>Date: ${session.date}</p>`;
            agendaList.appendChild(sessionDiv);
        });
    }

    if (document.getElementById('assignment-list')) {
        const assignmentList = document.getElementById('assignment-list');
        assignments.forEach(assignment => {
            const assignmentDiv = document.createElement('div');
            assignmentDiv.className = 'item';
            assignmentDiv.innerHTML = `<h3>${assignment.title}</h3><p>Due: ${assignment.dueDate}</p>`;
            assignmentList.appendChild(assignmentDiv);
        });
    }

    if (document.getElementById('grades-list')) {
        const gradesList = document.getElementById('grades-list');
        grades.forEach(grade => {
            const gradeDiv = document.createElement('div');
            gradeDiv.className = 'item';
            gradeDiv.innerHTML = `<h3>${grade.course}</h3><p>Grade: ${grade.grade}</p>`;
            gradesList.appendChild(gradeDiv);
        });
    }

    if (document.getElementById('news-list')) {
        const newsList = document.getElementById('news-list');
        news.forEach(newsItem => {
            const newsDiv = document.createElement('div');
            newsDiv.className = 'item';
            newsDiv.innerHTML = `<h3>${newsItem.title}</h3><p>Date: ${newsItem.date}</p>`;
            newsList.appendChild(newsDiv);
        });
    }

    // Load dynamic content for teacher dashboard
    const courseManagementList = document.getElementById('course-management-list');
    const scheduleList = document.getElementById('schedule-list');
    const performanceList = document.getElementById('performance-list');

    if (courseManagementList) {
        courses.forEach(course => {
            const courseDiv = document.createElement('div');
            courseDiv.className = 'item';
            courseDiv.innerHTML = `<h3>${course.title}</h3><p>Manage this course</p>`;
            courseManagementList.appendChild(courseDiv);
        });
    }

    if (scheduleList) {
        agenda.forEach(session => {
            const sessionDiv = document.createElement('div');
            sessionDiv.className = 'item';
            sessionDiv.innerHTML = `<h3>${session.title}</h3><p>Date: ${session.date}</p>`;
            scheduleList.appendChild(sessionDiv);
        });
    }

    if (performanceList) {
        grades.forEach(grade => {
            const gradeDiv = document.createElement('div');
            gradeDiv.className = 'item';
            gradeDiv.innerHTML = `<h3>${grade.course}</h3><p>Grade Distribution: A - 10%, B - 20%, C - 70%</p>`;
            performanceList.appendChild(gradeDiv);
        });
    }

    // Load dynamic content for admin dashboard
    const userManagementList = document.getElementById('user-management-list');
    const contentManagementList = document.getElementById('content-management-list');
    const platformMonitoringList = document.getElementById('platform-monitoring-list');

    // Load users into the User Management section
    if (userManagementList) {
        users.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.className = 'item';
            userDiv.innerHTML = `<h3>${user.name}</h3><p>Role: ${user.role}</p>`;
            userManagementList.appendChild(userDiv);
        });
    }

    // Load content items into the Content Management section
    if (contentManagementList) {
        contentItems.forEach(content => {
            const contentDiv = document.createElement('div');
            contentDiv.className = 'item';
            contentDiv.innerHTML = `<h3>${content.title}</h3><p>Type: ${content.type}</p>`;
            contentManagementList.appendChild(contentDiv);
        });
    }

    // Load platform stats into the Platform Monitoring section
    if (platformMonitoringList) {
        platformStats.forEach(stat => {
            const statDiv = document.createElement('div');
            statDiv.className = 'item';
            statDiv.innerHTML = `<h3>${stat.title}</h3><p>${stat.value}</p>`;
            platformMonitoringList.appendChild(statDiv);
        });
    }

    // Add New User button functionality
    const addUserButton = document.getElementById('add-user');
    if (addUserButton) {
        addUserButton.addEventListener('click', function() {
            const newUser = prompt("Enter new user's name:");
            if (newUser) {
                const newUserRole = prompt("Enter new user's role (Student/Teacher):");
                const newUserDiv = document.createElement('div');
                newUserDiv.className = 'item';
                newUserDiv.innerHTML = `<h3>${newUser}</h3><p>Role: ${newUserRole}</p>`;
                userManagementList.appendChild(newUserDiv);
            }
        });
    }
});
