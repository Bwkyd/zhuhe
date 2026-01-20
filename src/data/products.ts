export interface Product {
  id: string;
  name: string;
  code: string;
  price: string;
  brand: string;
  type: string;
  series: string;
  material: string;
  colors: string[];
  sizes: string[];
  features: string[];
  description: string;
  images: {
    main: string[];
    details: string[];
  };
}

export const products: Product[] = [
  {
    id: "3C24076",
    name: "秋上新翻领明线工艺衬衫百搭衬衣",
    code: "3C24076",
    price: "￥2199.00",
    brand: "ZHUHE祝赫",
    type: "衬衫",
    series: "秋上新",
    material: "聚酯纤维",
    colors: ["白色", "黑色"],
    sizes: ["M", "L", "XL"],
    features: ["翻领设计", "明线工艺", "挺阔版型", "百搭"],
    description: "这是一件秋季新品翻领衬衫，采用明线工艺设计，挺阔有型，时尚百搭，适合各种场合穿着。",
    images: {
      main: [
        "/products/3C24076/01_main_1.jpg",
        "/products/3C24076/02_main_2.jpg",
      ],
      details: [
        "/products/3C24076/03_detail_1.jpg",
        "/products/3C24076/04_detail_2.jpg",
        "/products/3C24076/05_detail_3.jpg",
        "/products/3C24076/06_detail_4.jpg",
        "/products/3C24076/07_detail_5.jpg",
        "/products/3C24076/08_detail_6.jpg",
      ],
    },
  },
  {
    id: "3T2256",
    name: "翻领腰间立体裁剪百搭无袖衬衫",
    code: "3T2256",
    price: "￥1688.00",
    brand: "ZHUHE祝赫",
    type: "衬衫",
    series: "立体裁剪",
    material: "粘胶纤维",
    colors: ["白色", "黑色"],
    sizes: ["L", "XL", "XXL", "XXXL"],
    features: ["无袖设计", "翻领", "腰间立体裁剪", "百搭", "舒适亲肤"],
    description: "ZHUHE品牌新品，时尚百搭，无袖设计，翻领腰间立体裁剪，舒适亲肤。适合各种场合穿着。",
    images: {
      main: [
        "/products/3T2256/01_main_1.jpg",
        "/products/3T2256/02_main_2.jpg",
      ],
      details: [
        "/products/3T2256/03_detail_1.jpg",
        "/products/3T2256/04_detail_2.jpg",
        "/products/3T2256/05_detail_3.jpg",
        "/products/3T2256/06_detail_4.jpg",
        "/products/3T2256/07_detail_5.jpg",
        "/products/3T2256/08_detail_6.jpg",
      ],
    },
  },
  {
    id: "3C24033",
    name: "秋上新翻领衬衫挺阔有型自带肌理感衬衣",
    code: "3C24033",
    price: "￥1988.00",
    brand: "ZHUHE祝赫",
    type: "衬衫",
    series: "秋上新",
    material: "粘胶纤维",
    colors: ["酒红", "驼色", "红灰色"],
    sizes: ["M", "L", "XL"],
    features: ["翻领设计", "挺阔版型", "自带肌理感", "质感优良"],
    description: "这是一件秋季新品翻领衬衫，挺阔有型，自带肌理感，非常有质感和品味。适合各种场合穿着，展示您的风采。",
    images: {
      main: [
        "/products/3C24033/01_main_1.jpg",
        "/products/3C24033/02_main_2.jpg",
      ],
      details: [
        "/products/3C24033/03_detail_1.jpg",
        "/products/3C24033/04_detail_2.jpg",
        "/products/3C24033/05_detail_3.jpg",
        "/products/3C24033/06_detail_4.jpg",
      ],
    },
  },
  {
    id: "3C24075",
    name: "秋上新宽松翻领简约条纹衬衣",
    code: "3C24075",
    price: "￥1899.00",
    brand: "ZHUHE祝赫",
    type: "衬衫",
    series: "秋上新",
    material: "聚酯纤维",
    colors: ["藏青色", "砖红色"],
    sizes: ["M", "L", "XL"],
    features: ["宽松版型", "翻领设计", "简约条纹", "时尚百搭"],
    description: "这款ZHUHE祝赫衬衫是秋季上新，采用宽松翻领和简约的条纹设计，时尚百搭。",
    images: {
      main: [
        "/products/3C24075/01_main_1.jpg",
        "/products/3C24075/02_main_2.jpg",
      ],
      details: [
        "/products/3C24075/03_detail_1.png",
        "/products/3C24075/04_detail_2.png",
        "/products/3C24075/05_detail_3.png",
        "/products/3C24075/06_detail_4.png",
        "/products/3C24075/07_detail_5.png",
        "/products/3C24075/08_detail_6.png",
      ],
    },
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getAllProductIds(): string[] {
  return products.map((p) => p.id);
}
