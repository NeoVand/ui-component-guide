import React from 'react';
import type { ComponentItem } from '../../types/registry';
import { ComponentCard } from './ComponentCard';

interface MasonryGridProps {
    components: ComponentItem[];
}

export const MasonryGrid: React.FC<MasonryGridProps> = ({ components }) => {
    return (
        <div className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6">
            {components.map((item, index) => (
                <div key={index} className="break-inside-avoid">
                    <ComponentCard item={item} />
                </div>
            ))}
        </div>
    );
};
