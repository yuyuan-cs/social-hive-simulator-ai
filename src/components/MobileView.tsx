
import React from 'react';
import { Home, Users, MessageCircle, BarChartBig, Settings, Folder, BookOpen, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

interface MobileViewProps {
  activeModule: string;
  setActiveModule: (module: string) => void;
}

const MobileView = ({ activeModule, setActiveModule }: MobileViewProps) => {
  // Simplified mobile content
  const renderMobileContent = () => {
    switch (activeModule) {
      case 'home':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-center">社群运营虚拟仿真实验平台</h2>
            <p className="text-sm text-center text-muted-foreground">通过实践学习现代社群运营的全生命周期</p>
            
            <div className="bg-guizhou-green/10 p-4 rounded-lg">
              <p className="text-sm">欢迎来到社群运营虚拟仿真实验平台！在这里，您将系统地学习社群运营的全生命周期。</p>
            </div>
            
            <div className="grid grid-cols-2 gap-3 my-4">
              <Card>
                <CardContent className="p-3 flex flex-col items-center text-center">
                  <div className="bg-guizhou-green/50 p-2 rounded-full mb-2">
                    <Users className="text-guizhou-teal h-4 w-4" />
                  </div>
                  <p className="text-xs font-medium">技能学习</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-3 flex flex-col items-center text-center">
                  <div className="bg-guizhou-blue/50 p-2 rounded-full mb-2">
                    <MessageCircle className="text-guizhou-teal h-4 w-4" />
                  </div>
                  <p className="text-xs font-medium">实训案例</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-3">
              <Button 
                className="w-full bg-guizhou-teal hover:bg-guizhou-teal/90" 
                onClick={() => setActiveModule('establishment')}
              >
                开始实验
              </Button>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="flex-1 text-xs h-8"
                  onClick={() => {
                    toast({
                      title: "实验说明",
                      description: "实验说明功能在移动端开发中",
                    });
                  }}
                >
                  <BookOpen className="h-3 w-3 mr-1" />
                  实验说明
                </Button>
                <Button 
                  variant="outline"
                  className="flex-1 text-xs h-8"
                  onClick={() => {
                    toast({
                      title: "实验报告",
                      description: "实验报告功能在移动端开发中",
                    });
                  }}
                >
                  <FileText className="h-3 w-3 mr-1" />
                  查看报告
                </Button>
              </div>
            </div>
          </div>
        );
      case 'establishment':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">社群建立</h2>
            <p className="text-sm text-muted-foreground">学习如何正确定位和建立社群</p>
            <div className="bg-guizhou-green/10 p-4 rounded-lg">
              <p className="text-sm">社群建立是社群运营的第一步，包括定位诊断、规则设计等步骤。</p>
            </div>
            
            <Card className="border-guizhou-teal/30">
              <CardContent className="p-4 space-y-3">
                <h3 className="font-medium text-sm">当前任务</h3>
                <ol className="list-decimal list-inside text-xs space-y-1">
                  <li>确定社群定位</li>
                  <li>设计社群规则</li>
                  <li>创建引导性问题</li>
                </ol>
                <Button 
                  className="w-full text-xs h-8 bg-guizhou-teal hover:bg-guizhou-teal/90"
                  onClick={() => {
                    toast({
                      title: "任务进行中",
                      description: "社群建立任务正在进行中",
                    });
                  }}
                >
                  继续任务
                </Button>
              </CardContent>
            </Card>
          </div>
        );
      case 'operation':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">社群经营</h2>
            <p className="text-sm text-muted-foreground">了解如何维护和发展社群</p>
            
            <div className="grid grid-cols-1 gap-3">
              <Card>
                <CardContent className="p-3">
                  <h3 className="text-sm font-medium">引流拉新</h3>
                  <p className="text-xs text-muted-foreground">学习多种社群引流方式</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-3">
                  <h3 className="text-sm font-medium">促进活跃与留存</h3>
                  <p className="text-xs text-muted-foreground">掌握用户分层运营方法</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-3">
                  <h3 className="text-sm font-medium">日常运营</h3>
                  <p className="text-xs text-muted-foreground">制定内容日历，管理社群互动</p>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case 'monetization':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">社群变现</h2>
            <p className="text-sm text-muted-foreground">探索社群商业价值实现</p>
            
            <div className="grid grid-cols-1 gap-3">
              <Card>
                <CardContent className="p-3">
                  <h3 className="text-sm font-medium">变现模式测试</h3>
                  <p className="text-xs text-muted-foreground">测试不同变现模式的效果</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-3">
                  <h3 className="text-sm font-medium">定价策略</h3>
                  <p className="text-xs text-muted-foreground">为产品或服务制定合理价格</p>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case 'management':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">社群管理</h2>
            <p className="text-sm text-muted-foreground">学习社群规范化管理方法</p>
            
            <div className="grid grid-cols-1 gap-3">
              <Card>
                <CardContent className="p-3">
                  <h3 className="text-sm font-medium">数据驱动决策</h3>
                  <p className="text-xs text-muted-foreground">通过核心指标分析社群状况</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-3">
                  <h3 className="text-sm font-medium">风险管理</h3>
                  <p className="text-xs text-muted-foreground">学习舆情危机处理和合规风险防范</p>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case 'expansion':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">社群拓展</h2>
            <p className="text-sm text-muted-foreground">了解社群扩展与持续发展</p>
            
            <div className="grid grid-cols-1 gap-3">
              <Card>
                <CardContent className="p-3">
                  <h3 className="text-sm font-medium">线下活动策划</h3>
                  <p className="text-xs text-muted-foreground">学习如何策划线下活动</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-3">
                  <h3 className="text-sm font-medium">模式复制与迭代</h3>
                  <p className="text-xs text-muted-foreground">将成功模式复制到新领域</p>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      default:
        return <div>内容加载中...</div>;
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Phone Frame */}
      <div className="relative h-full w-full mx-auto flex flex-col">
        {/* Phone Top Bar */}
        <div className="bg-black w-full h-7 rounded-t-2xl flex items-center justify-center">
          <div className="bg-gray-800 w-24 h-5 rounded-full flex items-center justify-center">
            <div className="bg-gray-900 w-5 h-5 rounded-full"></div>
          </div>
        </div>
        
        {/* Phone Screen */}
        <div className="flex-1 border-x-8 border-black bg-white overflow-hidden flex flex-col">
          {/* Phone Status Bar */}
          <div className="h-6 bg-black text-white flex items-center justify-between px-4">
            <div className="text-[10px]">10:25</div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-white/80"></div>
              <div className="w-3 h-3 rounded-full bg-white/80"></div>
              <div className="w-3 h-3 rounded-full bg-white/80"></div>
            </div>
          </div>
          
          {/* Mobile Content */}
          <div className="flex-1 p-4 overflow-y-auto">
            {renderMobileContent()}
          </div>
          
          {/* Mobile Navigation Bar */}
          <div className="border-t grid grid-cols-5 bg-white">
            <button 
              className={`p-2 flex flex-col items-center justify-center text-xs ${activeModule === 'home' ? 'text-guizhou-teal' : 'text-gray-500'}`}
              onClick={() => setActiveModule('home')}
            >
              <Home size={18} />
              <span>主页</span>
            </button>
            <button 
              className={`p-2 flex flex-col items-center justify-center text-xs ${activeModule === 'establishment' ? 'text-guizhou-teal' : 'text-gray-500'}`}
              onClick={() => setActiveModule('establishment')}
            >
              <Users size={18} />
              <span>建立</span>
            </button>
            <button 
              className={`p-2 flex flex-col items-center justify-center text-xs ${activeModule === 'operation' ? 'text-guizhou-teal' : 'text-gray-500'}`}
              onClick={() => setActiveModule('operation')}
            >
              <MessageCircle size={18} />
              <span>经营</span>
            </button>
            <button 
              className={`p-2 flex flex-col items-center justify-center text-xs ${activeModule === 'monetization' ? 'text-guizhou-teal' : 'text-gray-500'}`}
              onClick={() => setActiveModule('monetization')}
            >
              <BarChartBig size={18} />
              <span>变现</span>
            </button>
            <button 
              className={`p-2 flex flex-col items-center justify-center text-xs ${activeModule === 'management' || activeModule === 'expansion' ? 'text-guizhou-teal' : 'text-gray-500'}`}
              onClick={() => setActiveModule(activeModule === 'management' ? 'expansion' : 'management')}
            >
              {activeModule === 'management' || activeModule === 'expansion' ? <Folder size={18} /> : <Settings size={18} />}
              <span>{activeModule === 'management' ? '拓展' : '管理'}</span>
            </button>
          </div>
        </div>
        
        {/* Phone Bottom Bar */}
        <div className="bg-black w-full h-10 rounded-b-2xl flex items-center justify-center">
          <div className="bg-gray-800 w-1/3 h-1.5 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default MobileView;
