let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

function mobileView() {
    return window.innerWidth <= 768;
}

function closeDropdown() {
    document.querySelectorAll('.header .navbar ul ul').forEach(submenu => {
        submenu.style.removeProperty('display');
    });
}

function removeNavbar() {
    navbar.classList.remove('active');
    closeDropdown();
}

menuBtn.onclick = () => {
    navbar.classList.toggle('active');

    if (!navbar.classList.contains('active')) {
        closeDropdown();
    }
}

document.onclick = (e) => {
    if (mobileView() && navbar.classList.contains('active')) {
        if (e.target !== menuBtn && !navbar.contains(e.target)) {
            removeNavbar();
        }
    }
}

window.onscroll = () => {
    if (mobileView() && navbar.classList.contains('active')) {
        removeNavbar();
    }
}

document.querySelectorAll('.header .navbar a[href="#"]').forEach(anchor => {
    anchor.onclick = (e) => {
        e.preventDefault();

        if (navbar.classList.contains('active') || mobileView()) {
            let parentLi = anchor.closest('li');
            let submenu = parentLi && parentLi.querySelector('ul');

            if (submenu) {
                let siblings = parentLi.parentNode.querySelectorAll('ul');

                siblings.forEach(sub => {
                    if (sub !== submenu) {
                        sub.style.removeProperty('display');
                    }
                });

                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            }
        }
    }
});

let resizeTimer;
window.onresize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (!mobileView()) {
            removeNavbar();
        }
    }, 150);
}

document.addEventListener('DOMContentLoaded', () => {
    if (!mobileView()) {
        removeNavbar();
    }

    
    const currencyLabel = document.getElementById('currencyLabel');
    const currencySelect = document.getElementById('currency');
    if (currencySelect && currencyLabel) {
        currencySelect.onchange = () => {
            const selected = currencySelect.value;
            currencyLabel.textContent = selected === 'IDR' ? 'Loan Amount (Rp)' : 'Loan Amount ($)';
        };
    }
});

document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
    inputNumber.oninput = () => {
        if (inputNumber.value.length > inputNumber.maxLength) {
            inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
        }
    };
});


if (document.querySelector('.emi-calculation')) {
    let loanAmount = document.getElementById('amount');
    let loanInterest = document.getElementById('interest');
    let loanTenure = document.getElementById('loanTenure');
    let currencySelect = document.getElementById('currency');
    let calculate = document.getElementById('calculate');

    calculate.onclick = (e) => {
        e.preventDefault();

        let isYear = document.getElementById('year').checked;
        let isMonth = document.getElementById('month').checked;
        let noOfMonths = 0;

        if (!isYear && !isMonth) {
            alert('please select the loan tenure, either monthly or yearly');
        } else {
            if (isYear) {
                noOfMonths = loanTenure.value * 12;
            } else {
                noOfMonths = loanTenure.value;
            }

            let r = parseFloat(loanInterest.value) / 12 / 100;
            let p = parseFloat(loanAmount.value);
            let n = noOfMonths;

            let emi = (p * r * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1);
            let totalInterest = (emi * n) - p;
            let totalPayment = totalInterest + p;

            let currency = currencySelect.value;
            let locale = currency === 'IDR' ? 'id-ID' : 'en-US';

            document.getElementById('emi').innerHTML = emi.toLocaleString(locale, {
                style: 'currency',
                currency: currency
            });
            document.getElementById('totalInterest').innerHTML = totalInterest.toLocaleString(locale, {
                style: 'currency',
                currency: currency
            });
            document.getElementById('totalPayment').innerHTML = totalPayment.toLocaleString(locale, {
                style: 'currency',
                currency: currency
            });
        }
    }
}

if (document.querySelector('.reviews')) {
    const reviews_slider = document.querySelector('.reviews .reviews-slider');
    const slides = reviews_slider.querySelectorAll('.slide');
    const lebar_slide = slides[0].clientWidth + 20; // 20px jarak antar slide

    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');

    // Bisa juga set di CSS: .reviews-slider { scroll-behavior: smooth; }
    reviews_slider.style.scrollBehavior = "smooth";

    // Tombol Next
    nextBtn.onclick = () => {
        reviews_slider.scrollLeft += lebar_slide
    }}

let faqItems = document.querySelectorAll('.faq .row .box-container .box');

faqItems.forEach(item => {
    let title = item.querySelector('.title');
    let icon = item.querySelector('.title i');

    title.onclick = () => {

        // tutup semua box lain
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
                let otherIcon = otherItem.querySelector('.title i');
                otherIcon.classList.replace('fa-minus', 'fa-plus');
            }
        });

        // toggle box yang diklik
        item.classList.toggle('active');

        // ganti icon
        if (item.classList.contains('active')) {
            icon.classList.replace('fa-plus', 'fa-minus');
        } else {
            icon.classList.replace('fa-minus', 'fa-plus');
        }
    };
});
