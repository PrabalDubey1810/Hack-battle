const subjectSelect = document.getElementById('subject');
const teacherSelect = document.getElementById('teacher');

// Define a mapping of subjects to teachers
const subjectToTeachers = {
  'Engineering Physics': ['Parthiban', 'Anuradha C', 'Kaushik Chanda'],
  'Engineering Chemistry': ['Harshita Patel', 'Rani C', 'Suganya P'],
  'Object oriented Programming': ['Kavitha A', 'Akella Venkata Suryanaryan Murthy'],
  'BEEE': ['Venkateshwarlu', 'nanavignesh'],
  'Calculus': ['Parthiban', 'Kaushik Chanda', 'Rani C'],
  'Differential Equations': ['Harshita Patel', 'Suganya P'],
  'Complex and Linear Algebra': ['Kavitha A', 'Akella Venkata Suryanaryan Murthy'],
  'Discrete and Graph Theory': ['Venkateshwarlu', 'nanavignesh'],
};

 

// Function to update the teacher options based on the selected subject
function updateTeacherOptions() {
  const selectedSubject = subjectSelect.value;
  const teachers = subjectToTeachers[selectedSubject] || [];

  // Clear the current teacher options
  teacherSelect.innerHTML = '';

  // Add new teacher options
  teachers.forEach(teacher => {
    const option = document.createElement('option');
    option.value = teacher;
    option.textContent = teacher;
    teacherSelect.appendChild(option);
  });
}

// Add an event listener to the subject select element
subjectSelect.addEventListener('change', updateTeacherOptions);

// Initially, populate the teacher options based on the default selected subject
updateTeacherOptions();



function ratingfunction()
{

};
//mapping feedback of teacher to ratings
const teachertoRating ={
  'Parthiban': ['10', '8', '7'],
  'Anuradha C':['10', '8', '7'],
  'Kaushik Chanda':['10', '8', '7'],
  'Harshita Patel':['10', '8', '7'],
  'Rani C':['10', '8', '7'],
  'Suganya P':['10', '8', '7'],
  'Kavitha A':['10', '8', '7'],
  'Akella Venkata Suryanaryan Murthy':['10', '8', '7'],
  'Venkateshwarlu':['10', '8', '7'],
  'nanavignesh':['10', '8', '7'],
};
