const images = () => {
    const imgPopup = document.createElement('div'),
          imagesSection = document.querySelector('.works'),
          bigImage = document.createElement('img');

    imgPopup.classList.add('popup');
    imagesSection.appendChild(imgPopup);
    
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImage);

    imagesSection.addEventListener('click', (e) => {
        e.preventDefault();
        // классика делегирования, 1 - поддерживает ли событие клика
        if (e.target && e.target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            let path = e.target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
        }

        if (e.target && e.target.matches('div.popup')) {
            imgPopup.style.display = 'none';
        }
    })
}

export default images; 
