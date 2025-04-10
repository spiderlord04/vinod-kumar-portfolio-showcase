
import { GraduationCap, BookOpen, School } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface Education {
  title: string;
  institution: string;
  period: string;
  description: string;
  icon: React.ReactNode;
}

const educationData: Education[] = [
  {
    title: 'B.Tech (CSE)',
    institution: 'Malla Reddy University',
    period: '2021 - Present',
    description: 'Pursuing Computer Science and Engineering with focus on programming fundamentals and software development.',
    icon: <GraduationCap size={20} />,
  },
  {
    title: 'Intermediate',
    institution: 'Narayana Junior College',
    period: '2019 - 2021',
    description: 'Completed intermediate education with focus on Mathematics, Physics and Computer Science.',
    icon: <BookOpen size={20} />,
  },
  {
    title: '10th Class',
    institution: 'Sri Sahithi Talent High School',
    period: '2018 - 2019',
    description: 'Completed secondary education with distinction and developed interest in STEM subjects.',
    icon: <School size={20} />,
  },
];

const EducationSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Education
        </h2>
        
        <div 
          ref={ref}
          className="max-w-3xl mx-auto mt-16"
        >
          {educationData.map((item, index) => (
            <div 
              key={index}
              className={cn(
                "timeline-item",
                inView && "animate-fade-in"
              )}
              style={{ '--delay': index } as React.CSSProperties}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary mr-3">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                
                <div className="mb-3">
                  <p className="text-lg font-medium text-primary">
                    {item.institution}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.period}
                  </p>
                </div>
                
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
