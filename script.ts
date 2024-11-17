// script.ts
function generateResume() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const languages = (document.getElementById('languages') as HTMLTextAreaElement).value;
    const objective = (document.getElementById('objective') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

    const resumeContent = document.getElementById('resumeContent');
    const resumeName = document.getElementById('resumeName');
    const resumePhone = document.getElementById('resumePhone');
    const resumeEmail = document.getElementById('resumeEmail');
    const resumeLinkedIn = document.getElementById('resumeLinkedIn') as HTMLAnchorElement;
    const resumeSkills = document.getElementById('resumeSkills');
    const resumeLanguages = document.getElementById('resumeLanguages');
    const resumeObjective = document.getElementById('resumeObjective');
    const resumeEducation = document.getElementById('resumeEducation');
    const resumeExperience = document.getElementById('resumeExperience');

    if (
        resumeContent &&
        resumeName &&
        resumePhone &&
        resumeEmail &&
        resumeLinkedIn &&
        resumeSkills &&
        resumeLanguages &&
        resumeObjective &&
        resumeEducation &&
        resumeExperience
    ) {
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