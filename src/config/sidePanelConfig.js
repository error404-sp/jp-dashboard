import {
  BadgeTwoTone,
  DonutSmallTwoTone,
  FolderTwoTone,
  ForumTwoTone,
  GroupsTwoTone,
  LocalMallTwoTone,
  MenuBookTwoTone,
  PortraitTwoTone,
  WebTwoTone,
} from "@mui/icons-material";

export const sidePanelConfig = [
  {
    id: 1,
    type: "category",
    label: "Dashboard",
    children: [
      {
        id: 2,
        type: "sub-category",
        label: "Default",
        path: "/",
        icon: DonutSmallTwoTone,
        children: [
          {
            id: 5,
            type: "page",
            label: "Orders",
            path: "/orders",
          },
        ],
      },
      {
        id: 3,
        type: "sub-category",
        label: "E-commerce",
        icon: LocalMallTwoTone,
        children: [
          {
            id: 5,
            type: "page",
            label: "Orders",
            path: "/orders",
          },
        ],
      },
      {
        id: 6,
        type: "sub-category",
        label: "Projects",
        icon: FolderTwoTone,
        children: [],
      },
      {
        id: 7,
        type: "sub-category",
        label: "Online Courses",
        icon: MenuBookTwoTone,
        children: [],
      },
    ],
  },

  {
    id: 8,
    type: "category",
    label: "Pages",
    children: [
      {
        id: 9,
        type: "sub-category",
        label: "User Profile",
        icon: PortraitTwoTone,
        children: [
          {
            id: 10,
            type: "page",
            label: "Overview",
            path: "/",
          },
          {
            id: 11,
            type: "page",
            label: "Projects",
            path: "/",
          },
          {
            id: 12,
            type: "page",
            label: "Campaign",
            path: "/",
          },
          {
            id: 13,
            type: "page",
            label: "Documents",
            path: "/",
          },
          {
            id: 14,
            type: "page",
            label: "Followers",
            path: "/",
          },
        ],
      },
      {
        id: 15,
        type: "sub-category",
        label: "Account",
        icon: BadgeTwoTone,
        children: [],
      },
      {
        id: 17,
        type: "sub-category",
        label: "Corporate",
        icon: GroupsTwoTone,
        children: [],
      },
      {
        id: 18,
        type: "sub-category",
        label: "Blog",
        icon: WebTwoTone,
        children: [],
      },
      {
        id: 16,
        type: "sub-category",
        label: "Social",
        icon: ForumTwoTone,
        children: [],
      },
    ],
  },
];
