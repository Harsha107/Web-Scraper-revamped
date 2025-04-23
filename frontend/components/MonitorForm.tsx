'use client';
import React, { useState } from 'react';
import { monitorPrice } from '../lib/api';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { FaBell, FaEnvelope, FaTag, FaSpinner } from 'react-icons/fa';

interface MonitorFormProps {
  productUrl: string;
}

const MonitorForm: React.FC<MonitorFormProps> = ({ productUrl }) => {
  const [targetPrice, setTargetPrice] = useState<number>(0);
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (targetPrice <= 0) {
      toast.error('Please enter a valid target price');
      return;
    }
    
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const response = await monitorPrice({
        url: productUrl,
        target_price: targetPrice,
        email
      });
      
      if (response.below_target) {
        toast.success(response.message);
      } else {
        toast.success('Price monitoring set up successfully!');
        toast(response.message);
      }
    } catch (error) {
      toast.error('Failed to set up price monitoring. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div 
      className="card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="border-b border-gray-100 px-8 py-5 flex items-center">
        <FaBell className="text-accent-500 mr-3" />
        <h2 className="text-xl font-semibold text-gray-900">Monitor Price Drops</h2>
      </div>
      
      <div className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label htmlFor="targetPrice" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <FaTag className="mr-2 text-accent-500" />
              Target Price (AED)
            </label>
            <div className="mt-1 relative rounded-xl shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">AED</span>
              </div>
              <input
                type="number"
                id="targetPrice"
                value={targetPrice}
                onChange={(e) => setTargetPrice(parseFloat(e.target.value))}
                min="0"
                step="0.01"
                className="input-field pl-16"
                placeholder="0.00"
                required
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">Enter the price at which you want to be notified</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <FaEnvelope className="mr-2 text-accent-500" />
              Email for Notifications
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              placeholder="your@email.com"
              required
            />
            <p className="mt-2 text-sm text-gray-500">We'll send you an email when the price drops below your target</p>
          </motion.div>
          
          <motion.button 
            type="submit" 
            className="w-full px-6 py-3 bg-accent-500 text-white font-medium rounded-xl shadow-soft hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 transition-colors disabled:opacity-70 flex items-center justify-center"
            disabled={isLoading}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? (
              <>
                <FaSpinner className="animate-spin mr-2" /> Setting up...
              </>
            ) : (
              <>
                <FaBell className="mr-2" /> Start Monitoring
              </>
            )}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default MonitorForm;