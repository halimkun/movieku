const About = {
    render() {
        return `
        <div class="w-auto py-0 md:px-0 md:py-40 flex flex-col md:flex-row items-center justify-center about-content"></div>`;
    },
    
    loadPageContent() {
        const aboutContentElement = document.querySelector(".about-content");
        aboutContentElement.innerHTML = `
            <div class="h-full w-full md:w-[50%] flex items-center justify-center px-10 py-10 pb-1">
                <div
                    class="w-full py-40 bg-slate-800 shadow-md cursor-pointer transition-all hover:shadow-xl flex items-center justify-center">
                    <h1 class="text-4xl font-bold text-white"><span class="text-emerald-500">Movie</span>ku.
                    </h1>
                </div>
            </div>
            <div class="h-full w-full flex flex-col justify-center px-10 py-10 md:py-0 md:px-20">
                <div class="mb-10">
                    <h1 class="text-4xl font-bold text-white">
                        <span class="text-emerald-500">About</span>.
                    </h1>
                    <p class="mt-3 text-lg text-white font-medium">
                        Aplikasi ini dibuat dengan tujuan pembelajaran dan sebagai syarat kelulusan kelas 
                        <a href="https://www.dicoding.com/academies/163" class="font-bold text-emerald-400 hover:text-emerald-500 transition-colors">
                            Belajar Fundamental Front-End Web Development
                        </a> dari 
                        <a href="https://www.dicoding.com/" class="font-bold text-emerald-400 hover:text-emerald-500 transition-colors">
                            Dicoding
                        </a>,
                        Semoga dapat bermanfaat.sebagai referensi.
                    </p>
                    <hr class="my-3" />
                    <p class="text-md text-white font-medium">
                        Referensi : 
                        <a href="https://www.themoviedb.org/" class="font-bold text-emerald-400 hover:text-emerald-500 transition-colors">
                            Themoviedb (TMDB)
                        </a>
                    </p>
                </div>
                <div class="">
                    <h1 class="text-4xl font-bold text-emerald-500"><span class="text-white">Disclaimer</span>.
                    </h1>
                    <p class="mt-3 text-lg text-white font-medium">
                        Semua konten dari web ini diambil dari <a href="https://www.themoviedb.org/"
                            class="font-bold text-emerald-400 hover:text-emerald-500 transition-colors">The Movie
                            Database (TMDb)</a>
                    </p>
                </div>
            </div>
        `;
    }
}

export default About;