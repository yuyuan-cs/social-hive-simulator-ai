
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, MessageCircle, BarChartBig } from "lucide-react";
import AiAssistantMessage from '../AiAssistantMessage';

interface HomeProps {
  onStartEstablishment: () => void;
}

const Home = ({ onStartEstablishment }: HomeProps) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">社群运营虚拟仿真实验平台</h1>
        <p className="text-muted-foreground">通过实践学习现代社群运营的全生命周期</p>
      </div>
      
      <AiAssistantMessage 
        message="欢迎来到社群运营虚拟仿真实验平台！在这里，您将系统地学习社群运营的全生命周期，包括：社群建立、社群经营、社群变现、社群管理和社群拓展。请点击'开始实验'，从社群建立阶段开始您的学习之旅。"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 flex flex-col items-center text-center">
            <div className="bg-guizhou-green/50 p-4 rounded-full mb-4">
              <Users className="text-guizhou-teal h-6 w-6" />
            </div>
            <h3 className="font-medium mb-2">技能操作学习</h3>
            <p className="text-sm text-muted-foreground">掌握社群运营的基本技能和核心方法论</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 flex flex-col items-center text-center">
            <div className="bg-guizhou-blue/50 p-4 rounded-full mb-4">
              <MessageCircle className="text-guizhou-teal h-6 w-6" />
            </div>
            <h3 className="font-medium mb-2">综合实训案例</h3>
            <p className="text-sm text-muted-foreground">体验贵州特色产品社群运营实战</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 flex flex-col items-center text-center">
            <div className="bg-guizhou-gray p-4 rounded-full mb-4">
              <BarChartBig className="text-guizhou-teal h-6 w-6" />
            </div>
            <h3 className="font-medium mb-2">数据驱动决策</h3>
            <p className="text-sm text-muted-foreground">学习通过数据分析指导社群运营策略</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="flex justify-center">
        <Button 
          className="bg-guizhou-teal hover:bg-guizhou-teal/90" 
          size="lg"
          onClick={onStartEstablishment}
        >
          开始实验
        </Button>
      </div>
    </div>
  );
};

export default Home;
