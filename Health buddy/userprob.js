function submitProblem() {
    const healthProblem = document.getElementById("healthProblem").value;
    const responseText = document.getElementById("responseText");

    // Add logic to process the health problem and generate a response
    const response = generateResponse(healthProblem);

    // Display the response
    responseText.textContent = response;
    document.getElementById("problemForm").style.display = "none";
    document.getElementById("response").style.display = "block";
}

function generateResponse(problem) {
    // Add logic to generate a response based on the health problem
    // For simplicity, a generic response is provided
    return `Thank you for sharing your health problem. We will get back to you soon.`;
}
