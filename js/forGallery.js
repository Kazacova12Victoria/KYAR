

const modalnum = document.querySelectorAll('.modalnum');


for (let i = 0;  i < modalnum.length; i++){
    modalnum[i].classList.add(`modalnum${i}`);
}

 
function showOrderForm(imgSrc, modalnumber, title, text) { 
    modalnum[modalnumber].innerHTML = `
    <div class="modal" id="order-modal"> 
        <div class="modal-content">
            <div class="gallery">          
                <div class="img"> 
                    <img src="${imgSrc}"> 
                    <div class="captionMod"> 
                    <p>${title}</p>
                    <p>${text}</p>
                    </div>
                </div>
            </div> 
        </div>
    </div>
    `;
} 
 
 
function cmloseOrderFor() { 
    
    document.getElementById("order-modal").style.display = "none"; 
} 
 

window.onclick = function(event) { 
    
    var modal = document.querySelectorAll("#order-modal");
    
    let i;
    for(i=0 ; i < modal.length; i++){
        if (event.target == modal[i]) { 
           
            modal[i].style.display = "none";
            break;
        }
    }
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal[i].style.display == 'block')
            modal[i].style.display = "none";   
    });
    console.log(1);
    
}