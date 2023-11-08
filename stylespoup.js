document.addEventListener('DOMContentLoaded', function () {
            if (window.location === window.parent.location) {
                let alert = document.querySelector('#custom-alert');
                let colors = ['#DC2626', '#0077B6', '#00A7E1'];
                let colorIndex = 0;
                setInterval(() => {
                    alert.style.background = colors[colorIndex];
                    colorIndex = (colorIndex + 1) % colors.length;
                }, 2000);
                setTimeout(() => {
                    alert.style.display = 'block';
                }, 14000);
            }
        });
