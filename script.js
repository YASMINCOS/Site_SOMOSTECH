window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 0);
});

document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(function(link) {
        link.addEventListener("mouseover", function() {
            this.style.color = "#FFDD00"; 
        });

        link.addEventListener("mouseout", function() {
            this.style.color = "#ffffff"; 
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Inicialize o Slick Carousel
    $(".slick-carousel").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Defina a velocidade de rotação desejada em milissegundos
    });

    // Restante do seu código...
});

    // Configuração do gráfico de exemplo (pode ser personalizado conforme necessário)
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
            datasets: [{
                label: 'Exemplo de Dados',
                data: [12, 19, 3, 5, 2],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    document.addEventListener("DOMContentLoaded", function() {
        var artigoButtons = document.querySelectorAll('.artigoButton');
        
        artigoButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                window.location.href = 'artigos/' + button.getAttribute('data-target');
            });
        });
        
        // Restante do seu código...
    });
    