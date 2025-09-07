import { Button } from "@/components/ui/button";
import edselProfile from "@/assets/edsel-profile.png";
import vistriumLogo from "@/assets/vistrium-logo.png";

const About = () => {
  return (
    <section id="about" className="bg-primary text-primary-foreground section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-hover">
                <img
                  src={edselProfile}
                  alt="Edsel Vaflor Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-accent/30"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-accent text-sm font-medium mb-2">About Me</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Who is <span className="text-accent">Edsel Vaflor?</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Edsel Vaflor is an Ecommerce Specialist, working across different brands 
              and industries. Specializing in operations, automation, and analytics to 
              deliver data-driven solutions & measurable results.
            </p>

            <div className="flex items-center space-x-6">
              <Button className="btn-hero">
                Connect On
              </Button>
              
              <div className="flex items-center space-x-3">
                <img 
                  src={vistriumLogo} 
                  alt="ViSTRIUM Logo" 
                  className="h-8 w-auto"
                />
                <span className="font-bold text-accent">VISTRIUM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;