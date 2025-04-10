
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <span className="font-signature text-2xl text-primary">VK</span>
        </div>
        
        <p className="text-muted-foreground text-sm">
          &copy; {currentYear} Golla Vinod Kumar. All rights reserved.
        </p>
        
        <div className="mt-3 flex items-center justify-center text-sm text-muted-foreground">
          <span>Made with</span>
          <Heart size={16} className="mx-1 text-red-500 animate-pulse" />
          <span>and modern web technologies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
