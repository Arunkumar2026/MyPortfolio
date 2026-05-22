const projects = [
    {
        title: "Blog Website",
        description: "A full-stack blog application built with the MERN stack where users can create, edit, delete, and manage blog posts.",
        tech: "React, Node.js, Express, MongoDB",
        github: "https://github.com/Arunkumar2026/Blog-Website",
        live: "https://blog-website-lake-three.vercel.app",
        image: "/blogproject.png",
    },

    {
        title: "Portfolio Website",
        description: "Personal portfolio website built with React and Tailwind CSS showcasing projects and skills.",
        tech: "React, Tailwind CSS",
        github: "https://github.com/Arunkumar2026/MyPortfolio",
        live: "https://my-portfolio-khaki-xi-37.vercel.app",
        image: "/portfolio.png",

    }
];

const Projects = () => {
    return (
        <div className="min-h-screen px-6 py-16 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
                        <img src={project.image} alt={project.title} className="w-full h-52 object-cover"/>

                        <div className="p-6">
                            <h2 className="text-2xl font-bold">{project.title}</h2>
                            <p className="text-gray-500 mt-3">{project.description}</p>
                            <p className="mt-4 text-sm text-blue-500 font-semibold">{project.tech}</p>

                            <div className="flex gap-4 mt-6">
                                <a href={project.github} target="_blank" className="px-4 py-2 bg-blue-500 text-white rounded-lg">GitHub</a>
                                <a href={project.live} target="_blank" className="px-4 py-2 bg-blue-500 text-white rounded-lg">Live Demo</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;