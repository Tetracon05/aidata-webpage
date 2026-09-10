export type EventItem = {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  status: "past" | "upcoming";
  location: string;
  partner?: string;
  participants?: number;
  summary: string;
  body: string[];
  images?: { src: string; alt: string }[];
  tags: string[];
};

export const events: EventItem[] = [
  {
    slug: "saglik-bilimleri-semineri",
    title: "Sağlık Bilimleri ve Akademide Yapay Zeka Kullanımı",
    date: "2026-04-20",
    dateLabel: "20 Nisan 2026",
    status: "past",
    location: "Sağlık Bilimleri Fakültesi, İstiklal Bilim ve Teknoloji Üniversitesi",
    summary:
      "Sağlık Bilimleri Fakültesi öğrencilerine yönelik, yapay zekanın sağlık ve akademik araştırma süreçlerindeki kullanımını ele alan disiplinler arası bir seminer.",
    body: [
      "Yönetim kurulumuzun 13 Nisan 2026 tarihli kararıyla planlanan seminerde, yapay zekanın sağlık bilimleri ve akademik araştırma süreçlerinde nasıl kullanılabileceği farklı başlıklar etrafında ele alındı.",
      "Etkinlik, topluluğumuzun mühendislik dışındaki fakültelerle kurduğu iş birliklerinden biri olarak; yapay zeka farkındalığını kampüs genelinde yaymayı amaçladı.",
    ],
    images: [
      {
        src: "/images/saglik-semineri/saglik-semineri-1.jpg",
        alt: "Sağlık Bilimleri Fakültesi'nde AIDATA pankartı önünde seminer konuşması",
      },
      {
        src: "/images/saglik-semineri/saglik-semineri-2.jpg",
        alt: "Seminer salonunda kürsüden dinleyicilere hitap eden konuşmacı",
      },
      {
        src: "/images/saglik-semineri/saglik-semineri-3.jpg",
        alt: "Seminere katılan öğrencilerle dolu salon",
      },
      {
        src: "/images/saglik-semineri/saglik-semineri-4.jpg",
        alt: "Etkinlik sonrası topluluk üyeleri ve katılımcılarla grup fotoğrafı",
      },
      {
        src: "/images/saglik-semineri/saglik-semineri-5.jpg",
        alt: "Yapay zeka araçları üzerinden anlatım yapan konuşmacı",
      },
    ],
    tags: ["Seminer", "Sağlık Bilimleri Fakültesi"],
  },
  {
    slug: "2025-guz-oryantasyon",
    title: "Güz Dönemi Oryantasyon ve Tanıtım Standı",
    date: "2025-10-27",
    dateLabel: "27 Ekim 2025",
    status: "past",
    location: "Kampüs, İstiklal Bilim ve Teknoloji Üniversitesi",
    summary:
      "Yeni akademik yılda kampüs genelinde açtığımız tanıtım standıyla yeni öğrencilerle buluştuk; standımız üniversite yönetimi tarafından da ziyaret edildi.",
    body: [
      "2025-2026 akademik yılının başında düzenlenen oryantasyon etkinliğinde topluluğumuzu yeni öğrencilere tanıttık, yapay zeka ve veri bilimine ilgi duyan öğrencileri aramıza davet ettik.",
      "Standımız, üniversite rektörlüğü ve idari birimler tarafından da ziyaret edilerek topluluğumuzun bir yıl içinde kazandığı görünürlük gözler önüne serildi.",
    ],
    images: [
      {
        src: "/images/oryantasyon/oryantasyon-1.jpg",
        alt: "AIDATA tanıtım standı ve topluluk pankartı",
      },
      {
        src: "/images/oryantasyon/oryantasyon-4.jpg",
        alt: "AIDATA standını ziyaret eden öğrenciler ve üniversite yetkilileri",
      },
      {
        src: "/images/oryantasyon/oryantasyon-5.jpg",
        alt: "AIDATA standında iki topluluk üyesi",
      },
      {
        src: "/images/oryantasyon/oryantasyon-6.jpg",
        alt: "Oryantasyon etkinliğinde üniversite yönetimi ve öğrencilerle grup fotoğrafı",
      },
      {
        src: "/images/oryantasyon/oryantasyon-7.jpg",
        alt: "Kampüste düzenlenen oryantasyon şenliğinden bir kare",
      },
    ],
    tags: ["Oryantasyon", "Tanıtım"],
  },
  {
    slug: "yapay-zeka-psikoloji-semineri",
    title: "Yapay Zeka ve Psikoloji İlişkisi Üzerine Seminer",
    date: "2025-06-11",
    dateLabel: "11 Haziran 2025",
    status: "past",
    location: "İnsan ve Toplum Bilimleri Fakültesi, İstiklal Bilim ve Teknoloji Üniversitesi",
    partner: "Psikoloji Bölümü iş birliğiyle",
    participants: 23,
    summary:
      "Topluluğumuzun ilk etkinliği: yapay zekanın insan zihnini modellemesinden terapi chatbotlarına uzanan geniş bir yelpazede Psikoloji Bölümü öğrencileriyle bir araya geldik.",
    body: [
      "Kuruluşumuzdan kısa bir süre sonra düzenlediğimiz ilk etkinlikte, yapay zeka ile psikoloji arasındaki ilişkiyi; insan zihninin modellenmesi, makine davranışı ve insan davranışlarının değerlendirilmesi başlıkları altında inceledik.",
      "Woebot, Wysa ve Replika gibi terapi odaklı yapay zeka uygulamalarını karşılaştırdık; yapay zekanın psikolojik destek süreçlerindeki fırsat ve risklerini gerçek bir vaka üzerinden tartıştık.",
      "Seminer, Geoffrey Hinton'ın 'Yapay zekâ, insan zekâsını taklit etmekle kalmaz; onu anlamaya da çalışır' sözüyle kapandı.",
    ],
    tags: ["Seminer", "Psikoloji Bölümü", "İlk Etkinliğimiz"],
  },
];

export const pastEvents = events
  .filter((e) => e.status === "past")
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export const upcomingEvents = events.filter((e) => e.status === "upcoming");
