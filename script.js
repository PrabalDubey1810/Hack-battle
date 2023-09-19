const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

document.addEventListener("DOMContentLoaded", function () {
    const feedbackForm = document.getElementById("feedback-form");
    const teacherList = document.getElementById("teacher-list");

    feedbackForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const teachingSkills = document.getElementById("teaching-skills").value;
        const awardingMarks = document.getElementById("awarding-marks").value;
        const chillNature = document.getElementById("chill-nature").value;
        const studentFeedback = document.getElementById("student-feedback").value;

        // Save the recommendation to the Prisma database
        await prisma.teacher.create({
            data: {
                teachingSkills,
                awardingMarks,
                chillNature,
                studentFeedback,
            },
        });

        // Clear the form
        feedbackForm.reset();

        // Display the recommendations
        displayTeacherRecommendations();
    });

    async function displayTeacherRecommendations() {
        teacherList.innerHTML = ""; // Clear existing recommendations

        const recommendations = await prisma.teacher.findMany();

        recommendations.forEach((recommendation) => {
            // Display the recommendation
            const recommendationDiv = document.createElement("div");
            recommendationDiv.classList.add("recommendation");
            recommendationDiv.innerHTML = `
                <strong>Teaching Skills:</strong> ${recommendation.teachingSkills}<br>
                <strong>Awarding Good Marks:</strong> ${recommendation.awardingMarks}<br>
                <strong>Chill in Nature:</strong> ${recommendation.chillNature}<br>
                <strong>Student Feedback:</strong> ${recommendation.studentFeedback}<br>
            `;

            teacherList.appendChild(recommendationDiv);
        });
    }

    // Initial display of recommendations
    displayTeacherRecommendations();
});
