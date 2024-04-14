window.addEventListener('DOMContentLoaded', () => {

    let array = [];
    fetch('js/cd_catalog.xml')
        .then(function (response) {
            return response.text();
        })
        .then(function (xmlDocText) {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlDocText, "text/xml");
            const MenuCards = xmlDoc.querySelectorAll('text');
            const tableBody = document.querySelector(".description1");
            MenuCards.forEach(function (student) {
                const scr = student.querySelector("imagine").textContent;
                const title = student.querySelector("title").textContent;
                const text = student.querySelector("description").textContent;
                const linkHref = student.querySelector('linkhref').textContent;
                const price = student.querySelector('price').textContent;
                array.push({scr, title, text, linkHref, price});
            });
            array.sort(function(a, b) {
                return a.price - b.price;
              });
            
        for(let i = 0; i < array.length-1; i++){
            tableBody.innerHTML += `
            <img src="${array[i].scr}" />
            <div class="txt">
                <h2>${array[i].title}</h2>
                <br>
                <p>${array[i].text}</p>
                    <br>
                    <div class="descr__container" style="display: flex; justify-content: space-between; padding-right: 20px">
                    <a class="link1" href="${array[i].linkHref}">Читать подробнее о туре</a>
                    <div class="price">${array[i].price}</div>
                    </div>
            </div>
            `;  
        }
        });
        console.log(array);
    
});