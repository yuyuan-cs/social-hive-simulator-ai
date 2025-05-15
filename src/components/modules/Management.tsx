
import React from 'react';
import AiAssistantMessage from '../AiAssistantMessage';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Management = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold">社群管理</h1>
      
      <AiAssistantMessage 
        message="在社群管理模块中，我们将学习如何基于数据做出决策，管理社群风险，以及进行高效团队协作。"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">数据驱动决策</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">通过核心指标分析社群状况，进行归因分析</p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-guizhou-teal">开发中...</p>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">风险管理</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">模拟处理舆情危机，学习合规风险防范</p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-guizhou-teal">开发中...</p>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">团队协作</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">学习社群团队分工与协作流程</p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-guizhou-teal">开发中...</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Management;
