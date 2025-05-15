
import React from 'react';
import { Home, Users, MessageCircle, BarChartBig, Settings, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileViewProps {
  activeModule: string;
  setActiveModule: (module: string) => void;
}

const MobileView = ({ activeModule, setActiveModule }: MobileViewProps) => {
  // Simplified mobile content for each module
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
            <Button 
              className="w-full bg-guizhou-teal hover:bg-guizhou-teal/90" 
              onClick={() => setActiveModule('establishment')}
            >
              开始实验
            </Button>
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
          </div>
        );
      case 'operation':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">社群经营</h2>
            <p className="text-sm text-muted-foreground">了解如何维护和发展社群</p>
          </div>
        );
      case 'monetization':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">社群变现</h2>
            <p className="text-sm text-muted-foreground">探索社群商业价值实现</p>
          </div>
        );
      case 'management':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">社群管理</h2>
            <p className="text-sm text-muted-foreground">学习社群规范化管理方法</p>
          </div>
        );
      case 'expansion':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">社群拓展</h2>
            <p className="text-sm text-muted-foreground">了解社群扩展与持续发展</p>
          </div>
        );
      default:
        return <div>内容加载中...</div>;
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Mobile Screen Container */}
      <div className="flex-1 mx-auto w-full max-w-[375px] bg-white rounded-lg border overflow-hidden flex flex-col">
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
    </div>
  );
};

export default MobileView;
