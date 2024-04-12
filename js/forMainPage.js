window.addEventListener('DOMContentLoaded', () => {

    const parent = document.querySelector('.description1');

    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","cd_catalog.xml",false);
    xmlhttp.send();
    const xmlDoc = xmlhttp.responseXML;

    console.dir(xmlDoc.getElementsByTagName("title"));
    document.querySelector('.description1').innerHTML = `
    <img src="photo/Египет.webp">
        <div class="txt">
            <h2>Египет</h2>
            <br>
            <p>Исследуйте древний мир Египта за один день! Вас ждут удивительные встречи с сфинксом, прогулка по древней крепости, открытие сокровищ
                 Тутанхамона, увлекательные истории о пирамидах . Проведите незабываемый день в самом большом городе Египта, полный загадок и 
                 удивительных открытий.</p>
                <br>
                 <a class="link1" href="page5.html">Читать подробнее о туре</a>
        </div>
    `
});