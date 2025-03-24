"use client"

import { usePathname } from "next/navigation"
import { Home, ClipboardList, BookOpenText, Braces, Frame, Layers, Hammer, Flag, ChartNoAxesCombined, SquarePlus, ChevronRight } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
    subitems: [
      {
        title: "Abstract",
        url: "/#abstract",
      },
      {
        title: "Video",
        url: "/#video",
      },
      {
        title: "Development Team",
        url: "/#development-team",
      },
      {
        title: "Project Management",
        url: "/#project-management",
      },
    ],
  },
  {
    title: "Requirements",
    url: "/requirements",
    icon: ClipboardList,
    subitems: [
      {
        title: "Project Background",
        url: "/requirements#project-background",
      },
      {
        title: "Goals",
        url: "/requirements#goals",
      },
      {
        title: "Requirements Gathering",
        url: "/requirements#requirements-gathering",
      },
      {
        title: "Personas",
        url: "/requirements#personas",
      },
      {
        title: "Use Cases",
        url: "/requirements#use-cases",
      },
      {
        title: "MoSCoW List",
        url: "/requirements#moscow-list",
      },
    ],
  },
  {
    title: "Research",
    url: "/research",
    icon: BookOpenText,
    subitems: [
      {
        title: "Related Projects",
        url: "/research#related-projects",
      },
      {
        title: "Technology Review",
        url: "/research#technology-review",
      },
      {
        title: "Technical Decisions",
        url: "/research#technical-decisions",
      },
      {
        title: "References",
        url: "/research#references",
      },
    ],
  },
  {
    title: "Algorithms",
    url: "/algorithms",
    icon: Braces,
    subitems: [
      {
        title: "Overview",
        url: "/algorithms#overview",
      },
      {
        title: "AI Chatbot",
        url: "/algorithms#ai-chatbot",
      },
      {
        title: "Post-Quantum Cryptography",
        url: "/algorithms#post-quantum-cryptography",
      },
      {
        title: "Facial Recognition",
        url: "/algorithms#facial-recognition",
      },
      {
        title: "Conclusion",
        url: "/algorithms#conclusion",
      },
      {
        title: "References",
        url: "/algorithms#references",
      },
    ],
  },
  {
    title: "UI Design",
    url: "/ui-design",
    icon: Frame,
    subitems: [
      {
        title: "Design Principles",
        url: "/ui-design#design-principles",
      },
      {
        title: "Initial Sketches",
        url: "/ui-design#initial-sketches",
      },
      {
        title: "Digital Prototypes",
        url: "/ui-design#digital-prototypes",
      },
      {
        title: "Production Design",
        url: "/ui-design#production-design",
      },
    ],
  },
  {
    title: "System Design",
    url: "/system-design",
    icon: Layers,
    subitems: [
      {
        title: "System Architecture",
        url: "/system-design#system-architecture",
      },
      {
        title: "Site Map",
        url: "/system-design#site-map",
      },
      {
        title: "Sequence Diagrams",
        url: "/system-design#sequence-diagrams",
      },
      {
        title: "Design Patterns",
        url: "/system-design#design-patterns",
      },
      {
        title: "ER Diagrams",
        url: "/system-design#er-diagrams",
      },
      {
        title: "Data Storage",
        url: "/system-design#data-storage",
      },
      {
        title: "APIs",
        url: "/system-design#apis",
      },
    ],
  },
  {
    title: "Implementation",
    url: "/implementation",
    icon: Hammer,
    subitems: [],
  },
  {
    title: "Testing",
    url: "/testing",
    icon: Flag,
    subitems: [
      {
        title: "Testing Strategy",
        url: "/testing#testing-strategy",
      },
      {
        title: "Unit Testing",
        url: "/testing#unit-testing",
      },
      {
        title: "Integration Testing",
        url: "/testing#integration-testing",
      },
      {
        title: "Compatibility Testing",
        url: "/testing#compatibility-testing",
      },
      {
        title: "Responsive Design Testing",
        url: "/testing#responsive-design-testing",
      },
      {
        title: "Performance Testing",
        url: "/testing#performance-testing",
      },
      {
        title: "User Acceptance Testing",
        url: "/testing#user-acceptance-testing",
      },
    ],
  },
  {
    title: "Evaluation",
    url: "/evaluation",
    icon: ChartNoAxesCombined,
    subitems: [
      {
        title: "Achievements",
        url: "/evaluation#achievments",
      },
      {
        title: "Individual Contribution",
        url: "/evaluation#individual-contribution",
      },
      {
        title: "Critical Evaluation",
        url: "/evaluation#critical-evaluation",
      },
      {
        title: "Future",
        url: "/evaluation#future",
      },
    ],
  },
  {
    title: "Appendices",
    url: "/appendices",
    icon: SquarePlus,
    subitems: [
      {
        title: "User Manual",
        url: "/appendices#user-manual",
      },
      {
        title: "Deployment Manual",
        url: "/appendices#deployment-manual",
      },
      {
        title: "Legal",
        url: "/appendices#legal",
      },
      {
        title: "Development Blog",
        url: "/appendices#development-blog",
      },
      {
        title: "Monthly Videos",
        url: "/appendices#monthly-videos",
      },
    ],
  }
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Group 10 Report</SidebarGroupLabel>
          <SidebarMenu>
            {items.map((item) => (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={pathname === item.url}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <div className="flex items-center">
                    <a href={item.url} className="flex-1">
                      <SidebarMenuButton tooltip={item.title}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </a>
                    <CollapsibleTrigger asChild>
                      <button className="ml-2">
                        <ChevronRight className="transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </button>
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.subitems?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={subItem.url}>
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
