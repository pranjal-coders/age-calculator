function calculateAge() {
    const dob = document.getElementById('dob').value;
    const dobDate = new Date(dob);
    const now = new Date();
    let age = now.getFullYear() - dobDate.getFullYear();
    const m = now.getMonth() - dobDate.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < dobDate.getDate())) {
        age--;
    }
    document.getElementById('result').innerText = `Your age is: ${age} years old.`;
}