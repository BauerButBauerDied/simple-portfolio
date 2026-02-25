const home = document.getElementById('home');
const projects = document.getElementById('projects');
const about = document.getElementById('about');
const contact = document.getElementById('contact');

home.addEventListener('click', () =>{
    document.getElementById('home').classList.add("active");
});

projects.addEventListener('click', () =>{
    document.getElementById('projects').classList.add("active");
});

about.addEventListener('click', () =>{
    document.getElementById('about').classList.add("active");
});

contact.addEventListener('click', () =>{
    document.getElementById('contact').classList.add("active");
});

function makeActive(id) {
    document.getElementById(id).classList.add("active");
}