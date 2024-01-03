

$(document).ready(function(){
    $('.navbar-toggler').on('click', function() {
        if ($('.navbar').hasClass('navbar-backdrop')) {
            $('.navbar').removeClass('navbar-backdrop');
        } else {
            $('.navbar').addClass('navbar-backdrop');
        }
    });
});


const testimonials = [
    {
        message: "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet.",
        author: "Ronald Richards",
        company: "Barone LLC.",
        avatar: "/image/551313ba536f506bde0c8c51d8a738b8.png",
        star: 5
    },
    {
        message: "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis.",
        author: "Nick Cave",
        company: "CMO ot Nokia",
        avatar: "/image/3ac3d40d2341bd81bd13e2e7f755bf0d.png",
        star: 5
    },
    {
        message: "Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo.",
        author: "Lana Rosenfeld",
        company: "Senior VP ot Pinterest",
        avatar: "/image/547f9f64d22365d53ac7fa014d610fbf.png",
        star: 5
    },
    {
        message: "Porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullamcorper hendrerit eget, tincidunt et nisi. Sed magna nunc.",
        author: "Giorgio Moroder",
        company: "CTO ot Glovo",
        avatar: "/image/9edddaae8408dcc95a89d8455b53a647.png",
        star: 5
    },
    {
        message: "Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis. In a laoreet purus.",
        author: "Young Liu",
        company: "CAO ot Foxconn",
        avatar: "/image/ab0a480467c6b275d22713628512f852.png",
        star: 5
    },
];

document.addEventListener('DOMContentLoaded', (event) => {
    const carouselInner = document.querySelector('.carousel-inner');
    
    testimonials.forEach((testimonial, index) => {
        const { message, author, company, avatar, star } = testimonial;
    
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item-sub');
        if (index === 0) {
            carouselItem.classList.add('active');
        }
    
        const cardSay = document.createElement('div');
        cardSay.classList.add('card-say', 'd-flex', 'justify-content-start', 'flex-column');
    
        const starsSVG = `
            <div class="d-flex justify-content-start">
                ${'<svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none"><path d="M15.9848 22.9296C16.1424 22.836 16.3385 22.8362 16.4959 22.93L22.1123 26.2767L22.1124 26.2767C22.7774 26.6733 23.5512 26.0801 23.3862 25.3811L21.8976 19.088C21.8544 18.9055 21.9169 18.7143 22.0595 18.5926L27.0262 14.3526L27.0264 14.3524C27.5862 13.8749 27.2972 12.9573 26.5404 12.898L26.5378 12.8978L20.0012 12.3511C19.8171 12.3357 19.6565 12.2201 19.5835 12.0504L17.0257 6.10375L17.0251 6.10217C16.7376 5.42753 15.7423 5.42753 15.4549 6.10217L15.4541 6.10413L12.8963 12.0375C12.8232 12.2069 12.6627 12.3224 12.4788 12.3378L5.9422 12.8845L5.93959 12.8847L5.93959 12.8847C5.18279 12.944 4.89374 13.8616 5.45358 14.3391L5.45376 14.3392L10.4205 18.5792C10.5631 18.701 10.6256 18.8922 10.5824 19.0746L9.09382 25.3677L15.9848 22.9296ZM15.9848 22.9296L10.3685 26.2629L10.3676 26.2634M15.9848 22.9296L10.3676 26.2634M10.3676 26.2634C9.70266 26.6599 8.92898 26.0669 9.09376 25.368L10.3676 26.2634Z" fill="#FFBA79" stroke="#FFBA79" stroke-linejoin="round"/></svg>'.repeat(star)}
            </div>
        `;
    
        cardSay.innerHTML = `
            ${starsSVG}
            <p class="fw-light matop-24 font-bigger">${message}</p>
            <div class="d-flex justify-content-start matop-40">
                <img src="${avatar}" alt="person-1" class="rounded-circle maright-8">
                <div class="d-block align-items-center">
                    <p class="mb-0 fosi-24">${author}</p>
                    <p class="fw-lighter mt-0">${company}</p>
                </div>
            </div>
        `;
    
        carouselItem.appendChild(cardSay);
        carouselInner.appendChild(carouselItem);
    });
});



let currentPosition = 140;
const carouselInner = $('.carousel-inner');
const prevButton = $('.carousel-prev-button');
const nextButton = $('.carousel-next-button');

function toggleButtonStatus() {
    const windowWidth = $(window).width();
    // console.log(currentPosition);

    if (windowWidth >= 576 && windowWidth < 992 && currentPosition <= -981) {
        carouselInner.css('transform', 'translateX(-980px)');
    }

    if (currentPosition >= 0) {
        prevButton.prop('disabled', false);
        nextButton.prop('disabled', true);
    } else if (windowWidth >= 992 && currentPosition <= -700) {
        prevButton.prop('disabled', true);
        nextButton.prop('disabled', false);
    } else if (windowWidth >= 576 && windowWidth < 992 && currentPosition <= -980) {
        prevButton.prop('disabled', true);
        nextButton.prop('disabled', false);
    } else if (windowWidth < 576 && currentPosition <= -1260) {
        prevButton.prop('disabled', true);
        nextButton.prop('disabled', false);
    } else {
        prevButton.prop('disabled', false);
        nextButton.prop('disabled', false);
    }
}


prevButton.on('click', function() {
    currentPosition -= 140 * 2;
    carouselInner.css('transform', 'translateX(' + currentPosition + 'px)');
    toggleButtonStatus();
});

nextButton.on('click', function() {
    currentPosition += 140 * 2;
    carouselInner.css('transform', 'translateX(' + currentPosition + 'px)');
    toggleButtonStatus();
});

toggleButtonStatus();

$(window).on('load resize', function() {
    // currentPosition = -140;
    toggleButtonStatus();
});

