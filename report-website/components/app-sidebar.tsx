"use client"

import { usePathname } from "next/navigation"
import { Home, ClipboardList, BookOpenText, Frame, Layers, Hammer, Flag, ChartNoAxesCombined, SquarePlus, ChevronRight } from "lucide-react"

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
        title: "Decisions Summary",
        url: "/research#decisions-summary",
      },
      {
        title: "References",
        url: "/research#references",
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
        title: "Class Diagrams",
        url: "/system-design#class-diagrams",
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
    subitems: [],
  },
  {
    title: "Evaluation",
    url: "/evaluation",
    icon: ChartNoAxesCombined,
    subitems: [],
  },
  {
    title: "Appendices",
    url: "/appendices",
    icon: SquarePlus,
    subitems: [],
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
