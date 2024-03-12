import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: Category;
  },
  searchParams: {
    page?: string; 
  }
}

const seedProducts = initialData.products;

export default function ({ params }: Props) {

  const {id} = params;

  const products = seedProducts.filter( product => product.gender === id )

  const label: Record<Category, string> = {
    'men': 'hombres',
    'women': 'mujeres',
    'kid': 'niños',
    'unisex': 'todos'
  }

  // if (id === 'kids') {
  //   notFound()
  // }

  return (
    <>
      <Title
        title={ `Artículos para ${ label[id] }` }
        subtitle={`Productos de la categoría ${ (label as any)[id] }`} 
        className="mb-2"
       />

       <ProductGrid products={products} />
    </>
  );
}