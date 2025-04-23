'use client';
import React from 'react';
import { Product } from '../types';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaStar, FaExternalLinkAlt } from 'react-icons/fa';

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <motion.div 
      className="card overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-8">
        <div className="flex flex-col md:flex-row gap-8">
          {product.image_url && (
            <motion.div 
              className="flex-shrink-0 flex justify-center bg-white p-4 rounded-xl border border-gray-100"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image 
                src={product.image_url} 
                alt={product.title} 
                width={200} 
                height={200} 
                className="object-contain"
              />
            </motion.div>
          )}
          
          <div className="flex-grow space-y-6">
            <div>
              <h2 className="text-sm font-medium text-primary-600 mb-2">Product Details</h2>
              <motion.h3 
                className="text-2xl font-semibold text-gray-900"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {product.title}
              </motion.h3>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center"
            >
              <motion.p 
                className="text-3xl font-bold text-primary-600"
                whileHover={{ scale: 1.05, originX: 0 }}
              >
                AED {product.price.toFixed(2)}
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="bg-yellow-50 py-1 px-3 rounded-full flex items-center">
                <FaStar className="text-yellow-500 mr-1" />
                <span className="text-sm font-medium text-gray-700">{product.ratings}</span>
              </div>
            </motion.div>
            
            <motion.a 
              href={product.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-primary-600 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View on Amazon</span>
              <FaExternalLinkAlt className="ml-2 text-xs" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;