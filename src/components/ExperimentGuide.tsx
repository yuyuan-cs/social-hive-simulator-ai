
import React from 'react';
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

interface ExperimentGuideProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ExperimentGuide = ({ open, onOpenChange }: ExperimentGuideProps) => {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="h-[85vh]">
        <DrawerHeader className="text-center">
          <DrawerTitle>实验说明</DrawerTitle>
          <DrawerDescription>
            社群运营虚拟仿真实验平台使用指南
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4 overflow-y-auto flex-1">
          <Tabs defaultValue="overview">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="overview">实验概述</TabsTrigger>
              <TabsTrigger value="modules">模块介绍</TabsTrigger>
              <TabsTrigger value="assessment">考核标准</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="bg-guizhou-green/10 p-4 rounded-lg">
                <h3 className="font-medium mb-2">实验目标</h3>
                <p className="text-sm">
                  通过本实验，学生将掌握社群运营的全生命周期，包括社群的建立、经营、变现、管理和拓展，
                  能够应用所学知识解决实际社群运营问题。
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">实验流程</h3>
                <ol className="text-sm space-y-2 list-decimal list-inside">
                  <li>学习社群运营基础知识</li>
                  <li>完成社群建立模块的实践任务</li>
                  <li>进行社群经营模块的模拟操作</li>
                  <li>尝试社群变现的不同策略</li>
                  <li>学习社群管理的规范化方法</li>
                  <li>探索社群拓展的可能性</li>
                  <li>提交实验报告</li>
                </ol>
              </div>
            </TabsContent>
            <TabsContent value="modules" className="space-y-4">
              <div className="space-y-3">
                <div className="border-l-4 border-guizhou-teal pl-3">
                  <h3 className="font-medium">社群建立</h3>
                  <p className="text-sm text-muted-foreground">学习社群定位、目标用户分析和规则设计</p>
                </div>
                <div className="border-l-4 border-guizhou-teal pl-3">
                  <h3 className="font-medium">社群经营</h3>
                  <p className="text-sm text-muted-foreground">掌握引流拉新、活跃度维护和内容运营</p>
                </div>
                <div className="border-l-4 border-guizhou-teal pl-3">
                  <h3 className="font-medium">社群变现</h3>
                  <p className="text-sm text-muted-foreground">学习不同变现模式及其适用场景</p>
                </div>
                <div className="border-l-4 border-guizhou-teal pl-3">
                  <h3 className="font-medium">社群管理</h3>
                  <p className="text-sm text-muted-foreground">掌握数据驱动决策和风险管理方法</p>
                </div>
                <div className="border-l-4 border-guizhou-teal pl-3">
                  <h3 className="font-medium">社群拓展</h3>
                  <p className="text-sm text-muted-foreground">学习线下活动策划和模式复制</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="assessment" className="space-y-4">
              <div className="space-y-3">
                <h3 className="font-medium mb-2">考核维度</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-guizhou-blue/20 p-3 rounded-lg">
                    <h4 className="text-sm font-medium">实验参与度</h4>
                    <p className="text-xs text-muted-foreground">占总成绩30%</p>
                  </div>
                  <div className="bg-guizhou-blue/20 p-3 rounded-lg">
                    <h4 className="text-sm font-medium">任务完成质量</h4>
                    <p className="text-xs text-muted-foreground">占总成绩40%</p>
                  </div>
                  <div className="bg-guizhou-blue/20 p-3 rounded-lg">
                    <h4 className="text-sm font-medium">实验报告</h4>
                    <p className="text-xs text-muted-foreground">占总成绩20%</p>
                  </div>
                  <div className="bg-guizhou-blue/20 p-3 rounded-lg">
                    <h4 className="text-sm font-medium">创新思考</h4>
                    <p className="text-xs text-muted-foreground">占总成绩10%</p>
                  </div>
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

export default ExperimentGuide;
