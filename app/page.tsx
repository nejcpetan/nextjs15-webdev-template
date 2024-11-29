import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Rocket,
  Wrench,
  Lightbulb,
  Github,
  Book,
  Heart,
  Sparkles,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-24">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="space-y-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Rocket className="w-8 h-8 text-primary" />
            <Sparkles className="w-6 h-6 text-primary/80" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Nathan&apos;s Next.js 15
          </h1>
          <p className="text-3xl font-bold">Starter Template</p>
          <div className="flex gap-2 justify-center">
            <Badge variant="secondary">Next.js 15</Badge>
            <Badge variant="secondary">shadcn/ui</Badge>
            <Badge variant="secondary">Tailwind CSS</Badge>
            <Badge variant="secondary">Lucide Icons</Badge>
          </div>
        </div>

        {/* Main Content */}
        <Card className="p-6 backdrop-blur-sm bg-card/50">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Welcome to this modern starter template! Built with the latest tech
            stack and pre-configured with all shadcn/ui components, this
            template helps you jumpstart your Next.js projects with style and
            efficiency.
          </p>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Wrench className="w-6 h-6 text-primary" />
              Tech Stack
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="text-primary">▸</span> shadcn/ui - Beautiful
                components
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">▸</span> Tailwind CSS -
                Utility-first CSS
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">▸</span> Radix UI - Accessible
                primitives
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">▸</span> Next.js - React
                framework
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">▸</span> Lucide Icons - Beautiful
                icons
              </li>
            </ul>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-primary" />
              Getting Started
            </h2>
            <p className="text-muted-foreground">
              All components are ready to use! Explore the extensive collection
              of pre-installed components and start building your next project.
            </p>
            <div className="flex gap-2">
              <Button asChild>
                <a
                  href="https://ui.shadcn.com/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Book className="w-4 h-4 mr-2" />
                  View Documentation
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://github.com/nejcpetan/nextjs15-webdev-template"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            Built with <Heart className="w-4 h-4 text-red-500" /> using Next.js
            and shadcn/ui
          </p>
        </footer>
      </div>
    </main>
  );
}
