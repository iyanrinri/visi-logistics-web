export interface Job {
  id: number;
  icon: string;
  department: { id: string; en: string };
  location: string;
  type: 'fullTime' | 'partTime' | 'contract' | 'freelance';
  title: { id: string; en: string };
  responsibilities: { id: string[]; en: string[] };
  qualifications: { id: string[]; en: string[] };
}

export const jobs: Job[] = [
  {
    id: 1,
    icon: 'building',
    department: { id: 'Pengadaan', en: 'Procurement' },
    location: 'Jakarta Timur',
    type: 'fullTime',
    title: { id: 'Vendor Management Officer', en: 'Vendor Management Officer' },
    responsibilities: {
      id: [
        'Melakukan riset pasar untuk menemukan vendor logistik potensial.',
        'Mengevaluasi vendor berdasarkan harga, kualitas, dan kinerja.',
        'Menegosiasikan kontrak, biaya, dan jadwal pengiriman.',
        'Memantau kinerja vendor berdasarkan KPI dan SLA.',
        'Menyelesaikan masalah atau konflik dengan vendor (keterlambatan, masalah kualitas).',
        'Mengelola anggaran logistik dan mencari peluang optimasi biaya.',
        'Membuat laporan komprehensif tentang kinerja vendor.',
      ],
      en: [
        'Conduct market research to find potential logistics vendors.',
        'Evaluate vendors based on price, quality, and performance.',
        'Negotiate contracts, costs, and delivery schedules.',
        'Monitor vendor performance based on KPIs and SLAs.',
        'Resolve issues or conflicts with vendors (delays, quality issues).',
        'Manage logistics budgets and look for cost-optimization opportunities.',
        'Create comprehensive reports on vendor performance.',
      ],
    },
    qualifications: {
      id: [
        'Min. D3 di bidang Manajemen Logistik, Teknik Industri, atau Bisnis.',
        'Pengalaman 2-3 tahun di bidang logistik/manajemen vendor/rantai pasok.',
        'Kemampuan negosiasi dan penyusunan kontrak yang kuat.',
        'Familiar dengan software Supply Chain (SAP, Oracle) dan analisis data.',
        'Kemampuan komunikasi dan pemecahan masalah yang baik.',
        'Berorientasi pada detail dan mampu bekerja di bawah tekanan.',
      ],
      en: [
        'Min. D3 in Logistics Management, Industrial Engineering, or Business.',
        '2-3 years experience in logistics/vendor management/supply chain.',
        'Strong negotiation and contract drafting skills.',
        'Familiar with Supply Chain software (SAP, Oracle) and data analysis.',
        'Excellent communication and problem-solving skills.',
        'Detail-oriented and able to work under pressure.',
      ],
    },
  },
  {
    id: 2,
    icon: 'barChart',
    department: { id: 'Penjualan & Pemasaran', en: 'Sales & Marketing' },
    location: 'Jakarta Timur',
    type: 'fullTime',
    title: { id: 'Sales Marketing B2B', en: 'Sales Marketing B2B' },
    responsibilities: {
      id: [
        'Mengidentifikasi dan mengakuisisi pelanggan bisnis baru (B2B) di sektor logistik.',
        'Membangun dan menjaga hubungan jangka panjang dengan klien korporat.',
        'Menyiapkan penawaran, presentasi, dan negosiasi kontrak.',
        'Berkoordinasi dengan tim operasional untuk memastikan kepuasan pelanggan.',
        'Memantau tren pasar dan aktivitas kompetitor.',
        'Mencapai target penjualan bulanan dan tahunan.',
      ],
      en: [
        'Identify and acquire new B2B business clients in the logistics sector.',
        'Build and maintain long-term relationships with corporate clients.',
        'Prepare proposals, presentations, and contract negotiations.',
        'Coordinate with the operations team to ensure customer satisfaction.',
        'Monitor market trends and competitor activities.',
        'Achieve monthly and annual sales targets.',
      ],
    },
    qualifications: {
      id: [
        'Min. S1 di bidang Bisnis, Pemasaran, atau bidang terkait.',
        'Pengalaman min. 2 tahun di bidang penjualan B2B, diutamakan di logistik.',
        'Kemampuan komunikasi lisan dan tulisan yang baik.',
        'Berorientasi pada target dan memiliki jiwa kompetitif.',
        'Familiar dengan CRM tools dan Microsoft Office.',
        'Memiliki jaringan bisnis logistik menjadi nilai tambah.',
      ],
      en: [
        'Min. S1 in Business, Marketing, or related field.',
        'Min. 2 years experience in B2B sales, preferably in logistics.',
        'Good verbal and written communication skills.',
        'Target-oriented with a competitive mindset.',
        'Familiar with CRM tools and Microsoft Office.',
        'Existing logistics business network is a plus.',
      ],
    },
  },
  {
    id: 3,
    icon: 'truck',
    department: { id: 'Operasional', en: 'Operations' },
    location: 'Jakarta Timur',
    type: 'fullTime',
    title: { id: 'Staf Operasional Lapangan', en: 'Field Operations Staff' },
    responsibilities: {
      id: [
        'Mengkoordinasikan pengiriman dan penerimaan kargo harian.',
        'Memastikan kelancaran proses bongkar muat di gudang.',
        'Memantau status pengiriman dan memperbarui sistem pelacakan.',
        'Berkoordinasi dengan pengemudi dan mitra pengiriman.',
        'Menyiapkan dokumen pengiriman dan laporan harian.',
        'Menangani keluhan pelanggan terkait operasional lapangan.',
      ],
      en: [
        'Coordinate daily cargo shipment and delivery operations.',
        'Ensure smooth loading and unloading processes at the warehouse.',
        'Monitor shipment status and update the tracking system.',
        'Coordinate with drivers and delivery partners.',
        'Prepare shipment documents and daily reports.',
        'Handle customer complaints related to field operations.',
      ],
    },
    qualifications: {
      id: [
        'Min. D3 di bidang Transportasi, Logistik, atau bidang terkait.',
        'Pengalaman min. 1 tahun di bidang operasional logistik.',
        'Mampu bekerja dalam tim dan di bawah tekanan.',
        'Memahami prosedur keselamatan kerja dan penanganan kargo.',
        'Menguasai Microsoft Office dan sistem manajemen gudang dasar.',
        'Bersedia bekerja dengan jadwal fleksibel termasuk shift malam.',
      ],
      en: [
        'Min. D3 in Transportation, Logistics, or related field.',
        'Min. 1 year experience in logistics operations.',
        'Able to work in a team and under pressure.',
        'Understand occupational safety procedures and cargo handling.',
        'Proficient in Microsoft Office and basic warehouse management systems.',
        'Willing to work flexible schedules including night shifts.',
      ],
    },
  },
  {
    id: 4,
    icon: 'languages',
    department: { id: 'Administrasi', en: 'Administration' },
    location: 'Jakarta Timur',
    type: 'freelance',
    title: { id: 'Penerjemah Mandarin Freelance', en: 'Freelance Mandarin Translator' },
    responsibilities: {
      id: [
        'Menerjemahkan dokumen bisnis, kontrak, dan korespondensi ke/dari Bahasa Mandarin.',
        'Mendampingi pertemuan bisnis sebagai juru bahasa bila diperlukan.',
        'Memastikan akurasi dan konsistensi terminologi logistik dalam terjemahan.',
        'Berkoordinasi dengan tim operasional dan komersial untuk kebutuhan penerjemahan.',
      ],
      en: [
        'Translate business documents, contracts, and correspondence to/from Mandarin.',
        'Provide interpretation services during business meetings when required.',
        'Ensure accuracy and consistency of logistics terminology in translations.',
        'Coordinate with operations and commercial teams for translation needs.',
      ],
    },
    qualifications: {
      id: [
        'Fasih berbahasa Mandarin (HSK 5 ke atas atau setara).',
        'Min. S1 di bidang Sastra/Linguistik Mandarin atau bidang terkait.',
        'Pengalaman di bidang penerjemahan logistik atau bisnis menjadi nilai tambah.',
        'Memahami terminologi logistik dan perdagangan internasional.',
        'Mampu bekerja secara remote dan memenuhi tenggat waktu.',
      ],
      en: [
        'Fluent in Mandarin (HSK 5 or above, or equivalent).',
        'Min. S1 in Mandarin Literature/Linguistics or related field.',
        'Experience in logistics or business translation is a plus.',
        'Understand logistics and international trade terminology.',
        'Able to work remotely and meet deadlines.',
      ],
    },
  },
  {
    id: 5,
    icon: 'globe',
    department: { id: 'Penjualan & Pemasaran', en: 'Sales & Marketing' },
    location: 'Jakarta Timur',
    type: 'fullTime',
    title: { id: 'Spesialis Penjualan Ekspor-Impor', en: 'Sales Specialist Export-Import' },
    responsibilities: {
      id: [
        'Mengembangkan strategi penjualan untuk layanan ekspor-impor.',
        'Mencari dan mengakuisisi klien baru di sektor ekspor-impor.',
        'Mengelola portofolio klien ekspor-impor yang ada.',
        'Berkoordinasi dengan tim customs clearance dan freight forwarding.',
        'Menyiapkan dokumen penawaran dan negosiasi harga.',
        'Memantau dan melaporkan kinerja pipeline penjualan secara berkala.',
      ],
      en: [
        'Develop sales strategies for export-import services.',
        'Source and acquire new clients in the export-import sector.',
        'Manage existing export-import client portfolio.',
        'Coordinate with customs clearance and freight forwarding teams.',
        'Prepare proposal documents and price negotiations.',
        'Monitor and report sales pipeline performance regularly.',
      ],
    },
    qualifications: {
      id: [
        'Min. S1 di bidang Bisnis Internasional, Perdagangan, atau bidang terkait.',
        'Pengalaman min. 3 tahun di bidang penjualan ekspor-impor atau freight forwarding.',
        'Memahami regulasi kepabeanan dan prosedur ekspor-impor.',
        'Kemampuan negosiasi dan presentasi yang baik.',
        'Kemampuan berbahasa Inggris aktif (lisan dan tulisan).',
        'Memiliki jaringan di industri ekspor-impor menjadi nilai tambah.',
      ],
      en: [
        'Min. S1 in International Business, Trade, or related field.',
        'Min. 3 years experience in export-import sales or freight forwarding.',
        'Understand customs regulations and export-import procedures.',
        'Good negotiation and presentation skills.',
        'Active English proficiency (speaking and writing).',
        'Existing network in the export-import industry is a plus.',
      ],
    },
  },
  {
    id: 6,
    icon: 'star',
    department: { id: 'Manajemen', en: 'Management' },
    location: 'Jakarta Timur',
    type: 'fullTime',
    title: { id: 'General Manager Ekspor - Impor', en: 'General Manager Export - Import' },
    responsibilities: {
      id: [
        'Memimpin dan mengelola seluruh operasional divisi ekspor-impor.',
        'Mengembangkan strategi bisnis dan target pertumbuhan divisi.',
        'Membangun dan menjaga hubungan dengan klien strategis dan mitra bisnis.',
        'Mengawasi proses kepabeanan, dokumen, dan kepatuhan regulasi.',
        'Memimpin tim penjualan dan operasional ekspor-impor.',
        'Menyusun laporan kinerja dan anggaran divisi kepada direksi.',
        'Mengidentifikasi peluang pasar baru dan ekspansi bisnis.',
      ],
      en: [
        'Lead and manage all export-import division operations.',
        'Develop business strategies and division growth targets.',
        'Build and maintain relationships with strategic clients and business partners.',
        'Oversee customs processes, documentation, and regulatory compliance.',
        'Lead the export-import sales and operations team.',
        'Prepare divisional performance reports and budgets for the board.',
        'Identify new market opportunities and business expansion.',
      ],
    },
    qualifications: {
      id: [
        'Min. S1 di bidang Bisnis Internasional, Manajemen, atau bidang terkait.',
        'Pengalaman min. 8 tahun di bidang ekspor-impor, dengan min. 3 tahun di posisi manajerial.',
        'Pemahaman mendalam tentang regulasi perdagangan internasional dan kepabeanan.',
        'Kemampuan kepemimpinan dan manajemen tim yang kuat.',
        'Fasih berbahasa Inggris; kemampuan bahasa lain menjadi nilai tambah.',
        'Memiliki jaringan luas di industri logistik dan perdagangan internasional.',
      ],
      en: [
        'Min. S1 in International Business, Management, or related field.',
        'Min. 8 years experience in export-import, with at least 3 years in a managerial role.',
        'Deep understanding of international trade regulations and customs.',
        'Strong leadership and team management skills.',
        'Fluent in English; other language proficiency is a plus.',
        'Extensive network in the logistics and international trade industry.',
      ],
    },
  },
];
