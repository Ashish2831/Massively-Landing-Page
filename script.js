const responsiveMobile = (media) => {
    if (media.matches) { // If media query matches
        const containers = document.getElementsByClassName('container');
        Array.from(containers).forEach((container) => {
            container.classList.remove('container');
            container.classList.add('container-fluid');
        })
        const navTabs = document.getElementsByClassName('nav-tabs')[0];
        const arrow = document.getElementsByClassName('arrow')[0];
        navTabs.classList.add('d-none');
        arrow.classList.add('d-none');
        const navbarDiv = document.getElementsByClassName('navbar-div')[0];
        navbarDiv.classList.remove('d-none');
    } else {
        const containerFluids = document.getElementsByClassName('container-fluid');
        Array.from(containerFluids).forEach((containerFluid) => {
            containerFluid.classList.remove('container-fluid');
            containerFluid.classList.add('container');
        })
        const navTabs = document.getElementsByClassName('nav-tabs')[0];
        const arrow = document.getElementsByClassName('arrow')[0];
        navTabs.classList.remove('d-none');
        arrow.classList.remove('d-none');
        const navbarDiv = document.getElementsByClassName('navbar-div')[0];
        navbarDiv.classList.add('d-none');
    }
}


const media = window.matchMedia("(max-width: 800px)")
responsiveMobile(media) // Call listener function at run time
media.addEventListener('change', responsiveMobile) // Attach listener function on state changes

const navBtn = document.getElementById('nav-btn');
document.getElementById('nav-btn').addEventListener('click', () => {
    if (navBtn.innerHTML === '<i class="fas fa-times text-dark"></i>') {
        navBtn.innerHTML = `<i class="fas fa-bars text-light"></i><span style="font-size: 15px;" class="d-inline-block p-1 text-light">Menu</span>`;
    } else {
        navBtn.innerHTML = '<i class="fas fa-times text-dark"></i>';
    }
})