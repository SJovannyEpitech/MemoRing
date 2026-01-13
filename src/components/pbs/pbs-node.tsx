"use client";

import React, { memo } from 'react';
import { Handle, Position, NodeProps, type Node } from '@xyflow/react';
import { PBSNodeData } from './pbs-data';
import { motion } from 'framer-motion';

export type PBSNodeProps = Node<PBSNodeData, 'pbsNode'>;

export const PBSNode = ({ data, selected }: NodeProps<PBSNodeProps>) => {
    const isRoot = data.category === 'Root';

    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`px-4 py-2 shadow-lg rounded-xl border transition-all duration-300 ${selected || data.isHighlighted
                ? 'ring-2 ring-[#8480F1] border-[#8480F1] bg-[#8480F1]/20 scale-105'
                : 'border-white/20 bg-white/10'
                } backdrop-blur-md`}
            style={{
                minWidth: '150px',
                textAlign: 'center',
            }}
        >
            <Handle
                type="target"
                position={Position.Top}
                className="w-2 h-2 !bg-[#8480F1] border-none"
            />

            <div className="flex flex-col">
                {data.category !== 'Root' && data.category !== data.label && (
                    <span className="text-[10px] uppercase tracking-wider text-white/40 mb-1">
                        {data.category}
                    </span>
                )}
                <span className={`font-medium ${isRoot ? 'text-lg font-bold' : 'text-sm'} text-white`}>
                    {data.label}
                </span>
            </div>

            <Handle
                type="source"
                position={Position.Bottom}
                className="w-2 h-2 !bg-[#8480F1] border-none"
            />
        </motion.div>
    );
};

export default memo(PBSNode);
