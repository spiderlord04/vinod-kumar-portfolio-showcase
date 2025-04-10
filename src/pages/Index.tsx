
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import ProjectsSection from '@/components/ProjectsSection';
import HobbiesSection from '@/components/HobbiesSection';
import ContactSection from '@/components/ContactSection';
import ResumeSection from '@/components/ResumeSection';
import Footer from '@/components/Footer';

// Need to add react-intersection-observer
import { useInView } from 'react-intersection-observer';

const Index = () => {
  useEffect(() => {
    // Set document title
    document.title = "Vinod Kumar - Portfolio";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <HobbiesSection />
      <ContactSection />
      <ResumeSection />
      <Footer />
    </div>
  );
};

export default Index;
