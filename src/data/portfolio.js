export const profile = {
  name: "Jordan Kelvin Gabriel Siregar",
  role: "Full Stack Developer",
  location: "Indonesia",
  email: "vinnk298@gmail.com",
  github: "https://github.com/Kelvin07-neww",
  instagram: "https://www.instagram.com/_vinn_klvn/",
  about:
    "Saya Jordan Kelvin Gabriel Siregar, seorang Full Stack Developer dari Indonesia yang senang membangun aplikasi web modern, aplikasi desktop, dan sistem backend. Saya memiliki ketertarikan pada software engineering, UI/UX, database, API, dan kecerdasan buatan. Saya terus mempelajari teknologi baru untuk membangun aplikasi yang scalable, efisien, dan mudah digunakan.",
};

export const navItems = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang", href: "#about" },
  { label: "Keahlian", href: "#skills" },
  { label: "Proyek", href: "#projects" },
  { label: "Kontak", href: "#contact" },
];

export const skills = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Bootstrap", "Vite"],
  },
  {
    category: "Backend",
    items: ["Golang", "Node.js", "Express.js", "PHP", "Laravel", "Java"],
  },
  {
    category: "Database",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "VS Code", "Laragon", "XAMPP", "Docker (Belajar)"],
  },
  {
    category: "Lainnya",
    items: [
      "REST API",
      "JWT Authentication",
      "Responsive Design",
      "MVC Architecture",
      "Pengembangan Aplikasi Desktop",
      "Artificial Intelligence",
      "Machine Learning (Basic)",
    ],
  },
];

export const projects = [
  {
    title: "Academic Portal System",
    status: "Sedang dalam Pengembangan",
    featured: true,
    github: "https://github.com/Kelvin07-neww/Portal-Akademik",
    description:
      "Portal akademik modern untuk mengelola mahasiswa, dosen, orang tua, mata kuliah, absensi, nilai, autentikasi, dan administrasi akademik.",
    features: [
      "JWT Authentication",
      "Login Berbasis Role",
      "Dashboard Mahasiswa",
      "Dashboard Dosen",
      "Dashboard Orang Tua",
      "Dashboard Admin",
      "Manajemen Mata Kuliah",
      "Manajemen Absensi",
      "Manajemen Nilai",
      "Laporan Akademik",
      "REST API",
      "UI Responsif",
    ],
    tech: ["React", "Golang", "MySQL", "JWT", "Tailwind CSS", "REST API"],
  },
  {
    title: "Hospital Medical Record Desktop Application",
    status: "Selesai / Pengembangan Berkelanjutan",
    description:
      "Aplikasi desktop berbasis Java untuk mengelola data pasien rumah sakit dan informasi rekam medis.",
    features: [
      "Login Authentication",
      "Registrasi Pasien",
      "Manajemen Dokter",
      "Rekam Medis",
      "Riwayat Medis",
      "Data Obat",
      "Manajemen User",
      "Integrasi Database",
    ],
    tech: ["Java", "Java Swing", "MySQL"],
  },
];
