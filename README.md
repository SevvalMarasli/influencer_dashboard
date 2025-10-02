   🚀 Infofluencer Dashboard Uygulaması
Bu proje, bir mini "Influencer Dashboard" uygulamasının frontend case dokümanına uygun olarak geliştirilmiş tek sayfalık bir uygulamadır.

Uygulama, temel bir Login ekranı ve oturum açıldıktan sonra erişilebilen Dashboard sayfasından oluşur.

   🛠️ Teknik Gereksinimler ve Kullanılan Teknolojiler
Bu proje, modern frontend geliştirme standartlarına uygun olarak aşağıdaki teknolojilerle oluşturulmuştur:
| Alan | Teknoloji / Kütüphane | Açıklama | 
 | ----- | ----- | ----- | 
| **Framework** | **Next.js** (App Router) | Projenin temel çatısını ve yönlendirme yapısını oluşturur. | 
| **Dil** | **TypeScript** | Daha güvenli ve ölçeklenebilir kod yazmak için kullanılmıştır. | 
| **Styling** | **Tailwind CSS** | Tamamen responsive (duyarlı) ve hızlı stil geliştirmek için kullanılmıştır. | 
| **Grafik** | **Recharts** | Dashboard'daki "Haftalık Takipçi Büyümesi" grafiğini oluşturmak için kullanılmıştır. | 
| **İkonlar** | **Lucide React** | Header ve Sidebar'daki tüm SVG ikonları sağlar. | 
| **Veri** | **Hard-coded JSON** | Veriler API çağrısı yapılmadan doğrudan kod içine gömülmüştür. | 

   ⚙️ Proje Kurulumu ve Çalıştırma
Bu projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:
**1- Depoyu Klonlayın:**
git clone https://github.com/SevvalMarasli/influencer_dashboard.git
cd infofluencer_dashboard

**2- Bağımlılıkları Yükleyin:**
# npm install

**3- Projeyi Başlatın:**
# npm run dev

**4- Uygulamayı Ziyaret Edin:** Tarayıcınızda http://localhost:3000 adresine giderek uygulamayı görüntüleyebilirsiniz.

   🚪 Uygulama Girişi (Login)
Uygulama / yolunda açılır ve kullanıcı doğrulamasını gerektirir.
| Alan | Değer | 
 | ----- | ----- | 
| **E-posta (Hard-coded)** | test@test.com | 
| **Şifre (Hard-coded)** | 1234 | 

- Başarılı girişin ardından kullanıcı otomatik olarak /Dashboard yoluna yönlendirilir.
- Hata durumlarında ekranda bilgilendirme mesajı gösterilir.

   🎨 Tasarım Tercihleri ve Estetik Yaklaşım
Projenin genel stil ve tasarımında aşağıdaki yaklaşımlar benimsenmiştir:
1. Minimalizm ve Hiyerarşi: Tailwind CSS kullanılarak beyaz alanlar (whitespace) maksimize edilmiş, temel veriler (KPI'lar ve Grafik) merkezi bir role oturtularak kullanıcı için net bir görsel hiyerarşi oluşturulmuştur.
2. Marka Rengi ve Vurgu: Marka rengi olarak koyu mor (indigo-700 ve türevleri) tercih edilmiştir. Bu renk; aktif menü öğeleri, grafik çizgisi ve butonlar gibi etkileşimli elemanlarda vurgu amacıyla kullanılarak dikkat çekici bir estetik sağlamıştır.
3. Tam Duyarlılık (Full Responsive): Tüm bileşenler, mobil öncelikli yaklaşımla tasarlanmıştır. Sidebar, küçük ekranlarda gizlenir hale getirilmiş ve KPI kartları, ekran genişliğine göre otomatik olarak tek sütuna düşecek şekilde (responsive grid) ayarlanmıştır.
4. Kullanıcı Deneyimi (UX): Animasyonlar, gölgeler (shadow-xl) ve yuvarlak köşeler (rounded-xl) kullanılarak arayüze modern ve "kullanılabilir" bir his verilmiştir.

