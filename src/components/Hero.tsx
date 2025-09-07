import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import edselProfile from "@/assets/edsel-profile.png";

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-hero section-padding min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground space-y-8 fade-in-up">
            {/* Greeting Tags */}
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-accent/20 text-accent border-accent/30 px-4 py-2">
                Ecommerce Specialist
              </Badge>
              <Badge className="bg-accent/20 text-accent border-accent/30 px-4 py-2">
                Ecommerce Projects
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <p className="text-accent text-lg font-medium">Hello There!</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                I'm <span className="text-accent">Edsel Vaflor</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                Ecommerce Specialist<br />
                Based in the Philippines
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              I specialize in ecommerce operations, project & data-driven management, 
              and digital optimization to deliver efficient & measurable results.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero group">
                View My Portfolio
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="btn-secondary">
                Hire Me
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end fade-in-up">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl scale-110"></div>
              
              {/* Profile Image Container */}
              <div className="relative bg-gradient-to-br from-accent/20 to-accent/5 p-8 rounded-full">
                <img
                  src={edselProfile}
                  alt="Edsel Vaflor - Ecommerce Specialist"
                  className="w-80 h-80 object-cover rounded-full shadow-hover"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-accent text-primary px-6 py-3 rounded-full font-semibold shadow-glow">
                Available for Hire
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;