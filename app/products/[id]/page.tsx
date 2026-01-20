import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductById, getAllProductIds } from "@/data/products";
import ProductDetail from "./ProductDetail";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const ids = getAllProductIds();
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: "产品未找到",
    };
  }

  return {
    title: `${product.name} - ZHUHE祝赫`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">产品未找到</h1>
          <Link href="/products" className="text-primary hover:underline">
            返回产品列表
          </Link>
        </div>
      </div>
    );
  }

  return <ProductDetail product={product} />;
}
