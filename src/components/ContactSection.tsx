
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface ContactItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

const contactItems: ContactItem[] = [
  {
    icon: <Mail size={24} />,
    label: 'Email',
    value: 'gollavinodkumar59@gmail.com',
    href: 'mailto:gollavinodkumar59@gmail.com',
  },
  {
    icon: <Phone size={24} />,
    label: 'Phone',
    value: '+91 6302314992',
    href: 'tel:+916302314992',
  },
  {
    icon: <Linkedin size={24} />,
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: '#', // Add your LinkedIn profile URL when available
  },
  {
    icon: <Github size={24} />,
    label: 'GitHub',
    value: 'Check my repositories',
    href: '#', // Add your GitHub profile URL when available
  },
];

const ContactItem = ({ item, index }: { item: ContactItem; index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={cn(
        "flex flex-col items-center opacity-0",
        inView && "animate-fade-in"
      )}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <a 
        href={item.href} 
        className="contact-icon animate-pulse"
        target={item.href?.startsWith('http') ? '_blank' : undefined}
        rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {item.icon}
      </a>
      
      <h3 className="text-lg font-medium mt-4 mb-1">
        {item.label}
      </h3>
      
      <p className="text-muted-foreground text-center">
        {item.value}
      </p>
    </div>
  );
};

const ContactSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 
          ref={ref}
          className={cn(
            "text-3xl md:text-4xl font-bold text-center mb-16 opacity-0",
            inView && "animate-fade-in"
          )}
        >
          Get In Touch
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {contactItems.map((item, index) => (
            <ContactItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
