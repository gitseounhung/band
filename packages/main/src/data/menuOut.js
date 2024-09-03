import {
  BarChart2,
  Calendar,
  MessageSquare,
  Users,
  FileText,
  Mail,
  LogIn,
  UserPlus,
  UserCheck,
  ShieldOff,
  User,
  File,
  PieChart,
  Package,
  Layers,
  Box,
  Archive,
  AlertCircle,
} from "react-feather";

const menus = [
  {
      id: 1,
      label: "소개",
      url: "#",
      Icon: PieChart,
  },
  {
      id: 2,
      label: "핵심가치",
      url: "#",
      Icon: Package,
  },
  {
      id: 3,
      label: "기능 둘러보기",
      url: "#",
      Icon: Layers,
  },
  {
      id: 4,
      label: "요금안내",
      url: "/settings/main",
      Icon: Box,
  },
  {
      id: 5,
      label: "더 보기",
      url: "#",
      Icon: Archive,
      submenu: [
        {
            id: 11,
            label: "사용자 매뉴얼",
            url: "/dashboard-one",
            Icon: BarChart2,
        },
        {
            id: 12,
            label: "관리자 매뉴얼",
            url: "/dashboard-two",
            Icon: BarChart2,
        },
        {
            id: 13,
            label: "고객지원",
            url: "/dashboard-three",
            Icon: BarChart2,
        },
        {
            id: 14,
            label: "제안하기",
            url: "/dashboard-four",
            Icon: BarChart2,
        },
    ],      
  },
];

export default menus;
