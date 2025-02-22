window.onload = function() {
        let header = document.getElementById('header');
        let main = document.getElementById('main');
        let logout = document.getElementById('logout');
        
        header.classList.remove('hide-header');

        setTimeout(function() {
                main.classList.remove('hide-main');
        }, 1000);

        setTimeout(function() {
                logout.classList.remove('hide-logout');
        }, 2000)
};