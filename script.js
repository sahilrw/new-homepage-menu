document.querySelector('#ham').addEventListener('click', showSidebar)

function showSidebar(){
    document.querySelector('.navbar').classList.add('show-sidebar')
}