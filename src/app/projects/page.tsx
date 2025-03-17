import ProjectCard from "@/components/projectcard";
const Projects =
[
    // {
    //     Image:"/images/project3.png",
    //     title:"Static Resume",
    //     description:"This is Static Resume.Its my first ever project",
    //     VercelLink:"https://vercel.com/yumna-shaikhs-projects/s-resume",
    //     GithubLink:"https://github.com/yumnashaikh07/S-Resume",
    // },
    
    // {
    //     Image:"/images/project1.png",
    //     title:"Emotion Selector",
    //     description:"It is a website it was created in early days by using CSS, HTML, and JavaScript ",
    //     VercelLink:"https://emotion-selector.vercel.app/",
    //     GithubLink:"https://github.com/yumnashaikh07/Emotion-Selector",
    // },
    {
        Image:"/images/eventproject.png",
        title:"Event Planning Website",
        description:"This an Event Planning Agency Website, it was built by using NextJS Framework along tailwindCSS",
        VercelLink:"https://event-planning-agency-website.vercel.app/",
        // GithubLink:"https://github.com/yumnashaikh07/Event-Planner-Website02",
    },
];
export default function ProjectsComponent(){
    return(
        <main>
            <section className="gap-4 p-4 grid grid-cols-1 md:grid-cols-3 ">
                {Projects.map((project , index ) => (
                    <ProjectCard
                    key={index}
                    image={project.Image}
                    title={project.title}
                    description={project.description}
                    VercelLink={project.VercelLink}
                    // GithubLink={project.GithubLink}
                    />
                ))}
            </section>
        </main>
    );
};


