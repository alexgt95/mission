let participantCount = 1;

document.getElementById("add").addEventListener("click", () => {
  // Increment the participant count
  participantCount++;

  // Find the first participant section to clone
  const firstParticipant = document.querySelector(".participant1");

  // Clone the section
  const newParticipant = firstParticipant.cloneNode(true);

  // Update the new section's class and content
  newParticipant.classList.remove("participant1");
  newParticipant.classList.add(`participant${participantCount}`);
  newParticipant.querySelector("p").textContent = `Participant ${participantCount}`;

  // Update IDs and FOR attributes to be unique
  newParticipant.querySelectorAll("label").forEach((label) => {
    const oldFor = label.getAttribute("for");
    if (oldFor) {
      label.setAttribute("for", `${oldFor}${participantCount}`);
    }
  });

  newParticipant.querySelectorAll("input, select").forEach((input) => {
    const oldId = input.getAttribute("id");
    if (oldId) {
      input.setAttribute("id", `${oldId}${participantCount}`);
      input.setAttribute("name", `${oldId}${participantCount}`); // Also update name for form submission
    }
    // Clear the value of the cloned input
    if (input.tagName === "INPUT") {
      input.value = "";
    } else if (input.tagName === "SELECT") {
      input.selectedIndex = 0;
    }
  });

  // Insert the new participant section before the "Add Participant" button
  const addButton = document.getElementById("add");
  addButton.parentNode.insertBefore(newParticipant, addButton);
});