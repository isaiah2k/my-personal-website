

function ToggleSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section.style.display === "none") {
      section.style.display = "block"
  } else {
      section.style.display = "none"
  }
}

export default ToggleSection