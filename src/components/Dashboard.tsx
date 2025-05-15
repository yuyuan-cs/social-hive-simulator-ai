
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import NavigationMenu from './NavigationMenu';
import Home from './modules/Home';
import Establishment from './modules/Establishment';
import Operation from './modules/Operation';
import Monetization from './modules/Monetization';
import Management from './modules/Management';
import Expansion from './modules/Expansion';
import { Phone, BookOpen, FileText } from 'lucide-react';
import MobileView from './MobileView';
import ExperimentGuide from './ExperimentGuide';
import ExperimentReport from './ExperimentReport';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Dashboard = () => {
  const [activeModule, setActiveModule] = useState<string>('home');
  const [showGuide, setShowGuide] = useState<boolean>(false);
  const [showReport, setShowReport] = useState<boolean>(false);

  const renderActiveModule = () => {
    switch (activeModule) {
      case 'home':
        return <Home onStartEstablishment={() => setActiveModule('establishment')} />;
      case 'establishment':
        return <Establishment />;
      case 'operation':
        return <Operation />;
      case 'monetization':
        return <Monetization />;
      case 'management':
        return <Management />;
      case 'expansion':
        return <Expansion />;
      default:
        return <Home onStartEstablishment={() => setActiveModule('establishment')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b p-4">
        <div className="container flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-guizhou-teal">社群运营虚拟仿真实验</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowGuide(true)}
              className="flex items-center gap-1"
            >
              <BookOpen className="h-4 w-4" />
              实验说明
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowReport(true)}
              className="flex items-center gap-1"
            >
              <FileText className="h-4 w-4" />
              查看报告
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Phone className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[350px] p-0">
                <MobileView activeModule={activeModule} setActiveModule={setActiveModule} />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 container py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="col-span-3">
            <div className="sticky top-6">
              <div className="bg-white rounded-lg border p-4">
                <NavigationMenu 
                  activeModule={activeModule} 
                  setActiveModule={setActiveModule} 
                />
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-span-9">
            {renderActiveModule()}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-guizhou-teal text-white p-4">
        <div className="container text-center text-sm">
          © 2025 社群运营虚拟仿真实验平台
        </div>
      </footer>

      {/* Modals/Drawers */}
      <ExperimentGuide 
        open={showGuide} 
        onOpenChange={setShowGuide}
      />
      
      <ExperimentReport 
        open={showReport} 
        onOpenChange={setShowReport}
        activeModule={activeModule}
      />
    </div>
  );
};

export default Dashboard;
