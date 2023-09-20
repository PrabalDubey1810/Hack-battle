function giveReview() {
    document.getElementById("reviewForm").style.display = "block";
    document.getElementById("reviewDisplay").style.display = "none";
}

function seeReview() {
    document.getElementById("reviewForm").style.display = "none";
    document.getElementById("reviewDisplay").style.display = "block";

    // Display reviews from local storage
    displayReviews();
}

document.getElementById("review").addEventListener("submit", function (event) {
    event.preventDefault();
    const foodQuality = document.getElementById("foodQuality").value;
    const messHygiene = document.getElementById("messHygiene").value;
    const staffFriendliness = document.getElementById("staffFriendliness").value;

    // Create a review object
    const review = {
        foodQuality: parseFloat(foodQuality),
        messHygiene: parseFloat(messHygiene),
        staffFriendliness: parseFloat(staffFriendliness),
    };

    // Save the review to local storage
    saveReviewToLocalStorage(review);

    // Clear the form fields
    document.getElementById("foodQuality").value = "";
    document.getElementById("messHygiene").value = "";
    document.getElementById("staffFriendliness").value = "";

    // Display the updated reviews on the webpage
    displayReviews();
});

// Function to save a review in local storage
function saveReviewToLocalStorage(review) {
    // Check if there are existing reviews in local storage
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    // Add the new review to the array
    reviews.push(review);

    // Save the updated reviews array back to local storage
    localStorage.setItem("reviews", JSON.stringify(reviews));
}

// Function to display reviews from local storage
function displayReviews() {
    // Get the reviews from local storage
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    // Display the reviews in the reviewsList div
    const reviewsList = document.getElementById("reviewsList");
    reviewsList.innerHTML = ""; // Clear the existing content

    // Iterate through the reviews and display them
    for (let i = 0; i < reviews.length; i++) {
        const review = reviews[i];
        reviewsList.innerHTML += `
            <div class="review-item">
                <h3>Review ${i + 1}</h3>
                <p>Food Quality: ${review.foodQuality}</p>
                <p>Mess Hygiene: ${review.messHygiene}</p>
                <p>Staff Friendliness: ${review.staffFriendliness}</p>
            </div>
        `;
    }
}
