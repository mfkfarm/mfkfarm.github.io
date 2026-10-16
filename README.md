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

<p align="center">
  <a href="#türkçe"><b>Türkçe</b></a> • <a href="#english"><b>English</b></a>
</p>

---

<a name="türkçe"></a>
## Genel Bakış (Türkçe)

**mFk Farm**, büyükbaş, küçükbaş ve mandıra işletmelerinin sürü yönetimi, süt verim analitiği, klinik takip, finansal planlama ve tesis telemetrisini tek bir entegre platformda birleştiren yeni nesil kurumsal bir çiftlik otomasyon sistemidir.

Platform, UNIFORM-Agri ve Herdwatch gibi küresel endüstri standartlarını yerel mevzuat ve TÜRKVET entegrasyonuyla birleştirerek tarımsal işletmelerin operasyonel verimliliğini maksimize eder.

### Temel Modüller

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

### Mimari ve Güvenlik

- **Dağıtım Mimarisi:** Bu depo (`mfkfarm.github.io`), platformun şifrelenmiş ve optimize edilmiş üretim web arayüzünü (Static CDN / PWA) sunar.
- **Veri Güvenliği:** Çiftlik operasyonel veritabanları, kimlik doğrulama mekanizmaları ve API uç noktaları bağımsız, izole edilmiş sunucularda korunmaktadır.
- **Mevzuat Uyumluluğu:** 6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve ISO 27001 bilgi güvenliği prensiplerine uygun mimari.

---

<a name="english"></a>
## Overview (English)

**mFk Farm** is a next-generation enterprise livestock automation and telemetry platform engineered to unify herd record-keeping, milk yield analytics, veterinary protocols, financial cost accounting, and smart facility telemetry into a single, cohesive operating system.

Designed for dairy, beef, goat, and sheep enterprises, mFk Farm implements international farm management standards (such as UNIFORM-Agri and Herdwatch) while delivering full compliance with regulatory health records and ear-tag tracking registries.

### Core Modules

| Module | Scope and Capabilities |
|---|---|
| **Herd & Animal Management** | Optical ear-tag scanning, pedigree lineage trees, paddock transfers, and genetic inbreeding coefficient risk modeling. |
| **Milk Production Analytics** | Milking session records (morning/noon/evening), lactation yield curves, bulk tank temperature monitoring, and seasonal projections. |
| **Veterinary Health & Treatment** | Vaccination schedules, official drug administration audit log, antibiotic milk withdrawal period alerts, and ultrasound visit calendars. |
| **Reproduction & Synchronization** | Ovsynch synchronization wizard, artificial insemination tracking, pregnancy verification, dry period schedules, and calving countdowns. |
| **Finance & Cost Accounting** | Categorized cash flow statements, milk billing and payout tracking, feed expenses, and gross margin analytics. |
| **Smart Inventory & TMR Rations** | Critical feed inventory alerts, Total Mixed Ration (TMR) optimization, batch tracking, and storage location routing. |
| **Facility Telemetry & IoT** | Feed silo ultrasonic level sensors, GPS paddock geofences, rooftop solar PV monitoring, and biogas digester telemetry. |
| **Super Admin & Multi-Tenancy** | Multi-tenant organization isolation, real-time farm audit snapshot (Bento grid), role-based access control, and ghost management mode. |

### Architecture and Security

- **Deployment Model:** This repository (`mfkfarm.github.io`) serves the compiled, minified, and high-performance production frontend (Static CDN / PWA).
- **Data Protection:** Operational livestock records, financial data, and credentials reside on dedicated, isolated backend servers protected by encrypted communication channels.
- **Compliance:** Built in adherence to GDPR / KVKK data privacy and ISO 27001 information security standards.

---

## Lisans ve Fikri Mülkiyet / Licensing & Legal

Telif Hakkı &copy; 2026 **mFk Games**. Tüm hakları saklıdır. / Copyright &copy; 2026 **mFk Games**. All rights reserved.

İşbu yazılımın tasarımı, algoritmaları ve marka unsurları tescilli mülkiyete tabidir. Yazılı izin olmaksızın kaynak kodlar çoğaltılamaz, dağıtılamaz veya tersine mühendisliğe tabi tutulamaz. / All intellectual property, algorithms, user interface components, and trademarks remain the exclusive property of mFk Games.