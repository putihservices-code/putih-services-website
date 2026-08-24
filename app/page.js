"use client";

import { useState } from "react";

const WA = "https://wa.me/601123987564";

const services = [
  {
    tag: "PALING LARIS",
    title: "Aircond Cleaning Services",
    img: "/images/whatsapp-image-2026-08-17-at-9-52-54-pm.jpeg",
    alt: "Servis aircond dinding",
    prices: [
      ["1.0 HP", "RM120"],
      ["1.5 HP", "RM130"],
      ["2.0 HP", "RM150"],
    ],
    note: "* Cuci menyeluruh unit indoor — filter, coil & drain.",
  },
  {
    tag: "PEMASANGAN",
    title: "Aircond Installation",
    img: "/images/whatsapp-image-2026-08-17-at-9-52-57-pm.jpeg",
    alt: "Pemasangan aircond",
    prices: [
      ["1.0 HP", "RM350 + RM24/kaki++"],
      ["1.5 HP", "RM400 + RM26/kaki++"],
      ["2.0 HP", "RM450 + RM30/kaki++"],
    ],
    note: "* Caj paip mengikut kaki tambahan.",
  },
  {
    tag: "BAIKI PULIH",
    title: "Overhaul & Troubleshooting",
    img: "/images/whatsapp-image-2026-08-17-at-9-58-23-pm.jpeg",
    alt: "Baiki aircond",
    prices: [
      ["Indoor Overhaul (1HP)", "RM200"],
      ["Indoor Overhaul (2HP)", "RM250"],
      ["Aircond Troubleshooting", "RM80++"],
    ],
    note: "* Overhaul = penyelesaian untuk aircond bocor / menitik air.",
  },
  {
    tag: "WIRING & ELEKTRIKAL",
    title: "Wiring Point & Troubleshooting",
    img: "/images/whatsapp-image-2026-08-17-at-9-58-22-pm.jpeg",
    alt: "Wiring aircond",
    prices: [
      ["Wiring Point + Suis Aircond (2.5mm)", "RM120"],
      ["Wiring Point + Suis Aircond (4mm)", "RM200"],
      ["Wiring Troubleshooting", "RM150++"],
    ],
    note: "* Termasuk wiring point dan suis aircond.",
  },
];

const gallery = [
  ["whatsapp-2026-08-17-at-9-52-54-pm.jpeg", "Aircond Dinding pejabat"],
  ["whatsapp-2026-08-17-at-9-52-55-pm.jpeg", "Kerja servis"],
  ["whatsapp-2026-08-17-at-9-52-57-pm-1.jpeg", "Unit dipasang"],
  ["whatsapp-2026-08-17-at-9-52-58-pm.jpeg", "Pemasangan"],
  ["whatsapp-2026-08-17-at-9-52-59-pm.jpeg", "Servis chemical"],
  ["whatsapp-2026-08-17-at-9-53-00-pm.jpeg", "Kerja teknikal"],
  ["whatsapp-2026-08-17-at-9-53-02-pm.jpeg", "Penyenggaraan"],
  ["whatsapp-2026-08-17-at-9-53-04-pm.jpeg", "Pembersihan coil"],
  ["whatsapp-2026-08-17-at-9-53-06-pm.jpeg", "Troubleshooting"],
  ["whatsapp-2026-08-17-at-9-53-07-pm.jpeg", "Servis berkala"],
  ["whatsapp-2026-08-17-at-9-54-21-pm.jpeg", "Pemasangan baru"],
  ["whatsapp-2026-08-17-at-9-55-43-pm.jpeg", "Kerja luar"],
  ["whatsapp-2026-08-17-at-9-58-22-pm.jpeg", "Teknician di tangga"],
  ["whatsapp-2026-08-17-at-9-58-24-pm.jpeg", "Outdoor unit"],
  ["whatsapp-2026-08-17-at-9-58-25-pm.jpeg", "Pemeriksaan unit"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  function sendWA(e) {
    e.preventDefault();
    const n = document.getElementById("fname").value;
    const p = document.getElementById("fphone").value;
    const s = document.getElementById("fservice").value;
    const m = document.getElementById("fmsg").value;
    const txt = encodeURIComponent(
      `Hi Putih Services!\nNama: ${n}\nTelefon: ${p}\nPerkhidmatan: ${s}\n${m}`
    );
    window.open(`${WA}?text=${txt}`, "_blank");
  }

  return (
    <>
      <div className="topbar">
        🔥 Promosi: <b>Percuma isian gas 20 Psi</b> bernilai RM40 untuk setiap
        unit diservis — tempah hari ini!
      </div>

      <header>
        <div className="container">
          <nav>
            <a href="#home">
              <img src="/images/logo-2.png" alt="Putih Services" className="logo" />
            </a>
            <ul id="menu" className={menuOpen ? "open" : ""}>
              <li><a href="#home">Utama</a></li>
              <li><a href="#perkhidmatan">Perkhidmatan</a></li>
              <li><a href="#kerja-kami">Kerja Kami</a></li>
              <li><a href="#soalan">Soalan Lazim</a></li>
              <li><a href="#hubungi">Hubungi</a></li>
            </ul>
            <a
              className="btn btn-navy nav-cta"
              href={`${WA}?text=Hi%20Putih%20Services,%20saya%20nak%20tempah%20slot%20servis%20aircond`}
              target="_blank"
            >
              WhatsApp Kami
            </a>
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="container hero-inner">
          <div>
            <p className="lead">Hanya 5 Minit Tempahan Slot Melalui WhatsApp</p>
            <h1>Servis &amp; Pemasangan <span>Aircond</span> Pantas, Bersih &amp; Berpatutan</h1>
            <p className="sub">
              Dipercayai oleh ratusan pelanggan kediaman dan komersial. Harga jelas
              sebelum kerja bermula — tiada kos tersembunyi.
            </p>
            <div className="rating">⭐ <b>4.9</b> Top Rated Service · Teknologi Bersertifikat</div>
            <br />
            <a className="btn" href={`${WA}?text=Hi%20Putih%20Services,%20saya%20nak%20tempah%20slot`} target="_blank">Tempah Slot Sekarang</a>
            <a className="btn btn-outline" href="#perkhidmatan" style={{ marginLeft: 8 }}>Lihat Harga</a>
          </div>
          <div className="hero-img">
            <img src="/images/whatsapp-image-2026-08-17-at-9-58-22-pm.jpeg" alt="Juruteknik Putih Services memasang aircond" />
          </div>
        </div>
      </section>

      {/* TRUST */}
      <div className="trust">
        <div className="container trust-grid">
          <div className="trust-item">
            <div className="trust-icon">⚡</div>
            <div>
              <h3>Servis Pantas</h3>
              <p>Janji sampai dalam 24 jam. Satu unit di rumah atau banyak unit di pejabat — kami sedia membantu.</p>
            </div>
          </div>
          <div className="trust-item">
            <div className="trust-icon">🛠️</div>
            <div>
              <h3>Berpengalaman</h3>
              <p>Setiap kerja dilakukan mengikut piawaian industri dengan hasil yang selamat dan berkualiti.</p>
            </div>
          </div>
          <div className="trust-item">
            <div className="trust-icon">💰</div>
            <div>
              <h3>Harga Telus</h3>
              <p>Anda tahu jumlah sebenar sebelum kerja bermula. Tiada caj tersembunyi.</p>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section className="services" id="perkhidmatan">
        <div className="container">
          <div className="sec-head">
            <div className="eyebrow">Perkhidmatan Kami</div>
            <h2>Harga Jelas, Kerja Berkualiti</h2>
            <p>Pilih perkhidmatan yang anda perlukan. Semua harga termasuk pemeriksaan asas percuma.</p>
          </div>
          <div className="cards">
            {services.map((sv, i) => (
              <div className="card" key={i}>
                <div className="card-img"><img src={sv.img} alt={sv.alt} /></div>
                <div className="card-body">
                  <span className="tag">{sv.tag}</span>
                  <h3>{sv.title}</h3>
                  <ul className="price-list">
                    {sv.prices.map(([label, price], j) => (
                      <li key={j}><span>{label}</span><span>{price}</span></li>
                    ))}
                  </ul>
                  <p className="note">{sv.note}</p>
                  <a className="btn" href={WA} target="_blank">Tempah Sekarang</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="cara">
        <div className="container">
          <div className="sec-head">
            <div className="eyebrow">Cara Tempahan</div>
            <h2>Tempah Slot Hanya Dalam 5 Minit</h2>
            <p>Servis &amp; pemasangan aircond pantas. Kami akan balas anda secepat mungkin.</p>
          </div>
          <div className="steps">
            <div>
              <div className="step-num">1</div>
              <h3>WhatsApp Kami</h3>
              <p>Kami balas WhatsApp anda dengan segera pada waktu bekerja.</p>
            </div>
            <div>
              <div className="step-num">2</div>
              <h3>Pilihan dan Lokasi</h3>
              <p>Kongsi maklumat perkhidmatan yang diperlukan dan pin lokasi anda.</p>
            </div>
            <div>
              <div className="step-num">3</div>
              <h3>Selesai!</h3>
              <p>Juruteknik kami akan tiba di lokasi anda mengikut janji masa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-sec" id="kerja-kami">
        <div className="container">
          <div className="sec-head">
            <div className="eyebrow">Portfolio</div>
            <h2>Kerja-Kerja Kami</h2>
            <p>Kediaman atau komersial — kami berjanji memberikan perkhidmatan terbaik setiap kali.</p>
          </div>
          <div className="gallery">
            {gallery.map(([file, alt], i) => (
              <img key={i} src={`/images/${file}`} alt={alt} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-band">
        <div className="container">
          <h2>Harga Perkhidmatan Jelas, Janji Sampai Dalam 24 Jam!</h2>
          <p>Slot kami terhad setiap hari — tempah awal untuk elakkan kecewa.</p>
          <a className="btn btn-navy" href={`${WA}?text=Hi%20Putih%20Services,%20saya%20nak%20tempah%20slot`} target="_blank">
            💬 WhatsApp Kami Sekarang
          </a>
        </div>
      </div>

      {/* FAQ */}
      <section id="soalan">
        <div className="container">
          <div className="sec-head">
            <div className="eyebrow">Soalan Lazim</div>
            <h2>Kenapa Aircond Saya Tak Sejuk?</h2>
          </div>
          <div className="faq">
            <details open>
              <summary>Gas aircond kurang atau habis</summary>
              <p>Tanda: angin keluar tapi tidak sejuk langsung. Punca: kebocoran pada paip atau sambungan gas. Solusi: isi semula gas &amp; semak kebocoran.</p>
            </details>
            <details>
              <summary>Penapis (filter) kotor</summary>
              <p>Tanda: aliran angin lemah &amp; kurang sejuk. Punca: debu menutup filter. Solusi: cuci filter setiap 1–2 bulan.</p>
            </details>
            <details>
              <summary>Evaporator atau condenser coil kotor</summary>
              <p>Tanda: aircond hidup tapi kurang sejuk. Solusi: servis chemical cleaning untuk pembersihan mendalam.</p>
            </details>
            <details>
              <summary>Aircond bocor / air menitik</summary>
              <p>Punca biasa: saluran paip tersumbat oleh habuk, lendir atau kulat. Solusi: paip perlu dicuci atau ditiup dengan tekanan tinggi.</p>
            </details>
            <details>
              <summary>Bau busuk dari unit aircond</summary>
              <p>Punca: kulat, lendir atau air bertakung dalam tray. Solusi: servis chemical cleaning biasanya menyelesaikan masalah.</p>
            </details>
            <details>
              <summary>Bila perlu buat overhaul?</summary>
              <p>Jika aircond langsung tak sejuk walaupun sudah diservis, masih bocor selepas dicuci, atau tidak pernah diservis lebih 2 tahun.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="hubungi">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="eyebrow">Hubungi Kami</div>
            <h3 style={{ fontSize: "1.7rem", margin: "8px 0 20px" }}>Get A Free Quotation</h3>
            <div className="contact-line">📞 <span><b>Telefon / WhatsApp:</b><br />+60 11-239 87564</span></div>
            <div className="contact-line">🕐 <span><b>Waktu Operasi:</b><br />Isnin – Sabtu, 9:00 pagi – 6:00 petang</span></div>
            <div className="contact-line">📍 <span><b>Kawasan Liputan:</b><br />Lembah Klang, Putrajaya &amp; Cyberjaya</span></div>
            <div className="contact-line">✉️ <span><b>Email:</b><br />hello@putihservices.my</span></div>
          </div>
          <form onSubmit={sendWA}>
            <input type="text" id="fname" placeholder="Nama Anda" required />
            <input type="tel" id="fphone" placeholder="Nombor Telefon" required />
            <select id="fservice" required defaultValue="">
              <option value="" disabled>Pilih Perkhidmatan</option>
              <option>Servis Aircond Dinding</option>
              <option>Aircond Cleaning Services</option>
              <option>Aircond Indoor Overhaul</option>
              <option>Aircond Installation</option>
              <option>Wiring Point / Suis Aircond</option>
              <option>Wiring Troubleshooting</option>
              <option>Aircond Troubleshooting</option>
              <option>Lain-lain</option>
            </select>
            <textarea id="fmsg" rows={4} placeholder="Mesej anda (lokasi, bilangan unit, dll.)"></textarea>
            <button className="btn" type="submit" style={{ width: "100%" }}>Hantar Melalui WhatsApp ➜</button>
          </form>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <img src="/images/logo-2.png" alt="Putih Services" style={{ height: 60, marginBottom: 14 }} />
              <p>Pakar servis, pemasangan dan baiki aircond untuk kediaman dan komersial. Pantas, bersih, harga telus.</p>
            </div>
            <div>
              <h4>Pautan</h4>
              <ul>
                <li><a href="#perkhidmatan">Perkhidmatan</a></li>
                <li><a href="#kerja-kami">Kerja Kami</a></li>
                <li><a href="#soalan">Soalan Lazim</a></li>
                <li><a href="#hubungi">Hubungi</a></li>
              </ul>
            </div>
            <div>
              <h4>Perkhidmatan</h4>
              <ul>
                <li>Servis / Cleaning Aircond</li>
                <li>Overhaul Aircond</li>
                <li>Pemasangan Aircond</li>
                <li>Wiring Point &amp; Troubleshooting</li>
              </ul>
            </div>
          </div>
          <div className="copyright">© 2026 Putih Services. Hak Cipta Terpelihara.</div>
        </div>
      </footer>

      <a
        className="wa-float"
        href={`${WA}?text=Hi%20Putih%20Services!`}
        target="_blank"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 32 32"><path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.6.8 5 2.3 7L4 29l7.3-2.3c1.9 1 4 1.6 6.2 1.6h.5c6.6 0 12-5.3 12-11.9S22.6 3 16 3zm5.9 16.9c-.3.8-1.7 1.6-2.4 1.6-.6.1-1.4.1-2.2-.1-.5-.2-1.2-.4-2-.8-3.6-1.5-5.9-5.1-6.1-5.4-.2-.2-1.5-1.9-1.5-3.7 0-1.7.9-2.6 1.2-3 .3-.3.7-.4 1-.4h.7c.2 0 .5-.1.8.6.3.8 1.1 2.6 1.2 2.8.1.2.2.4 0 .7-.1.2-.2.4-.4.7-.2.2-.4.5-.6.6-.2.2-.4.4-.2.8.2.4 1 1.6 2.1 2.6 1.5 1.3 2.7 1.7 3.1 1.9.4.2.6.2.8-.1.2-.3.9-1.1 1.2-1.4.3-.4.5-.3.9-.2.4.1 2.4 1.1 2.8 1.3.4.2.7.3.8.5.1.2.1 1-.2 1.9z"/></svg>
      </a>
    </>
  );
}
