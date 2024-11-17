// script.ts
function generateResume() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var linkedin = document.getElementById('linkedin').value;
    var skills = document.getElementById('skills').value;
    var languages = document.getElementById('languages').value;
    var objective = document.getElementById('objective').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var resumeContent = document.getElementById('resumeContent');
    var resumeName = document.getElementById('resumeName');
    var resumePhone = document.getElementById('resumePhone');
    var resumeEmail = document.getElementById('resumeEmail');
    var resumeLinkedIn = document.getElementById('resumeLinkedIn');
    var resumeSkills = document.getElementById('resumeSkills');
    var resumeLanguages = document.getElementById('resumeLanguages');
    var resumeObjective = document.getElementById('resumeObjective');
    var resumeEducation = document.getElementById('resumeEducation');
    var resumeExperience = document.getElementById('resumeExperience');
    if (resumeContent &&
        resumeName &&
        resumePhone &&
        resumeEmail &&
        resumeLinkedIn &&
        resumeSkills &&
        resumeLanguages &&
        resumeObjective &&
        resumeEducation &&
        resumeExperience) {
        // Setting content for the resume fields
        resumeName.innerText = name;
        resumePhone.innerText = phone;
        resumeEmail.innerText = email;
        resumeLinkedIn.href = linkedin;
        resumeLinkedIn.innerText = linkedin;
        resumeSkills.innerText = skills;
        resumeLanguages.innerText = languages;
        resumeObjective.innerText = objective;
        resumeEducation.innerText = education;
        resumeExperience.innerText = experience;
        // Displaying the resume content
        resumeContent.style.display = 'flex';
    }
}
