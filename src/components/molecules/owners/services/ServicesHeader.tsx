import Button from '@/components/atoms/Button';
import {SearchBar} from '@/components/molecules/SearchBar';
import {Plus} from 'lucide-react';
import Link from 'next/link';

export function ServicesHeader() {
    return (
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
            <div>
                <h1 className="text-3xl font-bold text-black">Laundry Service Management</h1>
                <p className="text-gray-600">Manage your available laundry services and pricing</p>
            </div>

            <div className="flex items-center gap-4 h-11">
                <SearchBar placeholder="Search services..."/>

                <Link
                    href="/owners/services/create"
                >
                    <Button
                        className="
              h-full             
              px-4               
              text-sm            
              whitespace-nowrap  
            "
                        icon={<Plus className="w-4 h-4"/>}
                    >
                        Add New Service
                    </Button>
                </Link>
            </div>
        </div>
    );
}