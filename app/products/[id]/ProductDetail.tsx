"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Product } from "@/data/products";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  // 主图只用于轮播（2张）
  const mainImages = product.images.main;
  // 详情图用于底部展示
  const detailImages = product.images.details;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % mainImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + mainImages.length) % mainImages.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Navigation - Fixed on mobile */}
      <div className="fixed top-20 left-0 right-0 z-30 bg-white border-b border-gray-100 md:relative md:top-0 md:border-0 md:bg-transparent">
        <div className="container mx-auto px-4 py-3 md:py-6">
          <Link
            href="/products"
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回产品列表
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-16 md:pt-0">
        <div className="container mx-auto px-0 md:px-4">
          <div className="flex flex-col lg:flex-row lg:gap-12 max-w-7xl mx-auto">

            {/* Left: Image Gallery */}
            <div className="lg:w-[60%] lg:flex lg:gap-4">
              {/* Desktop: Vertical Thumbnails - 只显示主图 */}
              <div className="hidden lg:flex flex-col gap-2 w-20 flex-shrink-0">
                {mainImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={cn(
                      "relative aspect-[3/4] w-full overflow-hidden border-2 transition-all",
                      currentImageIndex === index
                        ? "border-black"
                        : "border-transparent hover:border-gray-300"
                    )}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="relative flex-1">
                {/* Mobile: Full width swipeable */}
                <div className="relative aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] bg-gray-50 overflow-hidden">
                  <Image
                    src={mainImages[currentImageIndex]}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Navigation Arrows */}
                  {mainImages.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-sm transition-all opacity-0 hover:opacity-100 md:opacity-100"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-sm transition-all opacity-0 hover:opacity-100 md:opacity-100"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>

                {/* Mobile: Dot indicators - 只显示主图数量 */}
                <div className="flex justify-center gap-1.5 py-4 lg:hidden">
                  {mainImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all",
                        currentImageIndex === index
                          ? "bg-black w-4"
                          : "bg-gray-300"
                      )}
                    />
                  ))}
                </div>

                {/* Desktop: Horizontal thumbnails below main image - 只显示主图 */}
                <div className="hidden md:flex lg:hidden gap-2 p-4 overflow-x-auto">
                  {mainImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={cn(
                        "relative w-16 h-20 flex-shrink-0 overflow-hidden border-2 transition-all",
                        currentImageIndex === index
                          ? "border-black"
                          : "border-transparent hover:border-gray-300"
                      )}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="lg:w-[40%] lg:sticky lg:top-24 lg:self-start">
              <div className="px-4 py-6 lg:px-0 lg:py-0">
                {/* Brand */}
                <p className="text-xs text-gray-500 tracking-wider mb-2">
                  {product.brand}
                </p>

                {/* Product Name */}
                <h1 className="text-xl md:text-2xl font-normal text-gray-900 mb-4 leading-relaxed">
                  {product.name}
                </h1>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-2xl md:text-3xl font-medium text-gray-900">
                    {product.price}
                  </span>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-6" />

                {/* Color Selection */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-900">颜色</span>
                    <span className="text-sm text-gray-500">{selectedColor}</span>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={cn(
                          "px-4 py-2 text-sm border transition-all",
                          selectedColor === color
                            ? "border-black bg-black text-white"
                            : "border-gray-300 hover:border-gray-400 text-gray-700"
                        )}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Selection */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-900">尺码</span>
                    <span className="text-sm text-gray-500">{selectedSize}</span>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={cn(
                          "w-12 h-12 text-sm border transition-all flex items-center justify-center",
                          selectedSize === size
                            ? "border-black bg-black text-white"
                            : "border-gray-300 hover:border-gray-400 text-gray-700"
                        )}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-6" />

                {/* Product Details */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">产品详情</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex">
                      <span className="w-16 text-gray-500">货号</span>
                      <span>{product.code}</span>
                    </div>
                    <div className="flex">
                      <span className="w-16 text-gray-500">材质</span>
                      <span>{product.material}</span>
                    </div>
                    <div className="flex">
                      <span className="w-16 text-gray-500">系列</span>
                      <span>{product.series}</span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">产品特点</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1.5 text-xs bg-gray-100 text-gray-700 rounded-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* CTA Button */}
                <Link href="/contact" className="block">
                  <Button
                    className="w-full h-14 text-base font-medium bg-black hover:bg-gray-800 text-white rounded-none"
                    size="lg"
                  >
                    联系客服咨询
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Detail Images Section - 详情图单独展示 */}
        <div className="mt-8 md:mt-16 border-t border-gray-200">
          <div className="container mx-auto px-4 py-8 md:py-12">
            <h2 className="text-lg font-medium text-gray-900 mb-6 text-center">
              商品详情
            </h2>
            <div className="max-w-2xl mx-auto space-y-1">
              {detailImages.map((img, index) => (
                <div
                  key={index}
                  className="relative w-full"
                  style={{ aspectRatio: "800/1146" }}
                >
                  <Image
                    src={img}
                    alt={`${product.name} 详情 ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
