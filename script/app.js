// Functions
function courseDetails(classes) {
    classes.forEach(function (el) {
        const classes = document.querySelectorAll(`.${el}`);
        const classesLength = classes.length;
        const count = document.querySelector(`.${el}-count`);
        count.textContent = classesLength;
    });
}
courseDetails(['active', 'upcoming', 'done', 'stopped'])

function projectDetails(classes) {
    classes.forEach(function (el) {
        const classes = document.querySelectorAll(`.${el}`);
        const classesLength = classes.length;
        const count = document.querySelector(`.${el}-count`);
        count.textContent = classesLength;
    });
}
projectDetails(['activep', 'upcomingp', 'donep'])