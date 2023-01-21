import { Professional, Category } from '../models/professional';

const mockBuildApi = () => {
  const professionals: Professional[] = [
    {
      id: 1,
      name: 'Juan Pérez',
      category: 'Electricidad',
      description:
        'Instalación y reparación de sistemas eléctricos en viviendas y edificios.',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      phone: '987654321',
      email: 'juanperez@ejemplo.com',
      rate: 4.5,
    },
    {
      id: 2,
      name: 'Maria García',
      category: 'Fontanería',
      description: 'Reparación y mantenimiento de tuberías y sistemas de agua.',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      phone: '876543219',
      email: 'mariagarcia@ejemplo.com',
      rate: 5,
    },
    {
      id: 3,
      name: 'Pedro Martínez',
      category: 'Limpieza',
      description: 'Limpieza de viviendas, edificios y áreas comunes.',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      phone: '765432198',
      email: 'pedromartinez@ejemplo.com',
      rate: 3.5,
    },
    {
      id: 4,
      name: 'Ana López',
      category: 'Cerrajería',
      description:
        'Apertura y reparación de cerraduras y sistemas de seguridad.',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      phone: '654321987',
      email: 'analopez@ejemplo.com',
      rate: 10,
    },
    {
      id: 5,
      name: 'Carlos Gómez',
      category: 'Fontanería',
      description: 'Instalación y reparación de sistemas de riego y drenaje.',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      phone: '543211987',
      email: 'carlosgomez@ejemplo.com',
      rate: 2,
    },
    {
      id: 6,
      name: 'Isabel Hernández',
      category: 'Limpieza',
      description: 'Pintura de viviendas, edificios y estructuras.',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      phone: '432198765',
      email: 'isabelhernandez@ejemplo.com',
      rate: 8,
    },
  ];

  const categories: Category[] = [
    {
      id: 1,
      name: 'Fontanería',
    },
    {
      id: 2,
      name: 'Electricidad',
    },
    {
      id: 3,
      name: 'Limpieza',
    },
    {
      id: 4,
      name: 'Cerrajería',
    },
  ];

  const getProfessionals = (): Promise<Professional[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(professionals);
      }, 1000);
    });
  };

  const getProfessionalsByCategory = (
    category: string
  ): Promise<Professional[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(professionals.filter((p) => p.category === category));
      }, 1000);
    });
  };

  const getProfessionalById = (
    id: number
  ): Promise<Professional | undefined> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(professionals.find((p) => p.id === id));
      }, 1000);
    });
  };

  const getCategories = (): Promise<Category[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(categories);
      }, 1000);
    });
  };

  return {
    getProfessionals,
    getProfessionalsByCategory,
    getProfessionalById,
    getCategories,
  };
};

const api = mockBuildApi();
export default api;

export type Api = ReturnType<typeof mockBuildApi>;
