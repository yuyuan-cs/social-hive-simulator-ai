
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import AiAssistantMessage from '../AiAssistantMessage';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const Establishment = () => {
  const [step, setStep] = useState<number>(1);
  const [communityValue, setCommunityValue] = useState<string>("");
  const [entryQuestions, setEntryQuestions] = useState<string[]>(["", "", ""]);
  const [platformType, setPlatformType] = useState<string>("wechat");

  const handleQuestionChange = (index: number, value: string) => {
    const newQuestions = [...entryQuestions];
    newQuestions[index] = value;
    setEntryQuestions(newQuestions);
  };

  const handleAddQuestion = () => {
    setEntryQuestions([...entryQuestions, ""]);
  };

  const handleRemoveQuestion = (index: number) => {
    const newQuestions = [...entryQuestions];
    newQuestions.splice(index, 1);
    setEntryQuestions(newQuestions);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold">社群建立</h1>
      
      {step === 1 && (
        <>
          <AiAssistantMessage 
            message="让我们开始建立一个社群。首先，请思考您的社群将为成员提供什么核心价值？这将有助于我们为社群制定明确的定位。"
          />
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">定位诊断</CardTitle>
            </CardHeader>
            <CardContent>
              <Label htmlFor="community-value">社群核心价值</Label>
              <Textarea 
                id="community-value"
                placeholder="例如：为贵州茶爱好者提供交流平台，分享茶文化知识，推荐优质茶品，组织品茶活动..." 
                className="mt-2"
                value={communityValue}
                onChange={(e) => setCommunityValue(e.target.value)}
              />
              <Button 
                className="mt-4 bg-guizhou-teal hover:bg-guizhou-teal/90"
                onClick={() => setStep(2)}
                disabled={communityValue.length < 10}
              >
                下一步
              </Button>
            </CardContent>
          </Card>
        </>
      )}

      {step === 2 && (
        <>
          <AiAssistantMessage 
            message="很好！现在我们需要设计入群审核问题。这些问题可以帮助筛选合适的成员，确保社群成员质量，并引导新成员认同社群的价值观。建议设置2-3个简短的问题。"
          />
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">规则设计</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {entryQuestions.map((question, index) => (
                  <div key={index} className="flex gap-2">
                    <div className="flex-1">
                      <Label htmlFor={`question-${index}`}>审核问题 {index + 1}</Label>
                      <Input 
                        id={`question-${index}`}
                        placeholder="请输入审核问题"
                        className="mt-1"
                        value={question}
                        onChange={(e) => handleQuestionChange(index, e.target.value)}
                      />
                    </div>
                    {entryQuestions.length > 1 && (
                      <Button 
                        variant="outline" 
                        size="icon"
                        className="mt-7"
                        onClick={() => handleRemoveQuestion(index)}
                      >
                        <x className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
                
                {entryQuestions.length < 5 && (
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={handleAddQuestion}
                  >
                    添加问题
                  </Button>
                )}
              </div>
              
              <div className="flex justify-between mt-6">
                <Button 
                  variant="outline"
                  onClick={() => setStep(1)}
                >
                  上一步
                </Button>
                <Button 
                  className="bg-guizhou-teal hover:bg-guizhou-teal/90"
                  onClick={() => setStep(3)}
                  disabled={entryQuestions.filter(q => q.length > 3).length < 1}
                >
                  下一步
                </Button>
              </div>
            </CardContent>
          </Card>
        </>
      )}

      {step === 3 && (
        <>
          <AiAssistantMessage 
            message="接下来，请选择您的社群平台。不同平台适合不同类型的社群运营需求。"
          />
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">平台选择</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup 
                value={platformType}
                onValueChange={setPlatformType}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="wechat" id="wechat" />
                  <Label htmlFor="wechat">微信群（适合私密交流，最多500人）</Label>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <RadioGroupItem value="enterprise-wechat" id="enterprise-wechat" />
                  <Label htmlFor="enterprise-wechat">企业微信（适合商业社群，可扩展性强）</Label>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <RadioGroupItem value="qq-group" id="qq-group" />
                  <Label htmlFor="qq-group">QQ群（适合多媒体分享，适合年轻群体）</Label>
                </div>
              </RadioGroup>
              
              <div className="flex justify-between mt-6">
                <Button 
                  variant="outline"
                  onClick={() => setStep(2)}
                >
                  上一步
                </Button>
                <Button 
                  className="bg-guizhou-teal hover:bg-guizhou-teal/90"
                  onClick={() => setStep(4)}
                >
                  下一步
                </Button>
              </div>
            </CardContent>
          </Card>
        </>
      )}

      {step === 4 && (
        <>
          <AiAssistantMessage 
            message="太好了！现在我们已经完成了社群的基本设置。系统已经生成了《社群定位说明书》，您可以在下方查看。接下来，您可以继续探索社群经营模块，学习如何增长和活跃您的社群。"
          />
          
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="text-lg">社群定位说明书</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-guizhou-teal">社群核心价值</h3>
                  <p className="mt-1 text-sm">{communityValue || "为贵州茶爱好者提供交流平台，分享茶文化知识，推荐优质茶品，组织品茶活动"}</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-guizhou-teal">用户画像</h3>
                  <p className="mt-1 text-sm">贵州本地及全国茶文化爱好者，25-45岁，中高收入，对生活品质有要求，注重健康，喜欢社交分享。</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-guizhou-teal">价值主张</h3>
                  <p className="mt-1 text-sm">一杯茶，连接人与自然；一群人，传承千年茶道。在这里，您可以接触到贵州最道地的茶文化，认识志同道合的茶友，参与线上线下茶会，获得专业品鉴指导。</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-guizhou-teal">入群审核问题</h3>
                  <ul className="mt-1 space-y-1">
                    {entryQuestions.map((question, index) => (
                      question ? <li key={index} className="text-sm">• {question}</li> : null
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-guizhou-teal">社群平台</h3>
                  <p className="mt-1 text-sm">
                    {platformType === "wechat" ? "微信群：适合私密交流，便于日常互动" : 
                     platformType === "enterprise-wechat" ? "企业微信：提供更专业的社群管理工具，适合商业运营" : 
                     "QQ群：拥有丰富的多媒体功能，适合内容资料分享"}
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center mt-6">
                <Button className="bg-guizhou-teal hover:bg-guizhou-teal/90">
                  进入社群经营模块
                </Button>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default Establishment;
