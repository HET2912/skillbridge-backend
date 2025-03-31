🟢 1️⃣ Test Course Endpoints
✅ Create a Course (POST /api/courses)
Request Body:
json
Copy
Edit
{
  "title": "Full Stack Web Development",
  "description": "Learn MERN stack from scratch.",
  "videoLectures": [
    "https://example.com/video1.mp4",
    "https://example.com/video2.mp4"
  ],
  "quizzes": [
    {
      "week": 1,
      "questions": [
        {
          "question": "What is React?",
          "options": ["Library", "Framework", "Language", "Database"],
          "correctAnswer": "Library"
        }
      ]
    }
  ],
  "price": 4999,
  "createdBy": "65a1b1234567890abcdeffff",  // Replace with an instructor's user ID
  "enrolledStudents": [],
  "startDate": "2024-04-01",
  "durationWeeks": 12
}
✅ Get All Courses (GET /api/courses)
Response Example:
json
Copy
Edit
[
  {
    "_id": "65a2c1234567890abcdef111",
    "title": "Full Stack Web Development",
    "description": "Learn MERN stack from scratch.",
    "price": 4999,
    "createdBy": {
      "_id": "65a1b1234567890abcdeffff",
      "name": "John Doe",
      "email": "john@example.com"
    },
    "startDate": "2024-04-01",
    "durationWeeks": 12
  }
]
✅ Add a Student to Course (POST /api/courses/:id/add-student)
Request Body:
json
Copy
Edit
{
  "studentId": "65a3b1234567890abcdef222"  // Replace with a student's user ID
}
✅ Remove a Student (POST /api/courses/:id/remove-student)
Request Body:
json
Copy
Edit
{
  "studentId": "65a3b1234567890abcdef222"
}
🔵 2️⃣ Test Assignment Endpoints
✅ Create an Assignment (POST /api/assignments)
Request Body:
json
Copy
Edit
{
  "title": "JavaScript Basics",
  "description": "Solve the given JavaScript exercises.",
  "deadline": "2024-05-01T23:59:59.999Z",
  "week": 2,
  "createdBy": "65a1b1234567890abcdeffff"  // Instructor's ID
}
✅ Get Assignment by ID (GET /api/assignments/:id)
Response Example:
json
Copy
Edit
{
  "_id": "65a4d1234567890abcdef333",
  "title": "JavaScript Basics",
  "description": "Solve the given JavaScript exercises.",
  "deadline": "2024-05-01T23:59:59.999Z",
  "week": 2,
  "createdBy": {
    "_id": "65a1b1234567890abcdeffff",
    "name": "John Doe"
  }
}
🔴 3️⃣ Test Submission Endpoints
✅ Submit an Assignment (POST /api/submissions)
Request Body:
json
Copy
Edit
{
  "assignment": "65a4d1234567890abcdef333",  // Assignment ID
  "submittedBy": "65a3b1234567890abcdef222", // Student ID
  "fileURL": "https://example.com/submissions/js_assignment.zip"
}
✅ Get All Submissions for an Assignment (GET /api/submissions/assignment/:assignmentId)
Response Example:
json
Copy
Edit
[
  {
    "_id": "65a5e1234567890abcdef444",
    "assignment": "65a4d1234567890abcdef333",
    "submittedBy": {
      "_id": "65a3b1234567890abcdef222",
      "name": "Jane Smith"
    },
    "submissionDate": "2024-03-29T14:30:00.000Z",
    "fileURL": "https://example.com/submissions/js_assignment.zip",
    "grade": null,
    "feedback": ""
  }
]
✅ Grade & Provide Feedback (PUT /api/submissions/:id)
Request Body:
json
Copy
Edit
{
  "grade": 85,
  "feedback": "Great job! Keep it up!"
}
🎯 Test These in Postman
Create Course: POST /api/courses

Get All Courses: GET /api/courses

Add Student: POST /api/courses/:id/add-student

Remove Student: POST /api/courses/:id/remove-student

Create Assignment: POST /api/assignments

Get Assignment: GET /api/assignments/:id

Submit Assignment: POST /api/submissions

Get Submissions: GET /api/submissions/assignment/:assignmentId

Update Submission (Grade & Feedback): PUT /api/submissions/:id

