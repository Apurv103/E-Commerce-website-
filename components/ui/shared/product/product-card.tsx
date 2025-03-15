import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "../../card";
import ProductPrice from "./product-price";



const ProductCard = ({product} : {product:any}) => {
    return ( 
    <Card className='w-full max-w-sm'>
        <CardHeader className ='p-0 flex justify-center items-center'>
            <Link href = {`/product/${product.slug} `}>
            <Image 
            src ={product.images[0]} 
            alt={product.name} 
            height={300} 
            width={300} 
            priority={true}
            />
            </Link>
        </CardHeader>
        <CardContent className="p-4 grid gap-4">
            <div className= 'text-xs space-y-2'>
                <p className="mb-2">{product.brand}</p>
                <Link href={`/product/${product.slug}`}>
                    <h2 className="text-sm font-medium">{product.name}</h2>
                </Link>
                <div className="flex-between gap-4">
                    <p>{product.rating} Stars</p>
                    {product.stock > 0 ? (
                        <ProductPrice value={Number(product.price)}/>
                    ) :(
                        <p className="text-destructive"> Out Of Stock</p>
                    )}
                </div>
            </div>
        </CardContent>
    </Card> );
}
 
export default ProductCard;