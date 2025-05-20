function showContent(id, type) {
    let learningSections = ['week1-learning', 'week2-learning', 'week3-learning', 'week4-learning', 'week5-learning', 'week6-learning'];
    let assignmentSections = [
        'week1-assignment', 'week2-assignment', 'week3-assignment',
        'week4-assignment', 'week5-assignment', 'week6-assignment'
    ];

    if (type === 'learning') {
        learningSections.forEach(section => {
            document.getElementById(section).style.display = 'none';
        });
        if (id !== 'none') {
            document.getElementById(id).style.display = 'block';
        }
    } else if (type === 'assignment') {
        assignmentSections.forEach(section => {
            document.getElementById(section).style.display = 'none';
        });
        if (id !== 'none') {
            document.getElementById(id).style.display = 'block';
        }
    }
}
function toggleImage(id) {
    const el = document.getElementById(id);
    if (el.style.display === "none") {
        el.style.display = "block";
    } else {
        el.style.display = "none";
    }
}
