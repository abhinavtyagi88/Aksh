class CustomNavbar extends HTMLElement {
    connectedCallback() {
        fetch('../../navbar.html')
            .then(response => response.text())
            .then(data => {
                this.innerHTML = data;
            })
            .catch(error => console.error('Error loading navbar:', error));
    }
}
customElements.define('custom-navbar', CustomNavbar);