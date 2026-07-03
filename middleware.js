/**
 * Vercel Edge Middleware
 * 
 * Fungsi: Memproteksi akses ke seluruh halaman website menggunakan verifikasi Cookie.
 * 1. Mengalihkan semua pengguna yang belum terautentikasi ke halaman login kustom (/login.html).
 * 2. Memproses request POST ke "/login" untuk memverifikasi kredensial dari Vercel Env Variables.
 * 3. Menulis secure cookie bernama "session" jika login berhasil, dan mengarahkan ke dashboard utama.
 */

export const config = {
  // Terapkan middleware ke seluruh route kecuali favicon.ico
  matcher: ['/((?!favicon.ico).*)'],
};

export default async function middleware(request) {
  const url = new URL(request.url);

  // 1. Intersepsi pengiriman form login (POST ke /login)
  if (request.method === 'POST' && url.pathname === '/login') {
    try {
      // Ekstrak data form submission
      const formData = await request.formData();
      const username = formData.get('username');
      const password = formData.get('password');

      const expectedUser = process.env.AUTH_USER;
      const expectedPass = process.env.AUTH_PASS;

      // Verifikasi username dan password
      if (expectedUser && expectedPass && username === expectedUser && password === expectedPass) {
        // Buat token berbasis Base64 dari kredensial
        const sessionToken = btoa(`${username}:${password}`);
        
        // Kirim respon pengalihan ke / dengan menyisipkan cookie sesi (HttpOnly, Secure, 30 Hari)
        return new Response(null, {
          status: 302,
          headers: {
            'Location': new URL('/', request.url).toString(),
            'Set-Cookie': `session=${sessionToken}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=2592000`
          }
        });
      }
    } catch (error) {
      // Gagal membaca form data
    }

    // Jika autentikasi gagal, alihkan kembali ke login.html dengan parameter error
    return new Response(null, {
      status: 302,
      headers: {
        'Location': new URL('/login.html?error=1', request.url).toString()
      }
    });
  }

  // 2. Bypass pengecekan autentikasi khusus untuk halaman login.html
  if (url.pathname === '/login.html') {
    return;
  }

  // 3. Pengecekan Cookie Sesi untuk route lainnya
  const cookieHeader = request.headers.get('cookie') || '';
  const cookies = parseCookies(cookieHeader);
  const sessionToken = cookies['session'];

  const expectedUser = process.env.AUTH_USER;
  const expectedPass = process.env.AUTH_PASS;
  const expectedToken = expectedUser && expectedPass ? btoa(`${expectedUser}:${expectedPass}`) : '';

  // Validasi token cookie sesi
  if (sessionToken && sessionToken === expectedToken) {
    // Sesi valid, izinkan pemuatan halaman
    return;
  }

  // Sesi tidak ada atau tidak valid, alihkan ke login.html
  return new Response(null, {
    status: 307,
    headers: {
      'Location': new URL('/login.html', request.url).toString()
    }
  });
}

/**
 * Helper: Parser Cookie Sederhana
 * Mengubah header string cookie ke bentuk objek key-value.
 */
function parseCookies(cookieHeader) {
  const cookies = {};
  if (!cookieHeader) return cookies;
  
  const pairs = cookieHeader.split(';');
  for (const pair of pairs) {
    const [key, val] = pair.split('=');
    if (key && val) {
      cookies[key.trim()] = val.trim();
    }
  }
  return cookies;
}
