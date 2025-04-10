
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

const ResumeSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-primary/5">
      <div 
        ref={ref}
        className={cn(
          "container mx-auto px-4 text-center opacity-0",
          inView && "animate-fade-in"
        )}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Want to know more?
        </h2>
        
        <Button 
          size="lg"
          className="gradient-bg hover:opacity-90 animate-pulse"
        >
          <Download className="mr-2 h-5 w-5" />
          Download Resume (PDF)
        </Button>
        
        <p className="mt-4 text-sm text-muted-foreground">
          Get a comprehensive overview of my skills, experience, and education.
        </p>
      </div>
    </section>
  );
};

export default ResumeSection;
