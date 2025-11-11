import { Check } from "lucide-react";

interface RequirementItemProps {
  title: string;
  description: string;
}

const RequirementItem = ({ title, description }: RequirementItemProps) => {
  return (
    <div className="flex gap-4 p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow duration-300">
      <div className="flex-shrink-0">
        <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
          <Check className="text-success" size={20} />
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default RequirementItem;
