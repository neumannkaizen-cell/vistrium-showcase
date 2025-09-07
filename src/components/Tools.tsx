import { Progress } from "@/components/ui/progress";

const Tools = () => {
  const tools = [
    { name: "PowerBI", percentage: 96 },
    { name: "Apps Script", percentage: 94 },
    { name: "Meta", percentage: 91 },
    { name: "Looker", percentage: 93 },
    { name: "Notion", percentage: 92 },
    { name: "Supabase", percentage: 84 }
  ];

  return (
    <section id="tools" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-medium mb-2">Tools I Used</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Exploring the <span className="text-accent">Tools</span><br />
            Behind my Works
          </h2>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {tools.map((tool, index) => (
            <div key={index} className="card-service text-center">
              {/* Tool Icon/Logo placeholder */}
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">
                  {tool.name.charAt(0)}
                </span>
              </div>
              
              {/* Tool Name */}
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {tool.name}
              </h3>
              
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Proficiency</span>
                  <span className="text-accent font-semibold">{tool.percentage}%</span>
                </div>
                <Progress 
                  value={tool.percentage} 
                  className="h-2 bg-muted"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;