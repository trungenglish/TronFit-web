import GymFeatureCard from "@/features/home/components/GymFeatureCard";

export default function Home() {
    const FEATURES = [
        {
          title: "HIỆU SUẤT THÉP",
          desc: "Tối ưu lịch tập, cá nhân hóa bởi AI – vượt ngưỡng bản thân mỗi ngày.",
          icon: "dumbbell",
          accent: "#ff0844",
        },
        {
          title: "DINH DƯỠNG PRO",
          desc: "Quản lý macro, lập thực đơn, ăn uống khoa học cho mọi mục tiêu.",
          icon: "heart",
          accent: "#00f5ff",
        },
        {
          title: "PT ẢO 24/7",
          desc: "Trợ lý AI kèm cặp luyện tập, báo lịch, giải đáp & thôi thúc bạn bứt phá.",
          icon: "weight",
          accent: "#8b5cf6",
        },
        {
          title: "THEO DÕI PROGRESS",
          desc: "Biểu đồ tiến bộ, thống kê chỉ số, chủ động kiểm soát hành trình body.",
          icon: "dumbbell",
          accent: "#ff0844",
        },
      ];

    return (
      <>
        {/* Hero Section - Enhanced 2 Column Layout */}
        <header className="relative min-h-screen flex items-center justify-center px-6 py-8 pt-24">
          {/* Enhanced Background Grid */}
          <div className="absolute inset-0 opacity-5">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `linear-gradient(rgba(0,245,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,8,68,0.1) 1px, transparent 1px)`,
                backgroundSize: '60px 60px'
              }}
            />
          </div>

          {/* Enhanced Spotlight Effects */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-red-500/15 via-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-bl from-cyan-500/15 via-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />

          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[600px]">
              {/* Left Column - Enhanced Content */}
              <div className="text-center lg:text-left space-y-8">
                {/* Enhanced TronFit Logo - AI on same line */}
                <div className="flex justify-center lg:justify-start">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                    <div className="relative bg-zinc-800/90 backdrop-blur-sm p-6 rounded-2xl border border-zinc-700 group-hover:border-cyan-400/50 transition-all duration-300">
                      {/* New TronFit Hero Logo - Focused Design (Larger) */}
                      <svg width={80} height={80} viewBox="0 0 48 48" fill="none" className="text-zinc-100">
                        {/* Central Dumbbell (Gym) - Larger */}
                        <rect x="16" y="21" width="16" height="6" rx="3" fill="url(#logoGradientHero)" />
                        <rect x="10" y="18" width="6" height="12" rx="3" fill="url(#logoGradientHero)" />
                        <rect x="32" y="18" width="6" height="12" rx="3" fill="url(#logoGradientHero)" />
                        
                        {/* Schedule Grid (Top) - Larger */}
                        <rect x="18" y="6" width="12" height="10" rx="1.5" fill="none" stroke="#00f5ff" strokeWidth="2" />
                        <line x1="20" y1="9" x2="28" y2="9" stroke="#00f5ff" strokeWidth="1.5" />
                        <line x1="20" y1="11" x2="28" y2="11" stroke="#00f5ff" strokeWidth="1.5" />
                        <line x1="20" y1="13" x2="25" y2="13" stroke="#00f5ff" strokeWidth="1.5" />
                        
                        {/* Discipline Arrows (Pointing Up - Progress) - Larger */}
                        <path d="M8 38 L14 32 L8 26" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        <path d="M34 38 L40 32 L34 26" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        
                        {/* Focus Rings (Discipline/Target) - Larger */}
                        <circle cx="10" cy="10" r="3" fill="none" stroke="#ff0844" strokeWidth="2" opacity="0.9" />
                        <circle cx="10" cy="10" r="1.5" fill="#ff0844" opacity="0.9" />
                        
                        <circle cx="38" cy="38" r="3" fill="none" stroke="#ff0844" strokeWidth="2" opacity="0.9" />
                        <circle cx="38" cy="38" r="1.5" fill="#ff0844" opacity="0.9" />
                        
                        {/* Define gradients */}
                        <defs>
                          <linearGradient id="logoGradientHero" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#00f5ff" />
                            <stop offset="50%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Enhanced Main Title - AI on same line */}
                <div className="space-y-2">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none">
                    <div className="flex items-baseline justify-center lg:justify-start space-x-2">
                      <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-500 bg-clip-text text-transparent">
                        TRONFIT
                      </span>
                      <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-500 bg-clip-text text-transparent">
                        AI
                      </span>
                    </div>
                  </h1>
                  {/* Enhanced New Focused Slogans */}
                  <div className="space-y-1 mt-4">
                    <div className="text-sm text-zinc-400 font-bold tracking-[0.3em]">
                      GYM • SCHEDULE • DISCIPLINE
                    </div>
                    <div className="text-xs text-zinc-500 font-medium tracking-[0.2em]">
                      PHÒNG TẬP • XẾP LỊCH • KỶ LUẬT
                    </div>
                  </div>
                </div>

                {/* Enhanced Subtitle */}
                <div className="space-y-4">
                  <p className="text-xl md:text-2xl text-zinc-300 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Chinh phục thể hình, bứt phá hiệu năng cùng 
                    <span className="text-cyan-400 font-semibold"> trí tuệ AI cá nhân hóa</span>
                  </p>

                  {/* Enhanced Tag */}
                  <div className="inline-flex items-center px-6 py-3 bg-zinc-800/60 backdrop-blur-sm border border-zinc-700 rounded-full text-sm font-medium text-zinc-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                    &ldquo;Discipline creates freedom — unleash your potential.&rdquo;
                  </div>
                </div>

                {/* Enhanced CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 via-cyan-500 to-blue-600 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 overflow-hidden text-zinc-100">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 flex items-center">
                      Bắt đầu luyện tập
                      <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M13 5l7 7-7 7M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  
                  <button className="group px-8 py-4 border border-zinc-700 rounded-xl font-semibold text-zinc-300 hover:bg-zinc-800/50 hover:border-zinc-400 transition-all duration-300 backdrop-blur-sm">
                    <span className="flex items-center">
                      Xem demo
                      <svg className="ml-2 w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Column - Professional Workout Calendar */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  {/* <WorkoutCalendar /> */}
                  
                  {/* Enhanced Floating Elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-xl animate-bounce" style={{animationDuration: '3s'}} />
                  <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-xl animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}} />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Enhanced Features Section */}
        <section className="relative py-24 px-6">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-800/50 to-transparent" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Enhanced Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 bg-zinc-800/40 border border-zinc-700 rounded-full text-sm font-medium text-cyan-400 mb-6 backdrop-blur-sm">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
                TÍNH NĂNG MẠNH MẼ
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                HỆ SINH THÁI HOÀN CHỈNH
              </h2>
              <p className="text-xl md:text-2xl text-zinc-300 max-w-4xl mx-auto leading-relaxed">
                Mọi công cụ bạn cần cho hành trình thể hình hoàn hảo
              </p>
            </div>

            {/* Enhanced Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {FEATURES.map((feat, idx) => (
                <GymFeatureCard
                  key={`${feat.title}-${idx}`}
                  icon={feat.icon as "dumbbell" | "heart" | "weight"}
                  accent={feat.accent}
                  title={feat.title}
                  desc={feat.desc}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="relative py-24 px-6 bg-gradient-to-r from-zinc-800/50 via-zinc-700/30 to-zinc-800/50">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-800/20 to-transparent" />
          
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="group p-8 rounded-2xl hover:bg-zinc-800/30 transition-all duration-300">
                <div className="text-6xl md:text-7xl font-black text-cyan-500 mb-4 group-hover:scale-110 transition-transform duration-300">500K+</div>
                <div className="text-lg md:text-xl text-zinc-300 font-medium">Người dùng hoạt động</div>
              </div>
              <div className="group p-8 rounded-2xl hover:bg-zinc-800/30 transition-all duration-300">
                <div className="text-6xl md:text-7xl font-black text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">95%</div>
                <div className="text-lg md:text-xl text-zinc-300 font-medium">Đạt mục tiêu</div>
              </div>
              <div className="group p-8 rounded-2xl hover:bg-zinc-800/30 transition-all duration-300">
                <div className="text-6xl md:text-7xl font-black text-pink-500 mb-4 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-lg md:text-xl text-zinc-300 font-medium">Hỗ trợ AI</div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Final CTA */}
        <section className="relative py-24 px-6">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/20 to-transparent" />
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Sẵn sàng đổi mới hành trình?
              </h2>
              <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed">
                Tham gia cùng hàng ngàn gymer đã thay đổi cuộc sống với TronFit AI
              </p>
              <div className="pt-4">
                <button className="group px-12 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-xl font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 relative overflow-hidden text-zinc-100">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">Đăng ký ngay - miễn phí!</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Color Demo */}
        <section>
          {/* <ColorDemo /> */}
        </section>
      </>
    );
}
