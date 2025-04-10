
import { Github, ExternalLink } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Student Management System',
    description: 'A Java-based application for managing student records with database integration.',
    technologies: ['Java', 'MySQL', 'JDBC'],
    image: '/placeholder.svg',
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A responsive portfolio website built with modern web technologies.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    image: '/placeholder.svg',
  },
  {
    title: 'E-Learning Platform Prototype',
    description: 'A prototype for an e-learning platform with course management features.',
    technologies: ['Java', 'Spring Boot', 'MySQL'],
    image: '/placeholder.svg',
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={cn(
        "bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg opacity-0",
        inView && "animate-fade-in"
      )}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="aspect-video bg-muted overflow-hidden">
        <img 
          src={project.image || '/placeholder.svg'} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        
        <p className="text-muted-foreground mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          {project.githubUrl && (
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center"
            >
              <Github className="mr-2 h-4 w-4" />
              Code
            </Button>
          )}
          
          {project.demoUrl && (
            <Button 
              variant="default" 
              size="sm"
              className="flex items-center"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 
          ref={ref}
          className={cn(
            "text-3xl md:text-4xl font-bold text-center mb-6 opacity-0",
            inView && "animate-fade-in"
          )}
        >
          My Projects
        </h2>
        
        <p 
          className={cn(
            "text-center text-muted-foreground max-w-2xl mx-auto mb-16 opacity-0",
            inView && "animate-fade-in"
          )}
          style={{ animationDelay: '200ms' }}
        >
          Here are some of the projects I've worked on. These showcase my skills and experience in
          different technologies and problem domains.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
