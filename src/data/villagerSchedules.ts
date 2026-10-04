export interface DaySchedule {
  time: string;
  location: string;
}

export interface VillagerSchedule {
  id: string;
  name: string;
  image: string;
  notes: string;
  schedules: Record<string, DaySchedule[]>;
  regularDays?: DaySchedule[];
}

export const villagerSchedulesData: VillagerSchedule[] = [
  {
    "id": "vs_ann",
    "name": "Ann",
    "image": "https://fogu.com/hm4/img/girls/ann.gif",
    "notes": "Ann jarang keluar dari Inn kecuali saat festival.",
    "regularDays": [
      {
        "time": "06:00 - 07:30",
        "location": "Inn (Lantai 2 - Kamar)"
      },
      {
        "time": "07:30 - 10:00",
        "location": "Inn (Lantai 1 - Bersih-bersih)"
      },
      {
        "time": "10:00 - 13:00",
        "location": "Inn (Lantai 1 - Dapur/Counter)"
      },
      {
        "time": "13:00 - 16:00",
        "location": "Inn (Lantai 1)"
      },
      {
        "time": "16:00 - 19:00",
        "location": "Inn (Melayani tamu)"
      },
      {
        "time": "19:00 - 22:00",
        "location": "Inn (Lantai 1)"
      }
    ],
    "schedules": {
      "Senin": [
        {
          "time": "06:00 - 07:30",
          "location": "Inn (Lantai 2 - Kamar)"
        },
        {
          "time": "07:30 - 10:00",
          "location": "Inn (Lantai 1 - Bersih-bersih)"
        },
        {
          "time": "10:00 - 13:00",
          "location": "Inn (Lantai 1 - Dapur/Counter)"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Inn (Lantai 1)"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Inn (Melayani tamu)"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Inn (Lantai 1)"
        }
      ],
      "Selasa": [
        {
          "time": "06:00 - 07:30",
          "location": "Inn (Lantai 2 - Kamar)"
        },
        {
          "time": "07:30 - 10:00",
          "location": "Inn (Lantai 1 - Bersih-bersih)"
        },
        {
          "time": "10:00 - 13:00",
          "location": "Inn (Lantai 1 - Dapur/Counter)"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Inn (Lantai 1)"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Inn (Melayani tamu)"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Inn (Lantai 1)"
        }
      ],
      "Rabu": [
        {
          "time": "06:00 - 07:30",
          "location": "Inn (Lantai 2 - Kamar)"
        },
        {
          "time": "07:30 - 10:00",
          "location": "Inn (Lantai 1 - Bersih-bersih)"
        },
        {
          "time": "10:00 - 13:00",
          "location": "Inn (Lantai 1 - Dapur/Counter)"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Inn (Lantai 1)"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Inn (Melayani tamu)"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Inn (Lantai 1)"
        }
      ],
      "Kamis": [
        {
          "time": "06:00 - 07:30",
          "location": "Inn (Lantai 2 - Kamar)"
        },
        {
          "time": "07:30 - 10:00",
          "location": "Inn (Lantai 1 - Bersih-bersih)"
        },
        {
          "time": "10:00 - 13:00",
          "location": "Inn (Lantai 1 - Dapur/Counter)"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Inn (Lantai 1)"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Inn (Melayani tamu)"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Inn (Lantai 1)"
        }
      ],
      "Jumat": [
        {
          "time": "06:00 - 07:30",
          "location": "Inn (Lantai 2 - Kamar)"
        },
        {
          "time": "07:30 - 10:00",
          "location": "Inn (Lantai 1 - Bersih-bersih)"
        },
        {
          "time": "10:00 - 13:00",
          "location": "Inn (Lantai 1 - Dapur/Counter)"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Inn (Lantai 1)"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Inn (Melayani tamu)"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Inn (Lantai 1)"
        }
      ],
      "Sabtu": [
        {
          "time": "06:00 - 07:30",
          "location": "Inn (Lantai 2 - Kamar)"
        },
        {
          "time": "07:30 - 10:00",
          "location": "Inn (Lantai 1 - Bersih-bersih)"
        },
        {
          "time": "10:00 - 13:00",
          "location": "Inn (Lantai 1 - Dapur/Counter)"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Inn (Lantai 1)"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Inn (Melayani tamu)"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Inn (Lantai 1)"
        }
      ],
      "Minggu": [
        {
          "time": "06:00 - 07:30",
          "location": "Inn (Lantai 2 - Kamar)"
        },
        {
          "time": "07:30 - 10:00",
          "location": "Inn (Lantai 1 - Bersih-bersih)"
        },
        {
          "time": "10:00 - 13:00",
          "location": "Inn (Lantai 1 - Dapur/Counter)"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Inn (Lantai 1)"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Inn (Melayani tamu)"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Inn (Lantai 1)"
        }
      ]
    }
  },
  {
    "id": "vs_karen",
    "name": "Karen",
    "image": "https://fogu.com/hm4/img/girls/karen.gif",
    "notes": "Sering ke pantai malam hari. Hari libur bisa ditemui di luar.",
    "regularDays": [
      {
        "time": "06:00 - 08:00",
        "location": "Supermarket (Lantai 2)"
      },
      {
        "time": "08:00 - 10:00",
        "location": "Supermarket (Membantu)"
      },
      {
        "time": "10:00 - 13:00",
        "location": "Supermarket"
      },
      {
        "time": "13:00 - 16:00",
        "location": "Supermarket / Jalan-jalan"
      },
      {
        "time": "16:00 - 19:00",
        "location": "Supermarket / Hot Spring"
      },
      {
        "time": "19:00 - 22:00",
        "location": "Supermarket / Beach (malam)"
      }
    ],
    "schedules": {
      "Senin": [
        {
          "time": "06:00 - 08:00",
          "location": "Supermarket (Lantai 2)"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Supermarket (Membantu)"
        },
        {
          "time": "10:00 - 13:00",
          "location": "Supermarket"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Supermarket / Jalan-jalan"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Supermarket / Hot Spring"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Supermarket / Beach (malam)"
        }
      ],
      "Selasa": [
        {
          "time": "08:00 - 13:00",
          "location": "Supermarket (Tutup)"
        },
        {
          "time": "13:30 - 16:00",
          "location": "Hot Spring"
        },
        {
          "time": "19:30 - 22:00",
          "location": "Inn"
        }
      ],
      "Rabu": [
        {
          "time": "06:00 - 08:00",
          "location": "Supermarket (Lantai 2)"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Supermarket (Membantu)"
        },
        {
          "time": "10:00 - 13:00",
          "location": "Supermarket"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Supermarket / Jalan-jalan"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Supermarket / Hot Spring"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Supermarket / Beach (malam)"
        }
      ],
      "Kamis": [
        {
          "time": "06:00 - 08:00",
          "location": "Supermarket (Lantai 2)"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Supermarket (Membantu)"
        },
        {
          "time": "10:00 - 13:00",
          "location": "Supermarket"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Supermarket / Jalan-jalan"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Supermarket / Hot Spring"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Supermarket / Beach (malam)"
        }
      ],
      "Jumat": [
        {
          "time": "06:00 - 08:00",
          "location": "Supermarket (Lantai 2)"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Supermarket (Membantu)"
        },
        {
          "time": "10:00 - 13:00",
          "location": "Supermarket"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Supermarket / Jalan-jalan"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Supermarket / Hot Spring"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Supermarket / Beach (malam)"
        }
      ],
      "Sabtu": [
        {
          "time": "06:00 - 08:00",
          "location": "Supermarket (Lantai 2)"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Supermarket (Membantu)"
        },
        {
          "time": "10:00 - 13:00",
          "location": "Supermarket"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Supermarket / Jalan-jalan"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Supermarket / Hot Spring"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Supermarket / Beach (malam)"
        }
      ],
      "Minggu": [
        {
          "time": "08:00 - 13:00",
          "location": "Supermarket (Tutup)"
        },
        {
          "time": "13:30 - 16:00",
          "location": "Hot Spring"
        },
        {
          "time": "19:30 - 22:00",
          "location": "Inn"
        }
      ]
    }
  },
  {
    "id": "vs_mary",
    "name": "Mary",
    "image": "https://fogu.com/hm4/img/girls/mary.gif",
    "notes": "Hari Senin Mary pergi ke Mother's Hill.",
    "regularDays": [
      {
        "time": "06:00 - 08:00",
        "location": "Rumah Basil"
      },
      {
        "time": "08:00 - 10:00",
        "location": "Perpustakaan (buka)"
      },
      {
        "time": "10:00 - 16:00",
        "location": "Perpustakaan (Menulis/Membaca)"
      },
      {
        "time": "16:00 - 18:00",
        "location": "Perpustakaan (tutup) / Jalan pulang"
      },
      {
        "time": "18:00 - 22:00",
        "location": "Rumah Basil"
      }
    ],
    "schedules": {
      "Senin": [
        {
          "time": "07:30 - 10:00",
          "location": "Mother's Hill"
        },
        {
          "time": "10:00 - 13:00",
          "location": "Rumah Basil"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Supermarket"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Rumah Basil"
        }
      ],
      "Selasa": [
        {
          "time": "06:00 - 08:00",
          "location": "Rumah Basil"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Perpustakaan (buka)"
        },
        {
          "time": "10:00 - 16:00",
          "location": "Perpustakaan (Menulis/Membaca)"
        },
        {
          "time": "16:00 - 18:00",
          "location": "Perpustakaan (tutup) / Jalan pulang"
        },
        {
          "time": "18:00 - 22:00",
          "location": "Rumah Basil"
        }
      ],
      "Rabu": [
        {
          "time": "06:00 - 08:00",
          "location": "Rumah Basil"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Perpustakaan (buka)"
        },
        {
          "time": "10:00 - 16:00",
          "location": "Perpustakaan (Menulis/Membaca)"
        },
        {
          "time": "16:00 - 18:00",
          "location": "Perpustakaan (tutup) / Jalan pulang"
        },
        {
          "time": "18:00 - 22:00",
          "location": "Rumah Basil"
        }
      ],
      "Kamis": [
        {
          "time": "06:00 - 08:00",
          "location": "Rumah Basil"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Perpustakaan (buka)"
        },
        {
          "time": "10:00 - 16:00",
          "location": "Perpustakaan (Menulis/Membaca)"
        },
        {
          "time": "16:00 - 18:00",
          "location": "Perpustakaan (tutup) / Jalan pulang"
        },
        {
          "time": "18:00 - 22:00",
          "location": "Rumah Basil"
        }
      ],
      "Jumat": [
        {
          "time": "06:00 - 08:00",
          "location": "Rumah Basil"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Perpustakaan (buka)"
        },
        {
          "time": "10:00 - 16:00",
          "location": "Perpustakaan (Menulis/Membaca)"
        },
        {
          "time": "16:00 - 18:00",
          "location": "Perpustakaan (tutup) / Jalan pulang"
        },
        {
          "time": "18:00 - 22:00",
          "location": "Rumah Basil"
        }
      ],
      "Sabtu": [
        {
          "time": "06:00 - 08:00",
          "location": "Rumah Basil"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Perpustakaan (buka)"
        },
        {
          "time": "10:00 - 16:00",
          "location": "Perpustakaan (Menulis/Membaca)"
        },
        {
          "time": "16:00 - 18:00",
          "location": "Perpustakaan (tutup) / Jalan pulang"
        },
        {
          "time": "18:00 - 22:00",
          "location": "Rumah Basil"
        }
      ],
      "Minggu": [
        {
          "time": "06:00 - 08:00",
          "location": "Rumah Basil"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Perpustakaan (buka)"
        },
        {
          "time": "10:00 - 16:00",
          "location": "Perpustakaan (Menulis/Membaca)"
        },
        {
          "time": "16:00 - 18:00",
          "location": "Perpustakaan (tutup) / Jalan pulang"
        },
        {
          "time": "18:00 - 22:00",
          "location": "Rumah Basil"
        }
      ]
    }
  },
  {
    "id": "vs_elli",
    "name": "Elli",
    "image": "https://fogu.com/hm4/img/girls/elli.gif",
    "notes": "Hari Rabu mengunjungi Ellen di rumahnya.",
    "regularDays": [
      {
        "time": "06:00 - 07:00",
        "location": "Rumah Ellen (sarapan)"
      },
      {
        "time": "07:00 - 09:00",
        "location": "Jalan ke Clinic"
      },
      {
        "time": "09:00 - 16:00",
        "location": "Clinic (bekerja)"
      },
      {
        "time": "16:00 - 19:00",
        "location": "Clinic / Supermarket belanja"
      },
      {
        "time": "19:00 - 22:00",
        "location": "Rumah Ellen"
      }
    ],
    "schedules": {
      "Senin": [
        {
          "time": "06:00 - 07:00",
          "location": "Rumah Ellen (sarapan)"
        },
        {
          "time": "07:00 - 09:00",
          "location": "Jalan ke Clinic"
        },
        {
          "time": "09:00 - 16:00",
          "location": "Clinic (bekerja)"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Clinic / Supermarket belanja"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Rumah Ellen"
        }
      ],
      "Selasa": [
        {
          "time": "06:00 - 07:00",
          "location": "Rumah Ellen (sarapan)"
        },
        {
          "time": "07:00 - 09:00",
          "location": "Jalan ke Clinic"
        },
        {
          "time": "09:00 - 16:00",
          "location": "Clinic (bekerja)"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Clinic / Supermarket belanja"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Rumah Ellen"
        }
      ],
      "Rabu": [
        {
          "time": "09:00 - 13:00",
          "location": "Rumah Ellen"
        },
        {
          "time": "13:30 - 16:00",
          "location": "Supermarket"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Rumah Ellen"
        }
      ],
      "Kamis": [
        {
          "time": "06:00 - 07:00",
          "location": "Rumah Ellen (sarapan)"
        },
        {
          "time": "07:00 - 09:00",
          "location": "Jalan ke Clinic"
        },
        {
          "time": "09:00 - 16:00",
          "location": "Clinic (bekerja)"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Clinic / Supermarket belanja"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Rumah Ellen"
        }
      ],
      "Jumat": [
        {
          "time": "06:00 - 07:00",
          "location": "Rumah Ellen (sarapan)"
        },
        {
          "time": "07:00 - 09:00",
          "location": "Jalan ke Clinic"
        },
        {
          "time": "09:00 - 16:00",
          "location": "Clinic (bekerja)"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Clinic / Supermarket belanja"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Rumah Ellen"
        }
      ],
      "Sabtu": [
        {
          "time": "06:00 - 07:00",
          "location": "Rumah Ellen (sarapan)"
        },
        {
          "time": "07:00 - 09:00",
          "location": "Jalan ke Clinic"
        },
        {
          "time": "09:00 - 16:00",
          "location": "Clinic (bekerja)"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Clinic / Supermarket belanja"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Rumah Ellen"
        }
      ],
      "Minggu": [
        {
          "time": "06:00 - 07:00",
          "location": "Rumah Ellen (sarapan)"
        },
        {
          "time": "07:00 - 09:00",
          "location": "Jalan ke Clinic"
        },
        {
          "time": "09:00 - 16:00",
          "location": "Clinic (bekerja)"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Clinic / Supermarket belanja"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Rumah Ellen"
        }
      ]
    }
  },
  {
    "id": "vs_popuri",
    "name": "Popuri",
    "image": "https://fogu.com/hm4/img/girls/popuri.gif",
    "notes": "Sering ke Gereja bermain dengan anak-anak.",
    "regularDays": [
      {
        "time": "06:00 - 08:00",
        "location": "Poultry Farm (Kamar)"
      },
      {
        "time": "08:00 - 10:00",
        "location": "Poultry Farm (Kandang ayam)"
      },
      {
        "time": "10:00 - 13:00",
        "location": "Poultry Farm / Gereja"
      },
      {
        "time": "13:00 - 16:00",
        "location": "Poultry Farm / Hot Spring"
      },
      {
        "time": "16:00 - 19:00",
        "location": "Poultry Farm"
      },
      {
        "time": "19:00 - 22:00",
        "location": "Poultry Farm (Rumah)"
      }
    ],
    "schedules": {
      "Senin": [
        {
          "time": "06:00 - 08:00",
          "location": "Poultry Farm (Kamar)"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Poultry Farm (Kandang ayam)"
        },
        {
          "time": "10:00 - 13:00",
          "location": "Poultry Farm / Gereja"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Poultry Farm / Hot Spring"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Poultry Farm"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Poultry Farm (Rumah)"
        }
      ],
      "Selasa": [
        {
          "time": "06:00 - 08:00",
          "location": "Poultry Farm (Kamar)"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Poultry Farm (Kandang ayam)"
        },
        {
          "time": "10:00 - 13:00",
          "location": "Poultry Farm / Gereja"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Poultry Farm / Hot Spring"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Poultry Farm"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Poultry Farm (Rumah)"
        }
      ],
      "Rabu": [
        {
          "time": "06:00 - 08:00",
          "location": "Poultry Farm (Kamar)"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Poultry Farm (Kandang ayam)"
        },
        {
          "time": "10:00 - 13:00",
          "location": "Poultry Farm / Gereja"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Poultry Farm / Hot Spring"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Poultry Farm"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Poultry Farm (Rumah)"
        }
      ],
      "Kamis": [
        {
          "time": "06:00 - 08:00",
          "location": "Poultry Farm (Kamar)"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Poultry Farm (Kandang ayam)"
        },
        {
          "time": "10:00 - 13:00",
          "location": "Poultry Farm / Gereja"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Poultry Farm / Hot Spring"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Poultry Farm"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Poultry Farm (Rumah)"
        }
      ],
      "Jumat": [
        {
          "time": "06:00 - 08:00",
          "location": "Poultry Farm (Kamar)"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Poultry Farm (Kandang ayam)"
        },
        {
          "time": "10:00 - 13:00",
          "location": "Poultry Farm / Gereja"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Poultry Farm / Hot Spring"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Poultry Farm"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Poultry Farm (Rumah)"
        }
      ],
      "Sabtu": [
        {
          "time": "06:00 - 08:00",
          "location": "Poultry Farm (Kamar)"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Poultry Farm (Kandang ayam)"
        },
        {
          "time": "10:00 - 13:00",
          "location": "Poultry Farm / Gereja"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Poultry Farm / Hot Spring"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Poultry Farm"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Poultry Farm (Rumah)"
        }
      ],
      "Minggu": [
        {
          "time": "09:30 - 13:00",
          "location": "Gereja"
        },
        {
          "time": "13:30 - 16:00",
          "location": "Rose Square"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Poultry Farm"
        }
      ]
    }
  },
  {
    "id": "vs_doctor",
    "name": "Doctor",
    "image": "https://fogu.com/hm4/img/peeps/doctor.gif",
    "notes": "Sangat fokus pada pekerjaan. Jarang keluar Clinic.",
    "regularDays": [
      {
        "time": "06:00 - 09:00",
        "location": "Clinic (Kamar belakang)"
      },
      {
        "time": "09:00 - 16:00",
        "location": "Clinic (Ruang periksa)"
      },
      {
        "time": "16:00 - 19:00",
        "location": "Clinic / Perpustakaan (riset)"
      },
      {
        "time": "19:00 - 22:00",
        "location": "Clinic (Kamar)"
      }
    ],
    "schedules": {
      "Senin": [
        {
          "time": "06:00 - 09:00",
          "location": "Clinic (Kamar belakang)"
        },
        {
          "time": "09:00 - 16:00",
          "location": "Clinic (Ruang periksa)"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Clinic / Perpustakaan (riset)"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Clinic (Kamar)"
        }
      ],
      "Selasa": [
        {
          "time": "06:00 - 09:00",
          "location": "Clinic (Kamar belakang)"
        },
        {
          "time": "09:00 - 16:00",
          "location": "Clinic (Ruang periksa)"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Clinic / Perpustakaan (riset)"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Clinic (Kamar)"
        }
      ],
      "Rabu": [
        {
          "time": "08:00 - 10:00",
          "location": "Mother's Hill (Danau)"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Perpustakaan"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Clinic (Kamar)"
        }
      ],
      "Kamis": [
        {
          "time": "06:00 - 09:00",
          "location": "Clinic (Kamar belakang)"
        },
        {
          "time": "09:00 - 16:00",
          "location": "Clinic (Ruang periksa)"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Clinic / Perpustakaan (riset)"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Clinic (Kamar)"
        }
      ],
      "Jumat": [
        {
          "time": "06:00 - 09:00",
          "location": "Clinic (Kamar belakang)"
        },
        {
          "time": "09:00 - 16:00",
          "location": "Clinic (Ruang periksa)"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Clinic / Perpustakaan (riset)"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Clinic (Kamar)"
        }
      ],
      "Sabtu": [
        {
          "time": "06:00 - 09:00",
          "location": "Clinic (Kamar belakang)"
        },
        {
          "time": "09:00 - 16:00",
          "location": "Clinic (Ruang periksa)"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Clinic / Perpustakaan (riset)"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Clinic (Kamar)"
        }
      ],
      "Minggu": [
        {
          "time": "06:00 - 09:00",
          "location": "Clinic (Kamar belakang)"
        },
        {
          "time": "09:00 - 16:00",
          "location": "Clinic (Ruang periksa)"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Clinic / Perpustakaan (riset)"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Clinic (Kamar)"
        }
      ]
    }
  },
  {
    "id": "vs_cliff",
    "name": "Cliff",
    "image": "https://static.wikia.nocookie.net/hmwikia/images/e/e6/Cliff_and_Cain.jpeg",
    "notes": "Sebelum dapat kerja: di Gereja. Setelah Fall 14: di Winery.",
    "regularDays": [
      {
        "time": "06:00 - 08:00",
        "location": "Inn (Kamar)"
      },
      {
        "time": "08:00 - 11:00",
        "location": "Gereja / Winery (jika sudah kerja)"
      },
      {
        "time": "11:00 - 14:00",
        "location": "Gereja / Winery"
      },
      {
        "time": "14:00 - 17:00",
        "location": "Mother's Hill / Inn"
      },
      {
        "time": "17:00 - 22:00",
        "location": "Inn"
      }
    ],
    "schedules": {
      "Senin": [
        {
          "time": "06:00 - 08:00",
          "location": "Inn (Kamar)"
        },
        {
          "time": "08:00 - 11:00",
          "location": "Gereja / Winery (jika sudah kerja)"
        },
        {
          "time": "11:00 - 14:00",
          "location": "Gereja / Winery"
        },
        {
          "time": "14:00 - 17:00",
          "location": "Mother's Hill / Inn"
        },
        {
          "time": "17:00 - 22:00",
          "location": "Inn"
        }
      ],
      "Selasa": [
        {
          "time": "06:00 - 08:00",
          "location": "Inn (Kamar)"
        },
        {
          "time": "08:00 - 11:00",
          "location": "Gereja / Winery (jika sudah kerja)"
        },
        {
          "time": "11:00 - 14:00",
          "location": "Gereja / Winery"
        },
        {
          "time": "14:00 - 17:00",
          "location": "Mother's Hill / Inn"
        },
        {
          "time": "17:00 - 22:00",
          "location": "Inn"
        }
      ],
      "Rabu": [
        {
          "time": "06:00 - 08:00",
          "location": "Inn (Kamar)"
        },
        {
          "time": "08:00 - 11:00",
          "location": "Gereja / Winery (jika sudah kerja)"
        },
        {
          "time": "11:00 - 14:00",
          "location": "Gereja / Winery"
        },
        {
          "time": "14:00 - 17:00",
          "location": "Mother's Hill / Inn"
        },
        {
          "time": "17:00 - 22:00",
          "location": "Inn"
        }
      ],
      "Kamis": [
        {
          "time": "06:00 - 08:00",
          "location": "Inn (Kamar)"
        },
        {
          "time": "08:00 - 11:00",
          "location": "Gereja / Winery (jika sudah kerja)"
        },
        {
          "time": "11:00 - 14:00",
          "location": "Gereja / Winery"
        },
        {
          "time": "14:00 - 17:00",
          "location": "Mother's Hill / Inn"
        },
        {
          "time": "17:00 - 22:00",
          "location": "Inn"
        }
      ],
      "Jumat": [
        {
          "time": "06:00 - 08:00",
          "location": "Inn (Kamar)"
        },
        {
          "time": "08:00 - 11:00",
          "location": "Gereja / Winery (jika sudah kerja)"
        },
        {
          "time": "11:00 - 14:00",
          "location": "Gereja / Winery"
        },
        {
          "time": "14:00 - 17:00",
          "location": "Mother's Hill / Inn"
        },
        {
          "time": "17:00 - 22:00",
          "location": "Inn"
        }
      ],
      "Sabtu": [
        {
          "time": "06:00 - 08:00",
          "location": "Inn (Kamar)"
        },
        {
          "time": "08:00 - 11:00",
          "location": "Gereja / Winery (jika sudah kerja)"
        },
        {
          "time": "11:00 - 14:00",
          "location": "Gereja / Winery"
        },
        {
          "time": "14:00 - 17:00",
          "location": "Mother's Hill / Inn"
        },
        {
          "time": "17:00 - 22:00",
          "location": "Inn"
        }
      ],
      "Minggu": [
        {
          "time": "06:00 - 08:00",
          "location": "Inn (Kamar)"
        },
        {
          "time": "08:00 - 11:00",
          "location": "Gereja / Winery (jika sudah kerja)"
        },
        {
          "time": "11:00 - 14:00",
          "location": "Gereja / Winery"
        },
        {
          "time": "14:00 - 17:00",
          "location": "Mother's Hill / Inn"
        },
        {
          "time": "17:00 - 22:00",
          "location": "Inn"
        }
      ]
    }
  },
  {
    "id": "vs_gray",
    "name": "Gray",
    "image": "https://fogu.com/hm4/img/peeps/gray.gif",
    "notes": "Hari Kamis biasanya di Perpustakaan (bertemu Mary).",
    "regularDays": [
      {
        "time": "06:00 - 08:00",
        "location": "Inn (Kamar)"
      },
      {
        "time": "08:00 - 10:00",
        "location": "Jalan ke Blacksmith"
      },
      {
        "time": "10:00 - 13:00",
        "location": "Saibara Blacksmith (Bekerja)"
      },
      {
        "time": "13:00 - 16:00",
        "location": "Saibara Blacksmith"
      },
      {
        "time": "16:00 - 19:00",
        "location": "Perpustakaan / Inn"
      },
      {
        "time": "19:00 - 22:00",
        "location": "Inn"
      }
    ],
    "schedules": {
      "Senin": [
        {
          "time": "06:00 - 08:00",
          "location": "Inn (Kamar)"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Jalan ke Blacksmith"
        },
        {
          "time": "10:00 - 13:00",
          "location": "Saibara Blacksmith (Bekerja)"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Saibara Blacksmith"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Perpustakaan / Inn"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Inn"
        }
      ],
      "Selasa": [
        {
          "time": "06:00 - 08:00",
          "location": "Inn (Kamar)"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Jalan ke Blacksmith"
        },
        {
          "time": "10:00 - 13:00",
          "location": "Saibara Blacksmith (Bekerja)"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Saibara Blacksmith"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Perpustakaan / Inn"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Inn"
        }
      ],
      "Rabu": [
        {
          "time": "06:00 - 08:00",
          "location": "Inn (Kamar)"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Jalan ke Blacksmith"
        },
        {
          "time": "10:00 - 13:00",
          "location": "Saibara Blacksmith (Bekerja)"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Saibara Blacksmith"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Perpustakaan / Inn"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Inn"
        }
      ],
      "Kamis": [
        {
          "time": "07:00 - 10:00",
          "location": "Mother's Hill"
        },
        {
          "time": "10:00 - 13:00",
          "location": "Blacksmith (Tutup)"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Perpustakaan"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Inn"
        }
      ],
      "Jumat": [
        {
          "time": "06:00 - 08:00",
          "location": "Inn (Kamar)"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Jalan ke Blacksmith"
        },
        {
          "time": "10:00 - 13:00",
          "location": "Saibara Blacksmith (Bekerja)"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Saibara Blacksmith"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Perpustakaan / Inn"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Inn"
        }
      ],
      "Sabtu": [
        {
          "time": "06:00 - 08:00",
          "location": "Inn (Kamar)"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Jalan ke Blacksmith"
        },
        {
          "time": "10:00 - 13:00",
          "location": "Saibara Blacksmith (Bekerja)"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Saibara Blacksmith"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Perpustakaan / Inn"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Inn"
        }
      ],
      "Minggu": [
        {
          "time": "06:00 - 08:00",
          "location": "Inn (Kamar)"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Jalan ke Blacksmith"
        },
        {
          "time": "10:00 - 13:00",
          "location": "Saibara Blacksmith (Bekerja)"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Saibara Blacksmith"
        },
        {
          "time": "16:00 - 19:00",
          "location": "Perpustakaan / Inn"
        },
        {
          "time": "19:00 - 22:00",
          "location": "Inn"
        }
      ]
    }
  },
  {
    "id": "vs_rick",
    "name": "Rick",
    "image": "https://fogu.com/hm4/img/peeps/rick.gif",
    "notes": "Sangat protektif terhadap Popuri, benci Kai.",
    "regularDays": [
      {
        "time": "06:00 - 08:00",
        "location": "Poultry Farm (Rumah)"
      },
      {
        "time": "08:00 - 11:00",
        "location": "Poultry Farm (Kandang)"
      },
      {
        "time": "11:00 - 13:00",
        "location": "Poultry Farm"
      },
      {
        "time": "13:00 - 16:00",
        "location": "Poultry Farm / Supermarket belanja"
      },
      {
        "time": "16:00 - 22:00",
        "location": "Poultry Farm (Rumah)"
      }
    ],
    "schedules": {
      "Senin": [
        {
          "time": "06:00 - 08:00",
          "location": "Poultry Farm (Rumah)"
        },
        {
          "time": "08:00 - 11:00",
          "location": "Poultry Farm (Kandang)"
        },
        {
          "time": "11:00 - 13:00",
          "location": "Poultry Farm"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Poultry Farm / Supermarket belanja"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Poultry Farm (Rumah)"
        }
      ],
      "Selasa": [
        {
          "time": "06:00 - 08:00",
          "location": "Poultry Farm (Rumah)"
        },
        {
          "time": "08:00 - 11:00",
          "location": "Poultry Farm (Kandang)"
        },
        {
          "time": "11:00 - 13:00",
          "location": "Poultry Farm"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Poultry Farm / Supermarket belanja"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Poultry Farm (Rumah)"
        }
      ],
      "Rabu": [
        {
          "time": "06:00 - 08:00",
          "location": "Poultry Farm (Rumah)"
        },
        {
          "time": "08:00 - 11:00",
          "location": "Poultry Farm (Kandang)"
        },
        {
          "time": "11:00 - 13:00",
          "location": "Poultry Farm"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Poultry Farm / Supermarket belanja"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Poultry Farm (Rumah)"
        }
      ],
      "Kamis": [
        {
          "time": "06:00 - 08:00",
          "location": "Poultry Farm (Rumah)"
        },
        {
          "time": "08:00 - 11:00",
          "location": "Poultry Farm (Kandang)"
        },
        {
          "time": "11:00 - 13:00",
          "location": "Poultry Farm"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Poultry Farm / Supermarket belanja"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Poultry Farm (Rumah)"
        }
      ],
      "Jumat": [
        {
          "time": "06:00 - 08:00",
          "location": "Poultry Farm (Rumah)"
        },
        {
          "time": "08:00 - 11:00",
          "location": "Poultry Farm (Kandang)"
        },
        {
          "time": "11:00 - 13:00",
          "location": "Poultry Farm"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Poultry Farm / Supermarket belanja"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Poultry Farm (Rumah)"
        }
      ],
      "Sabtu": [
        {
          "time": "06:00 - 08:00",
          "location": "Poultry Farm (Rumah)"
        },
        {
          "time": "08:00 - 11:00",
          "location": "Poultry Farm (Kandang)"
        },
        {
          "time": "11:00 - 13:00",
          "location": "Poultry Farm"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Poultry Farm / Supermarket belanja"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Poultry Farm (Rumah)"
        }
      ],
      "Minggu": [
        {
          "time": "08:00 - 13:00",
          "location": "Poultry Farm (Tutup)"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Rose Square"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Inn"
        }
      ]
    }
  },
  {
    "id": "vs_kai",
    "name": "Kai",
    "image": "https://fogu.com/hm4/img/peeps/kai.gif",
    "notes": "HANYA ADA DI SUMMER. Musim lain dia pergi keliling dunia.",
    "regularDays": [
      {
        "time": "06:00 - 09:00",
        "location": "Seaside Lodge (Kamar)"
      },
      {
        "time": "09:00 - 12:00",
        "location": "Beach (Warung)"
      },
      {
        "time": "12:00 - 17:00",
        "location": "Beach (Melayani pelanggan)"
      },
      {
        "time": "17:00 - 20:00",
        "location": "Beach / Inn"
      },
      {
        "time": "20:00 - 22:00",
        "location": "Seaside Lodge"
      }
    ],
    "schedules": {
      "Senin": [
        {
          "time": "06:00 - 09:00",
          "location": "Seaside Lodge (Kamar)"
        },
        {
          "time": "09:00 - 12:00",
          "location": "Beach (Warung)"
        },
        {
          "time": "12:00 - 17:00",
          "location": "Beach (Melayani pelanggan)"
        },
        {
          "time": "17:00 - 20:00",
          "location": "Beach / Inn"
        },
        {
          "time": "20:00 - 22:00",
          "location": "Seaside Lodge"
        }
      ],
      "Selasa": [
        {
          "time": "06:00 - 09:00",
          "location": "Seaside Lodge (Kamar)"
        },
        {
          "time": "09:00 - 12:00",
          "location": "Beach (Warung)"
        },
        {
          "time": "12:00 - 17:00",
          "location": "Beach (Melayani pelanggan)"
        },
        {
          "time": "17:00 - 20:00",
          "location": "Beach / Inn"
        },
        {
          "time": "20:00 - 22:00",
          "location": "Seaside Lodge"
        }
      ],
      "Rabu": [
        {
          "time": "06:00 - 09:00",
          "location": "Seaside Lodge (Kamar)"
        },
        {
          "time": "09:00 - 12:00",
          "location": "Beach (Warung)"
        },
        {
          "time": "12:00 - 17:00",
          "location": "Beach (Melayani pelanggan)"
        },
        {
          "time": "17:00 - 20:00",
          "location": "Beach / Inn"
        },
        {
          "time": "20:00 - 22:00",
          "location": "Seaside Lodge"
        }
      ],
      "Kamis": [
        {
          "time": "06:00 - 09:00",
          "location": "Seaside Lodge (Kamar)"
        },
        {
          "time": "09:00 - 12:00",
          "location": "Beach (Warung)"
        },
        {
          "time": "12:00 - 17:00",
          "location": "Beach (Melayani pelanggan)"
        },
        {
          "time": "17:00 - 20:00",
          "location": "Beach / Inn"
        },
        {
          "time": "20:00 - 22:00",
          "location": "Seaside Lodge"
        }
      ],
      "Jumat": [
        {
          "time": "06:00 - 09:00",
          "location": "Seaside Lodge (Kamar)"
        },
        {
          "time": "09:00 - 12:00",
          "location": "Beach (Warung)"
        },
        {
          "time": "12:00 - 17:00",
          "location": "Beach (Melayani pelanggan)"
        },
        {
          "time": "17:00 - 20:00",
          "location": "Beach / Inn"
        },
        {
          "time": "20:00 - 22:00",
          "location": "Seaside Lodge"
        }
      ],
      "Sabtu": [
        {
          "time": "06:00 - 09:00",
          "location": "Seaside Lodge (Kamar)"
        },
        {
          "time": "09:00 - 12:00",
          "location": "Beach (Warung)"
        },
        {
          "time": "12:00 - 17:00",
          "location": "Beach (Melayani pelanggan)"
        },
        {
          "time": "17:00 - 20:00",
          "location": "Beach / Inn"
        },
        {
          "time": "20:00 - 22:00",
          "location": "Seaside Lodge"
        }
      ],
      "Minggu": [
        {
          "time": "06:00 - 09:00",
          "location": "Seaside Lodge (Kamar)"
        },
        {
          "time": "09:00 - 12:00",
          "location": "Beach (Warung)"
        },
        {
          "time": "12:00 - 17:00",
          "location": "Beach (Melayani pelanggan)"
        },
        {
          "time": "17:00 - 20:00",
          "location": "Beach / Inn"
        },
        {
          "time": "20:00 - 22:00",
          "location": "Seaside Lodge"
        }
      ]
    }
  },
  {
    "id": "vs_thomas",
    "name": "Mayor Thomas",
    "image": "https://fogu.com/hm4/img/peeps/thomas.gif",
    "notes": "Sering mengunjungi farm-mu di pagi hari untuk mengecek shipping bin.",
    "regularDays": [
      {
        "time": "06:00 - 08:00",
        "location": "Mayor's House"
      },
      {
        "time": "08:00 - 10:00",
        "location": "Rose Square / Farm-mu"
      },
      {
        "time": "10:00 - 13:00",
        "location": "Rose Square / Jalan-jalan"
      },
      {
        "time": "13:00 - 16:00",
        "location": "Mayor's House"
      },
      {
        "time": "16:00 - 22:00",
        "location": "Mayor's House"
      }
    ],
    "schedules": {
      "Senin": [
        {
          "time": "06:00 - 08:00",
          "location": "Mayor's House"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Rose Square / Farm-mu"
        },
        {
          "time": "10:00 - 13:00",
          "location": "Rose Square / Jalan-jalan"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Mayor's House"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Mayor's House"
        }
      ],
      "Selasa": [
        {
          "time": "06:00 - 08:00",
          "location": "Mayor's House"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Rose Square / Farm-mu"
        },
        {
          "time": "10:00 - 13:00",
          "location": "Rose Square / Jalan-jalan"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Mayor's House"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Mayor's House"
        }
      ],
      "Rabu": [
        {
          "time": "06:00 - 08:00",
          "location": "Mayor's House"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Rose Square / Farm-mu"
        },
        {
          "time": "10:00 - 13:00",
          "location": "Rose Square / Jalan-jalan"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Mayor's House"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Mayor's House"
        }
      ],
      "Kamis": [
        {
          "time": "06:00 - 08:00",
          "location": "Mayor's House"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Rose Square / Farm-mu"
        },
        {
          "time": "10:00 - 13:00",
          "location": "Rose Square / Jalan-jalan"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Mayor's House"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Mayor's House"
        }
      ],
      "Jumat": [
        {
          "time": "06:00 - 08:00",
          "location": "Mayor's House"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Rose Square / Farm-mu"
        },
        {
          "time": "10:00 - 13:00",
          "location": "Rose Square / Jalan-jalan"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Mayor's House"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Mayor's House"
        }
      ],
      "Sabtu": [
        {
          "time": "06:00 - 08:00",
          "location": "Mayor's House"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Rose Square / Farm-mu"
        },
        {
          "time": "10:00 - 13:00",
          "location": "Rose Square / Jalan-jalan"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Mayor's House"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Mayor's House"
        }
      ],
      "Minggu": [
        {
          "time": "06:00 - 08:00",
          "location": "Mayor's House"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Rose Square / Farm-mu"
        },
        {
          "time": "10:00 - 13:00",
          "location": "Rose Square / Jalan-jalan"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Mayor's House"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Mayor's House"
        }
      ]
    }
  },
  {
    "id": "vs_carter",
    "name": "Carter",
    "image": "https://fogu.com/hm4/img/peeps/carter.gif",
    "notes": "Pengakuan dosa: Senin & Rabu 13:00-16:00.",
    "regularDays": [
      {
        "time": "06:00 - 08:00",
        "location": "Gereja (Kamar belakang)"
      },
      {
        "time": "08:00 - 12:00",
        "location": "Gereja (Aula utama)"
      },
      {
        "time": "12:00 - 16:00",
        "location": "Gereja (Bilik pengakuan di Senin/Rabu)"
      },
      {
        "time": "16:00 - 22:00",
        "location": "Gereja"
      }
    ],
    "schedules": {
      "Senin": [
        {
          "time": "06:00 - 08:00",
          "location": "Gereja (Kamar belakang)"
        },
        {
          "time": "08:00 - 12:00",
          "location": "Gereja (Aula utama)"
        },
        {
          "time": "12:00 - 16:00",
          "location": "Gereja (Bilik pengakuan di Senin/Rabu)"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Gereja"
        }
      ],
      "Selasa": [
        {
          "time": "06:00 - 08:00",
          "location": "Gereja (Kamar belakang)"
        },
        {
          "time": "08:00 - 12:00",
          "location": "Gereja (Aula utama)"
        },
        {
          "time": "12:00 - 16:00",
          "location": "Gereja (Bilik pengakuan di Senin/Rabu)"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Gereja"
        }
      ],
      "Rabu": [
        {
          "time": "06:00 - 08:00",
          "location": "Gereja (Kamar belakang)"
        },
        {
          "time": "08:00 - 12:00",
          "location": "Gereja (Aula utama)"
        },
        {
          "time": "12:00 - 16:00",
          "location": "Gereja (Bilik pengakuan di Senin/Rabu)"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Gereja"
        }
      ],
      "Kamis": [
        {
          "time": "06:00 - 08:00",
          "location": "Gereja (Kamar belakang)"
        },
        {
          "time": "08:00 - 12:00",
          "location": "Gereja (Aula utama)"
        },
        {
          "time": "12:00 - 16:00",
          "location": "Gereja (Bilik pengakuan di Senin/Rabu)"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Gereja"
        }
      ],
      "Jumat": [
        {
          "time": "06:00 - 08:00",
          "location": "Gereja (Kamar belakang)"
        },
        {
          "time": "08:00 - 12:00",
          "location": "Gereja (Aula utama)"
        },
        {
          "time": "12:00 - 16:00",
          "location": "Gereja (Bilik pengakuan di Senin/Rabu)"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Gereja"
        }
      ],
      "Sabtu": [
        {
          "time": "06:00 - 08:00",
          "location": "Gereja (Kamar belakang)"
        },
        {
          "time": "08:00 - 12:00",
          "location": "Gereja (Aula utama)"
        },
        {
          "time": "12:00 - 16:00",
          "location": "Gereja (Bilik pengakuan di Senin/Rabu)"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Gereja"
        }
      ],
      "Minggu": [
        {
          "time": "06:00 - 08:00",
          "location": "Gereja (Kamar belakang)"
        },
        {
          "time": "08:00 - 12:00",
          "location": "Gereja (Aula utama)"
        },
        {
          "time": "12:00 - 16:00",
          "location": "Gereja (Bilik pengakuan di Senin/Rabu)"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Gereja"
        }
      ]
    }
  },
  {
    "id": "vs_harris",
    "name": "Harris",
    "image": "https://fogu.com/hm4/img/peeps/harris.gif",
    "notes": "Patroli keliling kota setiap hari.",
    "regularDays": [
      {
        "time": "06:00 - 08:00",
        "location": "Mayor's House"
      },
      {
        "time": "08:00 - 12:00",
        "location": "Patroli: Rose Square → Town"
      },
      {
        "time": "12:00 - 16:00",
        "location": "Patroli: Town → Pantai"
      },
      {
        "time": "16:00 - 22:00",
        "location": "Mayor's House"
      }
    ],
    "schedules": {
      "Senin": [
        {
          "time": "06:00 - 08:00",
          "location": "Mayor's House"
        },
        {
          "time": "08:00 - 12:00",
          "location": "Patroli: Rose Square → Town"
        },
        {
          "time": "12:00 - 16:00",
          "location": "Patroli: Town → Pantai"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Mayor's House"
        }
      ],
      "Selasa": [
        {
          "time": "06:00 - 08:00",
          "location": "Mayor's House"
        },
        {
          "time": "08:00 - 12:00",
          "location": "Patroli: Rose Square → Town"
        },
        {
          "time": "12:00 - 16:00",
          "location": "Patroli: Town → Pantai"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Mayor's House"
        }
      ],
      "Rabu": [
        {
          "time": "06:00 - 08:00",
          "location": "Mayor's House"
        },
        {
          "time": "08:00 - 12:00",
          "location": "Patroli: Rose Square → Town"
        },
        {
          "time": "12:00 - 16:00",
          "location": "Patroli: Town → Pantai"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Mayor's House"
        }
      ],
      "Kamis": [
        {
          "time": "06:00 - 08:00",
          "location": "Mayor's House"
        },
        {
          "time": "08:00 - 12:00",
          "location": "Patroli: Rose Square → Town"
        },
        {
          "time": "12:00 - 16:00",
          "location": "Patroli: Town → Pantai"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Mayor's House"
        }
      ],
      "Jumat": [
        {
          "time": "06:00 - 08:00",
          "location": "Mayor's House"
        },
        {
          "time": "08:00 - 12:00",
          "location": "Patroli: Rose Square → Town"
        },
        {
          "time": "12:00 - 16:00",
          "location": "Patroli: Town → Pantai"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Mayor's House"
        }
      ],
      "Sabtu": [
        {
          "time": "06:00 - 08:00",
          "location": "Mayor's House"
        },
        {
          "time": "08:00 - 12:00",
          "location": "Patroli: Rose Square → Town"
        },
        {
          "time": "12:00 - 16:00",
          "location": "Patroli: Town → Pantai"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Mayor's House"
        }
      ],
      "Minggu": [
        {
          "time": "06:00 - 08:00",
          "location": "Mayor's House"
        },
        {
          "time": "08:00 - 12:00",
          "location": "Patroli: Rose Square → Town"
        },
        {
          "time": "12:00 - 16:00",
          "location": "Patroli: Town → Pantai"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Mayor's House"
        }
      ]
    }
  },
  {
    "id": "vs_jeff",
    "name": "Jeff",
    "image": "https://fogu.com/hm4/img/peeps/jeff.gif",
    "notes": "Supermarket buka: Senin, Rabu, Kamis, Jumat, Sabtu.",
    "regularDays": [
      {
        "time": "06:00 - 09:00",
        "location": "Supermarket (Lantai 2)"
      },
      {
        "time": "09:00 - 17:00",
        "location": "Supermarket (Counter)"
      },
      {
        "time": "17:00 - 22:00",
        "location": "Supermarket (Lantai 2)"
      }
    ],
    "schedules": {
      "Senin": [
        {
          "time": "06:00 - 09:00",
          "location": "Supermarket (Lantai 2)"
        },
        {
          "time": "09:00 - 17:00",
          "location": "Supermarket (Counter)"
        },
        {
          "time": "17:00 - 22:00",
          "location": "Supermarket (Lantai 2)"
        }
      ],
      "Selasa": [
        {
          "time": "08:00 - 10:00",
          "location": "Gereja"
        },
        {
          "time": "10:00 - 13:00",
          "location": "Supermarket (Tutup)"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Clinic"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Supermarket (Lantai 2)"
        }
      ],
      "Rabu": [
        {
          "time": "06:00 - 09:00",
          "location": "Supermarket (Lantai 2)"
        },
        {
          "time": "09:00 - 17:00",
          "location": "Supermarket (Counter)"
        },
        {
          "time": "17:00 - 22:00",
          "location": "Supermarket (Lantai 2)"
        }
      ],
      "Kamis": [
        {
          "time": "06:00 - 09:00",
          "location": "Supermarket (Lantai 2)"
        },
        {
          "time": "09:00 - 17:00",
          "location": "Supermarket (Counter)"
        },
        {
          "time": "17:00 - 22:00",
          "location": "Supermarket (Lantai 2)"
        }
      ],
      "Jumat": [
        {
          "time": "06:00 - 09:00",
          "location": "Supermarket (Lantai 2)"
        },
        {
          "time": "09:00 - 17:00",
          "location": "Supermarket (Counter)"
        },
        {
          "time": "17:00 - 22:00",
          "location": "Supermarket (Lantai 2)"
        }
      ],
      "Sabtu": [
        {
          "time": "06:00 - 09:00",
          "location": "Supermarket (Lantai 2)"
        },
        {
          "time": "09:00 - 17:00",
          "location": "Supermarket (Counter)"
        },
        {
          "time": "17:00 - 22:00",
          "location": "Supermarket (Lantai 2)"
        }
      ],
      "Minggu": [
        {
          "time": "13:00 - 16:00",
          "location": "Clinic"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Supermarket (Lantai 2)"
        }
      ]
    }
  },
  {
    "id": "vs_doug",
    "name": "Doug",
    "image": "https://fogu.com/hm4/img/peeps/doug.gif",
    "notes": "Inn buka setiap hari.",
    "regularDays": [
      {
        "time": "06:00 - 08:00",
        "location": "Inn (Lantai 2)"
      },
      {
        "time": "08:00 - 12:00",
        "location": "Inn (Dapur)"
      },
      {
        "time": "12:00 - 22:00",
        "location": "Inn (Counter/Dapur)"
      }
    ],
    "schedules": {
      "Senin": [
        {
          "time": "06:00 - 08:00",
          "location": "Inn (Lantai 2)"
        },
        {
          "time": "08:00 - 12:00",
          "location": "Inn (Dapur)"
        },
        {
          "time": "12:00 - 22:00",
          "location": "Inn (Counter/Dapur)"
        }
      ],
      "Selasa": [
        {
          "time": "06:00 - 08:00",
          "location": "Inn (Lantai 2)"
        },
        {
          "time": "08:00 - 12:00",
          "location": "Inn (Dapur)"
        },
        {
          "time": "12:00 - 22:00",
          "location": "Inn (Counter/Dapur)"
        }
      ],
      "Rabu": [
        {
          "time": "06:00 - 08:00",
          "location": "Inn (Lantai 2)"
        },
        {
          "time": "08:00 - 12:00",
          "location": "Inn (Dapur)"
        },
        {
          "time": "12:00 - 22:00",
          "location": "Inn (Counter/Dapur)"
        }
      ],
      "Kamis": [
        {
          "time": "06:00 - 08:00",
          "location": "Inn (Lantai 2)"
        },
        {
          "time": "08:00 - 12:00",
          "location": "Inn (Dapur)"
        },
        {
          "time": "12:00 - 22:00",
          "location": "Inn (Counter/Dapur)"
        }
      ],
      "Jumat": [
        {
          "time": "06:00 - 08:00",
          "location": "Inn (Lantai 2)"
        },
        {
          "time": "08:00 - 12:00",
          "location": "Inn (Dapur)"
        },
        {
          "time": "12:00 - 22:00",
          "location": "Inn (Counter/Dapur)"
        }
      ],
      "Sabtu": [
        {
          "time": "06:00 - 08:00",
          "location": "Inn (Lantai 2)"
        },
        {
          "time": "08:00 - 12:00",
          "location": "Inn (Dapur)"
        },
        {
          "time": "12:00 - 22:00",
          "location": "Inn (Counter/Dapur)"
        }
      ],
      "Minggu": [
        {
          "time": "06:00 - 08:00",
          "location": "Inn (Lantai 2)"
        },
        {
          "time": "08:00 - 12:00",
          "location": "Inn (Dapur)"
        },
        {
          "time": "12:00 - 22:00",
          "location": "Inn (Counter/Dapur)"
        }
      ]
    }
  },
  {
    "id": "vs_barley",
    "name": "Barley",
    "image": "https://fogu.com/hm4/img/peeps/barley.gif",
    "notes": "Yodel Ranch jual sapi, domba, dan peralatan.",
    "regularDays": [
      {
        "time": "06:00 - 08:00",
        "location": "Yodel Ranch (Rumah)"
      },
      {
        "time": "08:00 - 10:00",
        "location": "Yodel Ranch (Kandang)"
      },
      {
        "time": "10:00 - 16:00",
        "location": "Yodel Ranch (Toko)"
      },
      {
        "time": "16:00 - 22:00",
        "location": "Yodel Ranch (Rumah)"
      }
    ],
    "schedules": {
      "Senin": [
        {
          "time": "08:00 - 13:00",
          "location": "Rose Square"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Yodel Ranch (Tutup)"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Hot Spring"
        }
      ],
      "Selasa": [
        {
          "time": "06:00 - 08:00",
          "location": "Yodel Ranch (Rumah)"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Yodel Ranch (Kandang)"
        },
        {
          "time": "10:00 - 16:00",
          "location": "Yodel Ranch (Toko)"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Yodel Ranch (Rumah)"
        }
      ],
      "Rabu": [
        {
          "time": "06:00 - 08:00",
          "location": "Yodel Ranch (Rumah)"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Yodel Ranch (Kandang)"
        },
        {
          "time": "10:00 - 16:00",
          "location": "Yodel Ranch (Toko)"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Yodel Ranch (Rumah)"
        }
      ],
      "Kamis": [
        {
          "time": "06:00 - 08:00",
          "location": "Yodel Ranch (Rumah)"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Yodel Ranch (Kandang)"
        },
        {
          "time": "10:00 - 16:00",
          "location": "Yodel Ranch (Toko)"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Yodel Ranch (Rumah)"
        }
      ],
      "Jumat": [
        {
          "time": "06:00 - 08:00",
          "location": "Yodel Ranch (Rumah)"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Yodel Ranch (Kandang)"
        },
        {
          "time": "10:00 - 16:00",
          "location": "Yodel Ranch (Toko)"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Yodel Ranch (Rumah)"
        }
      ],
      "Sabtu": [
        {
          "time": "06:00 - 08:00",
          "location": "Yodel Ranch (Rumah)"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Yodel Ranch (Kandang)"
        },
        {
          "time": "10:00 - 16:00",
          "location": "Yodel Ranch (Toko)"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Yodel Ranch (Rumah)"
        }
      ],
      "Minggu": [
        {
          "time": "06:00 - 08:00",
          "location": "Yodel Ranch (Rumah)"
        },
        {
          "time": "08:00 - 10:00",
          "location": "Yodel Ranch (Kandang)"
        },
        {
          "time": "10:00 - 16:00",
          "location": "Yodel Ranch (Toko)"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Yodel Ranch (Rumah)"
        }
      ]
    }
  },
  {
    "id": "vs_gotz",
    "name": "Gotz",
    "image": "https://fogu.com/hm4/img/peeps/gotz.gif",
    "notes": "Tukang kayu untuk upgrade rumah dan bangunan.",
    "regularDays": [
      {
        "time": "06:00 - 08:00",
        "location": "Rumah Gotz"
      },
      {
        "time": "08:00 - 11:00",
        "location": "Rumah Gotz / Area hutan"
      },
      {
        "time": "11:00 - 16:00",
        "location": "Rumah Gotz (bisa pesan upgrade)"
      },
      {
        "time": "16:00 - 22:00",
        "location": "Rumah Gotz"
      }
    ],
    "schedules": {
      "Senin": [
        {
          "time": "06:00 - 08:00",
          "location": "Rumah Gotz"
        },
        {
          "time": "08:00 - 11:00",
          "location": "Rumah Gotz / Area hutan"
        },
        {
          "time": "11:00 - 16:00",
          "location": "Rumah Gotz (bisa pesan upgrade)"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Rumah Gotz"
        }
      ],
      "Selasa": [
        {
          "time": "06:00 - 08:00",
          "location": "Rumah Gotz"
        },
        {
          "time": "08:00 - 11:00",
          "location": "Rumah Gotz / Area hutan"
        },
        {
          "time": "11:00 - 16:00",
          "location": "Rumah Gotz (bisa pesan upgrade)"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Rumah Gotz"
        }
      ],
      "Rabu": [
        {
          "time": "06:00 - 08:00",
          "location": "Rumah Gotz"
        },
        {
          "time": "08:00 - 11:00",
          "location": "Rumah Gotz / Area hutan"
        },
        {
          "time": "11:00 - 16:00",
          "location": "Rumah Gotz (bisa pesan upgrade)"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Rumah Gotz"
        }
      ],
      "Kamis": [
        {
          "time": "06:00 - 08:00",
          "location": "Rumah Gotz"
        },
        {
          "time": "08:00 - 11:00",
          "location": "Rumah Gotz / Area hutan"
        },
        {
          "time": "11:00 - 16:00",
          "location": "Rumah Gotz (bisa pesan upgrade)"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Rumah Gotz"
        }
      ],
      "Jumat": [
        {
          "time": "06:00 - 08:00",
          "location": "Rumah Gotz"
        },
        {
          "time": "08:00 - 11:00",
          "location": "Rumah Gotz / Area hutan"
        },
        {
          "time": "11:00 - 16:00",
          "location": "Rumah Gotz (bisa pesan upgrade)"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Rumah Gotz"
        }
      ],
      "Sabtu": [
        {
          "time": "07:00 - 10:00",
          "location": "Mayor's House"
        },
        {
          "time": "10:00 - 13:00",
          "location": "Supermarket"
        },
        {
          "time": "13:00 - 22:00",
          "location": "Rumah Gotz (Tutup)"
        }
      ],
      "Minggu": [
        {
          "time": "06:00 - 08:00",
          "location": "Rumah Gotz"
        },
        {
          "time": "08:00 - 11:00",
          "location": "Rumah Gotz / Area hutan"
        },
        {
          "time": "11:00 - 16:00",
          "location": "Rumah Gotz (bisa pesan upgrade)"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Rumah Gotz"
        }
      ]
    }
  },
  {
    "id": "vs_saibara",
    "name": "Saibara",
    "image": "https://fogu.com/hm4/img/peeps/saibara.gif",
    "notes": "Upgrade alat dan beli peralatan di sini.",
    "regularDays": [
      {
        "time": "06:00 - 10:00",
        "location": "Saibara Blacksmith (Rumah)"
      },
      {
        "time": "10:00 - 16:00",
        "location": "Saibara Blacksmith (Bekerja)"
      },
      {
        "time": "16:00 - 22:00",
        "location": "Saibara Blacksmith (Rumah)"
      }
    ],
    "schedules": {
      "Senin": [
        {
          "time": "06:00 - 10:00",
          "location": "Saibara Blacksmith (Rumah)"
        },
        {
          "time": "10:00 - 16:00",
          "location": "Saibara Blacksmith (Bekerja)"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Saibara Blacksmith (Rumah)"
        }
      ],
      "Selasa": [
        {
          "time": "06:00 - 10:00",
          "location": "Saibara Blacksmith (Rumah)"
        },
        {
          "time": "10:00 - 16:00",
          "location": "Saibara Blacksmith (Bekerja)"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Saibara Blacksmith (Rumah)"
        }
      ],
      "Rabu": [
        {
          "time": "06:00 - 10:00",
          "location": "Saibara Blacksmith (Rumah)"
        },
        {
          "time": "10:00 - 16:00",
          "location": "Saibara Blacksmith (Bekerja)"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Saibara Blacksmith (Rumah)"
        }
      ],
      "Kamis": [
        {
          "time": "08:00 - 13:00",
          "location": "Mother's Hill (Puncak)"
        },
        {
          "time": "13:00 - 16:00",
          "location": "Supermarket"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Saibara Blacksmith (Tutup)"
        }
      ],
      "Jumat": [
        {
          "time": "06:00 - 10:00",
          "location": "Saibara Blacksmith (Rumah)"
        },
        {
          "time": "10:00 - 16:00",
          "location": "Saibara Blacksmith (Bekerja)"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Saibara Blacksmith (Rumah)"
        }
      ],
      "Sabtu": [
        {
          "time": "06:00 - 10:00",
          "location": "Saibara Blacksmith (Rumah)"
        },
        {
          "time": "10:00 - 16:00",
          "location": "Saibara Blacksmith (Bekerja)"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Saibara Blacksmith (Rumah)"
        }
      ],
      "Minggu": [
        {
          "time": "06:00 - 10:00",
          "location": "Saibara Blacksmith (Rumah)"
        },
        {
          "time": "10:00 - 16:00",
          "location": "Saibara Blacksmith (Bekerja)"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Saibara Blacksmith (Rumah)"
        }
      ]
    }
  },
  {
    "id": "vs_won",
    "name": "Won",
    "image": "https://fogu.com/hm4/img/peeps/won.gif",
    "notes": "Jual item langka tapi mahal. Hati-hati penipuan!",
    "regularDays": [
      {
        "time": "06:00 - 10:00",
        "location": "Rumah Zack (Kamar)"
      },
      {
        "time": "10:00 - 17:00",
        "location": "Rumah Zack (Berdagang) / Inn"
      },
      {
        "time": "17:00 - 22:00",
        "location": "Rumah Zack"
      }
    ],
    "schedules": {
      "Senin": [
        {
          "time": "06:00 - 10:00",
          "location": "Rumah Zack (Kamar)"
        },
        {
          "time": "10:00 - 17:00",
          "location": "Rumah Zack (Berdagang) / Inn"
        },
        {
          "time": "17:00 - 22:00",
          "location": "Rumah Zack"
        }
      ],
      "Selasa": [
        {
          "time": "06:00 - 10:00",
          "location": "Rumah Zack (Kamar)"
        },
        {
          "time": "10:00 - 17:00",
          "location": "Rumah Zack (Berdagang) / Inn"
        },
        {
          "time": "17:00 - 22:00",
          "location": "Rumah Zack"
        }
      ],
      "Rabu": [
        {
          "time": "06:00 - 10:00",
          "location": "Rumah Zack (Kamar)"
        },
        {
          "time": "10:00 - 17:00",
          "location": "Rumah Zack (Berdagang) / Inn"
        },
        {
          "time": "17:00 - 22:00",
          "location": "Rumah Zack"
        }
      ],
      "Kamis": [
        {
          "time": "06:00 - 10:00",
          "location": "Rumah Zack (Kamar)"
        },
        {
          "time": "10:00 - 17:00",
          "location": "Rumah Zack (Berdagang) / Inn"
        },
        {
          "time": "17:00 - 22:00",
          "location": "Rumah Zack"
        }
      ],
      "Jumat": [
        {
          "time": "06:00 - 10:00",
          "location": "Rumah Zack (Kamar)"
        },
        {
          "time": "10:00 - 17:00",
          "location": "Rumah Zack (Berdagang) / Inn"
        },
        {
          "time": "17:00 - 22:00",
          "location": "Rumah Zack"
        }
      ],
      "Sabtu": [
        {
          "time": "06:00 - 10:00",
          "location": "Rumah Zack (Kamar)"
        },
        {
          "time": "10:00 - 17:00",
          "location": "Rumah Zack (Berdagang) / Inn"
        },
        {
          "time": "17:00 - 22:00",
          "location": "Rumah Zack"
        }
      ],
      "Minggu": [
        {
          "time": "06:00 - 10:00",
          "location": "Rumah Zack (Kamar)"
        },
        {
          "time": "10:00 - 17:00",
          "location": "Rumah Zack (Berdagang) / Inn"
        },
        {
          "time": "17:00 - 22:00",
          "location": "Rumah Zack"
        }
      ]
    }
  },
  {
    "id": "vs_zack",
    "name": "Zack",
    "image": "https://fogu.com/hm4/img/peeps/zack.gif",
    "notes": "Mengambil barang dari Shipping Bin jam 17:00 tepat.",
    "regularDays": [
      {
        "time": "06:00 - 10:00",
        "location": "Rumah Zack"
      },
      {
        "time": "10:00 - 16:00",
        "location": "Rumah Zack / Beach"
      },
      {
        "time": "16:00 - 17:00",
        "location": "Perjalanan ke Farm-mu"
      },
      {
        "time": "17:00",
        "location": "📦 MENGAMBIL BARANG DARI SHIPPING BIN"
      },
      {
        "time": "17:30 - 22:00",
        "location": "Rumah Zack"
      }
    ],
    "schedules": {
      "Senin": [
        {
          "time": "06:00 - 10:00",
          "location": "Rumah Zack"
        },
        {
          "time": "10:00 - 16:00",
          "location": "Rumah Zack / Beach"
        },
        {
          "time": "16:00 - 17:00",
          "location": "Perjalanan ke Farm-mu"
        },
        {
          "time": "17:00",
          "location": "📦 MENGAMBIL BARANG DARI SHIPPING BIN"
        },
        {
          "time": "17:30 - 22:00",
          "location": "Rumah Zack"
        }
      ],
      "Selasa": [
        {
          "time": "06:00 - 10:00",
          "location": "Rumah Zack"
        },
        {
          "time": "10:00 - 16:00",
          "location": "Rumah Zack / Beach"
        },
        {
          "time": "16:00 - 17:00",
          "location": "Perjalanan ke Farm-mu"
        },
        {
          "time": "17:00",
          "location": "📦 MENGAMBIL BARANG DARI SHIPPING BIN"
        },
        {
          "time": "17:30 - 22:00",
          "location": "Rumah Zack"
        }
      ],
      "Rabu": [
        {
          "time": "06:00 - 10:00",
          "location": "Rumah Zack"
        },
        {
          "time": "10:00 - 16:00",
          "location": "Rumah Zack / Beach"
        },
        {
          "time": "16:00 - 17:00",
          "location": "Perjalanan ke Farm-mu"
        },
        {
          "time": "17:00",
          "location": "📦 MENGAMBIL BARANG DARI SHIPPING BIN"
        },
        {
          "time": "17:30 - 22:00",
          "location": "Rumah Zack"
        }
      ],
      "Kamis": [
        {
          "time": "06:00 - 10:00",
          "location": "Rumah Zack"
        },
        {
          "time": "10:00 - 16:00",
          "location": "Rumah Zack / Beach"
        },
        {
          "time": "16:00 - 17:00",
          "location": "Perjalanan ke Farm-mu"
        },
        {
          "time": "17:00",
          "location": "📦 MENGAMBIL BARANG DARI SHIPPING BIN"
        },
        {
          "time": "17:30 - 22:00",
          "location": "Rumah Zack"
        }
      ],
      "Jumat": [
        {
          "time": "06:00 - 10:00",
          "location": "Rumah Zack"
        },
        {
          "time": "10:00 - 16:00",
          "location": "Rumah Zack / Beach"
        },
        {
          "time": "16:00 - 17:00",
          "location": "Perjalanan ke Farm-mu"
        },
        {
          "time": "17:00",
          "location": "📦 MENGAMBIL BARANG DARI SHIPPING BIN"
        },
        {
          "time": "17:30 - 22:00",
          "location": "Rumah Zack"
        }
      ],
      "Sabtu": [
        {
          "time": "06:00 - 10:00",
          "location": "Rumah Zack"
        },
        {
          "time": "10:00 - 16:00",
          "location": "Rumah Zack / Beach"
        },
        {
          "time": "16:00 - 17:00",
          "location": "Perjalanan ke Farm-mu"
        },
        {
          "time": "17:00",
          "location": "📦 MENGAMBIL BARANG DARI SHIPPING BIN"
        },
        {
          "time": "17:30 - 22:00",
          "location": "Rumah Zack"
        }
      ],
      "Minggu": [
        {
          "time": "06:00 - 10:00",
          "location": "Rumah Zack"
        },
        {
          "time": "10:00 - 16:00",
          "location": "Rumah Zack / Beach"
        },
        {
          "time": "16:00 - 17:00",
          "location": "Perjalanan ke Farm-mu"
        },
        {
          "time": "17:00",
          "location": "📦 MENGAMBIL BARANG DARI SHIPPING BIN"
        },
        {
          "time": "17:30 - 22:00",
          "location": "Rumah Zack"
        }
      ]
    }
  },
  {
    "id": "vs_ellen",
    "name": "Ellen",
    "image": "https://fogu.com/hm4/img/peeps/ellen.gif",
    "notes": "Selalu di rumah karena tidak bisa berjalan.",
    "regularDays": [
      {
        "time": "06:00 - 22:00",
        "location": "Rumah Ellen (selalu di rumah)"
      }
    ],
    "schedules": {
      "Senin": [
        {
          "time": "06:00 - 22:00",
          "location": "Rumah Ellen (selalu di rumah)"
        }
      ],
      "Selasa": [
        {
          "time": "06:00 - 22:00",
          "location": "Rumah Ellen (selalu di rumah)"
        }
      ],
      "Rabu": [
        {
          "time": "06:00 - 22:00",
          "location": "Rumah Ellen (selalu di rumah)"
        }
      ],
      "Kamis": [
        {
          "time": "06:00 - 22:00",
          "location": "Rumah Ellen (selalu di rumah)"
        }
      ],
      "Jumat": [
        {
          "time": "06:00 - 22:00",
          "location": "Rumah Ellen (selalu di rumah)"
        }
      ],
      "Sabtu": [
        {
          "time": "06:00 - 22:00",
          "location": "Rumah Ellen (selalu di rumah)"
        }
      ],
      "Minggu": [
        {
          "time": "06:00 - 22:00",
          "location": "Rumah Ellen (selalu di rumah)"
        }
      ]
    }
  },
  {
    "id": "vs_lillia",
    "name": "Lillia",
    "image": "https://static.wikia.nocookie.net/hmwikia/images/b/b5/Lillia_FoMT.png",
    "notes": "Sakit-sakitan, jarang keluar rumah.",
    "regularDays": [
      {
        "time": "06:00 - 09:00",
        "location": "Poultry Farm (Rumah)"
      },
      {
        "time": "09:00 - 16:00",
        "location": "Poultry Farm (Toko)"
      },
      {
        "time": "16:00 - 22:00",
        "location": "Poultry Farm (Rumah)"
      }
    ],
    "schedules": {
      "Senin": [
        {
          "time": "06:00 - 09:00",
          "location": "Poultry Farm (Rumah)"
        },
        {
          "time": "09:00 - 16:00",
          "location": "Poultry Farm (Toko)"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Poultry Farm (Rumah)"
        }
      ],
      "Selasa": [
        {
          "time": "06:00 - 09:00",
          "location": "Poultry Farm (Rumah)"
        },
        {
          "time": "09:00 - 16:00",
          "location": "Poultry Farm (Toko)"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Poultry Farm (Rumah)"
        }
      ],
      "Rabu": [
        {
          "time": "06:00 - 09:00",
          "location": "Poultry Farm (Rumah)"
        },
        {
          "time": "09:00 - 16:00",
          "location": "Poultry Farm (Toko)"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Poultry Farm (Rumah)"
        }
      ],
      "Kamis": [
        {
          "time": "06:00 - 09:00",
          "location": "Poultry Farm (Rumah)"
        },
        {
          "time": "09:00 - 16:00",
          "location": "Poultry Farm (Toko)"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Poultry Farm (Rumah)"
        }
      ],
      "Jumat": [
        {
          "time": "06:00 - 09:00",
          "location": "Poultry Farm (Rumah)"
        },
        {
          "time": "09:00 - 16:00",
          "location": "Poultry Farm (Toko)"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Poultry Farm (Rumah)"
        }
      ],
      "Sabtu": [
        {
          "time": "06:00 - 09:00",
          "location": "Poultry Farm (Rumah)"
        },
        {
          "time": "09:00 - 16:00",
          "location": "Poultry Farm (Toko)"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Poultry Farm (Rumah)"
        }
      ],
      "Minggu": [
        {
          "time": "06:00 - 09:00",
          "location": "Poultry Farm (Rumah)"
        },
        {
          "time": "09:00 - 16:00",
          "location": "Poultry Farm (Toko)"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Poultry Farm (Rumah)"
        }
      ]
    }
  },
  {
    "id": "vs_stu",
    "name": "Stu",
    "image": "https://fogu.com/hm4/img/peeps/stu.gif",
    "notes": "Anak nakal, suka berkeliaran di mana-mana.",
    "regularDays": [
      {
        "time": "06:00 - 09:00",
        "location": "Rumah Ellen"
      },
      {
        "time": "09:00 - 12:00",
        "location": "Rose Square / Gereja"
      },
      {
        "time": "12:00 - 16:00",
        "location": "Bermain di kota / Beach"
      },
      {
        "time": "16:00 - 22:00",
        "location": "Rumah Ellen"
      }
    ],
    "schedules": {
      "Senin": [
        {
          "time": "06:00 - 09:00",
          "location": "Rumah Ellen"
        },
        {
          "time": "09:00 - 12:00",
          "location": "Rose Square / Gereja"
        },
        {
          "time": "12:00 - 16:00",
          "location": "Bermain di kota / Beach"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Rumah Ellen"
        }
      ],
      "Selasa": [
        {
          "time": "06:00 - 09:00",
          "location": "Rumah Ellen"
        },
        {
          "time": "09:00 - 12:00",
          "location": "Rose Square / Gereja"
        },
        {
          "time": "12:00 - 16:00",
          "location": "Bermain di kota / Beach"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Rumah Ellen"
        }
      ],
      "Rabu": [
        {
          "time": "06:00 - 09:00",
          "location": "Rumah Ellen"
        },
        {
          "time": "09:00 - 12:00",
          "location": "Rose Square / Gereja"
        },
        {
          "time": "12:00 - 16:00",
          "location": "Bermain di kota / Beach"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Rumah Ellen"
        }
      ],
      "Kamis": [
        {
          "time": "06:00 - 09:00",
          "location": "Rumah Ellen"
        },
        {
          "time": "09:00 - 12:00",
          "location": "Rose Square / Gereja"
        },
        {
          "time": "12:00 - 16:00",
          "location": "Bermain di kota / Beach"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Rumah Ellen"
        }
      ],
      "Jumat": [
        {
          "time": "06:00 - 09:00",
          "location": "Rumah Ellen"
        },
        {
          "time": "09:00 - 12:00",
          "location": "Rose Square / Gereja"
        },
        {
          "time": "12:00 - 16:00",
          "location": "Bermain di kota / Beach"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Rumah Ellen"
        }
      ],
      "Sabtu": [
        {
          "time": "06:00 - 09:00",
          "location": "Rumah Ellen"
        },
        {
          "time": "09:00 - 12:00",
          "location": "Rose Square / Gereja"
        },
        {
          "time": "12:00 - 16:00",
          "location": "Bermain di kota / Beach"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Rumah Ellen"
        }
      ],
      "Minggu": [
        {
          "time": "06:00 - 09:00",
          "location": "Rumah Ellen"
        },
        {
          "time": "09:00 - 12:00",
          "location": "Rose Square / Gereja"
        },
        {
          "time": "12:00 - 16:00",
          "location": "Bermain di kota / Beach"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Rumah Ellen"
        }
      ]
    }
  },
  {
    "id": "vs_may",
    "name": "May",
    "image": "https://fogu.com/hm4/img/peeps/may.gif",
    "notes": "Pemalu, sering di dekat Yodel Ranch.",
    "regularDays": [
      {
        "time": "06:00 - 09:00",
        "location": "Yodel Ranch (Rumah)"
      },
      {
        "time": "09:00 - 12:00",
        "location": "Yodel Ranch / Rose Square"
      },
      {
        "time": "12:00 - 16:00",
        "location": "Bermain dengan Stu / Gereja"
      },
      {
        "time": "16:00 - 22:00",
        "location": "Yodel Ranch (Rumah)"
      }
    ],
    "schedules": {
      "Senin": [
        {
          "time": "06:00 - 09:00",
          "location": "Yodel Ranch (Rumah)"
        },
        {
          "time": "09:00 - 12:00",
          "location": "Yodel Ranch / Rose Square"
        },
        {
          "time": "12:00 - 16:00",
          "location": "Bermain dengan Stu / Gereja"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Yodel Ranch (Rumah)"
        }
      ],
      "Selasa": [
        {
          "time": "06:00 - 09:00",
          "location": "Yodel Ranch (Rumah)"
        },
        {
          "time": "09:00 - 12:00",
          "location": "Yodel Ranch / Rose Square"
        },
        {
          "time": "12:00 - 16:00",
          "location": "Bermain dengan Stu / Gereja"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Yodel Ranch (Rumah)"
        }
      ],
      "Rabu": [
        {
          "time": "06:00 - 09:00",
          "location": "Yodel Ranch (Rumah)"
        },
        {
          "time": "09:00 - 12:00",
          "location": "Yodel Ranch / Rose Square"
        },
        {
          "time": "12:00 - 16:00",
          "location": "Bermain dengan Stu / Gereja"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Yodel Ranch (Rumah)"
        }
      ],
      "Kamis": [
        {
          "time": "06:00 - 09:00",
          "location": "Yodel Ranch (Rumah)"
        },
        {
          "time": "09:00 - 12:00",
          "location": "Yodel Ranch / Rose Square"
        },
        {
          "time": "12:00 - 16:00",
          "location": "Bermain dengan Stu / Gereja"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Yodel Ranch (Rumah)"
        }
      ],
      "Jumat": [
        {
          "time": "06:00 - 09:00",
          "location": "Yodel Ranch (Rumah)"
        },
        {
          "time": "09:00 - 12:00",
          "location": "Yodel Ranch / Rose Square"
        },
        {
          "time": "12:00 - 16:00",
          "location": "Bermain dengan Stu / Gereja"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Yodel Ranch (Rumah)"
        }
      ],
      "Sabtu": [
        {
          "time": "06:00 - 09:00",
          "location": "Yodel Ranch (Rumah)"
        },
        {
          "time": "09:00 - 12:00",
          "location": "Yodel Ranch / Rose Square"
        },
        {
          "time": "12:00 - 16:00",
          "location": "Bermain dengan Stu / Gereja"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Yodel Ranch (Rumah)"
        }
      ],
      "Minggu": [
        {
          "time": "06:00 - 09:00",
          "location": "Yodel Ranch (Rumah)"
        },
        {
          "time": "09:00 - 12:00",
          "location": "Yodel Ranch / Rose Square"
        },
        {
          "time": "12:00 - 16:00",
          "location": "Bermain dengan Stu / Gereja"
        },
        {
          "time": "16:00 - 22:00",
          "location": "Yodel Ranch (Rumah)"
        }
      ]
    }
  }
];
