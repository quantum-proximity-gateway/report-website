"use client"

import { usePathname } from "next/navigation"
import { Home, Hammer, ChevronRight } from "lucide-react"

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
    ],
  },
  {
    title: "Requirements",
    url: "/requirements",
    icon: Hammer,
    subitems: [
      {
        title: "Project Background",
        url: "/requirements#project-background",
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
