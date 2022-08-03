let previewContainer = document.querySelector('.productview');
let previewBox = previewContainer.querySelectorAll('.preview');


document.querySelectorAll('.shop .pcard').forEach(pcard =>{
    pcard.onclick = () =>{
        previewContainer.style.display = 'flex';
        let name = pcard.getAttribute('data-name');
        previewBox.forEach(preview =>{
            let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active');
            }
        });
     };
 });

previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
       close.classList.remove('active');
        previewContainer.style.display = 'none';
    };
});



