"use server";

import prisma from "@/lib/prisma";
import { Gender } from "@prisma/client";

export const getPaginatedProductsWithImages = async () => {

  try {
    // 1. Obtener los productos
    const products = await prisma.product.findMany({
      take: 12,
      include: {
        ProductImage: {
          take: 2,
          select: {
            url: true,
          },
        },
      }
    });

    return {
      products: products.map((product) => ({
        ...product,
        images: product.ProductImage.map((image) => image.url),
      })),
    };
  } catch (error) {
    throw new Error("No se pudo cargar los productos");
  }
};
