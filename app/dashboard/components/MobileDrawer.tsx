import SidebarContent from '@/app/dashboard/components/SidebarContent';
import {Sheet, SheetContent} from "@/components/ui/sheet";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="left" className="p-0">
        <SidebarContent isCollapsed={false} />
      </SheetContent>
    </Sheet>
  );
}
