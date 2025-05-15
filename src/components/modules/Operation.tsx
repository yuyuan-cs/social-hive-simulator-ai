
import React from 'react';
import AiAssistantMessage from '../AiAssistantMessage';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Operation = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold">社群经营</h1>
      
      <AiAssistantMessage 
        message="在社群经营模块，我们将学习如何为社群引流拉新、提高活跃度与留存率，以及进行日常运营管理。"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">引流拉新</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">学习多种社群引流方式，包括朋友圈、线下地推、KOC转发等</p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-guizhou-teal">开发中...</p>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">促进活跃与留存</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">掌握用户分层运营方法，策划吸引人的社群活动</p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-guizhou-teal">开发中...</p>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">日常运营</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">制定内容日历，管理社群互动，建立运营规则</p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-guizhou-teal">开发中...</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Operation;
