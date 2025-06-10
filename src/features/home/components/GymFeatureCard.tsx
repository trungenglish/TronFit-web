import { Dumbbell, Heart, Weight, LucideIcon } from "lucide-react";

type IconType = 'dumbbell' | 'heart' | 'weight';

interface GymFeatureCardProps {
    icon: "dumbbell" | "heart" | "weight";
    accent: string;
    title: string;
    desc: string;
  };

  const ICONS: Record<IconType, LucideIcon> = {
    dumbbell: Dumbbell,
    heart: Heart,
    weight: Weight,
  };

export default function GymFeatureCard({ icon, accent, title, desc }: GymFeatureCardProps) {

    const Icon = ICONS[icon];

    return (
        <div
            className="group relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 border-2 hover:scale-[1.02] hover:-translate-y-1 focus-within:scale-[1.02] will-change-transform flex items-start gap-6 p-8 min-h-[220px] backdrop-blur-sm"
            style={{
                background: "linear-gradient(145deg, rgba(42,31,71,0.95) 0%, rgba(35,29,58,0.90) 100%)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.3), 0 1px 3px rgba(255,255,255,0.1) inset",
                borderColor: "rgba(255,255,255,0.1)",
            }}
            tabIndex={0}
            >
      {/* Animated background glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 30% 20%, ${accent}15 0%, transparent 60%)`,
        }}
      />

      {/* Enhanced Icon Container */}
      <div className="shrink-0 relative z-10">
        <div
          className="flex items-center justify-center rounded-2xl w-20 h-20 border-2 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg"
          style={{
            background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`,
            borderColor: `${accent}40`,
            boxShadow: `0 8px 25px ${accent}30, 0 0 20px ${accent}20 inset`,
          }}
        >
          <Icon 
            size={40} 
            strokeWidth={2.5} 
            color={accent} 
            className="transition-all duration-300 group-hover:scale-110" 
          />
        </div>
        
        {/* Icon glow effect */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 blur-xl"
          style={{
            background: `radial-gradient(circle, ${accent}40 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* Enhanced Text Content */}
      <div className="flex flex-col flex-1 relative z-10">
        <h3
          className="font-black text-xl md:text-2xl tracking-tight uppercase mb-3 transition-all duration-300 group-hover:scale-105"
          style={{
            background: `linear-gradient(135deg, ${accent} 0%, #ffffff 70%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: `0 0 20px ${accent}50`,
            letterSpacing: "1.5px",
          }}
        >
          {title}
        </h3>
        
        <p 
          className="text-base md:text-lg font-medium leading-relaxed transition-colors duration-300 group-hover:text-white"
          style={{
            color: "#e3e0f6",
            textShadow: "0 1px 3px rgba(0,0,0,0.3)",
          }}
        >
          {desc}
        </p>

        {/* Subtle action indicator */}
        <div className="flex items-center mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span className="text-sm font-semibold tracking-wide" style={{color: accent}}>
            Tìm hiểu thêm
          </span>
          <svg 
            className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke={accent} 
            strokeWidth="2" 
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Enhanced border effects */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
        <div 
          className="absolute -inset-10 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${accent}30 50%, transparent 100%)`,
          }}
        />
      </div>
    </div>
    );
}
