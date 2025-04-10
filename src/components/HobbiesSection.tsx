
import { Headphones, Smartphone, Brain } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface Hobby {
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const hobbies: Hobby[] = [
  {
    name: 'Listening to Music',
    description: 'I enjoy exploring diverse music genres that help me focus during coding sessions and relax during breaks.',
    icon: <Headphones size={30} />,
    color: 'from-blue-400 to-blue-600',
  },
  {
    name: 'Exploring Apps & Gadgets',
    description: 'I love discovering new applications and tech gadgets, analyzing their UI/UX and understanding their functionality.',
    icon: <Smartphone size={30} />,
    color: 'from-purple-400 to-purple-600',
  },
  {
    name: 'Solving Logical Puzzles',
    description: 'I enjoy challenging my mind with logical puzzles and problems that improve my analytical thinking and problem-solving skills.',
    icon: <Brain size={30} />,
    color: 'from-amber-400 to-amber-600',
  },
];

const HobbyCard = ({ hobby, index }: { hobby: Hobby; index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={cn(
        "bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 opacity-0",
        inView && "animate-fade-in"
      )}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className={cn(
        "w-16 h-16 rounded-full bg-gradient-to-br mb-4 mx-auto flex items-center justify-center text-white",
        hobby.color
      )}>
        {hobby.icon}
      </div>
      
      <h3 className="text-xl font-bold text-center mb-3">
        {hobby.name}
      </h3>
      
      <p className="text-center text-muted-foreground">
        {hobby.description}
      </p>
    </div>
  );
};

const HobbiesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="hobbies" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <h2 
          ref={ref}
          className={cn(
            "text-3xl md:text-4xl font-bold text-center mb-16 opacity-0",
            inView && "animate-fade-in"
          )}
        >
          My Hobbies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {hobbies.map((hobby, index) => (
            <HobbyCard key={hobby.name} hobby={hobby} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
