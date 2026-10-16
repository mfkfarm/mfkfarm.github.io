# mFk Farm — Enterprise Farm Management Platform

<p align="center">
  <img src="https://mfkfarm.github.io/mfk-logo.png" alt="mFk Farm Logo" width="140" />
</p>

<p align="center">
  <strong>Comprehensive Digital Management and Telemetry Solution for Livestock Enterprises</strong><br />
  Production Portal: <a href="https://mfkfarm.github.io">https://mfkfarm.github.io</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Production%20Ready-emerald?style=flat-square" alt="Status" />
  <img src="https://img.shields.io/badge/Security-KVKK%20%2F%20GDPR%20Compliant-blue?style=flat-square" alt="Security" />
  <img src="https://img.shields.io/badge/Platform-Web%20%2F%20PWA%20%2F%20iOS-slate?style=flat-square" alt="Platform" />
  <img src="https://img.shields.io/badge/License-Proprietary-slate?style=flat-square" alt="License" />
</p>

---

## Genel Bakış

**mFk Farm**, büyükbaş, küçükbaş ve mandıra işletmelerinin sürü yönetimi, süt verim analitiği, klinik takip, finansal planlama ve tesis telemetrisini tek bir entegre platformda birleştiren yeni nesil kurumsal bir çiftlik otomasyon sistemidir.

Platform, UNIFORM-Agri ve Herdwatch gibi küresel endüstri standartlarını yerel mevzuat ve TÜRKVET entegrasyonuyla birleştirerek tarımsal işletmelerin operasyonel verimliliğini maksimize eder.

---

## Temel Modüller

| Modül | Kapsam ve Yetenekler |
|---|---|
| **Sürü & Hayvan Yönetimi** | Kulak küpesi ile hızlı tarama, pedigri soyağacı takibi, padok transferleri ve damızlık akrabalık (inbreeding) risk analitiği. |
| **Süt Üretim Analitiği** | Seans bazlı sağım ölçümleri (sabah/öğle/akşam), laktasyon verim eğrileri, tank sıcaklık takibi ve dönemsel projeksiyonlar. |
| **Klinik Sağlık & Tedavi** | Aşı ajandası, resmi ilaç kayıt defteri (5996 Sayılı Kanun uyumlu), antibiyotik arınma süresi kontrolleri ve ultrason/vizite takibi. |
| **Üreme & Senkronizasyon** | Ovsynch tohumlama protokol sihirbazı, gebelik muayeneleri, kuru periyot yönetimi ve doğum takvimleri. |
| **Finans & Maliyet Muhasebesi** | Kategori bazlı nakit akışı, süt satış faturalandırması, yem maliyetleri ve brüt karlılık raporları. |
| **Akıllı Envanter & Rasyon** | Yem stoku düşüş alarmları, TMR rasyon optimizasyonu, depo lokasyon yönetimi ve sarf malzeme takibi. |
| **Tesis Telemetrisi & IoT** | Silo doluluk sensörleri, padok GPS sınırları, çatı GES enerji üretimi ve biyogaz tesis ölçümleri. |
| **Sistem Yönetimi (Multi-Tenant)** | Süper yönetici denetimi, çiftlik bazlı bağımsız çalışma alanı, anlık çiftlik röntgeni ve erişim yetkilendirmesi. |

---

## Mimari ve Güvenlik

- **Dağıtım Mimarisi:** Bu depo (`mfkfarm.github.io`), platformun şifrelenmiş ve optimize edilmiş üretim web arayüzünü (Static CDN / PWA) sunar.
- **Veri Güvenliği:** Çiftlik operasyonel veritabanları, kimlik doğrulama mekanizmaları ve API uç noktaları bağımsız, izole edilmiş sunucularda korunmaktadır.
- **Mevzuat Uyumluluğu:** 6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve ISO 27001 bilgi güvenliği prensiplerine uygun mimari.

---

## Lisans ve Fikri Mülkiyet

Telif Hakkı &copy; 2026 **mFk Games**. Tüm hakları saklıdır.

Bu yazılımın tasarımı, algoritmaları, grafik arayüzleri ve marka unsurları tescilli mülkiyete tabidir. Yazılı izin olmaksızın kaynak kodların tamamı veya bir kısmı çoğaltılamaz, dağıtılamaz, kiralanamaz veya tersine mühendisliğe tabi tutulamaz.