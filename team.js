window.onload =function loadData() {
    let spinner = document.getElementById("spinner");
    spinner.removeAttribute('hidden');
    fetch("https://gdg-ms-team.herokuapp.com/api/members")
        .then(response => response.json())
        .then(data => {
            spinner.setAttribute('hidden', '');
            console.log(data);
        });
}

fetch("https://gdg-ms-team.herokuapp.com/api/members")
    .then(res => res.json())
    .then(json => {
        var team = document.getElementsByClassName('team')[0]
        renderMember(json)
    })
const renderMember = records => {
    records.forEach(record => {
        team.innerHTML += `
            <div class="member">
                    <div class="face photo" onmouseout="photo(this, '${record.photo[0]}')" onmouseover="hoverPhoto(this , '${record.photo[1]}')">
                    <img src="${record.photo[0]}"  class="photouser" alt="${record.position}" />
                        <h1 class="name">${record.firstName} ${record.lastName}</h1>
                        <p class="position">${record.position}</p>
                        <p>${record.email}</p>
                        <div class="m-icons">
                            <a href="mailto:${record.email}" target="_blank" class="fas fa-envelope-square mymail"></a>
                            <a href="${record.linkedin}" target="_blank"  class="fab fa-linkedin mylink"></a>
                            <a href="${record.github}" target="_blank"  class="fab fa-github-square mygit"></a>
                        </div>
                    </div>
                    <div class="face info">
                        <p>Fact ${record.fact}</p>
                    </div>
                </div>`
    });
}

function hoverPhoto(element , record) {
   element.getElementsByClassName("photouser")[0].src =  `${record.photo[1]}`  
}
function photo(element, record) {
   element.getElementsByClassName("photouser")[0].src =  `${record.photo[0]}` 
}