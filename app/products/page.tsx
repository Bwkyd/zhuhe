import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "品质优选",
  description: "ZHUHE祝赫服饰品质优选，精选高品质女装",
};

const products = [
  {
    id: "3C24076",
    name: "秋上新翻领明线工艺衬衫",
    code: "3C24076",
    price: "￥2199.00",
    material: "聚酯纤维",
    colors: ["白色", "黑色"],
    image: "/products/3C24076.jpg",
    features: ["翻领设计", "明线工艺", "挺阔版型"],
  },
  {
    id: "3T2256",
    name: "翻领腰间立体裁剪无袖衬衫",
    code: "3T2256",
    price: "￥1688.00",
    material: "粘胶纤维",
    colors: ["白色", "黑色"],
    image: "/products/3T2256.jpg",
    features: ["无袖设计", "立体裁剪", "百搭款"],
  },
  {
    id: "3C24033",
    name: "秋上新翻领衬衫肌理感衬衣",
    code: "3C24033",
    price: "￥1988.00",
    material: "粘胶纤维",
    colors: ["酒红", "驼色", "红灰色"],
    image: "/products/3C24033.jpg",
    features: ["翻领设计", "挺阔有型", "自带肌理感"],
  },
  {
    id: "3C24075",
    name: "秋上新宽松翻领条纹衬衣",
    code: "3C24075",
    price: "￥1899.00",
    material: "聚酯纤维",
    colors: ["藏青色", "砖红色"],
    image: "/products/3C24075.jpg",
    features: ["宽松版型", "简约条纹", "时尚百搭"],
  },
];

const categories = [
  { name: "衬衣系列", active: true },
  { name: "长裤系列", active: false },
  { name: "留妍优雅系列", active: false },
  { name: "悦稣轻奢系列", active: false },
  { name: "轻奢系列", active: false },
];

export default function ProductsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-28 md:pt-36 pb-10 md:pb-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-3xl font-light text-gray-900 mb-3">
            品质优选
          </h1>
          <p className="text-sm text-gray-500">
            精选高品质女装，展现独特魅力
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-3 md:py-4 border-b border-gray-200 bg-white sticky top-16 lg:top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-start md:justify-center gap-1 md:gap-2 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`px-4 md:px-6 py-2 text-xs md:text-sm whitespace-nowrap transition-colors ${
                  category.active
                    ? "bg-black text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-6 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="group">
                {/* Product Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-3">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Product Info */}
                <div>
                  <h3 className="text-xs md:text-sm text-gray-900 mb-1 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-sm md:text-base font-medium text-gray-900 mb-1">
                    {product.price}
                  </p>
                  <p className="text-xs text-gray-500">
                    {product.colors.join(" / ")}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Promise */}
      <section className="py-12 md:py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-lg md:text-xl font-normal text-gray-900 mb-6">
            品质承诺
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto">
            {[
              { title: "精选面料", desc: "优质材质" },
              { title: "精湛工艺", desc: "匠心制作" },
              { title: "时尚设计", desc: "独特风格" },
              { title: "品质保障", desc: "放心选购" },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-sm font-medium text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
