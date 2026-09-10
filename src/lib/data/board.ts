export type BoardMember = {
  name: string;
  role: string;
  roleGroup: "danisman" | "yonetim" | "denetim";
  department?: string;
  initials: string;
};

export const advisor: BoardMember = {
  name: "Dr. Öğr. Üyesi Muhammed Ali Koşan",
  role: "Topluluk Danışmanı",
  roleGroup: "danisman",
  department: "Yazılım Mühendisliği Bölümü",
  initials: "MK",
};

export const boardMembers: BoardMember[] = [
  {
    name: "Oğuz Karagöz",
    role: "Topluluk Başkanı",
    roleGroup: "yonetim",
    department: "Yazılım Mühendisliği",
    initials: "OK",
  },
  {
    name: "Emre Ayözcan",
    role: "Başkan Yardımcısı",
    roleGroup: "yonetim",
    department: "Yazılım Mühendisliği",
    initials: "EA",
  },
  {
    name: "Ece Nur Arı",
    role: "Sayman",
    roleGroup: "yonetim",
    department: "Yazılım Mühendisliği",
    initials: "EA",
  },
  {
    name: "Ahmethan Altuner",
    role: "Yazman",
    roleGroup: "yonetim",
    department: "Yazılım Mühendisliği",
    initials: "AA",
  },
  {
    name: "Mehmet Mücahit Tabur",
    role: "Üye",
    roleGroup: "yonetim",
    department: "Yazılım Mühendisliği",
    initials: "MT",
  },
  {
    name: "Emine Yenil",
    role: "Üye",
    roleGroup: "yonetim",
    department: "Yazılım Mühendisliği",
    initials: "EY",
  },
];

export const auditBoard: BoardMember[] = [
  {
    name: "Arzu Elmas",
    role: "Denetim Kurulu Başkanı",
    roleGroup: "denetim",
    department: "Yazılım Mühendisliği",
    initials: "AE",
  },
  {
    name: "Ahmet Baran Uçar",
    role: "Denetim Kurulu Üyesi",
    roleGroup: "denetim",
    department: "Yazılım Mühendisliği",
    initials: "AU",
  },
  {
    name: "Enes Birden",
    role: "Denetim Kurulu Üyesi",
    roleGroup: "denetim",
    department: "Yazılım Mühendisliği",
    initials: "EB",
  },
];
