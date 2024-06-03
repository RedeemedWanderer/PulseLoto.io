document.addEventListener('DOMContentLoaded', () => {
    // Highlight current navigation item
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('nav ul li a');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].className = "active";
        }
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Functionality to connect MetaMask
    async function connectMetaMask() {
        if (window.ethereum) {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                alert('MetaMask connected');
            } catch (error) {
                console.error('User denied account access');
            }
        } else {
            alert('Please install MetaMask!');
        }
    }

    const connectButton = document.getElementById('connectButton');
    if (connectButton) {
        connectButton.addEventListener('click', connectMetaMask);
    }
});
