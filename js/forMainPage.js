window.addEventListener('DOMContentLoaded', () => {

    const parent = document.querySelector('.description1');

    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","js/cd_catalog.xml",false);
    xmlhttp.send();
    const xmlDoc = xmlhttp.responseXML;

    fetch('js/cd_catalog.xml')
        .then(function (response) {
            return response.text();
        })
        .then(function (xmlDocText) {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlDocText, "text/xml");
            const MenuCards = xmlDoc.querySelectorAll('text');
            const tableBody = document.querySelector(".description1");
            console.log(MenuCards);
            MenuCards.forEach(function (student) {
                const scr = student.querySelector("imagine").textContent;
                const title = student.querySelector("title").textContent;
                const text = student.querySelector("description").textContent;
                const linkHref = student.querySelector('linkhref').textContent;
                tableBody.innerHTML += `
                <img src="${scr}" />
                <div class="txt">
                    <h2>${title}</h2>
                    <br>
                    <p>${text}</p>
                        <br>
                        <a class="link1" href="${linkHref}">Читать подробнее о туре</a>
                </div>
                `;
            });
        })

});