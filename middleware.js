/**
 * Vercel Edge Middleware
 * 
 * Fungsi: Memproteksi akses ke seluruh halaman website menggunakan skema Basic Auth.
 * Credentials diambil dari Environment Variables AUTH_USER dan AUTH_PASS pada dashboard Vercel.
 * Mengecualikan file favicon.ico agar dapat diakses tanpa autentikasi.
 */

// Konfigurasi route mana saja yang akan dilewati oleh middleware ini
export const config = {
  // Mencocokkan semua route kecuali favicon.ico
  matcher: ['/((?!favicon.ico).*)'],
};

export default function middleware(request) {
  // Ambil header Authorization dari request
  const authHeader = request.headers.get('authorization');

  if (authHeader) {
    const [scheme, encoded] = authHeader.split(' ');
    
    // Pastikan skema autentikasi menggunakan 'Basic'
    if (scheme.toLowerCase() === 'basic') {
      try {
        // Dekode string Base64 ke format username:password
        const decoded = atob(encoded);
        const [username, password] = decoded.split(':');

        // Ambil nilai credentials dari Vercel Environment Variables
        const expectedUser = process.env.AUTH_USER;
        const expectedPass = process.env.AUTH_PASS;

        // Validasi kecocokan username dan password
        if (expectedUser && expectedPass && username === expectedUser && password === expectedPass) {
          // Sukses: Izinkan request untuk dilanjutkan
          return;
        }
      } catch (error) {
        // Gagal melakukan decode Base64
      }
    }
  }

  // Jika gagal atau tidak ada header autentikasi, kirim respons 401
  // Browser akan memunculkan prompt native untuk input username & password
  return new Response('Akses Terbatas: Masukkan Username dan Password.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Protected Area"'
    }
  });
}
