
import React, { useState } from 'react';
import { 
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

interface ExperimentReportProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  activeModule: string;
}

const ExperimentReport = ({ open, onOpenChange, activeModule }: ExperimentReportProps) => {
  const [generatingPdf, setGeneratingPdf] = useState(false);
  
  const handleGenerateReport = () => {
    setGeneratingPdf(true);
    
    // 模拟生成报告的过程
    setTimeout(() => {
      setGeneratingPdf(false);
      toast({
        title: "报告已生成",
        description: "您的实验报告已成功生成，可以在下方查看或下载。",
      });
    }, 2000);
  };
  
  // 计算各模块的完成进度
  const getModuleProgress = (module: string) => {
    switch (module) {
      case 'establishment':
        return 80;
      case 'operation':
        return activeModule === 'operation' ? 40 : 0;
      case 'monetization':
        return activeModule === 'monetization' ? 30 : 0;
      case 'management':
        return activeModule === 'management' ? 20 : 0;
      case 'expansion':
        return activeModule === 'expansion' ? 10 : 0;
      default:
        return 0;
    }
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="h-[85vh]">
        <DrawerHeader className="text-center">
          <DrawerTitle>实验报告</DrawerTitle>
          <DrawerDescription>
            查看您的学习进度和实验报告
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4 overflow-y-auto flex-1">
          <Tabs defaultValue="progress">
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="progress">学习进度</TabsTrigger>
              <TabsTrigger value="report">实验报告</TabsTrigger>
            </TabsList>
            <TabsContent value="progress" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">总体进度</CardTitle>
                  <CardDescription>
                    当前完成: {Math.max(20, getModuleProgress('establishment') / 5)}%
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={Math.max(20, getModuleProgress('establishment') / 5)} className="h-2" />
                </CardContent>
              </Card>
              
              <div className="space-y-3">
                <h3 className="font-medium">各模块进度</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>社群建立</span>
                      <span>{getModuleProgress('establishment')}%</span>
                    </div>
                    <Progress value={getModuleProgress('establishment')} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>社群经营</span>
                      <span>{getModuleProgress('operation')}%</span>
                    </div>
                    <Progress value={getModuleProgress('operation')} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>社群变现</span>
                      <span>{getModuleProgress('monetization')}%</span>
                    </div>
                    <Progress value={getModuleProgress('monetization')} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>社群管理</span>
                      <span>{getModuleProgress('management')}%</span>
                    </div>
                    <Progress value={getModuleProgress('management')} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>社群拓展</span>
                      <span>{getModuleProgress('expansion')}%</span>
                    </div>
                    <Progress value={getModuleProgress('expansion')} className="h-2" />
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="report" className="space-y-4">
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">实验报告生成</CardTitle>
                    <CardDescription>
                      系统将根据您的实验数据自动生成报告
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm">
                      报告将包含以下内容：
                    </p>
                    <ul className="text-sm list-disc list-inside space-y-1">
                      <li>各模块学习情况统计</li>
                      <li>社群运营方案设计</li>
                      <li>关键决策点分析</li>
                      <li>学习收获与反思</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      onClick={handleGenerateReport} 
                      disabled={generatingPdf}
                      className="bg-guizhou-teal hover:bg-guizhou-teal/90 w-full"
                    >
                      {generatingPdf ? "正在生成..." : "生成实验报告"}
                    </Button>
                  </CardFooter>
                </Card>
                
                {/* 这里可以显示已生成的报告列表 */}
                <div className="bg-guizhou-gray p-4 rounded-lg">
                  <h3 className="font-medium mb-2">历史报告</h3>
                  <p className="text-sm text-muted-foreground">
                    暂无历史报告记录
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">关闭</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ExperimentReport;
