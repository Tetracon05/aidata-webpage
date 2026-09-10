# AIDATA Web Sitesi

İstiklal Bilim ve Teknoloji Üniversitesi Yapay Zeka ve Veri Bilimi Öğrenci Topluluğu'nun resmi web sitesi.

Next.js (App Router) + TypeScript + Tailwind CSS ile geliştirilmiştir. İçerik, ayrı veri dosyalarında tutulur — kod bilmeyen bir yönetim kurulu üyesi bile bu dosyaları düzenleyerek siteyi güncelleyebilir.

## Yerel Ortamda Çalıştırma

```bash
npm install
npm run dev
```

Site `http://localhost:3000` adresinde açılır.

## İçerik Nasıl Güncellenir?

Tüm topluluk bilgileri `src/lib/data/` klasöründeki dosyalarda tutulur:

| Dosya | Ne içerir |
|---|---|
| `site.ts` | Topluluk adı, sloganlar, iletişim bilgileri, sosyal medya linkleri, "Neler Yapıyoruz" listesi, vizyon metni, kilometre taşları |
| `events.ts` | Geçmiş ve yaklaşan etkinlikler (tarih, yer, açıklama, fotoğraflar) |
| `board.ts` | Danışman, yönetim kurulu ve denetim kurulu üyeleri |
| `projects.ts` | TÜBİTAK, TEKNOFEST gibi devam eden projeler |

### Yeni bir etkinlik eklemek

1. `src/lib/data/events.ts` dosyasını aç.
2. `events` dizisine yeni bir nesne ekle (mevcutlardan birini kopyalayıp düzenlemek en kolayı).
3. Etkinliğin fotoğrafı varsa, görseli `public/images/<etkinlik-klasörü>/` altına koy ve `images` alanında yolunu belirt.
4. Henüz tarihi geçmemiş bir etkinlik için `status: "upcoming"` kullan; geçmiş etkinlikler için `status: "past"`.

### Yönetim kurulunu güncellemek

`src/lib/data/board.ts` dosyasındaki `boardMembers` dizisini güncelle. Her yıl genel kurul sonrası bu listeyi güncellemeyi unutma.

### Fotoğraf eklerken dikkat

- Sadece `.jpg`, `.jpeg`, `.png` veya `.webp` formatlarını kullan. **HEIC formatı (iPhone varsayılanı) web'de çalışmaz** — iPhone'da "Ayarlar > Kamera > Formatlar > Uyumluluğun En Yüksek Olduğu Ayar" seçeneğini kullanarak fotoğrafları doğrudan JPEG çekebilirsiniz, ya da paylaşmadan önce dönüştürün.
- Fotoğrafları küçük boyutlu (birkaç MB altı) tutmaya çalışın; Next.js otomatik olarak optimize eder ama kaynak dosya çok büyükse yine de yavaşlar.

### Logoyu güncellerken dikkat

Logo `public/brand/logo.png` dosyasıdır ve hem site içinde hem de tarayıcı favicon'u (sekme ikonu) olarak kullanılır. Logoyu değiştirirsen:

1. Yeni dosyayı `public/brand/logo.png` üzerine kaydet (şeffaf arka planlı PNG olmalı — arka plan kaldırma araçları bazen logonun İÇİNDEKİ beyaz alanları da şeffaf yapıp bozabiliyor, yeni dosyayı koyu bir sayfa arka planında da kontrol et).
2. `src/app/layout.tsx` dosyasındaki `FAVICON_VERSION` sabitini bir artır (örn. `"2"` → `"3"`). Bunu atlarsan tarayıcılar sekmedeki eski favicon'u göstermeye devam edebilir — favicon önbelleği normal sayfa önbelleğinden çok daha inatçıdır, sert yenileme (Ctrl+Shift+R) hatta bilgisayarı yeniden başlatmak bile onu temizlemeyebilir.

## Yayınlama (Deploy)

En kolay yol [Vercel](https://vercel.com) üzerinden ücretsiz yayınlamaktır:

1. Bu projeyi bir GitHub reposuna yükle.
2. [vercel.com](https://vercel.com) üzerinden GitHub hesabınla giriş yap.
3. "New Project" ile bu repoyu seç, ayarları değiştirmeden "Deploy" butonuna bas.
4. Her `main` dalına yapılan push otomatik olarak siteyi günceller.

## Proje Yapısı

```
src/
  app/            → Sayfalar (Anasayfa, Hakkımızda, Etkinlikler, Projelerimiz, Yönetim Kurulu, İletişim)
  components/     → Tekrar kullanılan arayüz bileşenleri (Navbar, Footer, kartlar)
  lib/data/       → Güncellenmesi gereken tüm içerik burada
public/
  brand/          → Logo dosyaları
  images/         → Etkinlik fotoğrafları
```

## Sorular

Site ile ilgili teknik sorular için mevcut yönetim kuruluna veya siteyi kuran kişiye ulaşabilirsiniz. İçerik güncellemeleri için yukarıdaki tabloyu takip etmeniz yeterlidir.
