
import { User, Download } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleDownloadResume = () => {
    // Create an anchor element
    const link = document.createElement('a');
    
    // Set the href to the PDF file path
    link.href = '/vinodres.pdf';
    
    // Set download attribute to suggest filename
    link.download = 'vinodres.pdf';
    
    // Append to the document
    document.body.appendChild(link);
    
    // Trigger click event
    link.click();
    
    // Clean up - remove the element
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          About Me
        </h2>
        
        <div 
          ref={ref}
          className={cn(
            "max-w-4xl mx-auto grid md:grid-cols-[1fr_2fr] gap-8 opacity-0",
            inView && "animate-fade-in"
          )}
        >
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-teal to-indigo p-1">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                <User size={100} className="text-primary" />
              </div>
            </div>
            <div className="mt-6 text-center">
              <h3 className="font-signature text-3xl text-primary">Vinod Kumar</h3>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-lg">
              Hello! I'm Golla Vinod Kumar, a passionate and driven Computer Science student at Malla Reddy University. 
              I grew up with a curiosity for how things work, and that curiosity turned into a passion for coding and problem-solving.
            </p>
            
            <p className="text-lg">
              I completed my 10th grade at Sri Sahithi Talent High School, followed by my intermediate studies at Narayana Junior College. 
              Over the years, I've developed strong fundamentals in programming and continue to explore Java, web technologies, and UI/UX principles.
            </p>
            
            <p className="text-lg">
              Beyond academics, I'm an adaptive learner who enjoys observing how digital solutions shape the real world. 
              My mission is to contribute to tech projects that create impact and make user experiences better.
            </p>

            <div className="pt-4 flex justify-center md:justify-start">
              <Button 
                size="lg"
                className="gradient-bg hover:opacity-90 animate-pulse"
                onClick={handleDownloadResume}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume (PDF)
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
