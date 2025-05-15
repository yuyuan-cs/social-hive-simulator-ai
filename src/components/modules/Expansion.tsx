
import React from 'react';
import AiAssistantMessage from '../AiAssistantMessage';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Expansion = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold">社群拓展</h1>
      
      <AiAssistantMessage 
        message="在社群拓展模块，我们将学习如何通过线下活动加深用户连接，以及如何将成功的社群模式复制到新的领域或地域。"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">线下活动策划</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">学习如何策划线下活动，选择合适场地，设计活动流程</p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-guizhou-teal">开发中...</p>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">模式复制与迭代</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">学习如何将成功的社群模式复制到新的领域或地域</p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-guizhou-teal">开发中...</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Expansion;
