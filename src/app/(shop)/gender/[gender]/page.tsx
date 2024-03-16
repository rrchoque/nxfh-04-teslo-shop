import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
//import { initialData } from "@/seed/seed";
import { Gender } from "@prisma/client";
import { notFound, redirect } from "next/navigation";

interface Props {
  params: {
    gender: string;
  },
  searchParams: {
    page?: string; 
  }
}

//const seedProducts = initialData.products;

export default async function ({ params, searchParams }: Props) {

  const {gender} = params;

  const page = searchParams.page ? parseInt( searchParams.page ) : 1;

  const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({ 
    page,
    gender: gender as Gender,
  });


  if ( products.length === 0 ) {
    redirect(`/gender/${ gender }`);
  }

  //const products = seedProducts.filter( product => product.gender === gender )

  const label: Record<string, string> = {
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
        title={ `Artículos para ${ label[gender] }` }
        subtitle={`Productos de la categoría ${ (label as any)[gender] }`} 
        className="mb-2"
       />

       <ProductGrid products={products} />

       <Pagination totalPages={totalPages} />
    </>
  );
}