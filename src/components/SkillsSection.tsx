
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface Skill {
  name: string;
  percentage: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Learning';
  color?: string;
}

const skills: Skill[] = [
  { name: 'Java', percentage: 70, level: 'Intermediate' },
  { name: 'HTML & CSS', percentage: 65, level: 'Intermediate' },
  { name: 'JavaScript', percentage: 55, level: 'Beginner' },
  { name: 'UI/UX Basics', percentage: 45, level: 'Learning' },
  { name: 'MySQL', percentage: 60, level: 'Intermediate' },
];

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const circleRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  useEffect(() => {
    if (inView && circleRef.current) {
      circleRef.current.style.setProperty('--percent', `${skill.percentage}`);
    }
  }, [inView, skill.percentage]);

  return (
    <div 
      ref={ref}
      className={cn(
        "bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-500 hover:shadow-lg opacity-0",
        inView && "animate-fade-in"
      )}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="skill-circle" ref={circleRef}>
        <svg>
          <circle />
          <circle className={inView ? "animate-circle-fill" : ""} />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-primary">{skill.percentage}%</span>
        </div>
      </div>
      
      <div className="text-center mt-6">
        <h3 className="text-xl font-bold">{skill.name}</h3>
        <span className={cn(
          "inline-block mt-2 px-2 py-1 text-xs rounded-full",
          skill.level === 'Beginner' && "bg-blue-100 text-blue-700",
          skill.level === 'Intermediate' && "bg-green-100 text-green-700",
          skill.level === 'Advanced' && "bg-purple-100 text-purple-700",
          skill.level === 'Learning' && "bg-amber-100 text-amber-700",
        )}>
          {skill.level}
        </span>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 
          ref={ref}
          className={cn(
            "text-3xl md:text-4xl font-bold text-center mb-16 opacity-0",
            inView && "animate-fade-in"
          )}
        >
          My Skills
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
