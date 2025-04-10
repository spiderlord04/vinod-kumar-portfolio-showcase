
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const phrases = ['Java Developer', 'UI Learner', 'Fast Thinker'];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      const shouldDelete = isDeleting;
      
      setTypedText(prev => 
        shouldDelete
          ? currentPhrase.substring(0, prev.length - 1)
          : currentPhrase.substring(0, prev.length + 1)
      );
      
      if (!shouldDelete && typedText === currentPhrase) {
        // Start deleting after a pause
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (shouldDelete && typedText === '') {
        setIsDeleting(false);
        setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
      }
    };
    
    const typingInterval = setTimeout(handleTyping, isDeleting ? 100 : 150);
    return () => clearTimeout(typingInterval);
  }, [typedText, currentPhraseIndex, isDeleting, phrases]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-teal-light/30 to-indigo-light/30 z-0" />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_70%)] z-[1]" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">
            Golla Vinod Kumar
          </h1>
          
          <div className="h-16">
            <h2 className="text-xl md:text-2xl font-medium">
              <span>Aspiring </span>
              <span className="typewriter inline-block text-primary animate-typing">
                {typedText}
              </span>
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '400ms' }}>
            Tech Explorer | Consistent Learner
          </p>
          
          <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
            <Button 
              size="lg"
              className="gradient-bg hover:opacity-90 transition-opacity"
              onClick={() => document.getElementById('about')?.scrollIntoView()}
            >
              Explore My Journey
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ChevronDown size={32} className="text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
