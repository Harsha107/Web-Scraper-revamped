'use client';
import React, { useState } from 'react';
import { checkPrice } from '../lib/api';
import { Product } from '../types';
import ProductDetails from './ProductDetails';
import MonitorForm from './MonitorForm';
import toast from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaSpinner } from 'react-icons/fa';

const PriceTracker: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showMonitorForm, setShowMonitorForm] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url.includes('amazon')) {
      toast.error('Please enter a valid Amazon product URL');
      return;
    }
    
    setIsLoading(true);
    setProduct(null);
    setShowMonitorForm(false);
    
    try {
      const productData = await checkPrice(url);
      setProduct(productData);
    } catch (error) {
      toast.error('Failed to retrieve product information. Please check the URL.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="productUrl" className="block text-sm font-medium text-gray-700 mb-2">
              Enter Amazon Product URL
            </label>
            <div className="relative">
              <input
                type="url"
                id="productUrl"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="input-field pl-12"
                placeholder="https://www.amazon.ae/product/..."
                required
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaSearch />
              </div>
            </div>
          </div>
          
          <motion.button 
            type="submit" 
            className="btn-primary w-full"
            disabled={isLoading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? (
              <>
                <FaSpinner className="animate-spin mr-2 inline" /> Checking Price...
              </>
            ) : (
              'Check Price'
            )}
          </motion.button>
        </form>
      </div>

      <AnimatePresence>
        {isLoading && (
          <motion.div 
            className="flex flex-col items-center justify-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="h-12 w-12 rounded-full border-4 border-t-primary-600 border-primary-200"
              animate={{ rotate: 360 }}
              transition={{ ease: "linear", duration: 1, repeat: Infinity }}
            />
            <motion.p 
              className="mt-4 text-gray-500 font-medium"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Fetching product details...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {product && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 mt-8"
          >
            <ProductDetails product={product} />
            
            {!showMonitorForm ? (
              <motion.div 
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.button 
                  onClick={() => setShowMonitorForm(true)}
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Monitor This Product
                </motion.button>
              </motion.div>
            ) : (
              <MonitorForm productUrl={url} />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PriceTracker;