import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const COMPANY_INFO = `
# Vi-3 Technologies Private Limited - Complete Company Information

## Company Details
- **Name**: Vi-3 Technologies Private Limited
- **Registered Office**: No 3, Sadhasivam Avenue, S Kolathur, Kovilambakkam, Chennai – 600117
- **Email**: contact@vi3technologies.com
- **Phone**: +91-7010351330
- **Website**: http://vi3technologies.com


## Who We Are
Vi-3 Technologies Private Limited is a next-generation IT solutions and Startup company specializing in helping businesses thrive in the digital era through secure, scalable, and intelligent technology. We bridge the gap between legacy infrastructure and the future of AI and Quantum Computing, with a relentless focus on Cybersecurity and Operational Excellence.

## Vision & Mission
- **Vision**: To be the most trusted partner for secure, intelligent, and "always-on" enterprise technology
- **Mission**: To simplify digital transformation through expert engineering, "Security-First" design, and 24/7 operational excellence

## Core Pillars
1. **Security-First DNA**: Security is the foundation, not an add-on
2. **Intelligent Scalability**: Systems using AI and Containerization that grow with your business
3. **Unwavering Support**: 24/7 monitoring and proactive optimization
4. **Hybrid Agility**: Balanced approach between On-Premises and Cloud

## Leadership Team

### Founder - Gajendrakumar PK
Visionary leader with 30+ years in IT Infrastructure, AI, Cloud computing, Networking, and cybersecurity. Previously: Senior Director at Cloud Kinetics, Director at HCL Technologies, Service Delivery Manager at Mphasis, Customer Support Engineer at Computer Access Pvt Ltd.

### Co-Founder - Baskar Maruthai
28+ years experience bridging cutting-edge technology with market needs. Previously: Key leader at PwC (Czech Republic), HCL Technologies (Czech Republic, Switzerland, USA, Singapore), Architect at IBM India, Senior Systems Engineer at Info Services, System Engineer at Accel ICIM Frontline Ltd.

## Services Offered

### 1. 24×7 Managed Services
- Proactive Infrastructure Monitoring with RMM tools
- Automated Patch Management
- Level 1-3 Technical Support (24/7 Help Desk)
- Performance Optimization & Monthly Health Checks
- SLA-Driven Resolution for mission-critical incidents

### 2. Cybersecurity & Digital Resilience
- **CNAPP**: Cloud-Native Application Protection Platform (Code-to-Cloud security)
- **CSPM**: Cloud Security Posture Management
- **CWPP**: Cloud Workload Protection Platform
- **CIEM**: Cloud Infrastructure Entitlement Management
- Zero Trust Architecture Implementation
- Managed Detection & Response (MDR) - 24/7 threat hunting
- Threat Intelligence
- Quantum-Safe Encryption
- Security Operations Center (SOC) with AI-powered detection
- Data Protection & Disaster Recovery
- Vulnerability Assessments
- XDR (Extended Detection and Response)

### 3. AI & Data Science
- **Agentic AI**: Autonomous AI agents that plan, reason, and use tools
- **AI Agents**: Goal-driven autonomous systems
- **Multi-Agent Systems**: Collaborative AI agents solving complex problems
- Enterprise AI Stacks & LLM Integration
- Machine Learning Operations (MLOps)
- AI Stack Engineering (GPU orchestration, Vector Databases)
- Predictive Analytics Pipelines
- Data Engineering & Secure Data Lakes
- AI Governance frameworks
- AI Workflow Automation
- Prompt Engineering
- AIOps 3.0

### 4. Cloud Services
- **AWS Cloud**: AI-Native, Serverless, Hybrid Cloud, Zero-Trust Security
- **Microsoft Azure**: AI-First with Copilot, Hybrid & Multi-Cloud Leadership
- **Google Cloud**: AI-First, Data-Centric, Kubernetes Leadership
- Cloud Migration (Lift and Shift, Re-platforming)
- Cloud Cost Optimization
- Hybrid & Multi-Cloud Management
- Edge and Distributed Cloud

### 5. Infrastructure Modernization
- On-Premises Refurbishment (SDN, HCI)
- Secure Cloud Migration
- Containerization (Kubernetes/Docker)
- Hybrid Cloud Architecture
- Software-Defined Infrastructure

### 6. DevOps/DevSecOps
- CI/CD Pipeline Development
- Automated Security Integration
- Platform Engineering
- Cloud-Native & GitOps
- Infrastructure as Code
- Automated Testing & Deployment

### 7. Quantum Computing
- Quantum Readiness Consulting
- Quantum-Safe Cryptography
- Hybrid Quantum-Classical Workflows
- Post-Quantum Standards Migration

### 8. Additional Services
- Digital Transformation
- Application Development & Security
- Project Management
- IT Infrastructure Management
- System Architecture Design
- Quality Assurance & Audit
- Staff Management
- Web 3.0 Solutions (Blockchain, Smart Contracts, dApps, DeFi)
- Data Science & Analytics
- Automation

## Operational Model
1. **Audit & Discover**: Deep dive into existing infrastructure → Clear technical roadmap and ROI forecast
2. **Architecture**: Design secure, scalable blueprints → Future-proof system design
3. **Engineering**: Hands-on deployment and migration → Fully functional, modernized tech stack
4. **Sustain (24/7)**: Round-the-clock monitoring → Zero downtime and continuous compliance

## Industries Served
Banking & Finance, Automotive, Healthcare & Life Sciences, Utilities, Manufacturing, Hospitality & Travel, Telecommunications, Media & Entertainment, High-Tech Enterprises, Consumer Products, Insurance, Retail & E-commerce, Aerospace & Defense, Public Sector, Supply Chain, Education & Research, Agribusiness, Oil/Gas/Energy, Real Estate, Chemicals, Professional Services

## Technology Partners
AWS, Microsoft Azure, Google Cloud Platform (GCP), Redington, IBM, Nutanix, AccuKnox, CoreStack, Flexera, Databricks, ServiceNow, Workday, NetApp, Zoho, CrowdStrike

## Key Strengths
- Focus on business value
- Innovation capability in emerging technologies
- End-to-end AI, IT and digital transformation expertise
- Strong security, compliance, and reliability focus
- Scalable and future-ready solutions
- Customer-centric and results-driven approach
- Operational excellence with quality-driven delivery
- Experienced professionals and technology specialists

## Technology Expertise

### Artificial Intelligence
- Agentic AI with autonomous planning and reasoning
- Multi-agent systems for complex problem solving
- Multimodal intelligence (text, images, audio, video)
- Self-learning and adaptive AI
- AI-native applications
- Human-AI collaboration
- Trustworthy and governed AI
- Edge and decentralized AI
- Quantum-enhanced AI (future-ready)

### Security Operations Center (SOC)
- AI-powered threat detection
- SOAR automation (Security Orchestration, Automation, Response)
- Extended Detection and Response (XDR)
- Proactive threat hunting
- Zero Trust integration
- Cloud-native SOC
- Real-time analytics and observability
- Automated compliance and reporting

### Application Security
- DevSecOps integration
- AI-driven threat detection
- Runtime Application Self-Protection (RASP)
- Zero Trust application security
- API and microservices security
- Software supply chain security
- Automated compliance and governance
`;

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: 'Hi! 👋 I\'m here to help you learn about Vi-3 Technologies. How can I assist you today?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    let assistantContent = '';

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.1-8b-instant',
          messages: [
            {
              role: 'system',
              content: `You are a helpful and knowledgeable customer support assistant for Vi-3 Technologies Private Limited. 

IMPORTANT: Answer questions ONLY based on the company information provided below. Be professional, friendly, and concise.

${COMPANY_INFO}

Guidelines:
- Provide accurate information from the knowledge base above
- Be friendly and professional in tone
- Keep answers clear and concise
- For pricing inquiries, say: "For detailed pricing and custom quotes, please contact us at contact@vi3technologies.com or call +91-7010351330"
- For partnership inquiries, mention contacting the team directly
- If asked something not in the knowledge base, politely say: "I don't have that specific information. Please contact our team at contact@vi3technologies.com or call +91-7010351330 for more details."
- Use bullet points when listing services or features for clarity
- Always be helpful and guide users to the right information`
            },
            ...newMessages
          ],
          temperature: 0.7,
          max_tokens: 800,
          stream: true,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      if (!response.body) {
        throw new Error('No response body');
      }

      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmedLine = line.trim();
          if (!trimmedLine || trimmedLine.startsWith(':')) continue;
          
          if (trimmedLine.startsWith('data: ')) {
            const jsonStr = trimmedLine.slice(6);
            if (jsonStr === '[DONE]') break;
            
            try {
              const parsed = JSON.parse(jsonStr);
              const content = parsed.choices?.[0]?.delta?.content;
              
              if (content) {
                assistantContent += content;
                setMessages(prev => {
                  const updated = [...prev];
                  updated[updated.length - 1] = { 
                    role: 'assistant', 
                    content: assistantContent 
                  };
                  return updated;
                });
              }
            } catch (e) {
              // Skip invalid JSON
            }
          }
        }
      }

      if (!assistantContent) {
        setMessages(prev => prev.slice(0, -1));
        throw new Error('No response received');
      }

    } catch (error) {
      console.error('Chat error:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
      
      if (!assistantContent) {
        setMessages(prev => prev.slice(0, -1));
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[70vh] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="bg-primary text-primary-foreground p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Vi-3 Support</h3>
                <p className="text-xs text-primary-foreground/80">Ask about our services</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${
                    message.role === 'user' ? 'bg-secondary' : 'bg-primary/10 text-primary'
                  }`}>
                    {message.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 ${
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-md'
                      : 'bg-secondary text-secondary-foreground rounded-bl-md'
                  }`}>
                    <p className="text-sm whitespace-pre-wrap break-words">{message.content}</p>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-secondary rounded-2xl rounded-bl-md px-4 py-2.5">
                    <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-border bg-card">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-2.5 rounded-full bg-secondary text-secondary-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50"
                />
                <Button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  size="icon"
                  className="rounded-full w-10 h-10"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;