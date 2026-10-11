function Navbar(){
    return(
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">

<div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">

<span className="w-9 h-9 rounded-lg bg-orange zoom-200">⚡️</span>
<h2 className="text-xl font-bold text-gray-800">Dev Stack</h2>

</div>
<div className="hidden md:flex gap-7 text-sm font-medium">
<a href="#Home">Home</a>
<a href="#technologies">Technologies</a>
<a href="#projects">Projects</a>
<a href="#about">About</a>
<a href="#contact">Contact</a>
<div className="flex items-center gap-8">

<button className="px-4 py-2 rounded-full bg-blue-500 via-pink-500 to-violet-500 text-white text-sm font-semibold">Sign In</button>
<button>Sign Up</button>

</div>
</div>

        </nav>
    )
}
export default Navbar;