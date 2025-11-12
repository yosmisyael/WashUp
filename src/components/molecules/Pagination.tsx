// src/components/molecules/Pagination.tsx
import React from 'react';
import { Button } from '@/components/atoms/Button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  return (
    <nav className="flex items-center gap-2">
      <Button variant="outline" size="sm">Previous</Button>
      
      {/* Logika untuk menampilkan nomor halaman bisa dibuat lebih kompleks */}
      <Button variant="primary" size="sm">1</Button>
      <Button variant="outline" size="sm">2</Button>
      <Button variant="outline" size="sm">3</Button>
      <span className="text-gray-500">...</span>
      <Button variant="outline" size="sm">{totalPages}</Button>

      <Button variant="outline" size="sm">Next</Button>
    </nav>
  );
};