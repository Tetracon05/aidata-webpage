export type Project = {
  slug: string;
  title: string;
  tag: string;
  period: string;
  summary: string;
  body: string[];
  status: "devam-ediyor" | "tamamlandi" | "basvuru";
};

export const projects: Project[] = [
  {
    slug: "yapay-zeka-entegrasyon-gunleri",
    title: "Yapay Zeka Entegrasyon Günleri",
    tag: "TÜBİTAK MTKB Kulüp Desteği",
    period: "2026",
    status: "devam-ediyor",
    summary:
      "TÜBİTAK Bilim ve Toplum Daire Başkanlığı'nın (MTKB) 2. Faz Kulüp Desteği kapsamında hayata geçirdiğimiz, kampüs genelinde yapay zeka okuryazarlığını artırmayı hedefleyen etkinlik serisi.",
    body: [
      "Yönetim kurulumuzun Ocak 2026 kararıyla başvurusunu yaptığımız proje, farklı bölümlerden öğrencileri yapay zeka ile tanıştırmayı ve uygulamalı öğrenim fırsatları sunmayı amaçlıyor.",
    ],
  },
  {
    slug: "teknofest-pardus",
    title: "TEKNOFEST — Pardus İşletim Sistemi Geliştirme",
    tag: "TEKNOFEST",
    period: "2026",
    status: "basvuru",
    summary:
      "Millî işletim sistemi Pardus'un geliştirilmesine katkı sunmak amacıyla TEKNOFEST kapsamında başvurusunu gerçekleştirdiğimiz yazılım projesi.",
    body: [
      "Yönetim kurulumuzun Şubat 2026 kararıyla yürütülen bu başvuru, topluluğumuzun uygulamalı yazılım geliştirme ve açık kaynak ekosistemine katkı vizyonunun bir parçası.",
    ],
  },
];
