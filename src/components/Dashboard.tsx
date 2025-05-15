
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import NavigationMenu from './NavigationMenu';
import Home from './modules/Home';
import Establishment from './modules/Establishment';
import Operation from './modules/Operation';
import Monetization from './modules/Monetization';
import Management from './modules/Management';
import Expansion from './modules/Expansion';
import { Phone } from 'lucide-react';
import MobileView from './MobileView';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Dashboard = () => {
  const [activeModule, setActiveModule] = useState<string>('home');

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
            <Button variant="outline" size="sm">
              实验说明
            </Button>
            <Button variant="outline" size="sm">
              查看报告
            </Button>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline" size="icon">
                  <Phone className="h-4 w-4" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="h-[85vh]">
                <DrawerHeader className="text-center">
                  <DrawerTitle>移动端预览</DrawerTitle>
                  <DrawerDescription>
                    查看在手机上的显示效果
                  </DrawerDescription>
                </DrawerHeader>
                <div className="flex-1 px-4 overflow-y-auto">
                  <MobileView activeModule={activeModule} setActiveModule={setActiveModule} />
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="outline">关闭</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
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
    </div>
  );
};

export default Dashboard;
