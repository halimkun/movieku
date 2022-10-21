class NavMenu extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <nav class="bg-slate-900 px-3 md:px-10 lg:px-32 py-4 flex items-center justify-between text-white border-b-gray">
                <div class="nav-logo font-bold text-2xl px-3 md:px-6 py-1">
                    <h1><span class="text-emerald-500">Movie</span>ku.</h1>
                </div>
                <div class="text-white hidden md:block self-stretch w-full px-10">
                    <input type="text" id="search-input" placeholder="Search movie..." class="py-2 px-4 bg-slate-800 rounded-md w-full">
                </div>
                <div class="nav-menu flex gap-1 md:gap-3 text-lg">
                    <a href="#home"
                        class="nav-menu-item px-3 md:px-6 py-1 rounded-md hover:bg-emerald-500 hover:transition-all hover:text-white font-semibold">
                        Home
                    </a>
                    <a href="#about"
                        class="nav-menu-item px-3 md:px-6 py-1 rounded-md hover:bg-emerald-500 hover:transition-all hover:text-white font-semibold">
                        About
                    </a>
                </div>
            </nav>
            <div class="genre-list bg-slate-800"></div>
        `;
    }
}

customElements.define('nav-menu', NavMenu);