class FooterCustom extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <footer>
                <div class="footer-content bg-slate-900 font-light text-gray-500 py-4 px-3 md:px-10 lg:px-32">
                    <p class="text-center">
                        Dibuat demi memenuhi submission 
                        <a class="text-emerald-500 font-medium capitalize" href="https://www.dicoding.com">dicoding</a> 
                        | Movieku. &copy; 2022 by 
                        <a class="text-emerald-500 font-medium" href="mailto:ffaisalhalim@gmail.com">Faial Halim</a></p>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-custom', FooterCustom);