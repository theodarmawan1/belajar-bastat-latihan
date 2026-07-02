const EXAMS_DATA = [
  {
    id: "uts-asli-2025",
    title: "UTS 2025 (Soal Asli)",
    category: "uts",
    fileName: "Soal Asli UTS 2025.pdf",
    description: "Soal Ujian Tengah Semester Asli tahun 2025 tanpa kunci jawaban bawaan. Di bawah ini adalah pembahasan lengkap dan terperinci yang dibuat sesuai format solusi standar.",
    questions: [
      {
        id: "uts-asli-2025-q1",
        number: "1",
        materi: "Analisis Box Plot",
        poin: 5,
        questionHtml: `
          <p>Berikut ini box plot data nilai dari 15 mahasiswa.</p>
          <div class="boxplot-visualization-container">
            <div id="interactive-boxplot"></div>
          </div>
          <p>Tuliskan 5 Summary Statisticsnya! (5 Poin)</p>
        `,
        solutionHtml: `
          <p>Berdasarkan pembacaan grafik Box Plot di atas, 5-Number Summary (Lima Serangkai) dari data nilai mahasiswa tersebut adalah:</p>
          <div class="table-responsive">
            <table class="table-styled">
              <thead>
                <tr>
                  <th>Statistik Ringkasan</th>
                  <th>Simbol</th>
                  <th>Nilai Pembacaan</th>
                  <th>Deskripsi / Penjelasan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Nilai Minimum</strong></td>
                  <td>\\(Min\\)</td>
                  <td class="text-center font-bold text-teal">22</td>
                  <td>Ujung garis batas bawah (whisker bawah)</td>
                </tr>
                <tr>
                  <td><strong>Quartile 1 (Bawah)</strong></td>
                  <td>\\(Q_1\\)</td>
                  <td class="text-center font-bold text-teal">52</td>
                  <td>Sisi bawah kotak biru (25% data berada di bawah nilai ini)</td>
                </tr>
                <tr>
                  <td><strong>Median (Tengah)</strong></td>
                  <td>\\(Q_2\\)</td>
                  <td class="text-center font-bold text-teal">62</td>
                  <td>Garis horizontal di dalam kotak biru (50% data berada di bawah nilai ini)</td>
                </tr>
                <tr>
                  <td><strong>Quartile 3 (Atas)</strong></td>
                  <td>\\(Q_3\\)</td>
                  <td class="text-center font-bold text-teal">82</td>
                  <td>Sisi atas kotak biru (75% data berada di bawah nilai ini)</td>
                </tr>
                <tr>
                  <td><strong>Nilai Maksimum</strong></td>
                  <td>\\(Max\\)</td>
                  <td class="text-center font-bold text-teal">96</td>
                  <td>Ujung garis batas atas (whisker atas)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="note-box">
            <strong>Catatan Analisis Tambahan:</strong>
            <ul>
              <li><strong>Rentang (Range):</strong> \\(Max - Min = 96 - 22 = 74\\)</li>
              <li><strong>Rentang Interkuartil (IQR):</strong> \\(Q_3 - Q_1 = 82 - 52 = 30\\)</li>
              <li><strong>Simetri Sebaran:</strong> Kotak terbagi menjadi dua bagian oleh median. Jarak \\(Median - Q_1 = 10\\) sedangkan jarak \\(Q_3 - Median = 20\\). Karena kotak bagian atas lebih tinggi dan whisker atas lebih panjang dari whisker bawah, sebaran nilai ini cenderung menceng ke kanan (positively skewed).</li>
            </ul>
          </div>
        `
      },
      {
        id: "uts-asli-2025-q2",
        number: "2",
        materi: "Ukuran Deskriptif Numerik",
        poin: 20,
        questionHtml: `
          <p>Diberikan data berikut (20 poin):</p>
          <div class="data-badge-container">
            <span class="data-badge">2</span>
            <span class="data-badge">3</span>
            <span class="data-badge">5</span>
            <span class="data-badge">5</span>
            <span class="data-badge">5</span>
            <span class="data-badge">8</span>
            <span class="data-badge">9</span>
            <span class="data-badge">10</span>
            <span class="data-badge">34</span>
            <span class="data-badge">56</span>
            <span class="data-badge">72</span>
            <span class="data-badge">81</span>
            <span class="data-badge">86</span>
            <span class="data-badge">90</span>
            <span class="data-badge">92</span>
          </div>
          <ol type="a" class="list-ol">
            <li>Hitunglah rata-rata, median dan modusnya! (5 poin)</li>
            <li>Hitunglah standar deviasinya! (10 poin)</li>
            <li>Dari hasil perhitungan yang anda lakukan, bagaimana distribusi datanya? Apakah ada kecenderungan distribusi? (5 poin)</li>
          </ol>
        `,
        solutionHtml: `
          <h4>a. Perhitungan Rata-rata, Median, dan Modus</h4>
          <p><strong>1. Rata-rata (Mean - \\(\\bar{x}\\)):</strong></p>
          <p>Jumlah data (\\(n\\)) = 15. Jumlah total seluruh nilai (\\(\\sum x_i\\)):</p>
          \\[\\sum x_i = 2 + 3 + 5 + 5 + 5 + 8 + 9 + 10 + 34 + 56 + 72 + 81 + 86 + 90 + 92 = 558\\]
          \\[\\bar{x} = \\frac{\\sum x_i}{n} = \\frac{558}{15} = 37.2\\]
          
          <p><strong>2. Median (Nilai Tengah):</strong></p>
          <p>Karena \\(n = 15\\) (ganjil), median adalah nilai pada urutan ke-</p>
          \\[Posisi\\ Median = \\frac{n + 1}{2} = \\frac{15 + 1}{2} = 8\\]
          <p>Data ke-8 dari data yang sudah terurut adalah <strong>10</strong>.</p>
          
          <p><strong>3. Modus (Nilai Paling Sering Muncul):</strong></p>
          <p>Nilai <strong>5</strong> muncul sebanyak 3 kali (frekuensi tertinggi), sedangkan nilai lainnya hanya muncul 1 kali. Maka Modus = <strong>5</strong>.</p>

          <hr class="divider">

          <h4>b. Perhitungan Standar Deviasi Sampel (\\(s\\))</h4>
          <p>Gunakan rumus standar deviasi sampel:</p>
          \\[s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}\\]
          <p>Untuk mempermudah perhitungan jumlah kuadrat selisih (\\(SS\\)), kita susun tabel berikut:</p>
          
          <div class="table-responsive">
            <table class="table-styled">
              <thead>
                <tr>
                  <th class="text-center">\\(i\\)</th>
                  <th class="text-center">\\(x_i\\)</th>
                  <th class="text-center">\\(x_i - \\bar{x}\\) (di mana \\(\\bar{x} = 37.2\\))</th>
                  <th class="text-center">\\((x_i - \\bar{x})^2\\)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td class="text-center">1</td><td class="text-center">2</td><td class="text-center">-35.2</td><td class="text-center">1239.04</td></tr>
                <tr><td class="text-center">2</td><td class="text-center">3</td><td class="text-center">-34.2</td><td class="text-center">1169.64</td></tr>
                <tr><td class="text-center">3</td><td class="text-center">5</td><td class="text-center">-32.2</td><td class="text-center">1036.84</td></tr>
                <tr><td class="text-center">4</td><td class="text-center">5</td><td class="text-center">-32.2</td><td class="text-center">1036.84</td></tr>
                <tr><td class="text-center">5</td><td class="text-center">5</td><td class="text-center">-32.2</td><td class="text-center">1036.84</td></tr>
                <tr><td class="text-center">6</td><td class="text-center">8</td><td class="text-center">-29.2</td><td class="text-center">852.64</td></tr>
                <tr><td class="text-center">7</td><td class="text-center">9</td><td class="text-center">-28.2</td><td class="text-center">795.24</td></tr>
                <tr><td class="text-center">8</td><td class="text-center">10</td><td class="text-center">-27.2</td><td class="text-center">739.84</td></tr>
                <tr><td class="text-center">9</td><td class="text-center">34</td><td class="text-center">-3.2</td><td class="text-center">10.24</td></tr>
                <tr><td class="text-center">10</td><td class="text-center">56</td><td class="text-center">18.8</td><td class="text-center">353.44</td></tr>
                <tr><td class="text-center">11</td><td class="text-center">72</td><td class="text-center">34.8</td><td class="text-center">1211.04</td></tr>
                <tr><td class="text-center">12</td><td class="text-center">81</td><td class="text-center">43.8</td><td class="text-center">1918.44</td></tr>
                <tr><td class="text-center">13</td><td class="text-center">86</td><td class="text-center">48.8</td><td class="text-center">2381.44</td></tr>
                <tr><td class="text-center">14</td><td class="text-center">90</td><td class="text-center">52.8</td><td class="text-center">2787.84</td></tr>
                <tr><td class="text-center">15</td><td class="text-center">92</td><td class="text-center">54.8</td><td class="text-center">3003.04</td></tr>
                <tr class="font-bold border-t-2">
                  <td class="text-center">\\(\\Sigma\\)</td>
                  <td class="text-center">558</td>
                  <td class="text-center">0.0</td>
                  <td class="text-center text-teal">19572.40</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p><strong>1. Varians Sampel (\\(s^2\\)):</strong></p>
          \\[s^2 = \\frac{\\sum (x_i - \\bar{x})^2}{n - 1} = \\frac{19572.4}{15 - 1} = \\frac{19572.4}{14} \\approx 1398.0286\\]
          
          <p><strong>2. Standar Deviasi Sampel (\\(s\\)):</strong></p>
          \\[s = \\sqrt{s^2} = \\sqrt{1398.0286} \\approx 37.39\\ \\text{satuan}\\]

          <hr class="divider">

          <h4>c. Analisis Distribusi Data</h4>
          <p>Berdasarkan hasil perhitungan di atas, distribusi data ini cenderung <strong>Menceng Positif (Menceng ke Kanan / Positively Skewed)</strong>.</p>
          <p><strong>Pembuktian & Penjelasan:</strong></p>
          <ol>
            <li><strong>Hubungan Tiga Ukuran Pemusatan:</strong> \\(Mean\\ (37.2) > Median\\ (10) > Modus\\ (5)\\). Rata-rata yang besar diakibatkan oleh beberapa nilai tinggi yang menarik ekor distribusi ke arah kanan.</li>
            <li><strong>Karakteristik Sebaran:</strong> Mayoritas data berkonsentrasi pada kisaran nilai rendah (2 hingga 10). Sebaliknya, terdapat nilai-nilai besar (34 hingga 92) yang bertindak sebagai penarik ekor grafik ke arah kanan.</li>
          </ol>
        `
      },
      {
        id: "uts-asli-2025-q3",
        number: "3",
        materi: "Tabel Kontingensi & Probabilitas",
        poin: 25,
        questionHtml: `
          <p>Sebuah studi dilakukan terhadap 500 orang untuk mengevaluasi efektivitas sebuah tes Covid-19. Hasil tes dicatat, dan kemudian status Covid sebenarnya dari setiap orang diverifikasi.</p>
          <p><strong>Informasi yang Diketahui:</strong></p>
          <ol class="list-decimal">
            <li>Jumlah total sampel: 500 orang.</li>
            <li>Hasil tes yang terobservasi:
              <ul>
                <li>Jumlah orang dengan hasil tes Positif = 300 orang.</li>
                <li>Jumlah orang dengan hasil tes Negatif = 200 orang.</li>
              </ul>
            </li>
            <li>Informasi tambahan mengenai performa tes setelah verifikasi:
              <ul>
                <li>Di antara mereka yang hasil tesnya Positif, diketahui 90% benar-benar memiliki Covid.</li>
                <li>Di antara mereka yang hasil tesnya Negatif, diketahui 80% benar-benar tidak memiliki Covid.</li>
              </ul>
            </li>
          </ol>
          <p><strong>Pertanyaan:</strong></p>
          <ol type="a" class="list-ol">
            <li>Lengkapi Tabel Kontingensi 2x2 berikut berdasarkan informasi di atas. Tabel ini membandingkan Status Covid Sebenarnya dengan Hasil Tes.</li>
            <li>Dari 500 orang tersebut, berapa peluang seseorang dipilih secara acak memiliki hasil tes Positif DAN benar-benar Punya Covid?</li>
            <li>Berapa peluang seseorang dipilih secara acak memiliki hasil tes Positif?</li>
            <li>Jika diketahui hasil tes seseorang adalah Positif, berapa peluang orang tersebut memang benar-benar Punya Covid?</li>
          </ol>
        `,
        solutionHtml: `
          <h4>a. Pengisian Tabel Kontingensi 2x2</h4>
          <ul>
            <li><strong>Hasil tes Positif (300 orang):</strong>
              <ul>
                <li><strong>True Positive (TP):</strong> Punya Covid = \\(90\\% \\times 300 = 270\\) orang.</li>
                <li><strong>False Positive (FP):</strong> Tidak Punya Covid = \\(10\\% \\times 300 = 30\\) orang.</li>
              </ul>
            </li>
            <li><strong>Hasil tes Negatif (200 orang):</strong>
              <ul>
                <li><strong>True Negative (TN):</strong> Tidak Punya Covid = \\(80\\% \\times 200 = 160\\) orang.</li>
                <li><strong>False Negative (FN):</strong> Punya Covid = \\(20\\% \\times 200 = 40\\) orang.</li>
              </ul>
            </li>
          </ul>

          <div class="table-responsive">
            <table class="table-styled">
              <thead>
                <tr>
                  <th>Status Covid Sebenarnya</th>
                  <th class="text-center">Hasil Tes Positif</th>
                  <th class="text-center">Hasil Tes Negatif</th>
                  <th class="text-center">Total (Status Sebenarnya)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Punya Covid</strong></td>
                  <td class="text-center font-bold text-teal">270 (TP)</td>
                  <td class="text-center">40 (FN)</td>
                  <td class="text-center font-bold">310</td>
                </tr>
                <tr>
                  <td><strong>Tidak Punya Covid</strong></td>
                  <td class="text-center">30 (FP)</td>
                  <td class="text-center font-bold text-teal">160 (TN)</td>
                  <td class="text-center font-bold">190</td>
                </tr>
                <tr class="font-bold border-t-2">
                  <td><strong>Total (Hasil Tes)</strong></td>
                  <td class="text-center">300</td>
                  <td class="text-center">200</td>
                  <td class="text-center text-indigo">500</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr class="divider">

          <h4>b. Peluang Hasil Tes Positif DAN Punya Covid (Probabilitas Joint)</h4>
          \\[P(\\text{Positif} \\cap \\text{Punya Covid}) = \\frac{TP}{Total} = \\frac{270}{500} = 0.54\\ \\text{(atau } 54\\%\\text{)}\\]

          <hr class="divider">

          <h4>c. Peluang Hasil Tes Positif (Probabilitas Marginal)</h4>
          \\[P(\\text{Positif}) = \\frac{Total\\ Positif}{Total} = \\frac{300}{500} = 0.60\\ \\text{(atau } 60\\%\\text{)}\\]

          <hr class="divider">

          <h4>d. Peluang Punya Covid Bila Tes Diketahui Positif (Probabilitas Kondisional)</h4>
          \\[P(\\text{Punya Covid} \\mid \\text{Positif}) = \\frac{P(\\text{Punya Covid} \\cap \\text{Positif})}{P(\\text{Positif})} = \\frac{270}{300} = 0.90\\ \\text{(atau } 90\\%\\text{)}\\]
        `
      },
      {
        id: "uts-asli-2025-q4",
        number: "4",
        materi: "Distribusi Binomial",
        poin: 20,
        questionHtml: `
          <p>Bruno adalah seorang pemain bola basket yang handal dalam lemparan bebas (free throw). Diketahui bahwa peluang Bruno berhasil memasukkan bola pada setiap kesempatan free throw adalah 75% (atau 0.75). Dalam sebuah pertandingan, Bruno mendapatkan 8 kali kesempatan free throw. Asumsikan bahwa hasil dari setiap lemparan free throw tidak mempengaruhi hasil lemparan lainnya (independen).</p>
          <ol type="a" class="list-ol">
            <li>Identifikasilah jenis distribusi probabilitas yang paling tepat untuk menggambarkan jumlah free throw yang berhasil dilakukan Bruno dalam 8 kesempatan tersebut. Jelaskan mengapa distribusi tersebut cocok! (5 Poin)</li>
            <li>Hitunglah probabilitas Bruno berhasil memasukkan bola tepat 6 kali dari 8 kesempatan free throw! (5 Poin)</li>
            <li>Hitunglah probabilitas Bruno berhasil memasukkan bola setidaknya 6 kali dari 8 kesempatan free throw! (10 Poin)</li>
          </ol>
        `,
        solutionHtml: `
          <h4>a. Identifikasi dan Justifikasi Distribusi Probabilitas</h4>
          <p>Distribusi probabilitas yang paling tepat untuk kasus ini adalah <strong>Distribusi Binomial</strong> karena:</p>
          <ol>
            <li>Banyaknya percobaan tetap (\\(n = 8\\)).</li>
            <li>Setiap percobaan hanya memiliki dua kemungkinan hasil: Sukses (masuk) atau Gagal (meleset).</li>
            <li>Peluang sukses (\\(p = 0.75\\)) konstan pada setiap percobaan.</li>
            <li>Setiap lemparan bersifat independen.</li>
          </ol>

          <hr class="divider">

          <h4>b. Perhitungan Probabilitas Tepat 6 Lemparan Sukses (\\(P(X = 6)\\))</h4>
          \\[P(X = k) = C(n, k) \\times p^k \\times q^{n-k}\\]
          \\[P(X = 6) = C(8, 6) \\times (0.75)^6 \\times (0.25)^{8-6}\\]
          \\[C(8, 6) = \\frac{8!}{6! \\cdot 2!} = 28\\]
          \\[P(X = 6) = 28 \\times (0.75)^6 \\times (0.25)^2 = 28 \\times 0.1779785 \\times 0.0625 \\approx 0.3115\\ \\text{(atau } 31.15\\%\\text{)}\\]

          <hr class="divider">

          <h4>c. Perhitungan Probabilitas Setidaknya 6 Lemparan Sukses (\\(P(X \\ge 6)\\))</h4>
          \\[P(X \\ge 6) = P(X = 6) + P(X = 7) + P(X = 8)\\]
          <ul>
            <li>\\(P(X = 6) \\approx 0.3115\\)</li>
            <li>\\(P(X = 7) = C(8, 7) \\times (0.75)^7 \\times (0.25)^1 = 8 \\times 0.1334839 \\times 0.25 \\approx 0.2670\\)</li>
            <li>\\(P(X = 8) = C(8, 8) \\times (0.75)^8 \\times (0.25)^0 = 1 \\times 0.1001129 \\times 1 \\approx 0.1001\\)</li>
          </ul>
          \\[P(X \\ge 6) \\approx 0.3115 + 0.2670 + 0.1001 = 0.6785\\ \\text{(atau } 67.85\\%\\text{)}\\]
        `
      },
      {
        id: "uts-asli-2025-q5",
        number: "5",
        materi: "Distribusi Normal",
        poin: 30,
        questionHtml: `
          <p>Nilai Ujian Tengah Semester (UTS) mata kuliah Statistika yang diajar oleh Einstein diketahui mengikuti distribusi normal. Rata-rata nilai (\\(\\mu\\)) mahasiswa adalah 75, dan varians (\\(\\sigma^2\\)) nilainya adalah 16.</p>
          <ol type="a" class="list-ol">
            <li>Hitunglah probabilitas seorang mahasiswa yang dipilih secara acak mendapatkan nilai lebih dari 65? (\\(P(X > 65)\\))</li>
            <li>Hitunglah probabilitas seorang mahasiswa yang dipilih secara acak mendapatkan nilai antara 70 dan 100? (\\(P(70 < X < 100)\\))</li>
            <li>Einstein berencana memberikan hadiah kepada 10% mahasiswa dengan nilai tertinggi. Berapakah nilai minimum yang harus diperoleh seorang mahasiswa agar termasuk dalam kelompok 10% tertinggi tersebut dan berhak mendapatkan hadiah?</li>
          </ol>
        `,
        solutionHtml: `
          <p><strong>Informasi:</strong> \\(\\mu = 75\\), \\(\\sigma^2 = 16 \\rightarrow \\sigma = 4\\).</p>
          
          <h4>a. Probabilitas Mahasiswa Mendapat Nilai Lebih dari 65 (\\(P(X > 65)\\))</h4>
          \\[Z = \\frac{X - \\mu}{\\sigma} = \\frac{65 - 75}{4} = -2.5\\]
          \\[P(Z > -2.5) = 1 - P(Z \\le -2.5) = 1 - 0.0062 = 0.9938\\ \\text{(atau } 99.38\\%\\text{)}\\]

          <hr class="divider">

          <h4>b. Probabilitas Mahasiswa Mendapat Nilai Antara 70 dan 100 (\\(P(70 < X < 100)\\))</h4>
          \\[Z_1 = \\frac{70 - 75}{4} = -1.25\\ ;\\ Z_2 = \\frac{100 - 75}{4} = 6.25\\]
          \\[P(-1.25 < Z < 6.25) = P(Z < 6.25) - P(Z < -1.25) \\approx 1.0000 - 0.1056 = 0.8944\\ \\text{(atau } 89.44\\%\\text{)}\\]

          <hr class="divider">

          <h4>c. Nilai Minimum untuk Kelompok 10% Tertinggi (Top 10%)</h4>
          <p>Area kumulatif kiri = \\(1 - 0.10 = 0.90\\). Dari tabel Z standar, nilai Z terdekat adalah <strong>1.28</strong>.</p>
          \\[X = \\mu + Z \\times \\sigma = 75 + (1.28 \\times 4) = 80.12\\]
          <p>Batas nilai minimum agar berhak mendapatkan hadiah adalah <strong>80.12</strong>.</p>
        `
      }
    ]
  },
  {
    id: "uts-latihan-2025",
    title: "UTS 2025 (Latihan)",
    category: "uts",
    fileName: "Soal_Latihan_UTS_Basic_Statistics_2025.pdf",
    description: "Soal Latihan Ujian Tengah Semester Statistika Dasar tahun 2025 yang dilengkapi dengan pembahasan lengkap. Topik meliputi jenis variabel, interpretasi data kategorikal, deskripsi numerik, probabilitas bersyarat, binomial, dan normal.",
    questions: [
      {
        id: "uts-latihan-2025-q1",
        number: "1",
        materi: "Konsep Dasar & Klasifikasi Variabel",
        poin: 15,
        questionHtml: `
          <p>Sebuah supermarket ingin menganalisis data pelanggannya. Beberapa data yang dikumpulkan adalah:</p>
          <ol type="a" class="list-ol">
            <li>Jumlah item yang dibeli per transaksi.</li>
            <li>Metode pembayaran (Cash, Debit Card, Credit Card, E-Wallet).</li>
            <li>Total waktu (menit) yang dihabiskan pelanggan di dalam toko.</li>
            <li>Tingkat kepuasan pelanggan (Skala: Sangat Tidak Puas, Tidak Puas, Netral, Puas, Sangat Puas).</li>
            <li>Suhu (&deg;C) bagian minuman dingin.</li>
          </ol>
          <p>Untuk setiap data (a-e):</p>
          <ol class="list-decimal">
            <li>Identifikasi apakah variabel tersebut Kategorikal atau Numerik.</li>
            <li>Jika Numerik, apakah Diskrit atau Kontinu?</li>
            <li>Tentukan Skala Pengukuran yang paling tepat (Nominal, Ordinal, Interval, Ratio).</li>
          </ol>
        `,
        solutionHtml: `
          <div class="table-responsive">
            <table class="table-styled">
              <thead>
                <tr>
                  <th>Variabel</th>
                  <th>1. Jenis Variabel</th>
                  <th>2. Sifat (Jika Numerik)</th>
                  <th>3. Skala Pengukuran</th>
                  <th>Penjelasan Ringkas</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>a. Jumlah item</strong></td>
                  <td><span class="badge badge-success">Numerik</span></td>
                  <td>Diskrit</td>
                  <td><strong>Ratio</strong></td>
                  <td>Diperoleh dari menghitung (bilangan bulat), memiliki nol mutlak.</td>
                </tr>
                <tr>
                  <td><strong>b. Metode pembayaran</strong></td>
                  <td><span class="badge badge-info">Kategorikal</span></td>
                  <td>-</td>
                  <td><strong>Nominal</strong></td>
                  <td>Kategori nama pilihan pembayaran, tidak ada urutan tingkatan intrinsik.</td>
                </tr>
                <tr>
                  <td><strong>c. Total waktu (menit)</strong></td>
                  <td><span class="badge badge-success">Numerik</span></td>
                  <td>Kontinu</td>
                  <td><strong>Ratio</strong></td>
                  <td>Diperoleh dari pengukuran waktu, memiliki nol mutlak.</td>
                </tr>
                <tr>
                  <td><strong>d. Tingkat kepuasan</strong></td>
                  <td><span class="badge badge-info">Kategorikal</span></td>
                  <td>-</td>
                  <td><strong>Ordinal</strong></td>
                  <td>Memiliki tingkatan kepuasan yang logis (Puas > Netral > Tidak Puas).</td>
                </tr>
                <tr>
                  <td><strong>e. Suhu (&deg;C)</strong></td>
                  <td><span class="badge badge-success">Numerik</span></td>
                  <td>Kontinu</td>
                  <td><strong>Interval</strong></td>
                  <td>Suhu diukur, titik 0&deg;C bukan berarti tidak memiliki panas (ada nol relatif).</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        id: "uts-latihan-2025-q2",
        number: "2",
        materi: "Data Kategorikal & Probabilitas Dasar",
        poin: 20,
        questionHtml: `
          <p>Data berikut menunjukkan jenis kendaraan dan warna yang terjual di sebuah dealer selama sebulan:</p>
          <div class="table-responsive">
            <table class="table-styled max-w-lg mx-auto">
              <thead>
                <tr><th>Merk</th><th>Warna</th><th>Merk</th><th>Warna</th></tr>
              </thead>
              <tbody>
                <tr><td>Toyota</td><td>Hitam</td><td>Honda</td><td>Putih</td></tr>
                <tr><td>Honda</td><td>Merah</td><td>Toyota</td><td>Silver</td></tr>
                <tr><td>Suzuki</td><td>Putih</td><td>Honda</td><td>Hitam</td></tr>
                <tr><td>Toyota</td><td>Hitam</td><td>Suzuki</td><td>Hitam</td></tr>
                <tr><td>Honda</td><td>Silver</td><td>Toyota</td><td>Putih</td></tr>
                <tr><td>Suzuki</td><td>Merah</td><td>Honda</td><td>Putih</td></tr>
                <tr><td>Toyota</td><td>Putih</td><td>Suzuki</td><td>Hitam</td></tr>
                <tr><td>Honda</td><td>Hitam</td><td>Toyota</td><td>Hitam</td></tr>
                <tr><td>Toyota</td><td>Putih</td><td>Suzuki</td><td>Putih</td></tr>
                <tr><td>Suzuki</td><td>Putih</td><td>Honda</td><td>Silver</td></tr>
              </tbody>
            </table>
          </div>
          <ol type="a" class="list-ol">
            <li>Buatlah Tabel Summary (Frekuensi dan Persentase) untuk variabel Merk!</li>
            <li>Buatlah Tabel Kontingensi (Frekuensi) yang menunjukkan hubungan antara Merk dan Warna!</li>
            <li>Merk apa yang paling banyak terjual? Warna apa yang paling populer?</li>
            <li>Berapa persentase mobil Honda berwarna Hitam dari seluruh penjualan?</li>
            <li>Jika dipilih secara acak satu mobil yang terjual, berapa peluang mobil tersebut adalah Toyota atau berwarna Silver?</li>
          </ol>
        `,
        solutionHtml: `
          <h4>a. Tabel Summary (Merk)</h4>
          <div class="table-responsive">
            <table class="table-styled max-w-sm mx-auto">
              <thead>
                <tr><th>Merk</th><th class="text-center">Frekuensi</th><th class="text-center">Persentase</th></tr>
              </thead>
              <tbody>
                <tr><td>Toyota</td><td class="text-center">8</td><td class="text-center">40%</td></tr>
                <tr><td>Honda</td><td class="text-center">6</td><td class="text-center">30%</td></tr>
                <tr><td>Suzuki</td><td class="text-center">6</td><td class="text-center">30%</td></tr>
                <tr class="font-bold"><td>Total</td><td class="text-center">20</td><td class="text-center">100%</td></tr>
              </tbody>
            </table>
          </div>

          <hr class="divider">

          <h4>b. Tabel Kontingensi (Merk vs Warna)</h4>
          <div class="table-responsive">
            <table class="table-styled">
              <thead>
                <tr>
                  <th>Merk / Warna</th>
                  <th class="text-center">Hitam</th>
                  <th class="text-center">Merah</th>
                  <th class="text-center">Putih</th>
                  <th class="text-center">Silver</th>
                  <th class="text-center font-bold">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Toyota</strong></td>
                  <td class="text-center">4</td>
                  <td class="text-center">0</td>
                  <td class="text-center">2</td>
                  <td class="text-center">2</td>
                  <td class="text-center font-bold">8</td>
                </tr>
                <tr>
                  <td><strong>Honda</strong></td>
                  <td class="text-center">3</td>
                  <td class="text-center">2</td>
                  <td class="text-center">2</td>
                  <td class="text-center">2</td>
                  <td class="text-center font-bold">9</td>
                </tr>
                <tr>
                  <td><strong>Suzuki</strong></td>
                  <td class="text-center">1</td>
                  <td class="text-center">2</td>
                  <td class="text-center">2</td>
                  <td class="text-center">1</td>
                  <td class="text-center font-bold">5</td>
                </tr>
                <tr class="font-bold">
                  <td>Total</td>
                  <td class="text-center">8</td>
                  <td class="text-center">6</td>
                  <td class="text-center">6</td>
                  <td class="text-center">5</td>
                  <td class="text-center text-indigo">22</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr class="divider">

          <h4>c. Paling Populer</h4>
          <ul>
            <li><strong>Merk Terlaris:</strong> <strong>Honda</strong> (9 mobil).</li>
            <li><strong>Warna Terpopuler:</strong> <strong>Hitam</strong> (8 mobil).</li>
          </ul>

          <hr class="divider">

          <h4>d. Persentase Honda Hitam</h4>
          \\[\\%\\ (\\text{Honda Hitam}) = \\frac{3}{20} \\times 100\\% = 15\\%\\]

          <hr class="divider">

          <h4>e. P(Toyota &cup; Silver)</h4>
          \\[P(Toyota \\cup Silver) = P(Toyota) + P(Silver) - P(Toyota \\cap Silver)\\]
          \\[P(Toyota \\cup Silver) = \\frac{8}{20} + \\frac{5}{20} - \\frac{2}{20} = \\frac{11}{20} = 0.55\\ \\text{(atau } 55\\%\\text{)}\\]
        `
      },
      {
        id: "uts-latihan-2025-q3",
        number: "3",
        materi: "Ukuran Deskriptif Numerik",
        poin: 25,
        questionHtml: `
          <p>Berikut adalah data waktu tunggu (dalam menit) untuk 10 pelanggan di sebuah bank:</p>
          <div class="data-badge-container max-w-md mx-auto">
            <span class="data-badge">12</span>
            <span class="data-badge">8</span>
            <span class="data-badge">15</span>
            <span class="data-badge">5</span>
            <span class="data-badge">10</span>
            <span class="data-badge">8</span>
            <span class="data-badge">9</span>
            <span class="data-badge">7</span>
            <span class="data-badge">14</span>
            <span class="data-badge">8</span>
          </div>
          <p>Hitunglah Mean, Median, Modus, Range, Varians, Standar Deviasi, Kuartil (Q1 & Q3), IQR, dan tentukan bentuk distribusinya!</p>
        `,
        solutionHtml: `
          <p>Urutan data: 5, 7, 8, 8, 8, 9, 10, 12, 14, 15 (\\(n = 10\\)).</p>
          <ol class="list-ol-solution">
            <li><strong>Mean (\\(\\bar{x}\\)):</strong>
              \\[\\bar{x} = \\frac{5+7+8+8+8+9+10+12+14+15}{10} = \\frac{96}{10} = 9.6\\ \\text{menit}\\]
            </li>
            <li><strong>Median:</strong>
              \\[Median = \\frac{X_5 + X_6}{2} = \\frac{8 + 9}{2} = 8.5\\ \\text{menit}\\]
            </li>
            <li><strong>Modus:</strong> <strong>8</strong> (muncul 3 kali).</li>
            <li><strong>Range:</strong> \\(15 - 5 = 10\\) menit.</li>
            <li><strong>Varians Sampel (\\(s^2\\)):</strong>
              \\[\\sum (x_i - \\bar{x})^2 = (5-9.6)^2 + (7-9.6)^2 + 3(8-9.6)^2 + ... = 90.4\\]
              \\[s^2 = \\frac{90.4}{9} \\approx 10.044\\ \\text{menit}^2\\]
            </li>
            <li><strong>Standar Deviasi Sampel (\\(s\\)):</strong>
              \\[s = \\sqrt{10.044} \\approx 3.17\\ \\text{menit}\\]
            </li>
            <li><strong>Q1 dan Q3:</strong>
              \\[Q_1\\ \\text{posisi } 2.75 \\rightarrow 8\\ \\text{menit (atau } 7.75\\text{ berdasarkan interpolasi)}\\]
              \\[Q_3\\ \\text{posisi } 8.25 \\rightarrow 12\\ \\text{menit (atau } 12.5\\text{ berdasarkan interpolasi)}\\]
            </li>
            <li><strong>IQR:</strong> \\(Q_3 - Q_1 = 12 - 8 = 4\\) menit.</li>
            <li><strong>Bentuk Distribusi:</strong>
              \\(Mean\\ (9.6) > Median\\ (8.5)\\) menunjukkan sebaran data **menceng ke kanan (positive skew)**.
            </li>
          </ol>
        `
      },
      {
        id: "uts-latihan-2025-q4",
        number: "4",
        materi: "Probabilitas Dasar & Kondisional",
        poin: 20,
        questionHtml: `
          <p>Tabel preferensi platform streaming musik (200 mahasiswa):</p>
          <div class="table-responsive">
            <table class="table-styled">
              <thead>
                <tr><th>Angkatan / Platform</th><th>Stream A</th><th>Stream B</th><th>Tidak Keduanya</th><th>Total</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>Angkatan 2021</strong></td><td>50</td><td>30</td><td>10</td><td>90</td></tr>
                <tr><td><strong>Angkatan 2022</strong></td><td>70</td><td>25</td><td>15</td><td>110</td></tr>
                <tr class="font-bold"><td>Total</td><td>120</td><td>55</td><td>25</td><td>200</td></tr>
              </tbody>
            </table>
          </div>
          <ol type="a" class="list-ol">
            <li>Probabilitas acak terpilih dari Angkatan 2022?</li>
            <li>Probabilitas acak terpilih menggunakan Stream A dan berasal dari Angkatan 2021?</li>
            <li>Jika diketahui terpilih Angkatan 2022, berapa peluang dia menggunakan Stream B?</li>
            <li>Apakah kejadian Angkatan 2021 dan Stream A saling independen? Buktikan!</li>
          </ol>
        `,
        solutionHtml: `
          <ol type="a" class="list-ol-solution">
            <li><strong>P(Angkatan 2022) - Marginal:</strong>
              \\[P(\\text{Angkatan 2022}) = \\frac{110}{200} = 0.55\\]
            </li>
            <li><strong>P(Stream A &cap; Angkatan 2021) - Joint:</strong>
              \\[P(\\text{Stream A} \\cap \\text{Angkatan 2021}) = \\frac{50}{200} = 0.25\\]
            </li>
            <li><strong>P(Stream B | Angkatan 2022) - Kondisional:</strong>
              \\[P(\\text{Stream B} \\mid \\text{Angkatan 2022}) = \\frac{25}{110} \\approx 0.227\\]
            </li>
            <li><strong>Uji Independensi:</strong>
              \\[P(\\text{Angkatan 2021} \\cap \\text{Stream A}) \\stackrel{?}{=} P(\\text{Angkatan 2021}) \\times P(\\text{Stream A})\\]
              \\[0.25 \\stackrel{?}{=} \\left(\\frac{90}{200}\\right) \\times \\left(\\frac{120}{200}\\right)\\]
              \\[0.25 \\neq 0.45 \\times 0.60 = 0.27\\]
              Karena \\(0.25 \\neq 0.27\\), maka kejadian Angkatan 2021 dan Stream A **tidak saling independen** (dependen).
            </li>
          </ol>
        `
      },
      {
        id: "uts-latihan-2025-q5",
        number: "5",
        materi: "Distribusi Binomial",
        poin: 20,
        questionHtml: `
          <p>Sebuah perusahaan mengklaim 80% pelanggan puas. Survei dilakukan terhadap 10 pelanggan acak.</p>
          <ol type="a" class="list-ol">
            <li>Identifikasi parameter n dan &pi;!</li>
            <li>Probabilitas tepat 8 pelanggan puas (P(X=8))?</li>
            <li>Probabilitas paling banyak 7 pelanggan puas (P(X &le; 7))?</li>
            <li>Probabilitas setidaknya 9 pelanggan puas (P(X &le; 9))?</li>
            <li>Rata-rata (nilai harapan) jumlah pelanggan puas?</li>
          </ol>
        `,
        solutionHtml: `
          <p>Distribusi Binomial dengan \\(n = 10\\), \\(\\pi = 0.80\\), dan \\(q = 0.20\\).</p>
          <ol type="a" class="list-ol-solution">
            <li><strong>Parameter:</strong> \\(n = 10\\) (jumlah sampel), \\(\\pi = 0.80\\) (peluang sukses).</li>
            <li><strong>P(X = 8):</strong>
              \\[P(X=8) = C(10, 8) \\times 0.80^8 \\times 0.20^2 = 45 \\times 0.16777 \\times 0.04 \\approx 0.3020\\]
            </li>
            <li><strong>P(X &le; 7) - Komplemen:</strong>
              \\[P(X \\le 7) = 1 - [P(X=8) + P(X=9) + P(X=10)]\\]
              \\[P(X=9) = C(10, 9) \\times 0.80^9 \\times 0.20^1 = 10 \\times 0.1342 \\times 0.20 = 0.2684\\]
              \\[P(X=10) = C(10, 10) \\times 0.80^{10} \\times 0.20^0 = 1 \\times 0.1074 \\times 1 = 0.1074\\]
              \\[P(X \\le 7) = 1 - [0.3020 + 0.2684 + 0.1074] = 1 - 0.6778 = 0.3222\\]
            </li>
            <li><strong>P(X &ge; 9):</strong>
              \\[P(X \\ge 9) = P(X=9) + P(X=10) = 0.2684 + 0.1074 = 0.3758\\]
            </li>
            <li><strong>Rata-rata (Nilai Harapan):</strong>
              \\[E(X) = n \\times \\pi = 10 \\times 0.80 = 8\\ \\text{pelanggan}\\]
            </li>
          </ol>
        `
      },
      {
        id: "uts-latihan-2025-q6",
        number: "6",
        materi: "Distribusi Normal",
        poin: 20,
        questionHtml: `
          <p>Nilai ujian Statistika berdistribusi normal dengan \\(\\mu = 75\\) dan \\(\\sigma = 8\\).</p>
          <ol type="a" class="list-ol">
            <li>Probabilitas mendapat nilai kurang dari 65? (P(X < 65))</li>
            <li>Probabilitas mendapat nilai antara 70 dan 85? (P(70 < X < 85))</li>
            <li>Probabilitas mendapat nilai lebih dari 90? (P(X > 90))</li>
            <li>Nilai minimum untuk mendapatkan nilai A (Top 15% tertinggi)?</li>
          </ol>
        `,
        solutionHtml: `
          <ol type="a" class="list-ol-solution">
            <li><strong>P(X < 65):</strong>
              \\[Z = \\frac{65 - 75}{8} = -1.25 \\rightarrow P(Z < -1.25) = 0.1056\\]
            </li>
            <li><strong>P(70 < X < 85):</strong>
              \\[Z_1 = \\frac{70-75}{8} = -0.63\\ ;\\ Z_2 = \\frac{85-75}{8} = 1.25\\]
              \\[P(-0.63 < Z < 1.25) = P(Z < 1.25) - P(Z < -0.63) = 0.8944 - 0.2643 = 0.6301\\]
            </li>
            <li><strong>P(X > 90):</strong>
              \\[Z = \\frac{90-75}{8} = 1.88 \\rightarrow P(Z > 1.88) = 1 - 0.9699 = 0.0301\\]
            </li>
            <li><strong>Batas Nilai A (Top 15%):</strong>
              <p>Area kiri = \\(1 - 0.15 = 0.85\\) \\(\\rightarrow Z \\approx 1.04\\).</p>
              \\[X = \\mu + Z \\times \\sigma = 75 + (1.04 \\times 8) = 75 + 8.32 = 83.32\\]
            </li>
          </ol>
        `
      }
    ]
  },
  {
    id: "uas-latihan-stat1",
    title: "UAS STAT 1 (Latihan)",
    category: "uas",
    fileName: "STAT 1 - Soal Latihan UAS.pdf",
    description: "Soal Latihan Ujian Akhir Semester STAT 1. Topik mencakup Regresi Linear Sederhana menggunakan output Excel, estimasi selang kepercayaan rata-rata (distribusi t), uji hipotesis satu sampel, uji t dua sampel independen (pooled variance), dan perhitungan regresi manual.",
    questions: [
      {
        id: "uas-latihan-stat1-q1",
        number: "1",
        materi: "Regresi Linear Sederhana (Excel)",
        poin: 30,
        questionHtml: `
          <p>Sebuah analisis hubungan jam pelatihan (X) dengan produktivitas (Y) dari 10 karyawan menghasilkan output regresi berikut:</p>
          <div class="table-responsive">
            <table class="table-styled text-sm max-w-md mx-auto">
              <thead><tr><th colspan="2">Regression Statistics</th></tr></thead>
              <tbody>
                <tr><td>Multiple R</td><td>0.925</td></tr>
                <tr><td>R Square</td><td>0.856</td></tr>
                <tr><td>Adjusted R Square</td><td>0.838</td></tr>
                <tr><td>Standard Error</td><td>5.25</td></tr>
                <tr><td>Observations</td><td>10</td></tr>
              </tbody>
            </table>
          </div>
          <br>
          <div class="table-responsive">
            <table class="table-styled text-sm">
              <thead>
                <tr><th>ANOVA</th><th>df</th><th>SS</th><th>MS</th><th>F</th><th>Significance F</th></tr>
              </thead>
              <tbody>
                <tr><td>Regression</td><td>1</td><td>1250.00</td><td>1250.00</td><td>45.25</td><td>0.00015</td></tr>
                <tr><td>Residual</td><td>8</td><td>220.00</td><td>27.50</td><td></td><td></td></tr>
                <tr><td class="font-bold">Total</td><td>9</td><td>1470.00</td><td></td><td></td><td></td></tr>
              </tbody>
            </table>
          </div>
          <br>
          <div class="table-responsive">
            <table class="table-styled text-sm">
              <thead>
                <tr><th>Coefficients</th><th>Standard Error</th><th>t Stat</th><th>P-value</th><th>Lower 95%</th><th>Upper 95%</th></tr>
              </thead>
              <tbody>
                <tr><td>Intercept</td><td>25.50</td><td>4.50</td><td>5.67</td><td>0.00040</td><td>15.12</td><td>35.88</td></tr>
                <tr><td>Jam Pelatihan (X)</td><td>3.75</td><td>0.55</td><td>6.73</td><td>0.00015</td><td>2.48</td><td>5.02</td></tr>
              </tbody>
            </table>
          </div>
          <ol type="a" class="list-ol">
            <li>Tuliskan persamaan regresi linear! Jelaskan makna intercept dan slope!</li>
            <li>Interpretasikan nilai R Square!</li>
            <li>Apakah model regresi signifikan pada &alpha; = 0.05?</li>
            <li>Apakah variabel jam pelatihan berpengaruh signifikan pada &alpha; = 0.05?</li>
            <li>Prediksi produktivitas jika pelatihan X = 15 jam!</li>
          </ol>
        `,
        solutionHtml: `
          <h4>a. Persamaan Regresi dan Interpretasi Koefisien</h4>
          \\[\\hat{y} = 25.50 + 3.75X\\]
          <ul>
            <li><strong>Intercept (\\(b_0 = 25.50\\)):</strong> Jika jam pelatihan X = 0, produktivitas diprediksi sebesar 25.50 unit per hari.</li>
            <li><strong>Slope (\\(b_1 = 3.75\\)):</strong> Setiap penambahan 1 jam pelatihan meningkatkan produktivitas rata-rata sebesar 3.75 unit per hari.</li>
          </ul>

          <hr class="divider">

          <h4>b. Interpretasi R Square</h4>
          <p>Nilai \\(R\\ Square = 0.856\\) (atau \\(85.6\\%\\)). Artinya, sebesar 85.6% variasi produktivitas dapat dijelaskan oleh jam pelatihan melalui model ini, sedangkan 14.4% lainnya dijelaskan oleh variabel di luar model.</p>

          <hr class="divider">

          <h4>c. Uji F (ANOVA)</h4>
          <p>Nilai \\(Significance\\ F = 0.00015 < 0.05\\). Kita menolak H0, yang menunjukkan model regresi signifikan secara statistik.</p>

          <hr class="divider">

          <h4>d. Uji t (Koefisien)</h4>
          <p>Untuk variabel Jam Pelatihan, diperoleh \\(P\\text{-value} = 0.00015 < 0.05\\). Kita menolak H0, yang menunjukkan jam pelatihan berpengaruh signifikan terhadap produktivitas.</p>

          <hr class="divider">

          <h4>e. Prediksi produktivitas untuk X = 15</h4>
          \\[\\hat{y} = 25.50 + 3.75(15) = 25.50 + 56.25 = 81.75\\ \\text{unit per hari}\\]
        `
      },
      {
        id: "uas-latihan-stat1-q2",
        number: "2",
        materi: "Estimasi Selang Kepercayaan (Distribusi t)",
        poin: 20,
        questionHtml: `
          <p>Penjualan harian kopi spesial (dalam gelas) selama 8 hari pertama adalah:</p>
          <div class="data-badge-container max-w-md mx-auto">
            <span class="data-badge">25</span>
            <span class="data-badge">30</span>
            <span class="data-badge">22</span>
            <span class="data-badge">28</span>
            <span class="data-badge">35</span>
            <span class="data-badge">26</span>
            <span class="data-badge">32</span>
            <span class="data-badge">28</span>
          </div>
          <ol type="a" class="list-ol">
            <li>Hitunglah rata-rata sampel (\\(\\bar{x}\\)) dan standar deviasi sampel (s)!</li>
            <li>Buatlah estimasi interval kepercayaan 95% untuk rata-rata penjualan harian populasi!</li>
            <li>Interpretasikan interval kepercayaan tersebut dalam konteks soal!</li>
          </ol>
        `,
        solutionHtml: `
          <h4>a. Perhitungan Rata-rata dan Standar Deviasi</h4>
          <p>Banyaknya data \\(n = 8\\).</p>
          \\[\\bar{x} = \\frac{25+30+22+28+35+26+32+28}{8} = \\frac{226}{8} = 28.25\\ \\text{gelas}\\]
          
          <p><strong>Standar Deviasi Sampel (\\(s\\)):</strong></p>
          \\[\\sum (x_i - \\bar{x})^2 = (25-28.25)^2 + ... + (28-28.25)^2 = 117.5\\]
          \\[s = \\sqrt{\\frac{117.5}{8 - 1}} = \\sqrt{16.7857} \\approx 4.10\\ \\text{gelas}\\]

          <hr class="divider">

          <h4>b. Estimasi Interval Kepercayaan 95%</h4>
          <p>Karena \\(n = 8 < 30\\), gunakan distribusi t. Derajat kebebasan \\(df = 7\\).</p>
          <p>Nilai kritis \\(t_{0.025, 7}\\) dari tabel t adalah <strong>2.365</strong>.</p>
          \\[E = t_{0.025, 7} \\times \\frac{s}{\\sqrt{n}} = 2.365 \\times \\frac{4.10}{\\sqrt{8}} = 2.365 \\times 1.45 = 3.43\\ \\text{gelas}\\]
          \\[Batas\\ Bawah = 28.25 - 3.43 = 24.82\\ ;\\ Batas\\ Atas = 28.25 + 3.43 = 31.68\\]
          <p>Selang Kepercayaan 95% adalah:</p>
          \\[24.82\\ \\text{gelas} \\le \\mu \\le 31.68\\ \\text{gelas}\\]

          <hr class="divider">

          <h4>c. Interpretasi Selang Kepercayaan</h4>
          <p>Kita merasa 95% yakin bahwa rata-rata penjualan harian kopi spesial yang sebenarnya berada di kisaran antara <strong>24.82 gelas dan 31.68 gelas</strong>.</p>
        `
      },
      {
        id: "uas-latihan-stat1-q3",
        number: "3",
        materi: "Uji Hipotesis Satu Sampel (Waktu Pengiriman)",
        poin: 25,
        questionHtml: `
          <p>Perusahaan logistik mengklaim rata-rata waktu pengiriman kurang dari 24 jam. Dari sampel \\(n = 36\\) didapat rata-rata \\(\\bar{x} = 22.5\\) jam dan standar deviasi \\(s = 3\\) jam. Ujilah pada &alpha; = 0.05!</p>
          <ol type="a" class="list-ol">
            <li>Rumuskan H0 dan H1!</li>
            <li>Hitunglah nilai t-statistik uji!</li>
            <li>Tentukan nilai kritis atau P-value!</li>
            <li>Berikan kesimpulan pengujian!</li>
          </ol>
        `,
        solutionHtml: `
          <ol class="list-ol-solution">
            <li><strong>Formulasi Hipotesis:</strong>
              <ul>
                <li>\\(H_0: \\mu \\ge 24\\) jam (Rata-rata waktu pengiriman adalah 24 jam atau lebih)</li>
                <li>\\(H_1: \\mu < 24\\) jam (Rata-rata waktu pengiriman kurang dari 24 jam - *Klaim*)</li>
              </ul>
              Pengujian satu sisi (sisi kiri).
            </li>
            <li><strong>Statistik Uji t:</strong>
              \\[t_{hitung} = \\frac{\\bar{x} - \\mu_0}{s / \\sqrt{n}} = \\frac{22.5 - 24}{3 / \\sqrt{36}} = \\frac{-1.5}{0.5} = -3.0\\]
            </li>
            <li><strong>Nilai Kritis:</strong>
              Derajat kebebasan \\(df = 35\\), uji satu sisi kiri dengan \\(\\alpha = 0.05\\).
              Nilai kritis dari tabel t adalah \\(-t_{0.05, 35} = -1.690\\).
              Daerah penolakan: Tolak \\(H_0\\) jika \\(t_{hitung} < -1.690\\).
            </li>
            <li><strong>Keputusan dan Kesimpulan:</strong>
              Karena \\(t_{hitung} = -3.0 < -1.690\\), maka kita <strong>menolak \\(H_0\\)</strong>.
              Terdapat cukup bukti statistik pada tingkat signifikansi 0.05 untuk mendukung klaim bahwa rata-rata waktu pengiriman paket kurang dari 24 jam.
            </li>
          </ol>
        `
      },
      {
        id: "uas-latihan-stat1-q4",
        number: "4",
        materi: "Uji Hipotesis Dua Sampel Independen (Diet)",
        poin: 25,
        questionHtml: `
          <p>Bandingkan rata-rata penurunan berat badan dari dua metode diet dengan data berikut:</p>
          <ul>
            <li>Metode A: \\(n_1 = 12\\), \\(\\bar{x}_1 = 4.5\\) kg, \\(s_1 = 1.2\\) kg</li>
            <li>Metode B: \\(n_2 = 10\\), \\(\\bar{x}_2 = 3.8\\) kg, \\(s_2 = 1.0\\) kg</li>
          </ul>
          <p>Asumsikan varians populasi kedua kelompok sama, dan data berdistribusi normal. Ujilah pada &alpha; = 0.05!</p>
          <ol type="a" class="list-ol">
            <li>Rumuskan H0 dan H1!</li>
            <li>Hitunglah standar deviasi gabungan (\\(s_p\\))!</li>
            <li>Hitunglah nilai t-statistik uji!</li>
            <li>Berikan kesimpulan Anda!</li>
          </ol>
        `,
        solutionHtml: `
          <ol class="list-ol-solution">
            <li><strong>Formulasi Hipotesis:</strong>
              <ul>
                <li>\\(H_0: \\mu_1 = \\mu_2\\) (Tidak ada perbedaan rata-rata penurunan berat badan)</li>
                <li>\\(H_1: \\mu_1 \\neq \\mu_2\\) (Ada perbedaan rata-rata penurunan berat badan)</li>
              </ul>
              Pengujian dua sisi.
            </li>
            <li><strong>Standar Deviasi Gabungan (\\(s_p\\)):</strong>
              \\[s_p^2 = \\frac{(n_1 - 1)s_1^2 + (n_2 - 1)s_2^2}{n_1 + n_2 - 2} = \\frac{11(1.2^2) + 9(1.0^2)}{12 + 10 - 2} = 1.242\\]
              \\[s_p = \\sqrt{1.242} \\approx 1.114\\ \\text{kg}\\]
            </li>
            <li><strong>Statistik Uji t:</strong>
              \\[t = \\frac{(\\bar{x}_1 - \\bar{x}_2) - 0}{s_p \\sqrt{1/n_1 + 1/n_2}} = \\frac{4.5 - 3.8}{1.114 \\sqrt{1/12 + 1/10}} = \\frac{0.7}{1.114 \\times 0.428} \\approx 1.468\\]
            </li>
            <li><strong>Keputusan dan Kesimpulan:</strong>
              Derajat kebebasan \\(df = 20\\), uji dua sisi dengan \\(\\alpha = 0.05\\).
              Nilai kritis dari tabel t adalah \\(\\pm 2.086\\).
              Karena \\(t_{hitung} = 1.468\\) berada di daerah penerimaan (\\(-2.086 < 1.468 < 2.086\\)), kita **gagal menolak H0**.
              Tidak ada perbedaan rata-rata penurunan berat badan yang signifikan antara Metode Diet A dan Metode Diet B.
            </li>
          </ol>
        `
      },
      {
        id: "uas-latihan-stat1-q5",
        number: "5",
        materi: "Regresi Linear Sederhana (Perhitungan Manual)",
        poin: 30,
        questionHtml: `
          <p>Data biaya iklan (X, juta Rp) dan penjualan bulanan (Y, ratusan unit) selama 5 bulan:</p>
          <div class="table-responsive">
            <table class="table-styled max-w-xs mx-auto">
              <thead><tr><th>Bulan</th><th>Biaya Iklan (X)</th><th>Penjualan (Y)</th></tr></thead>
              <tbody>
                <tr><td>1</td><td>1</td><td>14</td></tr>
                <tr><td>2</td><td>2</td><td>22</td></tr>
                <tr><td>3</td><td>3</td><td>24</td></tr>
                <tr><td>4</td><td>4</td><td>31</td></tr>
                <tr><td>5</td><td>5</td><td>39</td></tr>
              </tbody>
            </table>
          </div>
          <ol type="a" class="list-ol">
            <li>Tentukan persamaan regresi linear sederhana!</li>
            <li>Hitunglah nilai koefisien determinasi (R^2)!</li>
            <li>Interpretasikan makna b1 dan R^2 dalam konteks soal ini!</li>
          </ol>
        `,
        solutionHtml: `
          <h4>a. Perhitungan Persamaan Regresi</h4>
          <p>Rata-rata: \\(\\bar{x} = 3\\), \\(\\bar{y} = 26\\).</p>
          <ul>
            <li>\\(\\sum (x_i - \\bar{x})^2 = (-2)^2 + (-1)^2 + 0^2 + 1^2 + 2^2 = 10\\)</li>
            <li>\\(\\sum (x_i - \\bar{x})(y_i - \\bar{y}) = (-2)(-12) + (-1)(-4) + 0 + (1)(5) + (2)(13) = 59\\)</li>
          </ul>
          \\[b_1 = \\frac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{\\sum (x_i - \\bar{x})^2} = \\frac{59}{10} = 5.9\\]
          \\[b_0 = \\bar{y} - b_1 \\bar{x} = 26 - 5.9(3) = 8.3\\]
          <p>Maka, persamaan regresi adalah:</p>
          \\[\\hat{y} = 8.3 + 5.9X\\]

          <hr class="divider">

          <h4>b. Perhitungan R^2</h4>
          \\[SST = \\sum (y_i - \\bar{y})^2 = (-12)^2 + (-4)^2 + (-2)^2 + 5^2 + 13^2 = 358\\]
          \\[SSR = b_1 \\times \\sum (x_i - \\bar{x})(y_i - \\bar{y}) = 5.9 \\times 59 = 348.1\\]
          \\[R^2 = \\frac{SSR}{SST} = \\frac{348.1}{358} \\approx 0.9723\\ \\text{(atau } 97.23\\%\\text{)}\\]

          <hr class="divider">

          <h4>c. Interpretasi</h4>
          <ul>
            <li><strong>Slope (b1 = 5.9):</strong> Setiap kenaikan biaya iklan 1 juta Rp diprediksi meningkatkan penjualan sebesar 5.9 ratus unit (590 unit).</li>
            <li><strong>R^2 = 97.2%:</strong> Biaya iklan menjelaskan 97.2% variasi penjualan bulanan melalui model ini.</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "uas-latihan-stat2",
    title: "UAS STAT 2 (Latihan)",
    category: "uas",
    fileName: "STAT 2 - Soal Latihan UAS.pdf",
    description: "Soal Latihan Ujian Akhir Semester STAT 2. Topik mencakup uji hipotesis satu sampel dan selang kepercayaan (t-test), uji beda dua proporsi independen (Z-test), serta analisis regresi linear interpretasi output lengkap.",
    questions: [
      {
        id: "uas-latihan-stat2-q1",
        number: "1",
        materi: "Uji Hipotesis & Selang Kepercayaan (Satu Sampel)",
        poin: 35,
        questionHtml: `
          <p>Sebuah ISP mengklaim rata-rata kecepatan unduh paket "Super Cepat" lebih dari 50 Mbps. Survei terhadap 25 pelanggan mendapatkan rata-rata \\(\\bar{x} = 53.5\\) Mbps dengan standar deviasi sampel s = 8 Mbps.</p>
          <ol type="a" class="list-ol">
            <li>Tuliskan H0 dan H1!</li>
            <li>Tentukan nilai kritis pada taraf signifikansi 0.05!</li>
            <li>Tentukan nilai statistik uji yang sesuai!</li>
            <li>Jelaskan kesimpulan pengujian Anda!</li>
            <li>Tentukan selang kepercayaan 95% untuk rata-rata kecepatan unduh populasi!</li>
            <li>Jelaskan arti dari selang kepercayaan tersebut!</li>
          </ol>
        `,
        solutionHtml: `
          <h4>a. Formulasi Hipotesis</h4>
          <ul>
            <li>\\(H_0: \\mu \\le 50\\) Mbps</li>
            <li>\\(H_1: \\mu > 50\\) Mbps (*Klaim*)</li>
          </ul>
          <p>Pengujian satu sisi kanan.</p>

          <hr class="divider">

          <h4>b. Nilai Kritis</h4>
          <p>Sampel kecil (\\(n = 25\\)), standar deviasi populasi tidak diketahui. Gunakan distribusi t dengan \\(df = 24\\).</p>
          <p>Nilai kritis \\(t_{0.05, 24} = 1.711\\).</p>

          <hr class="divider">

          <h4>c. Statistik Uji t</h4>
          \\[t_{hitung} = \\frac{\\bar{x} - \\mu_0}{s / \\sqrt{n}} = \\frac{53.5 - 50}{8 / \\sqrt{25}} = \\frac{3.5}{1.6} = 2.1875\\]

          <hr class="divider">

          <h4>d. Keputusan</h4>
          <p>Karena \\(t_{hitung} = 2.1875 > 1.711\\), kita **menolak H0**. Terdapat cukup bukti untuk mendukung klaim bahwa rata-rata kecepatan unduh lebih dari 50 Mbps.</p>

          <hr class="divider">

          <h4>e. Selang Kepercayaan 95%</h4>
          \\[\\bar{x} \\pm t_{0.025, 24} \\times \\frac{s}{\\sqrt{n}} = 53.5 \\pm 2.064 \\times 1.6 = 53.5 \\pm 3.3024\\]
          \\[50.20\\ \\text{Mbps} \\le \\mu \\le 56.80\\ \\text{Mbps}\\]

          <hr class="divider">

          <h4>f. Interpretasi</h4>
          <p>Kita merasa 95% yakin bahwa rata-rata kecepatan unduh populasi pelanggan yang sebenarnya berada di kisaran antara 50.20 Mbps dan 56.80 Mbps.</p>
        `
      },
      {
        id: "uas-latihan-stat2-q2",
        number: "2",
        materi: "Uji Beda Dua Proporsi Independen (E-Commerce)",
        poin: 25,
        questionHtml: `
          <p>Dari 200 pengguna pria, 70 melakukan pembelian setelah melihat iklan. Dari 250 pengguna wanita, 80 melakukan pembelian. Ujilah pada &alpha; = 0.05 apakah ada perbedaan signifikan proporsi pembelian antara pria dan wanita!</p>
          <ol type="a" class="list-ol">
            <li>Tuliskan H0 dan H1!</li>
            <li>Hitung proporsi sampel pria (p1), wanita (p2), dan proporsi gabungan (p-bar)!</li>
            <li>Tentukan nilai statistik uji (Z-statistik)!</li>
            <li>Tentukan nilai kritis untuk pengujian ini!</li>
            <li>Apakah Anda menolak H0? Bagaimana perbandingan P-value dengan &alpha;?</li>
            <li>Perkirakan P-value menggunakan tabel Z standar!</li>
            <li>Jelaskan kesimpulan Anda!</li>
          </ol>
        `,
        solutionHtml: `
          <ol class="list-ol-solution">
            <li><strong>Formulasi Hipotesis:</strong>
              <ul>
                <li>\\(H_0: P_1 = P_2\\) (Tidak ada perbedaan proporsi pembelian)</li>
                <li>\\(H_1: P_1 \\neq P_2\\) (Ada perbedaan proporsi pembelian)</li>
              </ul>
              Pengujian dua sisi.
            </li>
            <li><strong>Proporsi Sampel:</strong>
              <ul>
                <li>Pria: \\(p_1 = 70 / 200 = 0.35\\)</li>
                <li>Wanita: \\(p_2 = 80 / 250 = 0.32\\)</li>
                <li>Gabungan: \\(\\bar{p} = \\frac{70 + 80}{200 + 250} = 0.333\\)</li>
              </ul>
            </li>
            <li><strong>Statistik Uji Z:</strong>
              \\[Z = \\frac{p_1 - p_2}{\\sqrt{\\bar{p}(1-\\bar{p})\\left(\\frac{1}{n_1} + \\frac{1}{n_2}\\right)}} = \\frac{0.35 - 0.32}{\\sqrt{0.333(0.667)\\left(\\frac{1}{200} + \\frac{1}{250}\\right)}} = \\frac{0.03}{0.0447} \\approx 0.67\\]
            </li>
            <li><strong>Nilai Kritis:</strong>
              Uji dua sisi pada \\(\\alpha = 0.05\\) memiliki batas kritis \\(Z_{kritis} = \\pm 1.96\\).
            </li>
            <li><strong>Keputusan:</strong>
              Karena \\(Z = 0.67\\) berada di antara -1.96 dan +1.96, kita **gagal menolak H0**. P-value > 0.05.
            </li>
            <li><strong>P-value:</strong>
              \\(P(Z > 0.67) = 0.2514\\). Untuk uji dua sisi, \\(P\\text{-value} = 2 \\times 0.2514 = 0.5028\\).
            </li>
            <li><strong>Kesimpulan:</strong>
              Tidak terdapat perbedaan proporsi pembelian yang signifikan antara pengguna pria dan wanita setelah melihat iklan produk baru.
            </li>
          </ol>
        `
      },
      {
        id: "uas-latihan-stat2-q3",
        number: "3",
        materi: "Analisis Regresi Linear Sederhana (Interpretasi Output)",
        poin: 40,
        questionHtml: `
          <p>Analisis hubungan waktu belajar (X, jam) dengan IPK (Y, 15 mahasiswa) menghasilkan output berikut:</p>
          <div class="table-responsive">
            <table class="table-styled text-sm max-w-md mx-auto">
              <thead><tr><th colspan="2">Regression Statistics</th></tr></thead>
              <tbody>
                <tr><td>Multiple R</td><td>0.880</td></tr>
                <tr><td>R Square</td><td>0.774</td></tr>
                <tr><td>Adjusted R Square</td><td>0.757</td></tr>
                <tr><td>Standard Error</td><td>0.215</td></tr>
                <tr><td>Observations</td><td>15</td></tr>
              </tbody>
            </table>
          </div>
          <br>
          <div class="table-responsive">
            <table class="table-styled text-sm">
              <thead>
                <tr><th>ANOVA</th><th>df</th><th>SS</th><th>MS</th><th>F</th><th>Significance F</th></tr>
              </thead>
              <tbody>
                <tr><td>Regression</td><td>1</td><td>2.050</td><td>2.050</td><td>44.37</td><td>0.000018</td></tr>
                <tr><td>Residual</td><td>13</td><td>0.600</td><td>0.046</td><td></td><td></td></tr>
                <tr><td class="font-bold">Total</td><td>14</td><td>2.650</td><td></td><td></td><td></td></tr>
              </tbody>
            </table>
          </div>
          <br>
          <div class="table-responsive">
            <table class="table-styled text-sm">
              <thead>
                <tr><th>Coefficients</th><th>Standard Error</th><th>t Stat</th><th>P-value</th><th>Lower 95%</th><th>Upper 95%</th></tr>
              </thead>
              <tbody>
                <tr><td>Intercept</td><td>2.150</td><td>0.180</td><td>11.94</td><td>0.000001</td><td>1.761</td><td>2.539</td></tr>
                <tr><td>Lama Belajar (X)</td><td>0.095</td><td>0.014</td><td>6.66</td><td>0.000018</td><td>0.065</td><td>0.125</td></tr>
              </tbody>
            </table>
          </div>
          <ol type="a" class="list-ol">
            <li>Tuliskan persamaan regresi linear! Jelaskan makna intercept dan slope!</li>
            <li>Prediksi IPK mahasiswa jika lama belajar X = 10 jam per minggu!</li>
            <li>Interpretasikan R Square dan koefisien korelasi (r)!</li>
            <li>Uji signifikansi koefisien slope menggunakan uji t dan uji F!</li>
            <li>Jelaskan arti interval kepercayaan 95% [0.065, 0.125] dari koefisien slope!</li>
          </ol>
        `,
        solutionHtml: `
          <h4>a. Persamaan Regresi dan Interpretasi Koefisien</h4>
          \\[\\hat{y} = 2.150 + 0.095X\\]
          <ul>
            <li><strong>Intercept (2.150):</strong> Jika lama belajar X = 0 jam, prediksi IPK mahasiswa adalah 2.150.</li>
            <li><strong>Slope (0.095):</strong> Setiap tambahan 1 jam belajar per minggu diprediksi meningkatkan IPK sebesar 0.095 poin.</li>
          </ul>

          <hr class="divider">

          <h4>b. Prediksi IPK untuk X = 10</h4>
          \\[\\hat{y} = 2.150 + 0.095(10) = 2.150 + 0.95 = 3.10\\]

          <hr class="divider">

          <h4>c. R Square dan Korelasi (r)</h4>
          <ul>
            <li><strong>R Square = 0.774 (77.4%):</strong> 77.4% variasi IPK mahasiswa dijelaskan oleh lama waktu belajar.</li>
            <li><strong>Korelasi (r):</strong> \\(r = \\sqrt{R^2} = \\sqrt{0.774} \\approx 0.880\\). Hubungan sangat kuat dan bernilai positif (searah).</li>
          </ul>

          <hr class="divider">

          <h4>d. Uji Signifikansi (t-test & F-test)</h4>
          <ul>
            <li><strong>i. Uji t:</strong> P-value untuk Lama Belajar adalah \\(0.000018 < 0.05\\). Kita menolak H0, yang menunjukkan lama belajar berpengaruh signifikan terhadap IPK.</li>
            <li><strong>ii. Uji F:</strong> Significance F adalah \\(0.000018 < 0.05\\). Kita menolak H0, yang menunjukkan model regresi signifikan secara statistik.</li>
          </ul>

          <hr class="divider">

          <h4>e. Arti Interval Kepercayaan 95% [0.065, 0.125]</h4>
          <p>Kita 95% percaya bahwa kenaikan waktu belajar sebesar 1 jam per minggu meningkatkan IPK antara 0.065 hingga 0.125 poin.</p>
        `
      }
    ]
  }
];
