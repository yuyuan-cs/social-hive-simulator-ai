import React, { useState } from 'react';
import { Home, Users, MessageCircle, BarChartBig, Settings, Folder, BookOpen, FileText, Video, Image, Heart, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface MobileViewProps {
  activeModule: string;
  setActiveModule: (module: string) => void;
}

const MobileView = ({ activeModule, setActiveModule }: MobileViewProps) => {
  const [activeSocialTab, setActiveSocialTab] = useState<string>("wechat-group");
  
  // Render WeChat Group content
  const renderWeChatGroup = () => {
    return (
      <div className="space-y-4">
        <div className="bg-[#EDEDED] p-3 rounded-md mb-2">
          <div className="flex items-center justify-between mb-2">
            <div className="font-bold">运营学习交流群</div>
            <div className="text-xs text-gray-500">128人</div>
          </div>
          <div className="text-xs text-gray-500">群公告：欢迎加入社群运营学习交流群，请遵守群规则，禁止发广告</div>
        </div>
        
        <div className="space-y-4">
          {/* Message 1 */}
          <div className="flex gap-2">
            <Avatar className="h-8 w-8">
              <img src="https://source.unsplash.com/random/100x100/?portrait,woman" alt="User" />
            </Avatar>
            <div className="flex-1">
              <div className="text-xs font-medium">运营小助手</div>
              <div className="bg-white p-2 rounded-md text-sm mt-1">
                大家好，今天我们将讨论社群内容设计的核心要素，请大家准备好笔记。
              </div>
            </div>
          </div>
          
          {/* Message 2 */}
          <div className="flex gap-2">
            <Avatar className="h-8 w-8">
              <img src="https://source.unsplash.com/random/100x100/?portrait,man" alt="User" />
            </Avatar>
            <div className="flex-1">
              <div className="text-xs font-medium">李同学</div>
              <div className="bg-white p-2 rounded-md text-sm mt-1">
                请问大家有没有好的社群活动策划案例可以分享？
              </div>
            </div>
          </div>
          
          {/* Message 3 */}
          <div className="flex gap-2">
            <Avatar className="h-8 w-8">
              <img src="https://source.unsplash.com/random/100x100/?portrait,girl" alt="User" />
            </Avatar>
            <div className="flex-1">
              <div className="text-xs font-medium">王老师</div>
              <div className="bg-white p-2 rounded-md text-sm mt-1">
                我们可以看看这篇文章，关于社群活动设计的框架思路
                <div className="mt-2 border border-gray-200 p-2 rounded-md bg-gray-50">
                  <div className="text-xs font-medium text-blue-500">《高质量社群活动的10个底层逻辑》</div>
                  <div className="text-xs text-gray-500 mt-1">mp.weixin.qq.com</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Message 4 */}
          <div className="flex justify-end gap-2">
            <div className="flex-1 text-right">
              <div className="text-xs font-medium text-right">我</div>
              <div className="bg-green-500 text-white p-2 rounded-md text-sm mt-1 inline-block">
                谢谢分享，我马上看看
              </div>
            </div>
            <Avatar className="h-8 w-8">
              <img src="https://source.unsplash.com/random/100x100/?portrait,asian" alt="User" />
            </Avatar>
          </div>
        </div>
        
        <div className="fixed bottom-16 left-0 right-0 bg-[#F5F5F7] p-2 border-t flex items-center gap-2 px-4">
          <input 
            type="text" 
            placeholder="输入消息..." 
            className="flex-1 bg-white rounded-full text-sm py-1 px-3 border"
          />
          <Button size="sm" variant="ghost" className="rounded-full p-2 h-8 w-8">
            <Image className="h-5 w-5" />
          </Button>
        </div>
      </div>
    );
  };
  
  // Render WeChat Moments content
  const renderWeChatMoments = () => {
    return (
      <div className="space-y-6">
        {/* Moments Header */}
        <div className="relative h-32 bg-[#333] mb-12">
          <img 
            src="https://source.unsplash.com/random/800x200/?landscape,mountain" 
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute -bottom-10 right-4 flex items-end gap-2">
            <div className="text-white text-right text-sm">社群小助手</div>
            <Avatar className="h-16 w-16 border-4 border-white">
              <img src="https://source.unsplash.com/random/100x100/?portrait,asian" alt="User" />
            </Avatar>
          </div>
        </div>
        
        {/* Post 1 */}
        <div className="border-b pb-4">
          <div className="flex gap-2">
            <Avatar className="h-10 w-10">
              <img src="https://source.unsplash.com/random/100x100/?portrait,woman" alt="User" />
            </Avatar>
            <div className="flex-1">
              <div className="font-medium text-sm">运营专家张思</div>
              <div className="text-sm mt-1">今天给大家分享一个案例，如何通过社群裂变实现3天涨粉1000+</div>
              <div className="mt-2 grid grid-cols-3 gap-1">
                <img 
                  src="https://source.unsplash.com/random/300x300/?marketing" 
                  alt="Post"
                  className="rounded-md aspect-square object-cover"
                />
                <img 
                  src="https://source.unsplash.com/random/300x300/?chart" 
                  alt="Post"
                  className="rounded-md aspect-square object-cover"
                />
                <img 
                  src="https://source.unsplash.com/random/300x300/?graph" 
                  alt="Post"
                  className="rounded-md aspect-square object-cover"
                />
              </div>
              <div className="mt-2 flex justify-between items-center">
                <div className="text-xs text-gray-500">2小时前</div>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1 text-gray-500">
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-xs">12</span>
                  </button>
                  <button className="flex items-center gap-1 text-gray-500">
                    <Heart className="h-4 w-4" />
                    <span className="text-xs">45</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Post 2 */}
        <div className="border-b pb-4">
          <div className="flex gap-2">
            <Avatar className="h-10 w-10">
              <img src="https://source.unsplash.com/random/100x100/?portrait,man" alt="User" />
            </Avatar>
            <div className="flex-1">
              <div className="font-medium text-sm">陈老师</div>
              <div className="text-sm mt-1">分享一张今天社群运营研讨会的合照，感谢大家的参与！</div>
              <div className="mt-2">
                <img 
                  src="https://source.unsplash.com/random/600x400/?conference" 
                  alt="Post"
                  className="rounded-md w-full object-cover"
                />
              </div>
              <div className="mt-2 flex justify-between items-center">
                <div className="text-xs text-gray-500">昨天</div>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1 text-gray-500">
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-xs">8</span>
                  </button>
                  <button className="flex items-center gap-1 text-gray-500">
                    <Heart className="h-4 w-4" />
                    <span className="text-xs">36</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  // Render Xiaohongshu content
  const renderXiaohongshu = () => {
    return (
      <div>
        <div className="p-3 bg-white sticky top-0 z-10 border-b flex justify-between">
          <div className="font-medium">发现</div>
          <div className="text-sm text-gray-500">社群运营</div>
        </div>
        
        <div className="grid grid-cols-2 gap-3 p-2">
          {/* RED Post 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <img 
              src="https://source.unsplash.com/random/400x400/?design,community" 
              alt="Post"
              className="w-full aspect-square object-cover"
            />
            <div className="p-2">
              <div className="text-sm font-medium line-clamp-2">3个月从0到1万粉，我的社群运营心得分享</div>
              <div className="flex items-center gap-1 mt-2">
                <Avatar className="h-5 w-5">
                  <img src="https://source.unsplash.com/random/100x100/?portrait,girl" alt="User" />
                </Avatar>
                <div className="text-xs">社群运营小能手</div>
                <Heart className="h-3 w-3 text-gray-500 ml-auto" />
                <div className="text-xs text-gray-500">217</div>
              </div>
            </div>
          </div>
          
          {/* RED Post 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <img 
              src="https://source.unsplash.com/random/400x400/?marketing,social" 
              alt="Post"
              className="w-full aspect-square object-cover"
            />
            <div className="p-2">
              <div className="text-sm font-medium line-clamp-2">社群日历管理模板分享，帮你高效运营</div>
              <div className="flex items-center gap-1 mt-2">
                <Avatar className="h-5 w-5">
                  <img src="https://source.unsplash.com/random/100x100/?portrait,woman" alt="User" />
                </Avatar>
                <div className="text-xs">效率研究所</div>
                <Heart className="h-3 w-3 text-gray-500 ml-auto" />
                <div className="text-xs text-gray-500">184</div>
              </div>
            </div>
          </div>
          
          {/* RED Post 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <img 
              src="https://source.unsplash.com/random/400x400/?communication" 
              alt="Post"
              className="w-full aspect-square object-cover"
            />
            <div className="p-2">
              <div className="text-sm font-medium line-clamp-2">社群破冰必备！10个高互动小游戏</div>
              <div className="flex items-center gap-1 mt-2">
                <Avatar className="h-5 w-5">
                  <img src="https://source.unsplash.com/random/100x100/?portrait,boy" alt="User" />
                </Avatar>
                <div className="text-xs">玩转社群</div>
                <Heart className="h-3 w-3 text-gray-500 ml-auto" />
                <div className="text-xs text-gray-500">395</div>
              </div>
            </div>
          </div>
          
          {/* RED Post 4 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <img 
              src="https://source.unsplash.com/random/400x400/?business,meeting" 
              alt="Post"
              className="w-full aspect-square object-cover"
            />
            <div className="p-2">
              <div className="text-sm font-medium line-clamp-2">一个月变现10万+的社群是怎么做到的</div>
              <div className="flex items-center gap-1 mt-2">
                <Avatar className="h-5 w-5">
                  <img src="https://source.unsplash.com/random/100x100/?portrait,man" alt="User" />
                </Avatar>
                <div className="text-xs">电商创业者</div>
                <Heart className="h-3 w-3 text-gray-500 ml-auto" />
                <div className="text-xs text-gray-500">682</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  // Render Bilibili content
  const renderBilibili = () => {
    return (
      <div className="bg-[#F4F4F4]">
        <div className="bg-[#FB7299] text-white p-3 sticky top-0 z-10 flex justify-between items-center">
          <div className="font-medium">社群运营学习</div>
          <div>
            <Button variant="ghost" size="sm" className="text-white">
              <Share className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="space-y-3 p-2">
          {/* Bilibili Video 1 */}
          <Card>
            <CardContent className="p-3 space-y-2">
              <div className="relative">
                <img 
                  src="https://source.unsplash.com/random/800x450/?presentation" 
                  alt="Video Thumbnail"
                  className="w-full aspect-video object-cover rounded"
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-1 rounded">
                  12:34
                </div>
                <div className="absolute top-2 left-2 bg-[#FB7299] text-white text-xs px-2 py-0.5 rounded-sm">
                  学习
                </div>
              </div>
              <div className="text-sm font-medium">【干货】社群运营实战技巧合集，从0到1搭建高活跃度社区</div>
              <div className="flex justify-between text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Avatar className="h-4 w-4">
                    <img src="https://source.unsplash.com/random/100x100/?portrait" alt="User" />
                  </Avatar>
                  <span>运营学院</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-0.5">
                    <Video className="h-3 w-3" />
                    10.5万
                  </span>
                  <span className="flex items-center gap-0.5">
                    <MessageCircle className="h-3 w-3" />
                    2835
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Bilibili Video 2 */}
          <Card>
            <CardContent className="p-3 space-y-2">
              <div className="relative">
                <img 
                  src="https://source.unsplash.com/random/800x450/?webinar" 
                  alt="Video Thumbnail"
                  className="w-full aspect-video object-cover rounded"
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-1 rounded">
                  23:47
                </div>
                <div className="absolute top-2 left-2 bg-[#FB7299] text-white text-xs px-2 py-0.5 rounded-sm">
                  经验
                </div>
              </div>
              <div className="text-sm font-medium">6个月涨粉10万，我是如何设计高质量社群内容的</div>
              <div className="flex justify-between text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Avatar className="h-4 w-4">
                    <img src="https://source.unsplash.com/random/100x100/?portrait,woman" alt="User" />
                  </Avatar>
                  <span>新媒体小王</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-0.5">
                    <Video className="h-3 w-3" />
                    7.8万
                  </span>
                  <span className="flex items-center gap-0.5">
                    <MessageCircle className="h-3 w-3" />
                    1642
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Bilibili Video 3 */}
          <Card>
            <CardContent className="p-3 space-y-2">
              <div className="relative">
                <img 
                  src="https://source.unsplash.com/random/800x450/?seminar" 
                  alt="Video Thumbnail"
                  className="w-full aspect-video object-cover rounded"
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-1 rounded">
                  35:22
                </div>
                <div className="absolute top-2 left-2 bg-[#FB7299] text-white text-xs px-2 py-0.5 rounded-sm">
                  实战
                </div>
              </div>
              <div className="text-sm font-medium">直播回放：社群运营月度复盘与数据分析方法</div>
              <div className="flex justify-between text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Avatar className="h-4 w-4">
                    <img src="https://source.unsplash.com/random/100x100/?portrait,man" alt="User" />
                  </Avatar>
                  <span>数据分析师张三</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-0.5">
                    <Video className="h-3 w-3" />
                    5.2万
                  </span>
                  <span className="flex items-center gap-0.5">
                    <MessageCircle className="h-3 w-3" />
                    968
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };
  
  // Render Douyin content
  const renderDouyin = () => {
    return (
      <div className="bg-black h-full text-white relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full aspect-[9/16] relative">
            <img 
              src="https://source.unsplash.com/random/1080x1920/?presentation,people" 
              alt="Video"
              className="w-full h-full object-cover"
            />
            
            {/* Video Controls Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              {/* Top Bar */}
              <div className="flex justify-between items-center">
                <div className="text-sm">关注</div>
                <div className="text-sm">搜索</div>
              </div>
              
              {/* Right Side Actions */}
              <div className="absolute right-3 bottom-20 flex flex-col items-center gap-5">
                <div className="flex flex-col items-center">
                  <Avatar className="h-10 w-10 border-2 border-white">
                    <img src="https://source.unsplash.com/random/100x100/?portrait,girl" alt="Creator" />
                  </Avatar>
                  <button className="bg-[#FE2C55] rounded-full h-5 w-5 flex items-center justify-center mt-2">
                    <span className="text-xs">+</span>
                  </button>
                </div>
                
                <div className="flex flex-col items-center">
                  <button className="flex flex-col items-center">
                    <Heart className="h-8 w-8" />
                    <span className="text-xs mt-1">45.2w</span>
                  </button>
                </div>
                
                <div className="flex flex-col items-center">
                  <button className="flex flex-col items-center">
                    <MessageCircle className="h-8 w-8" />
                    <span className="text-xs mt-1">1.3w</span>
                  </button>
                </div>
                
                <div className="flex flex-col items-center">
                  <button className="flex flex-col items-center">
                    <Share className="h-8 w-8" />
                    <span className="text-xs mt-1">8.5w</span>
                  </button>
                </div>
              </div>
              
              {/* Bottom Content */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-medium">@社群运营指南</span>
                </div>
                <div className="text-sm">
                  如何打造高复购率的私域流量池？3个方法教你提升社群活跃度 #社群运营 #私域流量
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-black bg-opacity-50 px-3 py-1 rounded-full flex items-center gap-1">
                    <Image className="h-3 w-3" />
                    <span className="text-xs">原声：社群运营指南</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render different social media content based on the active tab
  const renderSocialContent = () => {
    switch (activeSocialTab) {
      case 'wechat-group':
        return renderWeChatGroup();
      case 'wechat-moments':
        return renderWeChatMoments();
      case 'xiaohongshu':
        return renderXiaohongshu();
      case 'bilibili':
        return renderBilibili();
      case 'douyin':
        return renderDouyin();
      default:
        return renderWeChatGroup();
    }
  };

  // Render main content based on active module
  const renderContentBasedOnModule = () => {
    if (activeModule === 'home' || activeModule === 'establishment') {
      return (
        <ScrollArea className="h-[calc(100%-120px)]">
          <div className="px-4 py-2">
            <Tabs value={activeSocialTab} onValueChange={setActiveSocialTab} className="w-full">
              <TabsList className="w-full grid grid-cols-5 h-auto p-0 bg-transparent">
                <TabsTrigger 
                  value="wechat-group" 
                  className="text-[10px] py-1 data-[state=active]:bg-guizhou-teal/10"
                >
                  微信群
                </TabsTrigger>
                <TabsTrigger 
                  value="wechat-moments" 
                  className="text-[10px] py-1 data-[state=active]:bg-guizhou-teal/10"
                >
                  朋友圈
                </TabsTrigger>
                <TabsTrigger 
                  value="xiaohongshu" 
                  className="text-[10px] py-1 data-[state=active]:bg-guizhou-teal/10"
                >
                  小红书
                </TabsTrigger>
                <TabsTrigger 
                  value="bilibili" 
                  className="text-[10px] py-1 data-[state=active]:bg-guizhou-teal/10"
                >
                  B站
                </TabsTrigger>
                <TabsTrigger 
                  value="douyin" 
                  className="text-[10px] py-1 data-[state=active]:bg-guizhou-teal/10"
                >
                  抖音
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value={activeSocialTab} className="mt-2">
                {renderSocialContent()}
              </TabsContent>
            </Tabs>
          </div>
        </ScrollArea>
      );
    } else {
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
          {renderContentBasedOnModule()}
          
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
