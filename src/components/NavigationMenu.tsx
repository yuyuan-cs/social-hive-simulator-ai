
import React from 'react';
import { 
  Home, 
  Users, 
  Settings, 
  MessageCircle, 
  Folder,
  BarChartBig
} from "lucide-react";

interface MenuItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const MenuItem = ({ icon: Icon, label, active = false, onClick }: MenuItemProps) => {
  return (
    <button 
      className={`menu-item ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );
};

interface NavigationMenuProps {
  activeModule: string;
  setActiveModule: (module: string) => void;
}

const NavigationMenu = ({ activeModule, setActiveModule }: NavigationMenuProps) => {
  return (
    <nav className="space-y-1">
      <MenuItem 
        icon={Home} 
        label="主页"
        active={activeModule === 'home'} 
        onClick={() => setActiveModule('home')}
      />
      <MenuItem 
        icon={Users} 
        label="社群建立" 
        active={activeModule === 'establishment'} 
        onClick={() => setActiveModule('establishment')}
      />
      <MenuItem 
        icon={MessageCircle} 
        label="社群经营" 
        active={activeModule === 'operation'} 
        onClick={() => setActiveModule('operation')}
      />
      <MenuItem 
        icon={BarChartBig} 
        label="社群变现" 
        active={activeModule === 'monetization'} 
        onClick={() => setActiveModule('monetization')}
      />
      <MenuItem 
        icon={Settings} 
        label="社群管理" 
        active={activeModule === 'management'} 
        onClick={() => setActiveModule('management')}
      />
      <MenuItem 
        icon={Folder} 
        label="社群拓展" 
        active={activeModule === 'expansion'} 
        onClick={() => setActiveModule('expansion')}
      />
    </nav>
  );
};

export default NavigationMenu;
