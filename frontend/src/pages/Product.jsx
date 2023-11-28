import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import BreadCrum from '../components/Breadcrums/BreadCrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/Descriptionbox/DescriptionBox';
import RelatedProduct from '../components/RelatedProducts/RelatedProduct';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productid } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('all_product:', all_product);
    console.log('productid:', productid);
    setLoading(false);
  }, [all_product, productid]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(all_product) || all_product.length === 0) {
    console.log('Ajay...');
    return <div>Ajay...</div>;
  }

  const product = all_product.find((e) => e.id === Number(productid));

  return (
    <div className='Product'>
      <BreadCrum product={product} />
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProduct/>
    </div>
  );
}

export default Product;
