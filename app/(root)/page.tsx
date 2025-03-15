import sampleData from "@/db/sample-data";
import ProductList from "@/components/ui/shared/product/product-list";
const Homepage = () => {
  return (
    <>
  <ProductList 
    data={sampleData.products} 
    title="Newest Arrivals" 
    limit={4}
  />
  </>
  )
}
 
export default Homepage;