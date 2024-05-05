export default [
  {
    _name: "CSidebarNav",
    _children: [
      {
        _name: "CSidebarNavItem",
        name: "Trang chủ",
        to: "/home",
        fontIcon: "fas fa-database",
      },
      {
        _name: "CSidebarNavItem",
        name: "Manage 2",
        to: "/manage/two",
        fontIcon: "fas fa-user",
      },
      {
        _name: "CSidebarNavItem",
        name: "Manage 3",
        to: "/manage/three",
        fontIcon: "fas fa-photo-video",
      },
      {
        _name: "CSidebarNavDropdown",
        name: "Manage 4",
        route: "/manage/four",
        fontIcon: "fas fa-globe-asia",
        _children: [
          {
            _name: "CSidebarNavItem",
            name: "Manage 4.1",
            to: "/manage/four-one",
          },
          {
            _name: "CSidebarNavItem",
            name: "Manage 4.2",
            to: "/manage/four-two",
          },
          {
            _name: "CSidebarNavItem",
            name: "Manage 4.3",
            to: "/manage/four-three",
          },
          {
            _name: "CSidebarNavDropdown",
            name: "Manage 4.4",
            route: "/manage/four-four",
            items: [
              {
                name: "Manage 4.4.1",
                to: "/manage/four-four-one",
              },
              {
                name: "Manage 4.4.2",
                to: "/manage/four-four-two",
              },
              {
                name: "Manage 4.4.3",
                to: "/manage/four-four-three",
              },
            ],
          },
        ],
      },
      {
        _name: "CSidebarNavDropdown",
        name: "Manage 5",
        route: "/manage/five",
        fontIcon: "fas fa-inbox",
        items: [
          {
            name: "Manage 5.1",
            to: "/manage/five-one",
          },
          {
            name: "Manage 5.2",
            to: "/manage/five-two",
          },
        ],
      },
    ],
  },
];
